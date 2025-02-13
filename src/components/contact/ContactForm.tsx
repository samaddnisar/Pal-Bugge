"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "./Input";

// Define validation schema with Zod
const ContactSchema = z.object({
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d+$/, "Phone must be a valid number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Define form values type from schema
type ContactFormValues = z.infer<typeof ContactSchema>;

const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    alert("This doesn't work in demo mode.");
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        reset();
      } else {
        setStatus("Error sending email. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Error sending email. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-6"
    >
      <Input
        name="firstName"
        placeholder="First Name"
        register={register}
        error={errors.firstName?.message}
      />
      <Input
        name="lastName"
        placeholder="Last Name"
        register={register}
        error={errors.lastName?.message}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        name="phone"
        type="text"
        placeholder="Phone"
        register={register}
        error={errors.phone?.message}
      />

      <div className="flex flex-col w-full">
        <textarea
          {...register("message")}
          wrap="soft"
          rows={5}
          cols={30}
          placeholder="Message"
          className={`bg-transparent resize-y border-b border-border placeholder:text-dark p-4 text-lg outline-none duration-300 focus:border-b-2 focus:border-b-dark ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-light px-5 py-4 hover:bg-dark duration-300 rounded-lg self-start text-darkest disabled:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send your message"}
      </button>
      {status && <p className="text-center">{status}</p>}
    </form>
  );
};

export default ContactForm;
