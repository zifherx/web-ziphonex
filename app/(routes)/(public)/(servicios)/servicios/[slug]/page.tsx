import { OneServiceView } from "./components/One-Service-View";

import { SERVICES_LIST } from "@/data";

export async function generateStaticParams() {
  return SERVICES_LIST.map((item) => {
    return { slug: item.slug };
  });
}

export default async function OneServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return (
    <main className="min-h-screen">
      <OneServiceView servicioSlug={slug} />
    </main>
  );
}
