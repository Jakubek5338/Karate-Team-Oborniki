import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import karateLogo from '../images/logo.jpg'
import "../../fontello-635cabf5/css/fontello.css"
import Kontaktdane from '../components/kontaktdane'
import Przyjacieledane from '../components/przyjacieledane'









const Menu = styled.div`
@media (min-width: 1200px){
  display: grid;
  wight: 100vw;
  grid-template-columns: repeat(20, 5% );
  grid-template-rows: repeat(2, 5vw);
}
@media (max-width: 1199px){
  display: grid;
  wight: 100vw;
  grid-template-columns: repeat(8, 12.5% );
  grid-template-rows: repeat(2, 7vw);
}
`;
const Menu1 = styled.div`
@media (min-width: 1200px){
  color: black;
  height: 5vw;
  grid-column: 3 / span 2;
  grid-row: 2/ span 1;
  padding: 1.5vw;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  :hover{
    background-color: red;
  }
}
@media(max-width:1199px){
  display: none;
}
`;
const Menu2 = styled.div`
@media (min-width: 1200px){
  color: black;
  height: 5vw;
  grid-column: 5 / span 2;
  grid-row: 2/ span 1;
  padding: 1.5vw;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  :hover{
    background-color: red;
  }}
  @media(max-width:1199px){
    display: none;
  }
`;
const Menu3 = styled.div`
@media (min-width: 1200px){
  color: black;
  height: 5vw;
  grid-column: 7 / span 2;
  grid-row: 2/ span 1;
  padding: 1.5vw;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  :hover{
    background-color: red;
  }}
  @media(max-width:1199px){
    display: none;
  }
`;
const Menu4 = styled.div`
@media (min-width: 1200px){
  color: black;
  height: 5vw;
  grid-column: 9 / span 2;
  grid-row: 2/ span 1;
  padding: 1.5vw;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  :hover{
    background-color: red;
  }}
  @media(max-width:1199px){
    display: none;
  }
`;
const Menu5 = styled.div`
@media (min-width: 1200px){
  color: black;
  height: 5vw;
  grid-column: 11 / span 2;
  grid-row: 2/ span 1;
  padding-top: 0.55vw;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  :hover{
    background-color: red;
  }}
  @media(max-width:1199px){
    display: none;
  }
`;
const Menu6 = styled.div`
@media (min-width: 1200px){
  color: black;
  height: 5vw;
  grid-column: 13 / span 2;
  grid-row: 2/ span 1;
  padding: 0vw;
  padding-top: 0.8vw;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  :hover{
    background-color: red;
  }}
  @media(max-width:1199px){
    display: none;
  }
`;
const Menu7 = styled.div`
@media (min-width: 1200px){
  color: black;
  height: 5vw;
  grid-column: 15 / span 2;
  grid-row: 2/ span 1;
  padding: 1.5vw;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  :hover{
    background-color: red;
  }}
  @media(max-width:1199px){
    display: none;
  }
`;
const Logo = styled.img`
@media (min-width: 1200px){
grid-column: 1 / span 2;
grid-row: 1/ span 2;

}
@media(max-width:1199px){
  display: none;
}

`;
const Logoname = styled.h1`
@media (min-width: 1200px){
  text-align: center;
  font-size: 3vw;
}
@media (max-width: 1199px){
  text-align: center;
  font-size: 7vw;
  margin-top: 2vw;
  color:red;
}
`;
const LogoNameDiv = styled.div`
@media (min-width: 1200px){
  color: red;
  grid-column: 3 / span 14;
  grid-row: 1/ span 1;
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
}
@media(max-width:1199px){
  grid-column: 1 / span 6;
  grid-row: 1/ span 2;
}
  `;
const LogoDiv = styled.div`
@media (min-width: 1200px){
  olor: blue;
  grid-column: 1 / span 2;
  grid-row: 1/ span 2;
  background-color: white;
  heigth: 5vw;
  background-color: white;
box-sizing: border-box;
border-bottom: 1px solid grey;
border-right: 1px solid grey;
}
@media(max-width:1199px){
  display: none;
}
`;
const MenuName1 = styled.h3`
@media (min-width: 1200px){
  text-align: center;
  font-size: 1.4vw;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuName2 = styled.h3`
@media (min-width: 1200px){
  text-align: center;
  font-size: 1.4vw;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuName3 = styled.h3`
@media (min-width: 1200px){
  text-align: center;
  font-size: 1.4vw;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuName4 = styled.h3`
@media (min-width: 1200px){
  text-align: center;
  font-size: 1.4vw;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuName5 = styled.h3`
@media (min-width: 1200px){
  text-align: center;
  font-size: 1.4vw;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuName6 = styled.h3`
@media (min-width: 1200px){
  text-align: center;
  font-size: 1.4vw;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuName7 = styled.h3`
@media (min-width: 1200px){
  text-align: center;
  font-size: 1.5vw;
}
@media(max-width:1199px){
  display: none;
}
`
const SocialMedia = styled.div`
@media (min-width: 1200px){
grid-column: 17 / span 4;
  grid-row: 1/ span 1;
  box-sizing: border-box;
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  text-align: center
}
@media(max-width:1199px){
  display: none;
}s
`
const Contakt = styled.div`
@media (min-width: 1200px){
  grid-column: 17 / span 4;
  grid-row: 2/ span 1;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  text-align: center
}
@media(max-width:1199px){
  display: none;
}
`
const MenuLink5 = styled.div`
@media (min-width: 1200px){
  grid-column: 11 / span 2;
  grid-row: 2/ span 1;
  padding: 0px;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuLink6 = styled.div`
@media (min-width: 1200px){
  grid-column: 13 / span 2;
  grid-row: 2/ span 1;
  padding: 0px;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuLink7 = styled.div`
@media (min-width: 1200px){
  grid-column: 15 / span 2;
  grid-row: 2/ span 1;
  padding: 0px;
  background-color: red;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuLink4 = styled.div`
@media (min-width: 1200px){
  grid-column: 9 / span 2;
  grid-row: 2/ span 1;
  padding: 0px;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuLink3 = styled.div`
@media (min-width: 1200px){
  grid-column: 7 / span 2;
  grid-row: 2/ span 1;
  padding: 0px;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuLink2 = styled.div`
@media (min-width: 1200px){
  grid-column: 5 / span 2;
  grid-row: 2/ span 1;
  padding: 0px;
}
@media(max-width:1199px){
  display: none;
}
`
const MenuLink1 = styled.div`
@media (min-width: 1200px){
  grid-column: 3 / span 2;
  grid-row: 2/ span 1;
  padding: 0px;
}
@media(max-width:1199px){
  display: none;
}
`
const StyledLink = styled(props => <Link {...props} />)`
text-decoration: none;
`;
const Kontakt = styled.h4 `
@media (min-width: 1200px){
padding-top: 0.5vw;
margin: 0px;
font-size: 1.3vw;
}
@media(max-width:1199px){
  display: none;
}
`
const Email = styled.h4 `
@media (min-width: 1200px){
padding-top: 1vw;
margin: 0px;
font-size: 1.3vw;
display: inline-block;
}
@media(max-width:1199px){
  display: none;
}
`
const EmailName = styled.h4 `
@media (min-width: 1200px){
font-size: 1.3vw;
margin: 0px;
color: blue;
display: inline-block;
}
@media(max-width:1199px){
  display: none;
}
`
const LogoNameLink = styled.div `
@media (min-width: 1200px){
  color: red;
  grid-column: 3 / span 14;
  grid-row: 1/ span 1;
  height: 100%;
  wigth: 100%;
}
`
const Content = styled.div `
@media (min-width: 1200px){
  min-height: 70vh;
  
  width: 100vw;
}
@media (max-width: 1199px){
  min-height: 70vh;
  
  width: 100vw;
  min-height: 80vh;
}
`
const Footer = styled.div`

box-sizing: border-box;
border-top: 1px solid grey;
height: §9vw;
display: grid;
  wight: 100vw;
  grid-template-columns: repeat(8, 12.5% );
  grid-template-rows: repeat(1, 9vw);


`
const Container = styled.div ``;
const ContaktOne = styled.div `

grid-column: 1 / span 2;
  grid-row: 1/ span 1;

  `
  
const ContaktTwo = styled.div `

grid-column: 7 / span 2;
  grid-row: 1/ span 1;

  
`;
const Autor = styled.div `

grid-column: 3 / span 4;
  grid-row: 1/ span 1;
  

  
`;
const AutorName = styled.h1`
@media (min-width: 1200px){
text-align: center;
margin-top: 5%;
font-size: 2vw;
}
@media (max-width: 1199px){

  font-size: 2.5vw;
  margin-top: 5%;
  }

`;
const ContaktOneName = styled.h3`
@media (min-width: 1200px){
margin-top: 2vw;
font-size: 1.1vw;
text-align: left;
margin-left: 1vw;
}
@media (max-width: 1199px){

  font-size: 2vw;
  
  }
`;

const ContaktTwoName = styled.h3`
@media (min-width: 1200px){
margin-top: 1vw;
font-size: 1.1vw;
text-align: right;
margin-right: 1vw;
}

@media (max-width: 1199px){

  font-size: 2vw;
  
  }

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
const Odstemp = styled.div`
@media(min-width: 1199px){
height: 45vw;
}
@media(min-width: 1250px){
  height: 35vw;
  }
  @media(min-width: 1300px){
    height: 25vw;
    }
  @media(min-width: 1350px){
    height: 20vw;
    }
    @media(min-width: 1400px){
      height: 17vw;
      }
    @media(min-width: 1450px){
      height: 5vw;
      }
    @media(min-width: 1500px){
      display: none

      }
`









const IndexPage = () => (
<Container>
  <Menu>
    <LogoDiv> <StyledLink to=""><Logo src={karateLogo}></Logo></StyledLink></LogoDiv>
    <LogoNameDiv><StyledLink to=""><LogoNameLink><Logoname>Karate Team Oborniki</Logoname></LogoNameLink></StyledLink></LogoNameDiv>
    <MenuLink1><StyledLink to="/kadra/"><Menu1><MenuName1>Kadra</MenuName1></Menu1></StyledLink></MenuLink1>
    <MenuLink2><StyledLink to="/treningi/"><Menu2><MenuName2>Treningi</MenuName2></Menu2></StyledLink></MenuLink2>
    <MenuLink3><StyledLink to="/sukcesy/"><Menu3><MenuName3>Sukcesy</MenuName3></Menu3></StyledLink></MenuLink3>
    <MenuLink4><StyledLink to="/kalendarz/"><Menu4><MenuName4>Kalendarz</MenuName4></Menu4></StyledLink></MenuLink4>
    <MenuLink5><StyledLink to="/przedszkola/"><Menu5><MenuName5>Karate w przedszkolach</MenuName5></Menu5></StyledLink></MenuLink5>
    <MenuLink6><StyledLink to="/obozy/"><Menu6><MenuName6>Obozy letnie i zimowe</MenuName6></Menu6></StyledLink></MenuLink6>
    <MenuLink7><StyledLink to="/kontakt/"><Menu7><MenuName7>Kontakt</MenuName7></Menu7></StyledLink></MenuLink7>
    <SocialMedia> 
    <a href="https://www.instagram.com/karateteamoborniki/?hl=pl" target="_blank" ><i className="demo-icon icon-instagram"></i></a>
    <a href="https://www.facebook.com/karateteamoborniki/" target="_blank" ><i className="demo-icon icon-facebook"></i></a>
    <a href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q/videos?view=0&sort=dd&shelf_id=0" target="_blank" ><i className=" icon-youtube-play"></i></a>
    </SocialMedia>
    <Contakt><Kontakt>tel.888 585 785</Kontakt><Email>Email:</Email><EmailName>wbi@poczta.fm</EmailName></Contakt>
    <HamburgerMenu><StyledLink to="/phonekontakt/">
      <HamburgerOne></HamburgerOne>
      <HamburgerTwo></HamburgerTwo>
      <HamburgerThree></HamburgerThree>
      </StyledLink></HamburgerMenu>
    
  </Menu>
  <Content>


  <Kontaktdane/>
  <h1>Przyjaciele Klubu</h1>

  <Przyjacieledane/>
  </Content>
  <Odstemp></Odstemp>
  <Footer>
    <ContaktOne><ContaktOneName>Karate Team Oborniki<br></br>Szkoła Podstawowa nr.3<br></br>ul. Czarnkowska 57<br></br>64-600 Oborniki<br></br></ContaktOneName></ContaktOne>
    <Autor><AutorName>Strona Autorstwa Jakuba Gryzińskiego</AutorName></Autor>
    <ContaktTwo><ContaktTwoName>Miejsce prowadzenia zajęć: <br></br>Hala gimnastyczna przy Szkole Podstawowej nr 3 ul. Czarnkowska 57, <br></br>Oborniki 64-600 oraz Sala Sportowa klubu „Justa a Fit” w Galerii Młyńska ul. Młyńska 5a, Oborniki 64-600</ContaktTwoName></ContaktTwo>
  </Footer>
  </Container>
 
  
)


export default IndexPage