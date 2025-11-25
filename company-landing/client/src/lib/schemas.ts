import { z } from "zod";
import { FieldErrors } from "react-hook-form";

// --- 1. SCHEMAS ---

export const contactSchema = z.object({
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .optional()
    .refine((val) => !val || val.length >= 10, {
      message: "Phone number is too short",
    }),
});

export const projectSchema = z.object({
  companyName: z.string().min(2, "Organization name is required"),
  type: z.enum([
    "Supply Chain Optimization", 
    "Labor Efficiency / OEE", 
    "Predictive Maintenance", 
    "Automated Bidding & Quoting", 
    "Data Infrastructure Audit",
    "Other"
  ], { errorMap: () => ({ message: "Please select an objective" }) }),
  description: z.string().min(20, "Please provide at least 20 characters of context"),
  budget: z.enum([
    "$25k - $50k (Audit)", 
    "$50k - $150k (Pilot)", 
    "$150k - $500k (Implementation)", 
    "$500k+ (Enterprise Transformation)"
  ], { errorMap: () => ({ message: "Select a budget range" }) }),
  timeline: z.enum([
    "Immediate (Q3/Q4 Priority)", 
    "Next Fiscal Year", 
    "Exploratory"
  ], { errorMap: () => ({ message: "Select a timeline" }) }),
});

export type ContactData = z.infer<typeof contactSchema>;
export type ProjectData = z.infer<typeof projectSchema>;

// --- 2. ROBUST RESOLVER (Fixes TypeError crash) ---

export const safeResolver = <T extends z.Schema<any, any>>(schema: T) => {
  return async (values: any): Promise<{ values: any; errors: FieldErrors }> => {
    try {
      const result = await schema.safeParseAsync(values);

      if (result.success) {
        return { values: result.data, errors: {} };
      }

      const errors: FieldErrors = {};
      const err = result.error as any;
      let issues: any[] = [];

      // Defensive check for Error Structure in your specific Zod version
      if (Array.isArray(err)) {
        issues = err;
      } else if (err && Array.isArray(err.errors)) {
        issues = err.errors;
      } else if (err && Array.isArray(err.issues)) {
        issues = err.issues;
      } else {
        // Fallback: If error is a single object with message
        if (err && err.message) {
             console.warn("Single error object detected:", err);
             // Create a fake issue to display something
             issues = [{ path: [], message: err.message, code: "custom" }];
        } else {
             console.error("Unknown Zod error structure:", err);
        }
      }

      for (const issue of issues) {
        const path = Array.isArray(issue.path) ? issue.path.join(".") : issue.path;
        // Only add error if we have a valid path, otherwise it's a global error
        if (path) {
          errors[path] = {
            type: issue.code || "validation",
            message: issue.message || "Invalid input",
          };
        }
      }

      return { values: {}, errors };
    } catch (e) {
      console.error("Resolver crashed:", e);
      // Return a safe object so React Hook Form doesn't die
      return { values: {}, errors: { root: { type: "crash", message: "Validation system error" } } };
    }
  };
};