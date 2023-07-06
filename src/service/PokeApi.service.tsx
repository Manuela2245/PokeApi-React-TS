import axios from "axios";

export const PokeApiService= async () => {
  const PokeApiApi= `https://pokeapi.co/api/v2/pokemon`
    try{
      const response= await axios.get(PokeApiApi); 
      //console.log(response)
      const responseData=await response.data
      return responseData
    }catch(err){
        console.log(err)
    }
}