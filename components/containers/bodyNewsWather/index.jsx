import CardsNewsPaper from "../../containers/cardsNewsPaper";
import CardWeather from "../../elements/cardWeather";
import { useStyleBodyNewsWeather } from "./bodyNewsWeather.style";

const BodyNewsWeather = ({setBannerShow}) => {
  const classes = useStyleBodyNewsWeather()
  return (
    <>
    <div className={classes.container}>
      <CardsNewsPaper />
      <CardWeather setBannerShow={setBannerShow}/>      
    </div>
    </>
  );
};

export default BodyNewsWeather;
