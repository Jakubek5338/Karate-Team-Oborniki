import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import styled from 'styled-components'
import karateLogo from '../images/mts.jpg'
import karateLogodwa from '../images/gmina.jpg'
import ocs from '../images/ocs.jpg'



const Przyjaciele = styled.div`
@media (min-width: 1200px){
display: grid;
  wight: 100vw;
grid-template-columns: repeat(3,  1fr);
  grid-template-rows: repeat(1, 35vw);
}`
const PrzyjacielJeden = styled.div`
@media (min-width: 1200px){

grid-column: 1 / span 1;
  grid-row: 1/ span 1;
  
}
@media(max-width:1199px){
    height: 130vw;
    width: 100vw;
   
}
`
const PrzyjacielDwa = styled.div`
@media (min-width: 1200px){

grid-column: 2 / span 1;
  grid-row: 1/ span 1;
}
@media(max-width:1199px){
    height: 130vw;
    width: 100vw;
    
}
`
const PryjacielTrzy = styled.div`
@media (min-width: 1200px){

grid-column: 3 / span 1;
  grid-row: 1/ span 1;
}
@media(max-width:1199px){
    height: 130vw;
    width: 100vw;
    
}

`
const H2 = styled.h2`
@media (min-width: 1200px){
    
    text-align: center;

}
@media(max-width:1199px){

  
text-align: center;
}
`
const IMG = styled.img`
margin-left: auto;
    margin-right: auto;
    display: block;
    width: 25vw;
    @media(max-width:1199px){

      width: 80vw;
    }

`
const A = styled.a`
color: black;
text-decoration: none;`

 const Przyjaciel = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
            przyjacieles{
                tytul
                tytuldwa
                tytultrzy
                thumbnail
                thumbnaildwa
                thumbnailtrzy
              }
        }
        
      }
    `}
      
      render={({post: {przyjacieles}}) => (
      <div className="post">  
          { przyjacieles.map(przyjaciele => (
              <div key={przyjaciele.id}>

             <Przyjaciele>
          <PrzyjacielJeden><A href="https://www.oborniki.pl/" target="_blank"><PrzyjacielJeden>
          <H2>Gmina Oborniki</H2>
          <IMG src={karateLogodwa}></IMG></PrzyjacielJeden></A></PrzyjacielJeden>
            
                <PrzyjacielDwa><A href=""> <PrzyjacielDwa>
                <H2>MTS Januszak</H2>
                <IMG src={karateLogo}></IMG>
                </PrzyjacielDwa></A>  </PrzyjacielDwa>
                <PryjacielTrzy><A href="http://www.ocs.oborniki.pl/" target="_blank"> <PryjacielTrzy>
                <H2>Obornicke Centrum Sportu</H2>
                <IMG src={ocs}></IMG>
                  </PryjacielTrzy></A></PryjacielTrzy>
             </Przyjaciele>
                

                 
        </div>
         
       
         
         
          ) ) }
      </div>
      
      
      )}
      />
      
 )

 export default Przyjaciel;

