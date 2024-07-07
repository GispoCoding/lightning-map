import { useState, useEffect } from "react";
import Map from "./components/Map";

import loader from "./loader";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    loader.loadData().then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div>
      <Map data={data} />
    </div>
  );
}

export default App;
