import React from "react";
import { climaContext } from "../../../context/climaContext";
import { useStyleCardWeather } from "./cardWeather.style";

const CardWeather = () => {
  const classes = useStyleCardWeather();
  const { clima } = React.useContext(climaContext);
  return (
    <div className="app-wrap">      
      <main>
        <section className="location">
          <div className="city">{clima?.cityClima +",   "+ clima?.siglas}</div>
          <div className="date">{clima?.fecha}</div>
        </section>
        <div className="current">
          <div className="temp">
            {clima?.grados}<span>°c</span>
          </div>
          <div className="weather">{clima?.tiempo}</div>
          <div className="hi-low">{clima?.descripcionTiempo}</div>
          <div className="hi-low">{clima?.gradoMin}°c / {clima?.gradoMax}°c</div>
        </div>
      </main>
    </div>
  );
};

export default CardWeather;
