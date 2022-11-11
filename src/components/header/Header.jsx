import React from 'react'
import styled from '@emotion/styled'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


const Header = () =>{
	return(
		<Container id="header">
			<HeaderContent>
				<Title>I'm Jonathan Briceño</Title>
				<Subtitle>Frontend Developer</Subtitle>
				
				<Button href="../assets/CV_OFICIAL.pdf" download="CV_OFICIAL">Download CV</Button>
				
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
	font-size: 1.8rem;
	text-align: center;

	text-shadow: 1px 1px 1px #0000000;
	color: #f5f5f5;

	@media (max-width: 680px){
		font-size: 1.4rem;
	}

	@media (max-width: 340px){
		font-size: 0.8rem;
	}
`;
const Subtitle = styled.h2`
	font-size: 6.5rem;
	font-weight: 400;
	font-family: 'Island Moments', cursive;

	text-shadow: 2px 1px 1px rgba(255,255,255, 0.55);
	margin: 3rem 4rem;
	color: #EDE574;

	@media (max-width: 680px){
		font-size: 5rem;
		text-align: center;
	}

	@media (max-width: 340px){
		font-size: 2.11rem;
	}
`;
const HeaderContent = styled.div`
	height: 20rem;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between; 
	flex-direction: column;
	margin-top: 8rem;
`;
const Button = styled.a`
	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	padding: 1rem;
	width: 10rem;
	
	text-decoration: none;
	text-align: center;
	border: none;
	color: #ffffff;
	font-weight: bold;
	font-size: 1rem;
	cursor: pointer;

	:hover{
		background:#EDE574;
		color: navy;
	}

	@media (max-width: 680px){
		width: 8rem;
		font-size: 0.8rem;
	}

	@media (max-width: 340px){
		text-align: center;
		margin-top: 2rem;
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

	@media (max-width: 340px){
		font-size: 3rem;
	}
`;