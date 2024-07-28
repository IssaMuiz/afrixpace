import Signup from "./components/Signup";
import CreatePost from "./components/pages/CreatePost";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#080808] min-h-screen w-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="log-in" element={<Login />} />
          <Route path="create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;