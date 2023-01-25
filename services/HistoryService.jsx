import { http } from "../data/fetch";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const url_weather_public = process.env.NEXT_PUBLIC_URL_PORTAL_WEATHER_NEWS;
const url_weather = process.env.URL_PORTAL_WEATHER_NEWS;
const fecha = new Date();
export const HistoryService = {
  postCreateHistoryUser: async (data) => {    
    const dataSend = {
        "historyId": 0,
        "usuarioIdFk": data?.id.toString(),
        "city": data?.city,
        "info": data?.info,
        "fechaVista": fecha.toISOString(),
      };
    try {
      return await http
        .post(`${url_weather_public}/api/History`, JSON.stringify(dataSend))
        .then((res) => {
            // console.log("que tiene", res);
          return {
            mensaje_ok: res,
            response: ""
          };
        })
        .catch((ex) => {
          // console.log(ex);
          return {
            mensaje_ok: "error catch",
            // response: ex,
          };
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postCreateUser");
    }
  },

  getUserHistoryByIdPublic: async (Id) => {
    try {
      return await http
        .get(`${url_weather_public}/api/History/${Id}`)
        .then((res) => {
          // console.log("que tiene", res);
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
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

  getUserHistoryById: async (Id) => {
    try {
      return await http
        .get(`${url_weather}/api/History/${Id}`)
        .then((res) => {
          // console.log("que tiene", res);
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
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
