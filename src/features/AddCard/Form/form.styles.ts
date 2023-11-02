import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    maxWidth: 300,
    gap: 10,
  },
})``

export const Row = styled.View`
  height: 74px;
  max-width: 300px;
  flex-direction: row;
  gap: 12px;
`
