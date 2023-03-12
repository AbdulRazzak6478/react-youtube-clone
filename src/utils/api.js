import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  // method: 'GET',
  // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: { hl: "en", gl: "US" },
  headers: {
    // "X-RapidAPI-Key":  process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Key': '53e1d6ec7fmsh6f9e5f290781083p12454fjsnfed9a929d93b',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
