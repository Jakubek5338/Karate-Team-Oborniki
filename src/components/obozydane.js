import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import styled from 'styled-components'


const Nowoscidane = styled.div`

`

const Image = styled.div`
@media (min-width: 1200px){
margin-left: 10vw;
margin-right: 10vw;
}
`

const H1 = styled.h1`
padding: 1vw;
`
const H2 = styled.h2`
text-align: center;
margin-left: 5vw;
margin-right: 5vw;
width: 90vw;
`

const IMG = styled.img`
@media (min-width: 1200px){
width: 80vw;
}
width: 100vw;

`
const Nowosc = styled.div`

`



 const Obozy = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          obozies {
            tytul
            tresc
            thumbnail
            

          }
        }

      }
    `}

      render={({post: {obozies}}) => (
      <div className="post">
          { obozies.map(obozie => (
              <div key={obozie.id}>

                <Nowoscidane>
                    <Nowosc>
          <H1>{obozie.tytul}</H1>
          <H2>{obozie.tresc}</H2>
                    </Nowosc>
                    <Image><IMG src={obozie.thumbnail}></IMG></Image>

                </Nowoscidane>



        </div>




          ) ) }
      </div>


      )}
      />

 )

 export default Obozy;
