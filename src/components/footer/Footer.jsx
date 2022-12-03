import React from 'react'
import styled from '@emotion/styled'


const Footer = () =>{
	return(
		<FooterContainer>
			<p>Design & Development by 
				<strong>Jonathan Briceño</strong> - 2022
			</p>
		</FooterContainer>
	);
}


export default Footer;


const FooterContainer = styled.div`
	padding: 2rem 0;
	margin-top: 20rem;
	width: 100%;
	
	border-top: 1px solid #EDE574;
	text-align: center;
	color: #ffffff;

	@media (max-width: 980px){
		margin-top: 120rem;
	}	

	@media (max-width: 758px){
		margin-top: 120rem;
	}
`;