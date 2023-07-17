import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <Constainer>
            <Main>
                <Logo to= "/">The Planet</Logo>
                <LinkHolder>
                <Holder to="/mercury">Mercury</Holder>
                <Holder to="/venus">Venus</Holder>
                <Holder to="earth">Earth</Holder>
                <Holder to="/mars">Mars</Holder>
                <Holder to="/jupiter">Jupiter</Holder>
                <Holder to="/saturn">Saturn</Holder>
                <Holder to="/uranus">Uranus</Holder>
               <Holder to="/neptune">Neptune</Holder> 
        
                </LinkHolder>
            </Main>
        </Constainer>
    </div>
  )
}

export default Header



const Main = styled.div`
 width:100%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;

`
const Constainer = styled.div`
width:100%;
height:80px;
border-radius:1px solid silver;
display:flex;
justify-content:center;
position:fixed;`
const LinkHolder = styled.div`
display:flex;
justify-content:center;`
const Logo =styled(Link)`
padding:0 10px;
font-weight:900;
font-size:40px;
text-decoration:none;
color:black;`
const Holder = styled(Link)`
padding:0 10px;
font-weight:700;
text-decoration:none;
color:black;`

