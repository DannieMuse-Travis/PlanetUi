import React from 'react'
import styled from 'styled-components'
import {AiFillPlayCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { useState } from 'react'
import vid from "./Stand.mp4"
import {AiOutlineClose} from "react-icons/ai"




const App =()=>{
  const [toggle, setToggle]= useState<boolean>(false);
  const [showVideo, setVideo]= useState<boolean>(false);
  const OnToggle=()=>{ 
     
    setToggle(!toggle)
  }  
  console.log(toggle);
  const onshowVideo =()=>{ 
     
    setVideo(!showVideo)
  }  
  console.log(toggle);


  console.log(toggle);
  const listofvideos = [
    {title: 'First Video', description: 'First Description', color: 'darkred'},
    {title: 'Second Video', description: 'Second Description', color: 'darkgreen'},
    {title: 'Third Video', description: 'Third Description', color: 'darkblue'},
  ]
  return(
      
          
      < Container>
        <Main>
         <Text>Travis</Text>
          {listofvideos.map((el)=>{
            return(
              <Holder> 
         <div
         onClick={onshowVideo} 
         >
         <VideoClip bg={el.color}>
            <Icon1 size={40}></Icon1>
            
          </VideoClip>
         </div>
         
         
          <Content>
            <Div>{el.title}</Div>
            <DivSub>{el.description}</DivSub>
           {
            showVideo ? (
              <Div2>
                <BackDrop onClick={onshowVideo}>
            <Icon size={30} onClick={onshowVideo}/>
             </BackDrop>
             <Video src={vid}  controls autoPlay playsInline/>
              </Div2>
            ):null}
          </Content>
         
          <Span onClick={()=>{
            OnToggle();
            
          }}>
          {toggle ? (<HeartIcon size={35}></HeartIcon>) : (<HeartIcon2 size={35}></HeartIcon2>)}
          </Span>  
          <Button></Button>
          
         </Holder>
        
      
            )
          })}
        </Main>
      </Container>
      

      
  )
}

export default App

const Div2 = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;`
const Icon =styled(AiOutlineClose)`
position:absolute;
right:30px;
top:30px;
transition: all 350ms;
color:red;
:hover{
  cursor: pointer;
  transform:scale()
}

`
const BackDrop = styled.div`
/* background-color:rgba(0,0,0,0.3); */
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background:rgba(255,255,255,0.25);
/* box-shadow:0 8px 32px 0 rgba(31,38,135,0.37); */
backdrop-filter:blur(4px);
display:flex;
justify-content:center;
align-items:center;
/* border-radius:10px; */
/* border:1px solid rgba(255,255,255,0.18); */
 `
const Video = styled.video`
width:450px;
height:300px;
border-radius:10px;
overflow:hidden; 
background-color:black;
object-fit:cover;
position:absolute;  
  top:80px;
` 

const HeartIcon = styled(AiOutlineHeart)`
  padding: 15px;
  /*  */
`
const HeartIcon2 = styled(AiFillHeart)`
  padding: 15px;
 /* background-color:red; */
`
const Icon1 = styled(AiFillPlayCircle)`
  opacity: 0.3;
  :hover{
     cursor: pointer;
     opacity:0.9;
  }
`
const Span = styled.span`
/* background-color:red; */
  :hover{
    
    background-color: grey;
    border-radius:50%;
    transition:all 350ms;
    cursor: pointer;
  }
`

const Div = styled.div`
font-weight:700;
margin-bottom:5px;`
const DivSub = styled.div`
color:silver;`


const Container = styled.div`
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
width:800px;
height:400px;
overflow:hidden;
/* display:flex; */
background-color:white;
border:1px solid gray;
border-radius:20px;
padding:20px;
position:relative; 
`
const Text = styled.div`
font-size:20px;
font-weight:700;`

const Holder = styled.div`
margin-top:10px;
display:flex;
height:120px;
align-items:center;
`

const VideoClip = styled.div<{bg: string}>`
width:200px;
height:120px; 
background-color:${({bg})=>bg};
border-radius:10px;
display:flex;
color:white;
justify-content:center;
align-items:center;
`

const Content= styled.div`
flex:1;
margin:10px;`
const Button = styled.div``

