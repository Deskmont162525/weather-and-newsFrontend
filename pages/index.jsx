import React from "react";
import nookies, { setCookie } from "nookies";
import { UserService } from "../services/UserService";
import { useRouter } from "next/router";
import NoSession from "../components/ui/NoSession";

const HomeView = ({dataBd}) => {
  const router = useRouter();
  React.useEffect(() => {
    if(dataBd){
      if(dataBd?.mensaje_ok !== "error catch"){
        setCookie(null, "userWeatherNews", JSON.stringify(dataBd?.response), {
          path: '/',
          expires: "",
        })
        router.push("/inicio");
      }else {
        console.log("el servidor esta caido no hay informacion de la bd");
      }      
    }    
  }, []);
  return (
   <>
   <NoSession />
   </>
  );
};

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const dataUser = cookies.userWeatherNews ? JSON.parse(cookies?.userWeatherNews) : ""; 

  const clienteWeather = cookies.userWeatherNews ? dataUser?.nombres : "";
  const [dataBd] = await Promise.all([
    clienteWeather == "" ? 
    UserService.postCreateUser():
    UserService.getUserByNameOById(clienteWeather),
  ]);
  return {
    props: {
      dataBd,
    },
  };
}
export default HomeView
