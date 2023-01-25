import nookies from "nookies";
import BannerWeather from "../../components/containers/BannerWeather";
import BodyNewsWeather from "../../components/containers/bodyNewsWather";
import AccordionsBenefict from "../../components/containers/AccordionsWeather";
import { ContainerGeneral } from "../../components/containers/ContainerGeneral";
import { requireAuthentication } from "../../HOC/authHOC";
import { HistoryService } from "../../services/HistoryService";
import React from "react";
import { historyContext } from "../../context/historyContext";
import { ADD_DATA_HISTORY, ADD_USERS_DATA } from "../../type";
import { uiContext } from "../../context/uiContext";

const InicioWeatherView = ({ dataUser, dataBd }) => {
  const [bannerShow, setBannerShow] = React.useState(false);
  const { dispatchHistory } = React.useContext(historyContext);
  const { dispatchUi } = React.useContext(uiContext);

  React.useEffect(() => {
    if (dispatchHistory) {
      dispatchHistory({
        type: ADD_DATA_HISTORY,
        payload: dataBd?.response,
      });      
    }
    if(dataUser){
      dispatchUi({
        type: ADD_USERS_DATA,
        payload: dataUser,
      }); 
    }
  }, []);
  const showDataR = () => {
    if (dataBd) {
      if (dataBd?.mensaje_ok !== "error catch") {
        return <AccordionsBenefict />;
      } else {
        return "";
      }
    }
  };
  return (
    <ContainerGeneral>
      {!bannerShow && <BannerWeather setBannerShow={setBannerShow} />}
      {bannerShow && <BodyNewsWeather setBannerShow={setBannerShow} />}
      <br/>
      <br/>
      <br/>
      <br/>
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
