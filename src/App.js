import "./App.css";
import Header from "./components/Header/Header";
import QA from "./components/QA/QA";
import Shop from "./components/Shop/Shop";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <QA></QA>
    </div>
  );
}

export default App;
