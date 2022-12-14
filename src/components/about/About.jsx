import React from 'react'
import styled from '@emotion/styled'
import AOS from 'aos';


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
			
			<Title>Skills</Title>

			<Content>
				<Text>
					During my experience as a self-taught frontend 
					developer I have learned the following technologies 
					and tools to carry out several projects:
				</Text>
			</Content>

			<SkillsContainer>
				<SpaceContainer>
					<Titles>Frontend</Titles>
            		
            		<SkillsIcons 
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="300"
     					data-aos-offset="0"
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            			title="react"
            		/>

          			<SkillsIcons
          				data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="500"
     					data-aos-offset="0" 
          				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" 
          				title="javascript"
          			/>
          
            		<SkillsIcons 
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="700"
     					data-aos-offset="0"
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" 
            			title="sass"
            		/>

            		<SkillsIcons
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="900"
     					data-aos-offset="0" 
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" 
            			title="bootstrap"
            		/>

            		<SkillsIcons
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="1100"
     					data-aos-offset="0" 
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" 
            			title="material-UI"
            		/>

            		<SkillsIcons
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="1300"
     					data-aos-offset="0" 
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
            			title="tailwind-CSS"
            		/>

            		<SkillsIcons
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="1500"
     					data-aos-offset="0" 
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" 
            			title="html"
            		/>

          		  	<SkillsIcons 
          		  		data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="1700"
     					data-aos-offset="0"
          		  		src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" 
          		  		title="css"
          		  	/>
          		  	
				</SpaceContainer>

				<SpaceContainer>
					<Titles>Testing</Titles>
            		<SkillsIcons
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="1900"
     					data-aos-offset="0" 
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
            			title="jest"
            		/>
            		<SkillsIcons 
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="2100"
     					data-aos-offset="0"
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" 
            			title="mocha"
            		/>          
				</SpaceContainer>

				<SpaceContainer>
					<Titles>Blockchain</Titles>           		
            		<SkillsIcons
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="2300"
     					data-aos-offset="0" 
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" 
            			title="solidity"
            		/>
            	</SpaceContainer>

				<SpaceContainer>
					<Titles>Learning</Titles>
            		<SkillsIcons
            			data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="2500"
     					data-aos-offset="0" 
            			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
            			title="python"
            		/>
          			<SkillsIcons
          				data-aos="fade-zoom-in"
     					data-aos-easing="ease-in-back"
     					data-aos-delay="2700"
     					data-aos-offset="0" 
          				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
          				title="flask"
          			/>
				</SpaceContainer>
			</SkillsContainer>

		</AboutContainer>
	);
}


export default About;


const AboutContainer = styled.div`
	height: 65rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 3rem;
	height: 50rem;
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

	@media (max-width: 340px){
		font-size: 3rem;
	}
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

	@media (max-width: 340px){
		font-size: 0.7rem;
	}
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
	font-size: 2.11rem;
	font-family: 'Island Moments', cursive;
	font-weight: 400;
	color: #EDE574;
	margin: 2rem 4rem;
`;

const SpaceContainer = styled.div`
	margin: 1.5rem 0;
`;
const SkillsIcons = styled.img`
	width: 3rem;
	height: 3rem;
	padding: 0 2rem;

	:hover{
		{filter: sepia(60%);}
		{-webkit-transform:scale(0.8);transform:scale(0.8);}
		{overflow:hidden;}
	}

	@media (max-width: 340px){
		width: 2remem;
		height: 2rem;
	}
`;
