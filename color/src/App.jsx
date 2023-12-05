import Home from "./components/Home";
import Create from "./components/Create";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ROUTER.Home} exact element={<Home />} />
        <Route path={ROUTER.Create} element={<Create />} />
        <Route path={ROUTER.Detail + "/:id"} element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
