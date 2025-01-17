import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./UseContext/AuthContext";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/youtube-clone">
    <AuthContext>
      <App />
    </AuthContext>
  </BrowserRouter>
);
