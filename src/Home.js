import React from 'react';
import image from "./prof-pixel.png"
import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <Section>
            <Img src={image} alt="profile_picture" />
            </Section>
            <SectionTwo>
                <Greeting className="typewriter">Hi <Wave className ="wave">👋</Wave> I'm Ranjit</Greeting>
            </SectionTwo>  
        </Container>
    )
} 

const Container = styled.div`


`
const Section = styled.div`
position:relative;
display:flex;
justify-content:center;
`
const Img = styled.img`
width: 300px;
height: 300px;

`
const SectionTwo = styled.div`
position:relative;
display:flex;
justify-content:center;
padding:3px 8px 0px 0px;
font-family: "Press Start 2P", cursive;
font-weight: 300;

`
const Wave = styled.div`


`
const Greeting = styled.div`
color:white;
font-size:50px;
font-weight:bold;

`
