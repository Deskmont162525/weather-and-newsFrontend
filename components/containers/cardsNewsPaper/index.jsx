import React from "react";
import { noticiasContext } from "../../../context/noticiasContext";
import CardNewsPaper from "../../elements/cardNewsPaper";
import ButtomWeatherMas from "../../ui/ButtonMas";
import { useStyleCardsNewsPaper } from "./cardsNewsPaper.style";

const cardsNewsPaper = () => {
  const classes = useStyleCardsNewsPaper();
  const { noticias } = React.useContext(noticiasContext);
  const [cant, setCant] = React.useState(1);
  const [payments, setPayments] = React.useState();

  const handleClick = () => {
    setCant(cant + 6);
    setPayments(noticias.slice(0, cant + 6));
  };
  React.useEffect(() => {
    if (noticias?.length >= 2) {
      setPayments(noticias?.slice(0, cant));
    }
  }, [noticias]);
  return (
    <div className="container">
      <div className={classes.card}>
        {payments &&
          payments.map((item, index) => {
            return <CardNewsPaper key={index} {...item} />;
          })}
          {payments?.length < noticias?.length &&(
            <ButtomWeatherMas text="CARGAR MAS" onChangeButom={handleClick}/>
          )}          
      </div>
      
    </div>
  );
};

export default cardsNewsPaper;
