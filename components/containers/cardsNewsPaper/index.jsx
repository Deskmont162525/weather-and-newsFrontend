import CardNewsPaper from "../../elements/cardNewsPaper";
import { useStyleCardsNewsPaper } from "./cardsNewsPaper.style";

const cardsNewsPaper = () => {
  const classes = useStyleCardsNewsPaper();
  return (
    <div class="container">
      <div class={classes.card}>
        <CardNewsPaper />
        <CardNewsPaper />
        <CardNewsPaper />
      </div>
    </div>
  );
};

export default cardsNewsPaper;
