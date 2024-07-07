import { DeckGL, Layer } from "deck.gl";
import StaticMap from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto";
import { MapViewState } from "deck.gl";
import { ScatterplotLayer } from "deck.gl";

const Map = ({ data }: any) => {
  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 20,
    latitude: 65,
    zoom: 5,
  };

  console.log(data);

  const lightnings = new ScatterplotLayer({
    id: "ScatterplotLayer",
    data: data,
    stroked: true,
    getPosition: (d) => [d.latitude, d.longitude],
    getFillColor: [255, 255, 255],
    // getLineColor: [0, 0, 0],
    // getLineWidth: 10,
    // radiusScale: 6,
    // pickable: true,
  });

  const layers = [lightnings];

  return (
    <div style={{}}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <StaticMap mapStyle={BASEMAP.DARK_MATTER} />
      </DeckGL>
    </div>
  );
};

export default Map;
