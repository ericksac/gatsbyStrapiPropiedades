import { graphql, useStaticQuery } from "gatsby";

const useInicio = () => {
    const resultado = useStaticQuery(graphql`
    {
      allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
        nodes {
          id
          nombre
          contenido
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [WEBP]
                  transformOptions: {duotone: {highlight: "#222222", shadow: "#192550", opacity: 30}}
                )
              }
            }
          }
        }
      }
    }
    
    `);
    return resultado.allStrapiPaginas.nodes.map( inicio =>({
      nombre: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen.localFile   
    })
    );
}
 
export default useInicio;