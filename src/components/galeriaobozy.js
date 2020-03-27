import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import styled from 'styled-components'


const Galeriadane = styled.div`
margin-top: 2vw;
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
float: left;
`
const Imagedwa = styled.div`

`
const IMG = styled.img`
@media (min-width: 1200px){
max-width: 50vw;
max-height: 70vh;
}
width: 100vw;
`
const H1 = styled.h1`

`


 const Galeriaoboz = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          galeriaobozs {
            thumbnail
            thumbnaildwa
            thumbnailtrzy
            thumbnailcztery


          }
        }

      }
    `}

      render={({post: {galeriaobozs}}) => (
      <div className="post">
          { galeriaobozs.map(galeriaoboz => (
              <div key={galeriaoboz.id}>

                <Galeriadane>

                    <Image><IMG src={galeriaoboz.thumbnail}></IMG></Image>
                    <Imagedwa><IMG src={galeriaoboz.thumbnaildwa}></IMG></Imagedwa>
                </Galeriadane>
                <Galeriadane>

                    <Image><IMG src={galeriaoboz.thumbnailtrzy}></IMG></Image>
                    <Imagedwa><IMG src={galeriaoboz.thumbnailcztery}></IMG></Imagedwa>
                </Galeriadane>


        </div>




          ) ) }
      </div>


      )}
      />

 )

 export default Galeriaoboz;
