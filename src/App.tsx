import { useState, useEffect } from "react";
import Map from "./components/Map";

import loader from "./loader";

function App() {
  const [count, setCount] = useState(0);
  const [lightnings, setLightnings] = useState<any | null>(null);

  useEffect(() => {
    loader.loadData().then((data) => setLightnings(data));
  }, []);

  // console.log(lightnings);

  return (
    <div>
      <Map data={lightnings} />
    </div>
  );
}

export default App;
