import React from "react";
import AlbumCard from "../components/AlbumCard";
import Navbar from "../components/Navbar";

const AllAlbum = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <Navbar />
      <AlbumCard
        title={"My favourite"}
        artist={"Tonmoy Stark"}
        musicCount={5}
      />
    </div>
  );
};

export default AllAlbum;
