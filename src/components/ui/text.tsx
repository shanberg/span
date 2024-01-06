import React from 'react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & HTMLStyledProps<As>

export const Text = React.forwardRef((props: TextProps, ref: React.Ref<HTMLParagraphElement> | undefined) => {
  const { as = 'p', ...localProps } = props
  const Dynamic = styled(as)

  return <Dynamic {...localProps} ref={ref} />
})
