import { useStyleButtomWeatherMas } from "./ButtonMas.style";

const ButtomWeatherMas = () => {
    const classes = useStyleButtomWeatherMas();
    return (
        <div className="d-flex justify-content-between mb-2">
        <a href="#" className="badge bg-primary text-white p-2">
          Mostrar Mas
        </a>
        <a href="#" className="h6 fw-light mb-0">
          <i className="bi bi-heart-fill"></i>
        </a>
      </div>
    );
  };
  
  export default ButtomWeatherMas;
  