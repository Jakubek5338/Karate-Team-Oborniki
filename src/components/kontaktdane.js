import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import styled from 'styled-components'


const Nowoscidane = styled.div`

`



const H1 = styled.h1`
padding: 1vw;
`
const H2 = styled.h2`
text-align: center;
`


const Nowosc = styled.div`

`



 const Kontaktdane = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          kontakts {
            tytul
            tresc
            
           
          }
        }
        
      }
    `}
      
      render={({post: {kontakts}}) => (
      <div className="post">  
          { kontakts.map(kontakt => (
              <div key={kontakt.id}>

                <Nowoscidane>
                    <Nowosc>
          <H1>{kontakt.tytul}</H1>
          <H2>{kontakt.tresc}</H2>
                    </Nowosc>
                    
          
                </Nowoscidane>
                

                 
        </div>
         
       
         
         
          ) ) }
      </div>
      
      
      )}
      />
      
 )

 export default Kontaktdane;


