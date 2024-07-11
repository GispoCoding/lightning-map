import { Container } from "@mui/material";
import { useState, useEffect } from "react";

import MapComponent from "./components/Map";
import LoadingScreen from "./components/LoadingScreen";
import loader from "./loader";

function App() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    loader.loadData().then((data) => setData(data));
  }, []);

  return (
    <Container maxWidth={false}>
      {!data && <LoadingScreen />}
      {data && <MapComponent data={data} />}
    </Container>
  );
}

export default App;
