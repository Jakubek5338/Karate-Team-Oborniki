import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import karateLogo from '../images/logo.jpg'
import "../../fontello-635cabf5/css/fontello.css"


const Menu = styled.div`


   
  display: grid;
  wight: 100vw;
  grid-template-columns: repeat(8, 12.5% );
  grid-template-rows: repeat(2, 7vw);

`;

const HamburgerMenu = styled.div`
@media (min-width: 1200px){
  display: none;
  }
  @media(max-width:1199px){
    grid-column: 7 / span 2;
  grid-row: 1/ span 2;
  }
`
const HamburgerOne = styled.div `
margin-left: 25%;
width: 50%;
height: 1vw;
background-color: grey;
margin-top: 15%;
`
;
const HamburgerTwo = styled.div `
margin-left: 25%;
width: 50%;
height: 1vw;
background-color: grey;
margin-top: 5%;
`
;
const HamburgerThree = styled.div `
margin-left: 25%;
width: 50%;
height: 1vw;
background-color: grey;
margin-top: 5%;
`;
const MenuLink1 = styled.div`
    width: 100vw;
    height: 20vw;
`;
const MenuLink2 = styled.div` 
    width: 100vw;
    height: 20vw;
    margin-left: 0px;
`;
const MenuLink3 = styled.div` 
    width: 100vw;
    height: 20vw;
    margin-left: 0px;
`;
const MenuLink4 = styled.div` 
    width: 100vw;
    height: 20vw;
    margin-left: 0px;
    background-color: red;
`;
const MenuLink5 = styled.div` 
    width: 100vw;
    height: 20vw;
    margin-left: 0px;
`;
const MenuLink6 = styled.div` 
    width: 100vw;
    height: 20vw;
    margin-left: 0px;
`;
const MenuLink7 = styled.div` 
    width: 100vw;
    height: 20vw;
    margin-left: 0px;
`;
const MenuName = styled.h1`
  text-align: center;
  color: black;
`;
const StyledLink= styled(props => <Link {...props} />)`
text-decoration: none;
`;
const MenuDiv = styled.div`
width: 96vw;
margin-left:2vw;
height: 100%;
padding-top: 4vw;
background-color: white;
`;
const Content =styled.div`

`;
const Contakt = styled.div`
  margin-top: 10vw;
  text-align: center
`
const Kontakt = styled.h4 `
padding-top: 0.5vw;
margin: 0px;
font-size: 6vw;
`
const Email = styled.h4 `
padding-top: 1vw;
margin: 0px;
font-size: 6vw;
display: inline-block;
`
const EmailName = styled.h4 `
font-size: 6vw;
margin: 0px;
color: blue;
display: inline-block;
`
const SocialMedia = styled.div`
  text-align: center

`


const IndexPage = () => (
    <Content>
<Menu>
<HamburgerMenu><StyledLink to="/kalendarz/">
      <HamburgerOne></HamburgerOne>
      <HamburgerTwo></HamburgerTwo>
      <HamburgerThree></HamburgerThree>
      </StyledLink></HamburgerMenu>
      
      
    
    
    
    </Menu>
    <MenuLink1><StyledLink to="/kadra/"><MenuDiv><MenuName>Kadra</MenuName></MenuDiv></StyledLink></MenuLink1>
      <MenuLink2><StyledLink to="/treningi/"><MenuDiv><MenuName>Treningi</MenuName></MenuDiv></StyledLink></MenuLink2>
      <MenuLink3><StyledLink to="/sukcesy/"><MenuDiv><MenuName>Sukcesy</MenuName></MenuDiv></StyledLink></MenuLink3>
      <MenuLink4><StyledLink to="/kalendarz/"><MenuDiv><MenuName>Kalendarz</MenuName></MenuDiv></StyledLink></MenuLink4>
      <MenuLink5><StyledLink to="/przedszkola/"><MenuDiv><MenuName>Karate w przedszkolach</MenuName></MenuDiv></StyledLink></MenuLink5>
      <MenuLink6><StyledLink to="/obozy/"><MenuDiv><MenuName>Obozy letnie i zimowe</MenuName></MenuDiv></StyledLink></MenuLink6>
      <MenuLink7><StyledLink to="/kontakt/"><MenuDiv><MenuName>Kontakt</MenuName></MenuDiv></StyledLink></MenuLink7>
      <SocialMedia> 
    <a href="https://www.instagram.com/karateteamoborniki/?hl=pl" target="_blank" ><i className="demo-icon icon-instagram"></i></a>
    <a href="https://www.facebook.com/karateteamoborniki/" target="_blank" ><i className="demo-icon icon-facebook"></i></a>
    <a href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q/videos?view=0&sort=dd&shelf_id=0" target="_blank" ><i className=" icon-youtube-play"></i></a>
    </SocialMedia>
      <Contakt><Kontakt>tel.888 585 785</Kontakt><Email>Email:</Email><EmailName>wbi@poczta.fm</EmailName></Contakt>
      
    </Content>




)

export default IndexPage