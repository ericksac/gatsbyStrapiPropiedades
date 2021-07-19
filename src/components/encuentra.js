import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import * as heroCss from '../css/hero.module.css'
import styled from '@emotion/styled';

const ImagenBackground = styled(BackgroundImage)`
    height: 300px;
`;

const Encuentra = () => {

    const {imagen} = useStaticQuery(graphql`
    query{
        imagen: file(relativePath:{eq:"encuentra.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1500){
                    ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `)
    return ( 
        <ImagenBackground
        Tag="section"
        fluid={imagen.childImageSharp.fluid}
        fadeIn= "soft"
     >
      <div className={heroCss.imagenbg}>
        <h3 className={heroCss.titulo}>Encuentra la cas de tus sueños </h3>
        <p>15 años de experiencia</p>
      </div>
       
     </ImagenBackground>
     );
}
 
export default Encuentra;