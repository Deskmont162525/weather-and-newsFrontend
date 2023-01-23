import React from "react";
import nookies from "nookies";
import { ContainerGeneral } from "../components/containers/ContainerGeneral";
import BannerWeather from "../components/containers/BannerWeather";
import { WatherService } from "../services/WeatherService";
import BodyNewsWeather from "../components/containers/bodyNewsWather";

const HomeView = () => {

  return (
    <ContainerGeneral>
      <BannerWeather />
      <BodyNewsWeather />
    </ContainerGeneral>
  );
};

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const clienteWeather = ""
  const [dataBd] = await Promise.all([
    WatherService.getSignIn(clienteWeather),
  ]);

  return {
    props: {
    },
  };
}
export default HomeView
