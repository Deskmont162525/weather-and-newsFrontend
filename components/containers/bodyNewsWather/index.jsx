import CardsNewsPaper from "../../containers/cardsNewsPaper";
import CardWeather from "../../elements/cardWeather";
import ButtomWeatherMas from "../../ui/ButtonMas";
import { useStyleBodyNewsWeather } from "./bodyNewsWeather.style";

const BodyNewsWeather = () => {
  const classes = useStyleBodyNewsWeather()
  return (
    <>
    <div className={classes.container}>
      <CardsNewsPaper />
      <CardWeather />      
    </div>
    <div className={classes.containerButtom}>
    <ButtomWeatherMas />
    </div>
    </>
  );
};

export default BodyNewsWeather;
