import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import Header from "./components/layouts/Header"; // Header'ı import ettik
import Footer from "./components/layouts/Footer";
//import GlobalBackdrop from "./components/common/GlobalBackdrop";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ScrollUp from "./components/layouts/Scroolup";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <main className="flex-1 flex justify-center w-full  px-4  min-h-[calc(100vh-<header+footer-height>)] relative">
          <AppRoutes />
          <ScrollUp />
        </main>
        <Footer></Footer>
      </div>
      {/* <GlobalBackdrop /> */}
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
