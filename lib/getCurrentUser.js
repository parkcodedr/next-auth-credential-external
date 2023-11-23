
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(options);
}
