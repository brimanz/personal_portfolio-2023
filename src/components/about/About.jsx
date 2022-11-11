import React from 'react'
import styled from '@emotion/styled'


const About = () =>{
	return(
		<AboutContainer id="about">
			<Title>About</Title>

			<Content>
				<Text>
					I am a Computer Engineer, Self-taught,
					Passionate about Programming and
					Software development, always looking for
					new knowledge that will allow me to grow
					more and more as a developer. With solid
					knowledge in Information security and
					highly trained in Ethical hacking
					techniques.
				</Text>
			</Content>

			<Image src="../assets/code.png" alt="avatar"/>
			
			<Title>Skills</Title>

			<Content>
				<Text>
					During my experience as a self-taught frontend 
					developer I have learned the following technologies 
					and tools to carry out several projects:
				</Text>
			</Content>

			<SkillsContainer>
				<div>
					<Titles>Frontend</Titles>
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
          			<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
				</div>

				<div>
					<Titles>Testing</Titles>
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />          
				</div>

				<div>
					<Titles>Blockchain</Titles>           		
            		<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" />
            	</div>

				<div>
					<Titles>Learning</Titles>
          			<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" />
          			<SkillsIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
				</div>
			</SkillsContainer>

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
const Content = styled.div`
	max-width: 40rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;

	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
`;
const Title = styled.h2`
	font-size: 6.5rem;
	font-family: 'Island Moments', cursive;
	font-weight: 400;
	color: #EDE574;
	margin: 0 2rem;
`;
const Text = styled.p`
	width: 100%;
	padding: 1rem;
	letter-spacing: 0.1rem;
	color: #ffffff;
	justify-content: center;
	text-align: center;

	font-weight: bold;
	font-size: 1rem;
`;
const Image = styled.img`
	width: 25%;
	margin: 0 6rem;
`;
const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
	margin: 3rem 0;
`;
const Titles = styled.h2`
	font-size: 2.2rem;
	font-family: 'Island Moments', cursive;
	font-weight: 400;
	color: #EDE574;
	margin: 2rem 4rem;
`;
const SkillsIcons = styled.img`
	width: 3rem;
	height: 3rem;
	padding: 0 2rem;
`;
