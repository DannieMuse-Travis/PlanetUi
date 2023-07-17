import React, { useState } from 'react'
import styled from 'styled-components'
import mercury from "../asset/planet-uranus.svg"

const Uranus = () => {
  const [img,setimg]=useState<boolean>(true);
const [img1,setimg1]=useState<boolean>(false);
const [img2,setimg2]=useState<boolean>(false);
   
const onToggle1=()=>{
  setimg(true)
  setimg1(false)
  setimg2(false)
}
const onToggle2=()=>{
  setimg(false)
  setimg1(true)
  setimg2(false)
}
const onToggle3=()=>{
  setimg(false)
  setimg1(false)
  setimg2(true)
}
  return (
    <div>
     <Container>
      <Main>
        <Top>
        <Image src={mercury}/>
        <Content>
          <Title>Uranus </Title>
          {
            img ?<Body>Uranus is the first planet from the Sun and the only one 
              in the Solar System without a considerable atmosphere. It is the smallest
               terrestrial planet of the Solar System and despite being also smaller than
                the Solar System objects Ganymede and Titan it is massive enough to have about
                 the same surface gravity as the even larger planet Mars. Like Venus, Mercury 
                 orbits the Sun within Earth's orbit, making it appear in Earth's
                  sky only in inferior positions, </Body>
              : img1 ? <Body>The ancients knew Mercury by different names depending on whether
                 it was an evening star or a morning star. By about 350 BC, the ancient Greeks
                  had realized the two stars were one.[26] They knew the planet as Στίλβων Stilbōn,
                   meaning "twinkling", and Ἑρμής Hermēs, for its fleeting motion,[27] a name that is
                    retained in modern Greek (Ερμής Ermis).[28] The Romans named the planet after the 
                    swift-footed Roman messenger god, Mercury (Latin Mercurius), which they equated
                     with the Greek Hermes, because it moves across the sky faster than any other 
                     planet.[26][29] The astronomical symbol for Mercury is a stylized version of Hermes'
                      caduceus; a Christian cross was added in the 16th century: ☿.[30][31]</Body>
                : img2 ? <Body>Mercury is one of four terrestrial planets in the Solar System,
                   and is a rocky body like Earth. It is the smallest planet in the Solar System,
                    with an equatorial radius of 2,439.7 kilometres (1,516.0 mi).[3] Mercury is also
                     smaller—albeit more massive—than the largest natural satellites in the Solar System,
                      Ganymede and Titan. Mercury consists of approximately 70% metallic and 30% silicate material.[32]</Body>
                  : null
          }
          <Button onClick={onToggle1} bg={img ? "tt":""}>Overview</Button>
          <Button onClick={onToggle2} bg={img1 ?"tt":""}>internal structure</Button>
          <Button onClick={onToggle3} bg={img2 ? "tt":""}>surface Geology </Button>
        </Content>
        </Top>
        <Buttom>
          <Card>
            <Text>ROTATION TIME</Text>
            <BigText>58.6DAYS</BigText>
            
          </Card>
          <Card>
            <Text>REVOLUTION TIME</Text>
            <BigText>87.97DAYS</BigText>
            
          </Card>
          <Card>
            <Text>RADIUS</Text>
            <BigText>2.439.7KM</BigText>
            
          </Card>
          <Card>
            <Text>AVERAGE TEMP</Text>
            <BigText>430 C</BigText>
            
          </Card>
        </Buttom>
      </Main>
      </Container>
    </div>
  )
}

export default Uranus

const Top = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Content = styled.div`
 margin-left:80px;
`
const Body = styled.div`
width:300px;
color:#323232;
font-size:12px;
line-height:1.5;
margin-bottom:50px;`
const Button =  styled.div<{bg:
string}>`
width:400px;
height:40px;
display:flex;
align-items:center;
border:1px solid silver;
padding-left:20px;
margin:10px 0;
transition:all 350ms;
text-transform:uppercase;
font-weight:${({bg})=>bg?"700":
"normal"};
color:${({bg})=>bg?"white":
"black"};
background-color:${({bg})=>bg?"darkorange":
""};
:hover{
  background-color:gray;
  cursor:pointer
}
`
const   Title=styled.div`
text-transform:uppercase;
font-weight:900;
font-size:60px;`
const Buttom= styled.div`
margin-top:100px;
justify-content:center;
display:flex;
`
const Card = styled.div`
width:190px;
border:1px solid silver;
height:100px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding-left:20px;
margin:0 10px;`
const Text = styled.div`
`
const BigText = styled.div`
font-size:30px;
font-weight:700;
`
const Container= styled.div`
width:100%;
height:calc(100vh);
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(220,237,254);
background: linear-gradient(120eg,
rgba(242,227,246,1)0%,
rgba(222,239,254,1)39%,
rgba(222,246,237,1)95%
);
`
const Main = styled.div`
width:1000px;
min-height:600px;
margin-top:50px;
display:flex;
flex-direction:column;
`
const Image = styled.img`
height:200px;
margin-right:80px;`