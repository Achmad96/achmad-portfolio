"use client";

import alert from "@/lib/alert";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  messages: z.string().min(10, {
    message: "Messages must be at least 10 characters.",
  }),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      messages: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.parse(JSON.stringify(values)),
    });
    if (res.ok) {
      const elements = document.querySelectorAll('input[name="username"], textarea[name="messages"]');
      elements.forEach((element: any) => (element.value = ""));
      alert.success("Successfully sent an email!");
    } else {
      alert.error("Failed to sent email!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[75%] space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messages</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your messages here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

const ContactPage = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <ProfileForm />
    </section>
  );
};

export default ContactPage;
