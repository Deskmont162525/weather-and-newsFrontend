import { mainDate } from "../helpers/validations/funcionesWather";
import { NewsWatherService } from "../services/NewsWatherService";
import { WatherService } from "../services/WeatherService";
import { HistoryService } from "../services/HistoryService";
import { ADD_DATA_HISTORY, ADD_NEWSPAPERS, ADD_WEATHER } from "../type";

export const consultaMultiple = async (
  CityName,
  {
    dispatchClima,
    isOpen,
    setBannerShow,
    dispatchNoticias,
    setLoading,
    dispatchHistory,
    ui,
  }
) => {
  
  const responseClima = await WatherService.getClimaByCity(CityName);
  if (responseClima.cod === 200) {
    const tempDataSend = {
    id: ui?.usuarioId,
    city: responseClima?.name,
    info: responseClima?.weather[0]?.description,
    }
    const responseNoticias = await NewsWatherService.getNoticiasByContry(
      responseClima?.name
    );
    const responseDataBase = await HistoryService.postCreateHistoryUser(
      tempDataSend
    );
    const responseDataBaseUpda = await HistoryService.getUserHistoryByIdPublic(
      ui?.usuarioId,
    );
    // console.log("responseDataBaseUpda", responseDataBaseUpda); 
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
    dispatchNoticias({
      type: ADD_NEWSPAPERS,
      payload: responseNoticias?.articles,
    });
    dispatchHistory({
      type: ADD_DATA_HISTORY,
      payload: responseDataBaseUpda?.response,
    });
    setBannerShow(true);
    setLoading(false);
  } else {
    setLoading(false);
    isOpen();
  }
};
