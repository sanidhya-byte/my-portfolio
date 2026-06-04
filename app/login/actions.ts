"use server";

import { login } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: unknown, formData: FormData) {
  const password = formData.get("password")?.toString();
  const callbackUrl = formData.get("callbackUrl")?.toString() || "/dashboard";

  if (!password) {
    return { error: "Password is required." };
  }

  const success = await login(password);
  if (!success) {
    return { error: "Invalid password." };
  }

  // Redirect to callbackUrl upon successful login
  redirect(callbackUrl);
}
