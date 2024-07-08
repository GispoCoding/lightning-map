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
    stroked: false,
    getPosition: (d) => [d.longitude, d.latitude],
    getRadius: (d) => d.peak_current,
    getFillColor: [255, 255, 255],
    radiusScale: 6,
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
