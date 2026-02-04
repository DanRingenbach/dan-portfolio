import { ClientOnly } from "./client"

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['home'] },
    { slug: ['work'] },
    { slug: ['art'] }
  ]
}
 
export default function Page() {
  return <ClientOnly />
}