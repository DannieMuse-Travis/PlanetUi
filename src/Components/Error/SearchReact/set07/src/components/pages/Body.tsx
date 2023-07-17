import React from 'react'
import styled from 'styled-components'

const Body = () => {
  return (
    <div>
        <Container>
            <Main>
                <Image1/>
                <Image2/>
            </Main>
        </Container>
    </div>
  )
}

export default Body

const Container = styled.div``

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;`

const Image1 = styled.img`
    width: 100%;
    height: 100%;`

    
const Image2 = styled.img`
    width: 100%;
    height: 100%;`
    