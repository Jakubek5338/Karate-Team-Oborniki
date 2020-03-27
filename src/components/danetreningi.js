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
    margin-bottom: 15vw;
}
`
const H3 = styled.h3`
text-align: center;
@media (min-width: 1200px){
    font-size: 1.5vw;
}
font-size: 5vw;

`



 const Treningi = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          treningis {
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
      
      render={({post: {treningis}}) => (
      <div className="post">  
          { treningis.map(treningi => (
              <div key={treningi.id}>
                  <Kalendarzdane>
                 <Miesiac>
                    <Tytul>{treningi.tytul}</Tytul>
                    <H3>{treningi.wydarzenie}</H3>
                     <H3>{treningi.wydarzeniedwa}</H3>
                     <H3>{treningi.wydarzenietrzy}</H3>
                     <H3>{treningi.wydarzeniecztery}</H3>
                     <H3>{treningi.wydarzeniepiec}</H3>
                     <H3>{treningi.wydarzenieszesc}</H3>
                     <H3>{treningi.wydarzeniesiedem}</H3>
                     <H3>{treningi.wydarzenieosiem}</H3>
                     
                 </Miesiac>
                 <Miesiac>
                     <Tytul>{treningi.tytuldwa}</Tytul>
                     <H3>{treningi.wydarzeniedziewiec}</H3>
                     <H3>{treningi.wydarzeniedziesiec}</H3>
                     <H3>{treningi.wydarzeniejedenascie}</H3>
                     <H3>{treningi.wydarzeniedwanascie}</H3>
                     <H3>{treningi.wydarzenietrzynascie}</H3>
                     <H3>{treningi.wydarzenieczternascie}</H3>
                     <H3>{treningi.wydarzeniepietnascie}</H3>
                     <H3>{treningi.wydarzenieszesnascie}</H3>
                     </Miesiac>
                 </Kalendarzdane>
                 
        </div>
         
       
         
         
          ) ) }
      </div>
      
      
      )}
      />
      
 )

 export default Treningi;


