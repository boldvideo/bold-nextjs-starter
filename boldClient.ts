import { createClient } from "@boldvideo/bold-js";

export const bold = createClient(
  process.env.NEXT_PUBLIC_BOLD_URL,
  process.env.NEXT_PUBLIC_BOLD_KEY
);
