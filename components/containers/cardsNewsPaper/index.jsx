import CardNewsPaper from "../../elements/cardNewsPaper";
import { useStyleCardsNewsPaper } from "./cardsNewsPaper.style";

const cardsNewsPaper = () => {
  const classes = useStyleCardsNewsPaper();
  return (
    <div className="container">
      <div className={classes.card}>
        <CardNewsPaper />
      </div>
    </div>
  );
};

export default cardsNewsPaper;
