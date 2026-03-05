'use client'
 
import dynamic from 'next/dynamic'

type ClientOnlyProps = {
  slug: string[]
}
 
const PortfolioContainer = dynamic(() => import('../../components/PortfolioContainer'), { ssr: false })
 
export function ClientOnly({ slug }: ClientOnlyProps) {
  return <PortfolioContainer slug={slug} />
}