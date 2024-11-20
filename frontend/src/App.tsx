import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <>
        <HomePage />
        <ToastContainer />
      </>
    </Router>
  );
}

export default App;
