import nookies from "nookies";
import BannerWeather from "../../components/containers/BannerWeather";
import BodyNewsWeather from "../../components/containers/bodyNewsWather";
import AccordionsBenefict from "../../components/containers/AccordionsWeather";
import { ContainerGeneral } from "../../components/containers/ContainerGeneral";
import { requireAuthentication } from "../../HOC/authHOC";
import { HistoryService } from "../../services/HistoryService";
import React from "react";
import ButtomWeatherConsultarO from "../../components/ui/ButtonConsultarOtro";
import { historyContext } from "../../context/historyContext";
import { ADD_DATA_HISTORY } from "../../type";

const InicioWeatherView = ({dataUser, dataBd}) => {
  const [bannerShow, setBannerShow] = React.useState(false)
  const { dispatchHistory } = React.useContext(historyContext);

  React.useEffect(() => {
    if(dispatchHistory){
      dispatchHistory({
        type: ADD_DATA_HISTORY,
        payload: dataBd,
      })
    }
  }, []);
  const showDataR = () => {
    if (dataBd) {
      if (dataBd?.mensaje_ok !== "error catch") {
        return <AccordionsBenefict  />;
      } else {
        return "";
      }
    }
  };
  return (
    <ContainerGeneral>
      {!bannerShow &&(
        <BannerWeather setBannerShow={setBannerShow}/>
      )}
      {bannerShow &&(
        <>
        <ButtomWeatherConsultarO onchange={setBannerShow}/>
        <BodyNewsWeather />
        </>
      )}
      
      {showDataR()}
    </ContainerGeneral>
  );
};

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const dataUser = cookies.userWeatherNews
    ? JSON.parse(cookies?.userWeatherNews)
    : "";

  const [dataBd] = await Promise.all([
    HistoryService.getUserHistoryById(dataUser?.usuarioId),
  ]);

  return {
    props: {
      dataUser,
      dataBd,
    },
  };
}

export default requireAuthentication(InicioWeatherView);
