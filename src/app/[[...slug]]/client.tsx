'use client'
 
import dynamic from 'next/dynamic'
 
const PortfolioContainer = dynamic(() => import('../../components/PortfolioContainer'), { ssr: false })
 
export function ClientOnly() {
  return <PortfolioContainer />
}