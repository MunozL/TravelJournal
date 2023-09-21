import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/NavBar";
import data from "./data";

function App() {
  const card = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section>{card}</section>
    </div>
  );
}

export default App;
