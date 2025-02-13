import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import * as z from "zod";

// Create a Resend client instance.
// The API key should be stored securely in your environment variables.
const resend = new Resend(process.env.RESEND_API_KEY as string);

/**
 * Zod schema for validating contact form data.
 */
const ContactSchema = z.object({
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d+$/, "Phone must be a valid number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

/**
 * API Route handler to process contact form submissions.
 *
 * Accepts a POST request with JSON data matching the ContactFormValues type,
 * validates the data, and sends an email using Resend.
 *
 * @param req Next.js API Request
 * @param res Next.js API Response
 * @returns JSON response with a success or error message.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Allow only POST requests.
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Validate the incoming data against the schema.
    const parsedData: ContactFormValues = ContactSchema.parse(req.body);

    // Compose the email details.
    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_FROM || "default@example.com",
      to: process.env.EMAIL_TO || "recipient@example.com",
      subject: `New message from ${parsedData.firstName} ${parsedData.lastName}`,
      html: `
        <p><strong>Name:</strong> ${parsedData.firstName} ${parsedData.lastName}</p>
        <p><strong>Email:</strong> ${parsedData.email}</p>
        <p><strong>Phone:</strong> ${parsedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${parsedData.message}</p>
      `,
    });

    // Return a success response along with any relevant data from Resend.
    return res
      .status(200)
      .json({ message: "Email sent successfully", data: emailResponse });
  } catch (error) {
    // Handle validation errors from Zod.
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
