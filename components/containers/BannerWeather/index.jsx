import React from "react";
import nookies from "nookies";
import { useStyleBannerWeather } from "./BannerWeather.style";
import { locate } from "../../../helpers/validations/funcionesWather";
import { consultaMultiple } from "../../../actions/climaActions";
import { climaContext } from "../../../context/climaContext";
import { ModalLazziLoading, ModalResponseSearch } from "../../ui/Modals";
import { noticiasContext } from "../../../context/noticiasContext";
import { uiContext } from "../../../context/uiContext";
import { historyContext } from "../../../context/historyContext";

const BannerWeather = ({ setBannerShow }) => {
  const classes = useStyleBannerWeather();
  const { dispatchClima } = React.useContext(climaContext);
  const { dispatchNoticias } = React.useContext(noticiasContext);
  const { dispatchHistory } = React.useContext(historyContext);
  const { ui } = React.useContext(uiContext);
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const isOpen = () => setOpen(!open);
  const [textPlace, setTextPlace] = React.useState(
    "Ingresa la Ciudad a Consultar..."
  );
  // React.useEffect(() => {
  //   locate();
  // }, []);

  const onChangeButtom = () => {
    if (search !== "") {
      setLoading(true);
      consultaMultiple(search, {
        dispatchClima,
        isOpen,
        setBannerShow,
        dispatchNoticias,
        setLoading,
        dispatchHistory,
        ui,
      });
    } else {
      setError(true);
      setTextPlace("Campo Obligatorio");
    }
  };
  const onchangeInput = (e) => {
    setError(false)
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
              <span>CONSULTAR</span>
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
              <br />
              <input
                type="button"
                autoComplete="off"
                className={error ? classes.error : classes.buttomBack}
                value="CONSULTAR"
                onClick={onChangeButtom}
              />
            </header>
          </div>
        </div>
      </div>
      <ModalResponseSearch
        isOpen={open}
        handleClose={isOpen}
        searchWord={search}
      />
      <ModalLazziLoading isOpen={loading} />
    </div>
  );
};

export default BannerWeather;
