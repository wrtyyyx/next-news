import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required")
    .max(200, "Title must be at most 200 characters"),
  content: z
    .string()
    .nonempty("Content is required")
    .min(10, "Content must be at least 10 characters"),
  author: z.string().nonempty("Author is required"),
});

export type NewsFormInputs = z.infer<typeof newsSchema>;
