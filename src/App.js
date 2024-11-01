import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  );
}

export default App;
