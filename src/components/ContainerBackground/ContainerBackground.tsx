import React from 'react'
import topBackground from '@/assets/top_background.png'
import bottomBackground from '@/assets/bottom_background.png'
import {
  BottomImageBackground,
  Container,
  TopImageBackground,
} from './ContainerBackground.styles'

interface ContainerBackgroundProps {
  children: React.ReactNode
}

export function ContainerBackground({ children }: ContainerBackgroundProps) {
  return (
    <Container>
      <TopImageBackground source={topBackground} />
      <BottomImageBackground source={bottomBackground} />
      {children}
    </Container>
  )
}
