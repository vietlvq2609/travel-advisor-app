import axios from "axios";

export const getPlacesData = async (type, ne, sw) => {
   try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
         params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
         },
         headers: {
            'X-RapidAPI-Key': process.env.TRAVEL_ADVISER_RAPID_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
         }
      });
      return data;
   } catch (error) {
      console.log(error);
   }
}