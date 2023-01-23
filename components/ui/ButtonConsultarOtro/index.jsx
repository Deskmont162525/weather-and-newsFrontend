import { useStyleButtomWeatherConsultarO } from "./ButtonConsultarOtro.style";

const ButtomWeatherConsultarO = () => {
    const classes = useStyleButtomWeatherConsultarO();
    return (
        <div className="d-flex justify-content-between mb-2">
        <a href="#" className="badge bg-primary text-white p-2">
          Consultar Otra
        </a>
        <a href="#" className="h6 fw-light mb-0">
          <i className="bi bi-heart-fill"></i>
        </a>
      </div>
    );
  };
  
  export default ButtomWeatherConsultarO;
  