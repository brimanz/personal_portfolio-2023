import React from 'react'
import styled from '@emotion/styled'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Header = () =>{
	return(
		<Container id="header">
			<HeaderContent>
				<Title>I'm Jonathan Briceño</Title>
				<Subtitle>Frontend Developer</Subtitle>
				
				<Button>Download CV</Button>

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
	background: #0f0c29;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to left, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


	display: flex;
	justify-content: center;
`;
const Title = styled.h1`
	font-size: 3rem;
	font-weight: 400;
	font-family: 'Island Moments', cursive;

	text-shadow: 1px 1px 1px #0000000;
	margin: 0 4rem;
	color: #f5f5f5;

	@media (max-width: 320px){
		font-size: 1.6rem;
		text-align: center;
		margin-bottom: 2rem;
	}
`;
const Subtitle = styled.h2`
	font-size: 5rem;
	font-weight: bold;
	font-family: sans-serif;

	text-shadow: 1px 3px 1px rgba(255,255,255, 0.3);
	margin: 0 4rem;
	color: #EDE574;

	@media (max-width: 320px){
		font-size: 2.4rem;
		text-align: center;
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
const Button = styled.button`
	margin-top: 2rem;
	width: 10rem;
	padding: 1rem;
	
	border: none;
	color: navy;
	font-weight: bold;
	font-size: 1rem;
	cursor: pointer;

	:hover{
		background:#EDE574;
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