import styled from 'styled-components/native'
import topBackground from '@/assets/top_background.png'
import bottomBackground from '@/assets/bottom_background.png'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.dark.blue};
`

export const Title = styled.Text`
  line-height: 32px;
  text-align: center;

  font-size: 28px;

  font-family: ${({ theme }) => theme.fonts.ptSansCaption.regular};
  color: ${({ theme }) => theme.colors.white};
`
export const TopImageBackground = styled.Image.attrs({
  source: topBackground,
  resizeMode: 'contain',
})`
  width: 300px;
  position: absolute;
  top: -200px;
  left: 0px;
`
export const BottomImageBackground = styled.Image.attrs({
  source: bottomBackground,
  resizeMode: 'contain',
})`
  width: 300px;
  position: absolute;
  bottom: -200;
  right: 0;
`
