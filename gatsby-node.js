const urlSlug = require('url-slug');

exports.createPages = async({actions, graphql, reporter }) =>{
    const resultado = await graphql(`
    query{
        allStrapiPaginas{
            nodes{
                nombre
                id
            }
        }
        allStrapiPropiedades{
            nodes{
                nombre
                id
            }
        }
    }
    `)

    //console.log(resultado.data.allStrapiPropiedades)

    //Si no hay resultados
    if(resultado.errors){
        reporter.panic('No hubo resultado', resultado.errors);
    }

    //Si hay resultados generar los archivos estáticos
    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;

      //Crear los template de paginas
      paginas.forEach(pagina => {
        actions.createPage({
            path: urlSlug(pagina.nombre),
            component: require.resolve('./src/components/paginas.js'),
            context:{
                id:pagina.id
            }
        })
    });

    //Crear los template de propiedades
    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedades.js'),
            context:{
                id:propiedad.id
            }
        })
    });

}