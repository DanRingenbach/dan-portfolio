import type { Metadata } from 'next'
import '../index.scss'

export const metadata: Metadata = {
    title: 'Dan Ringenbach',
    description: 'Web site created...',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <html lang="en">
            <head>
                <title>Dan Ringenbach</title>
                <meta name="description" content="Web site created..." />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )

}