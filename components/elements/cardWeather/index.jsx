import { useStyleCardWeather } from "./cardWeather.style";

const CardWeather = () => {
  const classes = useStyleCardWeather();
  return (
    <div class="app-wrap">      
      <main>
        <section class="location">
          <div class="city">Northampton, GB</div>
          <div class="date">Sunday 1 January 2023</div>
        </section>
        <div class="current">
          <div class="temp">
            15<span>°c</span>
          </div>
          <div class="weather">Sunny</div>
          <div class="hi-low">13°c / 16°c</div>
        </div>
      </main>
    </div>
  );
};

export default CardWeather;
