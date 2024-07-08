import { DeckGL, Layer } from "deck.gl";
import Map from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto";
import { MapViewState } from "deck.gl";
import { ScatterplotLayer } from "deck.gl";

const MapComponent = ({ data }: any) => {
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
    getFillColor: [255, 255, 255, 200],
    radiusScale: 5,
    // radiusMinPixels: 0.1,
    billboard: false,
  });

  const layers = [lightnings];

  return (
    <div style={{}}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <Map mapStyle={BASEMAP.DARK_MATTER} attributionControl={true} />
      </DeckGL>
    </div>
  );
};

export default MapComponent;
