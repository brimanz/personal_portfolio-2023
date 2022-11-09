import React from 'react'
import styled from '@emotion/styled'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Header = () =>{
	return(
		<Container id="header">
			<HeaderContent>
				<Title>I'm Jonathan Briceño</Title>
				<Subtitle>Frontend Developer</Subtitle>
				
				<Button href="../assets.CV_OFICAL.pdf" download="CV_OFICIAL.pdf">Download CV</Button>
				
				<a href="#about">
					<Arrows/>
				</a>
			</HeaderContent>
		</Container>
	);
}


export default Header;


const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
`;
const Title = styled.h1`
	font-size: 2rem;
	text-align: center;
	font-weight: 400;
	font-family: 'sans-sefir;

	text-shadow: 1px 1px 1px #0000000;
	margin: 0 4rem;
	color: #f5f5f5;

	@media (max-width: 340px){
		text-align: center;
		margin-bottom: 2rem;
	}
`;
const Subtitle = styled.h2`
	font-size: 8rem;
	font-weight: 400;
	font-family: 'Island Moments', cursive;

	text-shadow: 2px 1px 1px rgba(255,255,255, 0.55);
	margin: 0 4rem;
	color: #EDE574;

	@media (max-width: 720px){
		font-size: 3rem;
		margin-bottom: 3rem;
	}

	@media (max-width: 340px){
		font-size: 2.1rem;
		margin-top: 2rem;
	}
`;
const HeaderContent = styled.div`
	height: 20rem;
	
	display: flex;
	align-items: center;
	justify-content: space-between; 
	flex-direction: column;
	margin-top: 8rem;
`;
const Button = styled.a`
	margin-top: 2rem;
	background: #f5f5f5;
	padding: 1rem;
	width: 10rem;
	
	text-decoration: none;
	text-align: center;
	border: none;
	color: navy;
	font-weight: bold;
	font-size: 1rem;
	cursor: pointer;

	:hover{
		background:#EDE574;
	}

	@media (max-width: 720px){
		width: 8rem;
		font-size: 0.8rem;
	}

	@media (max-width: 320px){
		text-align: center;
		margin-top: 4rem;
		width: 8rem;
		font-size: 0.8rem;
	}
`; 
const Arrows = styled(KeyboardDoubleArrowDownIcon)`
	font-size: 4rem;
	animation: animationDown infinite 1.3s;
	overflow-x: hidden;
	margin-top: 12rem;
	cursor: pointer;
	color: #f5f5f5;

	:hover{
		color: #EDE574;
	}

	@media (max-width: 320px){
		font-size: 3rem;
	}
`;