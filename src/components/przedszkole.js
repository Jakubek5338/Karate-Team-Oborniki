import React from 'react';
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import './przedszkola.css';



 const Przedszkola = () => (
    <StaticQuery
    query={graphql`
    query{
        post{
          przedszkolas {
            tytul
            tresc
          }
        }
        
      }
    `}
      
      render={({post: {przedszkolas}}) => (
      <div className="post">  
          { przedszkolas.map(przedszkola => (
              <div key={przedszkola.id}>
                 <div className="przedszkola">
                <div className="tytul"><h1>{przedszkola.tytul}</h1></div>
          <div><h3 className="tresc">{przedszkola.tresc}</h3></div>
                 </div>
        </div>
         
       
         
         
          ) ) }
      </div>
      
      
      )}
      />
      
 )

 export default Przedszkola;


