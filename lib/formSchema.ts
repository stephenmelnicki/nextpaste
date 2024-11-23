import { z } from 'zod';

export const formSchema = z.object({
  contents: z
    .string()
    .min(5, {
      message: 'Paste must be at least 5 characters long.',
    })
    .max(1024 * 64, {
      message: "Paste size can't exceed 64 KiB.",
    }),
});
