import { staticParams } from "@/lib/staticParams";
import { UserUnknownRoute } from "@/components/demo/UserUnknownRoute";

export function generateStaticParams() {
  return staticParams.unknownSlug;
}

export default async function UserUnknownRoutePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <UserUnknownRoute slug={slug} />;
}
