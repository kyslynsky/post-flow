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
      <footer style={{ marginTop: "20px", padding: "40px" }}>
        <div>1</div>
      </footer>
      <ToastContainer transition={Zoom} />
    </>
  );
}

export default App;
