import { ScatterplotLayer } from "deck.gl";

const LightningLayer = (data: any) => {
  return new ScatterplotLayer({
    id: "ScatterplotLayer",
    data: data,
    stroked: false,
    getPosition: (d) => [d.longitude, d.latitude],
    getRadius: (d) => d.peak_current,
    getFillColor: [255, 255, 255, 200],
    radiusScale: 5,
    // radiusMinPixels: 0.1,
    billboard: true,
  });
};

export default LightningLayer;
