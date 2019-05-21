import { Container } from 'native-base'
import React from 'react'
import { Container as Content } from './'
import Header from './header'

interface LayoutType {
  title: string
  props: any
  children: any
  style?: any
  loading?: boolean
}

export const Layout = ({ title, props, children, style, loading = false }: LayoutType) => {
  return (
    <Container>
      <Header title={title} props={props} />
      <Content style={style} loading={loading}>
        {children}
      </Content>
    </Container>
  )
}
