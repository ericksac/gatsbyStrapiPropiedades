import React from 'react';
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from "gbimage-bridge";
import { getImage  } from "gatsby-plugin-image";
import * as heroCss from '../css/hero.module.css';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';

const Index = () => {
    const inicio = useInicio();

    const{nombre, contenido, imagen} = inicio[0];
    const image = getImage( imagen )
    const bgImage = convertToBgImage(image)
    const ImagenBackground = styled(BackgroundImage)`
      height: 600px;
    `;

    return (
       <Layout>
         <ImagenBackground
            Tag="section"
            {...bgImage}
            preserveStackingContext
            fadeIn= "soft"
         >
          <div
            className={ heroCss.imagenbg }
          >
          <h1
            className={ heroCss.titulo }
          >Venta de casas y departamentos exclusivos</h1>
        
          </div>
           
         </ImagenBackground>
         <main>
          <div css={css`
              max-width: 800px;
              margin:0 auto;
          `}
          >
            <h1>{nombre}</h1>
            <p
              css={css`
                text-align: center;
              `}
            >{contenido}</p>
          </div>
         </main>
         <Encuentra/>
         <ListadoPropiedades/>
       </Layout>
      )

;
}
 
export default Index ;