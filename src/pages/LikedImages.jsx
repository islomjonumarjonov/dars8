import React from "react";
import Galerey from "../components/Galerey";
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const { likedImages } = useGlobalContext();
  return (
    <>
      <Galerey data={{ results: likedImages }} />
    </>
  );
}

export default LikedImages;
