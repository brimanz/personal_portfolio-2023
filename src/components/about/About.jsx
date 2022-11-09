import React from 'react'
import styled from '@emotion/styled'


const About = () =>{
	return(
		<AboutContainer id="about">
			<Contend>
				<Title>About</Title>
				<p>
					I am a Computer Engineer, Self-taught,
					Passionate about Programming and
					Software development, always looking for
					new knowledge that will allow me to grow
					more and more as a developer. With solid
					knowledge in Information security and
					highly trained in Ethical hacking
					techniques.
				</p>
			</Contend>

			<div>
				<Title>Skills</Title>
			</div>
		</AboutContainer>
	);
}


export default About;


const AboutContainer = styled.div`
	height: 35rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Contend = styled.div`
	width: 100%;
	margin: 2rem 0;
	background: red;
`;
const Title = styled.h2`
	font-size: 3rem;
	font-family: 'Island Moments', cursive;
	font-weight: 400;
	color: #EDE574;

	margin: 0 2rem;
`;