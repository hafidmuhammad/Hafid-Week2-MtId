import "./App.css";
import HeaderLabelComponen from "./Components/HeaderLabelComponen";
import MainRoute from "./routers/MainRoute";
import NavComponen from "./Components/NavComponen";
import FooterComponen from "./Components/FooterComponen";

function App() {
  return (
    <div>
      <HeaderLabelComponen />
      <NavComponen />
      <MainRoute />
      <FooterComponen />
    </div>
  );
}

export default App;
