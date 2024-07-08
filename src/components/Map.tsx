import { useState, useMemo } from "react";
import { DeckGL, ScatterplotLayer } from "deck.gl";
import { DataFilterExtension } from "@deck.gl/extensions";
import Map from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto";
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
  const [filter, setFilter] = useState<[start: number, end: number] | null>(
    null,
  );
  const timeRange = useMemo(() => getTimeRange(data), [data]);
  const filterValue = filter || timeRange;

  const dataFilter = new DataFilterExtension({
    filterSize: 1,
    fp64: false,
  });

  console.log(data);
  console.log(timeRange);

  const layers = [
    new ScatterplotLayer({
      id: "ScatterplotLayer",
      data: data,
      stroked: false,
      getPosition: (d) => [d.longitude, d.latitude],
      getRadius: (d) => d.peak_current,
      getFillColor: [255, 255, 255, 200],
      radiusScale: 5,
      // radiusMinPixels: 0.1,
      billboard: true,
    }),
  ];
  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 20,
    latitude: 65,
    zoom: 5,
  };

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
