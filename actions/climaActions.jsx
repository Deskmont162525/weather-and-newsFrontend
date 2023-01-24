import { setCookie, destroyCookie } from "nookies";
import { mainDate } from "../helpers/validations/funcionesWather";
import { WatherService } from "../services/WeatherService";
import { ADD_WEATHER } from "../type";

export const consultaMultiple = async (CityName, { clima, dispatchClima, isOpen, setBannerShow }) => {
  const responseClima = await WatherService.getClimaByCity(CityName);
  console.log("responseClima",responseClima);
  if (responseClima.cod === 200) {
    let dataTemp = {
      cityClima: responseClima?.name,
      siglas: responseClima?.sys?.country,
      fecha: mainDate(),
      grados: Math.ceil(responseClima?.main?.temp - 273.15),
      tiempo: responseClima?.weather[0]?.main,
      descripcionTiempo: responseClima?.weather[0]?.description,
      gradoMax: Math.ceil(responseClima?.main?.temp_max - 273.15),
      gradoMin: Math.floor(responseClima?.main?.temp_min - 273.15),
    };
    dispatchClima({
      type: ADD_WEATHER,
      payload: dataTemp,
    });
    setBannerShow(true);
  } else {
    isOpen()
  }
  
};

