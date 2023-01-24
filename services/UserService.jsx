import { http } from "../data/fetch";
import { cadenaAleatoria } from "../helpers/validations/funcionesWather";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const url_weather = process.env.URL_PORTAL_WEATHER_NEWS;
const fecha = new Date();
export const UserService = {
  postCreateUser: async () => {
    const code = cadenaAleatoria(5);
    const dataSend = {
      usuarioId: 0,
      nombres: `Invitado${code}`,
      fechaRegistro: fecha.toISOString(),
      estado: "",
    };
    try {
      return await http
        .post(`${url_weather}/api/Usuario`, JSON.stringify(dataSend))
        .then((res) => {
          //   console.log("que tiene", res);
          return {
            mensaje_ok: res,
            response: dataSend
          };
        })
        .catch((ex) => {
          console.log(ex);
          return {
            mensaje_ok: "error catch",
            // response: ex,
          };
        });
    } catch (err) {
      console.log(err);
      throw Error("Error al obtener postCreateUser");
    }
  },

  getUserByNameOById: async (nameId) => {
    try {
      return await http
        .get(`${url_weather}/api/Usuario/${nameId}`)
        .then((res) => {
          console.log("que tiene", res);
          return res;
        })
        .catch((ex) => {
          console.log(ex);
          return {
            mensaje_ok: "error catch",
            // response: ex,
          };
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getUserByNameOById");
    }
  },
  
};
