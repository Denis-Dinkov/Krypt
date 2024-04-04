import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const data = await res.json();
      setGifUrl(data.data[0]?.images?.downsized_medium?.url);
    } catch (err) {
      console.error(err);
      setGifUrl("");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
