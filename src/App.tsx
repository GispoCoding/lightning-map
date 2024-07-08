import { useState, useEffect } from "react";
import MapComponent from "./components/Map";

import loader from "./loader";

function App() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    loader.loadData().then((data) => setData(data));
  }, []);

  // console.log(data);

  return (
    <div>
      {!data && <div> LOADING </div>}
      {data && <MapComponent data={data} />}
    </div>
  );
}

export default App;
