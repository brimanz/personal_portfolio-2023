import React from 'react'
import styled from '@emotion/styled'
import GitHubIcon from '@mui/icons-material/GitHub';
import PhonelinkIcon from '@mui/icons-material/Phonelink';


const Projects = () =>{
	return(
		<ProjectsContainer>
			<Title>Projects</Title>

			<WorksContainer>
				<ProjectContainer>
					<ProjectTitle>Blockchain App</ProjectTitle>
					<ProjectImage src="../assets/projects/app1.png" alt="app-1"/>
					<ProjectText>
						React - Solidity - Hardhat - TailwindCss
					</ProjectText>
					
					<LinksContainer>
						<LinkItems2/>
						<a href="https://venezuelan-crypto.netlify.app/"><LinkItems/></a>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Tesla Clone</ProjectTitle>
					<ProjectImage src="../assets/projects/app7.png" alt="app-1"/>
					<ProjectText>
						React - Javascript - Styled-components
					</ProjectText>
					
					<LinksContainer>
						<a ><LinkItems2/></a>
						<a href="https://tesla-clone-version.netlify.app/"><LinkItems/></a>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Mérida Web-site</ProjectTitle>
					<ProjectImage src="../assets/projects/app6.png" alt="app-1"/>
					<ProjectText>
						React - Javascript - Styled-components
					</ProjectText>
					
					<LinksContainer>
						<a ><LinkItems2/></a>
						<a href="https://merida-ciudad.netlify.app/"><LinkItems/></a>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Old Portfolio</ProjectTitle>
					<ProjectImage src="../assets/projects/app5.png" alt="app-1"/>
					<ProjectText>
						NextJs - Javascript - Styled-components
					</ProjectText>

					<LinksContainer>
						<a href="https://github.com/brimanz"><LinkItems2/></a>
						<a href="https://jonathan-briceno.netlify.app/"><LinkItems/></a>			
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Crypto Monitor</ProjectTitle>
					<ProjectImage src="../assets/projects/app2.png" alt="app-1"/>
					<ProjectText>
						React - Styled-components - CryptoCompare-API
					</ProjectText>

					<LinksContainer>
						<a href="https://github.com/brimanz"><LinkItems2/></a>
						<a href="https://crypto-co.netlify.app/"><LinkItems/></a>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Insurance app</ProjectTitle>
					<ProjectImage src="../assets/projects/app3.png" alt="app-1"/>
					<ProjectText>
						React - Javascript - Styled-components
					</ProjectText>

					<LinksContainer>
						<a href="https://github.com/brimanz"><LinkItems2/></a>
						<a href="https://seguros-info.netlify.app/"><LinkItems/></a>
					</LinksContainer>
				</ProjectContainer>

			</WorksContainer>
		</ProjectsContainer>
	);
}


export default Projects;


const ProjectsContainer = styled.div`
	height: 65rem;
	width: 100%;
	margin-top: 45rem;
	text-align: center;
	display: flex;
	flex-direction: column;
`;
const Title = styled.h2`
	font-size: 6.5rem;
	font-family: 'Island Moments', cursive;
	font-weight: 400;
	color: #EDE574;
	margin: 0 2rem;

	@media (max-width: 680px){
		margin-top: 8rem;
	}

	@media (max-width: 479px){
		font-size: 3rem;
	}
`;
const WorksContainer = styled.div`
	margin: 2rem 8rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media (max-width: 980px){
		margin: 2rem auto;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}	

	@media (max-width: 479px){
		margin: 3rem auto;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
	}
`;
const ProjectContainer = styled.div`
	margin: 3rem 5rem;
	width: 27rem;
	height: 25rem;

	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	@media (max-width: 479px){
		margin: 4rem 0;
		width: 13rem;
		height: 20rem;		
	}
`;
const ProjectTitle = styled.h2`
	font-size: 2.4rem;
	font-family: 'Island Moments', cursive;
	font-weight: 400;
	color: #EDE574;
	margin: 1rem;

	@media (max-width: 479px){
		font-size: 1.4rem;		
	}
`;
const ProjectImage = styled.img`
	width: 20rem;
	height: 12rem;

	@media (max-width: 479px){
		width: 13rem;
		height: 10rem;		
	}	
`;
const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 479px){
		margin: 1.2rem 0;		
	}
`;
const LinkItems = styled(PhonelinkIcon)`
	text-decoration: none;
	margin: 0 4rem;
	color: #EDE574;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;

	:hover{
		color: #ffffff;
	}

	@media (max-width: 479px){
		font-size: 1.2rem;
		margin: 0 1.3rem;		
	}
`;
const LinkItems2 = styled(GitHubIcon)`
	text-decoration: none;
	margin: 0 4rem;
	color: #ffffff;
	font-weight: bold;
	font-size: 2rem;
	cursor: pointer;

	:hover{
		color: #EDE574;
	}

	@media (max-width: 479px){
		font-size: 1.2rem;
		margin: 0 1.3rem;	
	}
`;
const ProjectText = styled.p`
	font-size: 0.9rem;
	color: #ffffff;
	margin: 1rem 0;
	width: 100%;

	@media (max-width: 479px){
		font-size: 0.8rem;		
	}
`;

