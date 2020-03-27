import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import styled from 'styled-components'

const Kalendarzdane = styled.div`
@media (min-width: 1200px){
width: 100vw;
min-height: 35vw;

}


`


const Miesiac = styled.div`
@media (min-width: 1200px){
    width: 44vw;
    float: left;
    box-sizing: border-box;
    border: 0.5vw solid grey;
    margin-right:2.5vw;
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    min-height: 50vh;
}
@media (max-width: 1199px){
    clear: both;
    box-sizing: border-box;
    border: 0.5vw solid grey;
    margin-right:2.5vw;
    margin-left: 2.5vw;
    
    width: 94vw;
    min-height: 50vh;
    margin-bottom: 2.5vw;
}
`
const Tytul = styled.h2`
@media (min-width: 1200px){
color: black;
text-align: center;
font-size: 2vw;
}
@media (max-width: 1199px){
    text-align: center;
}
`
const H3 = styled.h3`
@media (min-width: 1200px){
    font-size: 1vw;
}
`



 const Kalendarz = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          kalendarzs {
            tytul
            wydarzenie
            wydarzeniedwa
            wydarzenietrzy
            wydarzeniecztery
            wydarzeniepiec
            wydarzenieszesc
            wydarzeniesiedem
            wydarzenieosiem
            tytuldwa
            wydarzeniedziewiec
            wydarzeniedziesiec
            wydarzeniejedenascie
            wydarzeniedwanascie
            wydarzenietrzynascie
            wydarzenieczternascie
            wydarzeniepietnascie
            wydarzenieszesnascie
          }
        }
        
      }
    `}
      
      render={({post: {kalendarzs}}) => (
      <div className="post">  
          { kalendarzs.map(kalendarz => (
              <div key={kalendarz.id}>
                  <Kalendarzdane>
                 <Miesiac>
                    <Tytul>{kalendarz.tytul}</Tytul>
                    <H3>{kalendarz.wydarzenie}</H3>
                     <H3>{kalendarz.wydarzeniedwa}</H3>
                     <H3>{kalendarz.wydarzenietrzy}</H3>
                     <H3>{kalendarz.wydarzeniecztery}</H3>
                     <H3>{kalendarz.wydarzeniepiec}</H3>
                     <H3>{kalendarz.wydarzenieszesc}</H3>
                     <H3>{kalendarz.wydarzeniesiedem}</H3>
                     <H3>{kalendarz.wydarzenieosiem}</H3>
                     
                 </Miesiac>
                 <Miesiac>
                     <Tytul>{kalendarz.tytuldwa}</Tytul>
                     <H3>{kalendarz.wydarzeniedziewiec}</H3>
                     <H3>{kalendarz.wydarzeniedziesiec}</H3>
                     <H3>{kalendarz.wydarzeniejedenascie}</H3>
                     <H3>{kalendarz.wydarzeniedwanascie}</H3>
                     <H3>{kalendarz.wydarzenietrzynascie}</H3>
                     <H3>{kalendarz.wydarzenieczternascie}</H3>
                     <H3>{kalendarz.wydarzeniepietnascie}</H3>
                     <H3>{kalendarz.wydarzenieszesnascie}</H3>
                     </Miesiac>
                 </Kalendarzdane>
                 
        </div>
         
       
         
         
          ) ) }
      </div>
      
      
      )}
      />
      
 )

 export default Kalendarz;


