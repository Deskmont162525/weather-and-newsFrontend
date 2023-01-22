import React from "react";
import {
  ContainerGeneral,
} from "../components/containers/Containers";
import { ObjetosData } from "../data/objetos";
import Loggin from "./login";

const HomeView = () => {
 const objets = ObjetosData()

  return (
    <ContainerGeneral>
        <Loggin />
    </ContainerGeneral>
  );
};

export default HomeView
