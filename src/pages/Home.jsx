import React from "react";
import Search from "../components/Search";
import Galerey from "../components/Galerey";

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const words = [
  "airplane",
  "sky",
  "nature",
  "game",
  "art",
  "chess",
  "messi",
  "school",
  "gym",
  "blender",
  "ice-cream",
  "iphone",
];
const random = words[Math.floor(Math.random() * words.length)];
// console.log(random, "random");
const API = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_APP_ACCESS_KEY
}&page=1&query=`;

function Home() {
  const [url, setUrl] = useState(API + random);
  const { data, isPending, error } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(API + url);
  };

  // console.log(data, random);
  return (
    <div className="search">
      <h1>Search Any Image:</h1>
      <Search setNewUrl={setNewUrl} />
      {data && <Galerey data={data} />}
      {isPending && <h1>Loading..</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default Home;
