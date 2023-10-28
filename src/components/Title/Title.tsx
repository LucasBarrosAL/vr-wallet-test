import { Title as TitleStyled } from './Title.styles'

interface TitleProps {
  children: string
}

export function Title({ children }: TitleProps) {
  return <TitleStyled>{children}</TitleStyled>
}
