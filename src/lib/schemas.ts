import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().optional(),
  role: z.string().optional(),
  topic: z.string().min(1, "Please select a topic."),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const topicOptions = [
  "AI Strategy & Implementation",
  "Executive Education & Training",
  "Not sure yet — I'd like to explore",
  "Other",
] as const;
