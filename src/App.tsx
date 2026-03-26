import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";

const App = () => (
  <HelmetProvider>
    <ScrollToHash />
    <Outlet />
  </HelmetProvider>
);

export default App;
