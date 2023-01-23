import { cadenaAleatoria } from "../helpers/validations/funcionesWather"


export const WatherService = {
    getSignIn: async (data) => {
        if(data == ""){
            console.log("cadenaAleatoria", cadenaAleatoria(12))
            let code = cadenaAleatoria(12)
            let datasend = `Invitado${code}`
            console.log("datasend", datasend);
            // ejecutar crear usuario `Invitado-${code}`
        }
       
    
        
      },

}