import { useStyleButtomWeatherConsultarO } from "./ButtonConsultarOtro.style";

const ButtomWeatherConsultarO = ({onchange}) => {
    const classes = useStyleButtomWeatherConsultarO();
    const onchangeButtom = () => {
      onchange(false)
    }
    return (
        <div className="d-flex justify-content-between mb-2">
        <button className="badge bg-primary text-white p-2" onClick={onchangeButtom}>
          Consultar Otra
        </button>
      </div>
    );
  };
  
  export default ButtomWeatherConsultarO;
  