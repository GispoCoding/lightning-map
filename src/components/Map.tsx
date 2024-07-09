import { useState, useMemo } from "react";
import { DeckGL, ScatterplotLayer } from "deck.gl";
import { DataFilterExtension } from "@deck.gl/extensions";
import Map from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto";
import FilterSlider from "./FilterSlider";
import InfoPanel from "./InfoPanel";

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
  const filterRange = filter || timeRange;

  const dataFilter = new DataFilterExtension({
    filterSize: 1,
    // fp64: true,
  });

  // console.log(data);
  // console.log(timeRange);

  const layers = [
    filterRange &&
      new ScatterplotLayer({
        id: "ScatterplotLayer",
        data: data,
        stroked: false,
        getPosition: (d) => [d.longitude, d.latitude],
        getRadius: (d) => d.peak_current,
        getFillColor: [255, 220, 200, 200],
        radiusScale: 7,
        // radiusMinPixels: 0.1,
        billboard: true,

        getFilterValue: (d: any) => d.time,
        filterRange: [filterRange[0], filterRange[1]],
        extensions: [dataFilter],
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
      {timeRange && filterRange && (
        <FilterSlider
          min={timeRange[0]}
          max={timeRange[1]}
          value={filterRange}
          // value={filterValue || [0, 0]} // hacky
          animationSpeed={1}
          setFilter={setFilter}
        />
      )}
      {filterRange && <InfoPanel timeRange={filterRange} />}
    </div>
  );
};

export default MapComponent;
