import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("unsplashData")) || {
      mode: "light",
      likedImages: [],
      user: null,
    }
  );
}

const changeState = (state, action) => {
  switch (action.type) {
    case "ADD_LIKED_IMAGE":
      return { ...state, likedImages: [...state.likedImages, action.payload] };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "ADD_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, dataFromLocalStorage());

  const addNewImage = (newImage) => {
    const isImageAlreadyAdded = state.likedImages.every((image) => {
      return image.id !== newImage.id;
    });

    if (isImageAlreadyAdded) {
      dispatch({ type: "ADD_LIKED_IMAGE", payload: newImage });
    }
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };

  useEffect(() => {
    localStorage.setItem("unsplashData", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (state.mode === "dark") document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [state.mode]);

  return (
    <GlobalContext.Provider
      value={{ ...state, addNewImage, changeMode, addUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
