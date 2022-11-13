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
						<LinkItems/>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Tesla Clone</ProjectTitle>
					<ProjectImage src="../assets/projects/app7.png" alt="app-1"/>
					<ProjectText>
						React - Javascript - Styled-components
					</ProjectText>
					
					<LinksContainer>
						<a href="https://github.com/brimanz"><LinkItems2/></a>
						<LinkItems/>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Mérida Web-site</ProjectTitle>
					<ProjectImage src="../assets/projects/app6.png" alt="app-1"/>
					<ProjectText>
						React - Javascript - Styled-components
					</ProjectText>
					
					<LinksContainer>
						<a href="https://github.com/brimanz"><LinkItems2/></a>
						<LinkItems/>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Portfolio 2022</ProjectTitle>
					<ProjectImage src="../assets/projects/app5.png" alt="app-1"/>
					<ProjectText>
						NextJs - Javascript - Styled-components
					</ProjectText>

					<LinksContainer>
						<a href="https://github.com/brimanz"><LinkItems2/></a>
						<LinkItems/>				
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Crypto Monitor</ProjectTitle>
					<ProjectImage src="../assets/projects/app2.png" alt="app-1"/>
					<ProjectText>
						React - Styled-components - CryptoCompare-API
					</ProjectText>

					<LinksContainer>
						<LinkItems2/>
						<LinkItems/>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Insurance app</ProjectTitle>
					<ProjectImage src="../assets/projects/app3.png" alt="app-1"/>
					<ProjectText>
						React - Javascript - Styled-components
					</ProjectText>

					<LinksContainer>
						<LinkItems2/>
						<LinkItems/>
					</LinksContainer>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectTitle>Expense manger</ProjectTitle>
					<ProjectImage src="../assets/projects/app4.png" alt="app-1"/>
					<ProjectText>
						React - Javascript - SkeletonCss
					</ProjectText>

					<LinksContainer>
						<a href="https://github.com/brimanz"><LinkItems2/></a>
						<LinkItems/>
					</LinksContainer>
				</ProjectContainer>

			</WorksContainer>
		</ProjectsContainer>
	);
}


export default Projects;


const ProjectsContainer = styled.div`
	height: 40rem;
	margin-top: 55rem;
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
`;
const WorksContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	justify-content: space-between;
	margin: 3rem 5rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
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
`;
const ProjectTitle = styled.h2`
	font-size: 2.4rem;
	font-family: 'Island Moments', cursive;
	font-weight: 400;
	color: #EDE574;
	margin: 1rem;
`;
const ProjectImage = styled.img`
	width: 20rem;
`;
const LinksContainer = styled.div`
	padding: 1rem;
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
`;
const ProjectText = styled.p`
	font-size: 1.1rem;
	color: #ffffff;
	margin: 1rem;
`;

