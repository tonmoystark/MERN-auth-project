import React from "react";
import Navbar from "../components/Navbar";
import MusicCard from "../components/MusicCard";
import AlbumCard from "../components/AlbumCard";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <Navbar />
      <MusicCard
        title={"I am in a field of dandelions"}
        artist={"Tonmoy Stark"}
      />
      <AlbumCard
        title={"My favourite"}
        artist={"Tonmoy Stark"}
        musicCount={5}
      />
    </div>
  );
};

export default Home;
