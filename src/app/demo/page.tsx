import { Suspense } from "react";
import { RoleSelect } from "@/components/demo/RoleSelect";

export default function DemoEntryPage() {
  return <Suspense fallback={<div className="min-h-screen bg-canvas" />}><RoleSelect /></Suspense>;
}
