'use client'
 
import { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { useServerInsertedHTML } from 'next/navigation'
import { ProviderProps } from '@/types/ProviderProps'
import GlobalStyles from '@/styles/global'
 
export default function Styled({ children }: ProviderProps) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyles />
      {children}
    </StyleSheetManager>
  )
}