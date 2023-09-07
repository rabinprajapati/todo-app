import Car from "./Car";
import Bus from "./Bus";
function App() {
  const features = ["speed", "air conditioner"];
  return (
    <div>
      <Car color="red" wheels={5} features={features} />
      <Bus value="goal" />
    </div>
  );
}

export default App;
