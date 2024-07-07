import { useState, useEffect } from "react";

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
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
