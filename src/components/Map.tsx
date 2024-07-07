import { DeckGL } from "deck.gl";
import StaticMap from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto";
import { MapViewState } from "deck.gl";

const Map = ({ data }: any) => {
  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 20,
    latitude: 65,
    zoom: 5,
  };

  const lightnings = 0;

  const layers = [lightnings];

  return (
    <div style={{}}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[]}
      >
        <StaticMap mapStyle={BASEMAP.DARK_MATTER} />
      </DeckGL>
    </div>
  );
};

export default Map;
