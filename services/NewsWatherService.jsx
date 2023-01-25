const apiKeyC = process.env.NEXT_PUBLIC_APY_KEY_NOTICIAS
const publicUrl_weather = process.env.NEXT_PUBLIC_NOTICIAS
export const NewsWatherService = {
    
    getNoticiasByContry: async (CityName) => {
        try {
          return await fetch(`${publicUrl_weather}/everything?q=${CityName}&language=es&sortBy=publishedAt&apiKey=${apiKeyC}`)
          .then(res => res.json())
          .then((response) =>{
            // console.log(response);
                return response
            }).catch(error =>{
                // console.log(error);
                return {
                  cod: 400,
                  data: error
                }
            });
        } catch (err) {
          // console.log(err);
          throw Error("Error al obtener getNoticiasByContry");
        }
      },
}

