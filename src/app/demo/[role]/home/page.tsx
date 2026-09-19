import { notFound } from "next/navigation";
import type { Role } from "@/types";
import { RoleHomeClient } from "@/components/demo/RoleHomeClient";
import { staticParams } from "@/lib/staticParams";

const roles: Role[] = ["user", "volunteer", "partner", "admin"];

export function generateStaticParams() {
  return staticParams.roles;
}

export default async function RoleHomePage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (!roles.includes(role as Role)) notFound();
  return <RoleHomeClient role={role as Role} />;
}
