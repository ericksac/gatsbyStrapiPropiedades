import React from 'react'
import styled from '@emotion/styled';
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from './layout';
import { graphql } from 'gatsby';
import ListadoPropiedades from './listadoPropiedades';

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`


export const query = graphql`
query($id: String!){
	allStrapiPaginas(filter:{id:{eq:$id}}){
		nodes{
			nombre
      contenido
      imagen{
				localFile{
					childImageSharp{
						gatsbyImageData(
                            height: 400
                            width: 600
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
}
`;
const Propiedades = ({ data: { allStrapiPaginas: { nodes } } }) => {
    const{nombre, contenido, imagen} = nodes[0];
    
    return (
        <Layout>
            <main className="contenedor">
                <h1>{nombre}</h1>
                <Contenido>
                <GatsbyImage
                        image={imagen.localFile.childImageSharp.gatsbyImageData}
                        alt={nombre}
                    />
                    <p>{contenido}</p>
                </Contenido>
            </main>
            {nombre=== "Propiedades" &&(
                <ListadoPropiedades/>
            )}

        </Layout>
    );
}

export default Propiedades;