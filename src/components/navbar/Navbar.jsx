import React from 'react'
import styled from '@emotion/styled'

import BlurOnIcon from '@mui/icons-material/BlurOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Navbar = () =>{
	return(
		<Container className="app__navbar">
			<NavContainer>
				<Logo src="../assets/logo.png" alt="logo-image"/>

				<ContainerIcons>
					<Links href="https://github.com/brimanz">
						<Github/>
					</Links>
					<Links href="https://www.linkedin.com/in/brimanz-frontend/">
						<Linkedin/>
					</Links>
				</ContainerIcons>

			</NavContainer>
		</Container>
	);
}


export default Navbar;


const Container = styled.div`
	background-color: #ffffff;

	@media (max-width: 340px){
		height: 3.6rem;
	}
`;
const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 340px){
		justify-content: center;
	}
`;
const Logo = styled.img`
	width: 5.5rem;
	margin: 0 2rem;

	@media (max-width: 340px){
		width: 3.5rem;
	}
`;
const ContainerIcons = styled.div`
	margin: 0 2rem;

	@media (max-width: 340px){
		display: none;
	}
`;
const Links = styled.a`
	padding: 0 1rem;
	text-decoration: none;
	color: dimgrey;

	:hover{
		color: #EDE574;
	}
`
const Github = styled(GitHubIcon)`
	font-size: 2rem;
`
const Linkedin = styled(LinkedInIcon)`
	font-size: 2rem;
`
