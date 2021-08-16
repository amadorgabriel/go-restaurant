import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/index";

import GlobalStyle from "./styles/global";

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);
