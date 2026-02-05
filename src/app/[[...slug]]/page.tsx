import { ClientOnly } from "./client"

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['home'] },
    { slug: ['work'] },
    { slug: ['art'] }
  ]
}

type PageProps = {
  params: Promise<{
    slug?: string[]
  }>
}
 
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug || []
  return <ClientOnly slug={slug} />
}