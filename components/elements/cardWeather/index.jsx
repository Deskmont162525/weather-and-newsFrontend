import { useStyleCardWeather } from "./cardWeather.style";

const CardWeather = () => {
  const classes = useStyleCardWeather();
  return (
    <div className="app-wrap">      
      <main>
        <section className="location">
          <div className="city">Northampton, GB</div>
          <div className="date">Sunday 1 January 2023</div>
        </section>
        <div className="current">
          <div className="temp">
            15<span>°c</span>
          </div>
          <div className="weather">Sunny</div>
          <div className="hi-low">13°c / 16°c</div>
        </div>
      </main>
    </div>
  );
};

export default CardWeather;
