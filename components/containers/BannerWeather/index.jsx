import React, { useEffect, useState } from "react";
import { useStyleBannerWeather } from "./BannerWeather.style";
import { locate } from "../../../helpers/validations/funcionesWather";
import { consultaMultiple } from "../../../actions/climaActions";
import { climaContext } from "../../../context/climaContext";
import ButtonPrimary from "../../ui/ButtonPrimary";
import { ModalResponseSearch } from "../../ui/Modals";
const BannerWeather = ({ setBannerShow }) => {
  const { clima, dispatchClima } = React.useContext(climaContext);
  const classes = useStyleBannerWeather();
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const isOpen = () => setOpen(!open)
  const [textPlace, setTextPlace] = React.useState("Ingresa la Ciudad a Consultar...");

  React.useEffect(() => {
    locate();
  }, []);

  const onChangeButtom = () => {
    if(search !== ""){
      consultaMultiple(search, {
        clima, dispatchClima, isOpen, setBannerShow
      })      
    } else {
      setError(true)
      setTextPlace("Campo Obligatorio")
    }
    
    
  };
  const onchangeInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className="container2">
        <div className="clouds">
          <div className="clouds-1"></div>
          <div className="clouds-2"></div>
          <div className="clouds-3"></div>
        </div>
      </div>
      <div className="container4">
        <div className="mid">
          <div className="corner_text">
            <p>N</p>
            <p>W</p>
            <p>E</p>
            <p>S</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
          </div>
        </div>
        <div className="data">
          <div className="cel">
            <h1>Bienvenid@</h1>
            <p className="date">
              Consulta las noticias y el estado del clima de la ciudad que te
              interese.
            </p>
            <p>
              Ingresa tu ciudad en el campo de texto y da clic en el botón{" "}
              <span>BUSCAR</span>
            </p>
          </div>
          <div className="max_min">
            <div className="max">
              <p>
                Max <span>19°</span>{" "}
              </p>
              <hr />
              <p>
                Humidity <span>60%</span>
              </p>
            </div>
            <div className="cloud">
              <picture>
                <img
                  src={`/${process.env.NEXT_PUBLIC_BASE_PATH}/periodico.png`}
                  className={classes.bannerImage}
                  alt="favicon icon"
                />
              </picture>
            </div>
            <div className="min">
              <p>
                Min <span>9°</span>{" "}
              </p>
              <hr />
              <p>
                Pressur <span>743mm</span>
              </p>
            </div>
          </div>

          <div className="bottom">
            <header>
              <input
                type="text"
                autoComplete="off"
                className={error ? classes.error : ""}
                placeholder={textPlace}
                onChange={onchangeInput}
              />
            </header>
            <ButtonPrimary text="BUSCAR" onChangeButtom={onChangeButtom} />
          </div>
        </div>
      </div>
      <ModalResponseSearch isOpen={open} handleClose={isOpen} searchWord={search}/>
    </div>
  );
};

export default BannerWeather;
