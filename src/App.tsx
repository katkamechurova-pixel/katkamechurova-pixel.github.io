import { Outlet } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";

const App = () => (
  <>
    <ScrollToHash />
    <Outlet />
  </>
);

export default App;
