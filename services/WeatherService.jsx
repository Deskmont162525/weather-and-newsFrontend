const apiKeyC = process.env.NEXT_PUBLIC_APY_KEY_CLIMA
const publicUrl_weather = process.env.NEXT_PUBLIC_CLIMA
export const WatherService = {
    getClimaByCity: async (CityName) => {
        try {
          return await fetch(`${publicUrl_weather}/weather?appid=${apiKeyC}&lang=es&q=${CityName}`)
          .then(res => res.json())
          .then((response) =>{
                return response
            }).catch(error =>{
                console.log(error);
                return {
                  cod: 400,
                  data: error
                }
            });
        } catch (err) {
          // console.log(err);
          throw Error("Error al obtener getClimaByCity");
        }
      },
}
