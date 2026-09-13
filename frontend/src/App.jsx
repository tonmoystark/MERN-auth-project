import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateMusic from "./pages/CreateMusic";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateAlbum from "./pages/CreateAlbum";
import AllAlbum from "./pages/AllAlbum";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<CreateMusic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-album" element={<CreateAlbum />} />
        <Route path="/albums" element={<AllAlbum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
