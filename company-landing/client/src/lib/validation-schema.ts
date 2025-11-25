import { z } from 'zod';

export const contactInfoSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email(),
  phone: z.string().min(10, "Valid phone number required"),
  company: z.string().optional(),
  role: z.string().optional(),
  preferredContact: z.enum(["email", "phone"]).describe("How should we reach you?"),
});

export const projectDetailsSchema = z.object({
  projectName: z.string().min(3, "Project name required"),
  projectType: z.enum([
    "Web Application", "Mobile App", "E-commerce", "SaaS", "Consulting", "Other"
  ]),
  description: z.string().min(20, "Please provide more detail").describe("Tell us about the problem you are solving"),
  budgetRange: z.enum(["10k-25k", "25k-50k", "50k-100k", "100k+"]),
  timeline: z.enum(["ASAP", "1-3 months", "3-6 months", "Flexible"]),
});

// We combine them for the final Review step type inference
export const fullInquirySchema = z.object({
  contact: contactInfoSchema,
  project: projectDetailsSchema,
});

export type ContactInfo = z.infer<typeof contactInfoSchema>;
export type ProjectDetails = z.infer<typeof projectDetailsSchema>;