import { Blog } from "./layout/Blog";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
      <ToastContainer transition={Zoom} />
    </div>
  );
}

export default App;
