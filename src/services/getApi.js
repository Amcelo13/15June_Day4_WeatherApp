
import axios from "axios";



 async function getApi(searchCity) {
    const api = "b3f08617ea95ee74d6b368cf78cf8a50"
  const post = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${api}`
  try {
    const sf = await axios.get(post);
    return sf.data;
  } catch (err) {
    console.log(err);
  }
}

export default getApi;
