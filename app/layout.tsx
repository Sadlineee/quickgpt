import { Metadata } from 'next'
import { Styled, Theme } from '@/lib'
import { ProviderProps } from '@/types/ProviderProps'
import { roboto_mono } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'QuickGPT',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }: Readonly<ProviderProps>) {
  return (
    <html>
      <body className={roboto_mono.className}>
        <Theme>
          <Styled>
            {children}
          </Styled>
        </Theme>
      </body>
    </html>
  )
}