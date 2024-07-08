import { DeckGL } from "deck.gl";
import Map from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto";
import LightningLayer from "../layers";
import Panel from "./Panel";

import type { MapViewState } from "deck.gl";

const getTimeRange = (data: any): null | [minTime: number, maxTime: number] => {
  if (!data) {
    return null;
  }
  return data.reduce(
    (range: any, d: any) => {
      const t = d.time;
      range[0] = Math.min(range[0], t);
      range[1] = Math.max(range[1], t);
      return range;
    },
    [Infinity, -Infinity],
  );
};

const MapComponent = ({ data }: any) => {
  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 20,
    latitude: 65,
    zoom: 5,
  };

  console.log(data);
  console.log(getTimeRange(data));

  const layers = [LightningLayer(data)];

  return (
    <div style={{}}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <Map mapStyle={BASEMAP.DARK_MATTER} attributionControl={true} />
      </DeckGL>
      <Panel text="asdf" />
    </div>
  );
};

export default MapComponent;
