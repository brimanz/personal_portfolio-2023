import React from 'react'
import styled from '@emotion/styled'


const Header = () =>{
	return(
		<Container id="header">
			<TextContainer>
				<Title>I'm Jonathan Briceño</Title>
				<Subtitle>Frontend Developer</Subtitle>
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
	background-color: #d7d2cc;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TextContainer = styled.div`
	width: 60%;
`;

const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	font-family: sans-serif;

	text-shadow: 1px 3px 1px #f5f5f5;
	margin: 0 4rem;
	color: darkred;
`;

const Subtitle = styled.h2`
	font-size: 4rem;
	font-weight: bold;
	font-family: sans-serif;

	text-shadow: 1px 3px 1px #f5f5f5;
	margin: 0 4rem;
	color: grey;
`;

const ImageContainer = styled.div`
	width: 40%;
`;

const HeaderImage = styled.img`
	max-width: 100%;
`;