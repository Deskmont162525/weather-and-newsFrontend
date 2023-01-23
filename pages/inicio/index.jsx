import nookies from "nookies";


const InicioWeatherView = () => {
    
    return (
    <>
    </>
    );
  };

export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx);
    
    return {
      props: {
      },
    };
  }
  
  export default InicioWeatherView;