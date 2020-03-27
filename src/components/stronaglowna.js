import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import styled from 'styled-components'


const Nowoscidane = styled.div`
@media (min-width: 1200px){
 height: 65vh;
}
@media (min-width: 1250px){
    height: 70vh;
}
@media (min-width: 1300px){
    height: 70vh;
}
@media (min-width: 1350px){
    height: 80vh;
}
@media (min-width: 1500px){
    height: 85vh;
}
@media (min-width: 1600px){
    height: 85vh;
}
`
const Image = styled.div`

`
const Imagedwa = styled.div`
float: left;
`
const H1 = styled.h1`
padding: 1vw;
`
const H2 = styled.h2`
    font-size: 2.5vw;
    padding: 1vw;
    text-align: center;
`

const IMG = styled.img`
@media (min-width: 1200px){
max-width: 50vw;
max-height: 70vh;
}
width: 100vw;


`
const Nowosc = styled.div`
@media (min-width: 1200px){
    float: left;
    width: 50vw;
}
width: 100vw;
`


 const Stronaglowna = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          stronaglownas {
            tytul
            tresc
            thumbnail
            tytuldwa
            trescdwa
            thumbnaildwa

          }
        }

      }
    `}

      render={({post: {stronaglownas}}) => (
      <div className="post">
          { stronaglownas.map(stronaglowna => (
              <div key={stronaglowna.id}>

                <Nowoscidane>
                    <Nowosc>
          <H1>{stronaglowna.tytul}</H1>
          <H2>{stronaglowna.tresc}</H2>
                    </Nowosc>
                    <Image><IMG src={stronaglowna.thumbnail}></IMG></Image>
                </Nowoscidane>
                <Nowoscidane>
                <Imagedwa><IMG src={stronaglowna.thumbnaildwa}></IMG></Imagedwa>
                    <Nowosc>
          <H1>{stronaglowna.tytuldwa}</H1>
          <H2>{stronaglowna.trescdwa}</H2>
                    </Nowosc>

                </Nowoscidane>


        </div>




          ) ) }
      </div>


      )}
      />

 )

 export default Stronaglowna;
