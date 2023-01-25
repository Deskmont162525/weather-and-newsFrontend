import { useStyleButtomWeatherMas } from "./ButtonMas.style";

const ButtomWeatherMas = ({onChangeButom, text}) => {
    const classes = useStyleButtomWeatherMas();
    return (
      <div className="bottom">
      <header>
        <input type="button" autoComplete="off"
        className={classes.buttomBack}
        value={text}
        onClick={onChangeButom}
        />
      </header>
    </div>
    );
  };
  
  export default ButtomWeatherMas;
  