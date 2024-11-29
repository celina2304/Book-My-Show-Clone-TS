import React, { createContext, useState } from "react";

export const MovieContext = createContext({} as MovieContextType);

interface MovieProviderProps {
  children: React.ReactNode;
}

export interface MovieContextType {
  movie: {
    id: number;
    original_title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    genres?: { name: string }[];
    original_language: string;
    runtime: number;
  };
  setMovie: React.Dispatch<
    React.SetStateAction<{
      id: number;
      original_title: string;
      overview: string;
      backdrop_path: string;
      poster_path: string;
      genres?: { name: string }[];
      original_language: string;
      runtime: number;
    }>
  >;
}

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
    original_language: "",
    runtime: 0,
  });

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
