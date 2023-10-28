import {
  TextInputProps as TextInputPropsRN,
  ImageSourcePropType,
} from 'react-native'
import { Container, Content, Input, Label } from './TextInput.styles'
import { IconButton } from '../IconButton/IconButton'

interface TextInputProps extends TextInputPropsRN {
  label: string
  source?: ImageSourcePropType
}

export function TextInput({ label, source, ...rest }: TextInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        {source && <IconButton source={source} />}
        <Input {...rest} />
      </Content>
    </Container>
  )
}
