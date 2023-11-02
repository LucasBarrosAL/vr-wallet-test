import { TextProps } from 'react-native'
import { Title as TitleStyled } from './title.styles'

interface TitleProps extends TextProps {
  children: string
}

export function Title({ children, ...rest }: TitleProps) {
  return <TitleStyled {...rest}>{children}</TitleStyled>
}
