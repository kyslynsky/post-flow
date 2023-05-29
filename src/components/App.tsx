import { Blog } from "./layout/Blog";
import { Header } from "./layout/Header";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Blog />
      </main>
      <ToastContainer transition={Zoom} />
    </>
  );
}

export default App;
