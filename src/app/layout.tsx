import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './global.css'
import { TITLE, TAGLINE } from '~/lib/data'

export const metadata: Metadata = {
  title: TITLE,
  description: TAGLINE,
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

const RootLayout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <html lang="en" data-color-mode="dark">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
