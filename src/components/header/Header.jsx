import React from 'react'
import styled from '@emotion/styled'


const Header = () =>{
	return(
		<Container id="header">
			<TextContainer>
				<Title>I'm Jonathan Briceño</Title>
				<Subtitle>Frontend Developer</Subtitle>
				<Button>Download CV</Button>
			</TextContainer>

			<ImageContainer>
				<HeaderImage src="../assets/header.svg" alt="image-header"/>
			</ImageContainer>
		</Container>
	);
}


export default Header;


const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #656565;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const TextContainer = styled.div`
	max-width: 55%;
`;
const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	font-family: sans-serif;

	text-shadow: 1px 3px 1px #d4d4d4;
	margin: 0 4rem;
	color: #000000;
`;
const Subtitle = styled.h2`
	font-size: 4rem;
	font-weight: bold;
	font-family: sans;

	text-shadow: 1px 3px 1px #000000;
	margin: 0 4rem;
	color: #f5f5f5;
`;
const ImageContainer = styled.div`
	width: 45%;
`;
const HeaderImage = styled.img`
	max-width: 100%;
`;
const Button = styled.button`
	padding: 1rem;
	margin: 1rem 4rem;

	border: none;
	background: darkgrey;
	color: #f5f5f5;
	cursor: pointer;
	font-weight: bold;

	:hover{
		border: 2px solid darkgrey;
		background: none;
		width: 8rem;
	}
`;