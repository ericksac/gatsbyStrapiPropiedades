import { graphql, useStaticQuery } from 'gatsby';


const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    {
        allStrapiPropiedades {
          nodes {
            nombre
            descripcion
            id
            wc
            precio
            estacionamiento
            habitaciones
            categoria{
							id
              nombre
            }
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
      
    `);
    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        id: propiedad.id,
        wc: propiedad.wc,
        estacionamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        agentes: propiedad.agentes,
        precio: propiedad.precio,
        categoria: propiedad.categoria
    }));

};

export default usePropiedades;




