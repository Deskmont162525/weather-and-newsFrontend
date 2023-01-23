import CardsNewsPaper from "../../containers/cardsNewsPaper";
import CardWeather from "../../elements/cardWeather";
import { useStyleBodyNewsWeather } from "./bodyNewsWeather.style";

const BodyNewsWeather = () => {
  const classes = useStyleBodyNewsWeather()
  return (
    <div className={classes.container}>
      <CardsNewsPaper />
      <CardWeather />
    </div>
  );
};

export default BodyNewsWeather;
