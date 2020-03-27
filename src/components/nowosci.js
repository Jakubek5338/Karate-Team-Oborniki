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
    font-size: 2vw;
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


 const Nowosci = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          nowoscis {
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

      render={({post: {nowoscis}}) => (
      <div className="post">
          { nowoscis.map(nowosci => (
              <div key={nowosci.id}>

                <Nowoscidane>
                    <Nowosc>
          <H1>{nowosci.tytul}</H1>
          <H2>{nowosci.tresc}</H2>
                    </Nowosc>
                    <Image><IMG src={nowosci.thumbnail}></IMG></Image>
                </Nowoscidane>
                <Nowoscidane>
                <Imagedwa><IMG src={nowosci.thumbnaildwa}></IMG></Imagedwa>
                    <Nowosc>
          <H1>{nowosci.tytuldwa}</H1>
          <H2>{nowosci.trescdwa}</H2>
                    </Nowosc>

                </Nowoscidane>


        </div>




          ) ) }
      </div>


      )}
      />

 )

 export default Nowosci;
