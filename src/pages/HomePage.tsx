import React from 'react'
import Header from '../components/Header'
import { Box, Container} from '@mui/material'

import CardsList from '../components/CardsList'
export default function HomePage() {
  return (
    <>
        <Header />
        <Container>
            <CardsList/>
        </Container>
    </>
  )
}
