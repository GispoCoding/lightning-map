import { useState, useMemo } from "react";
import { DeckGL, ScatterplotLayer } from "deck.gl";
import { DataFilterExtension } from "@deck.gl/extensions";
import Map, { AttributionControl } from "react-map-gl/maplibre";
import { BASEMAP } from "@deck.gl/carto";
import FilterSlider from "./FilterSlider";
import InfoPanel from "./InfoPanel";
import formatTimeStamp from "../format-timestamp";

import type { MapViewState, PickingInfo } from "deck.gl";
import type LightningObservation from "../types";

const getTimeRange = (
  data: LightningObservation[] | null,
): null | [minTime: number, maxTime: number] => {
  if (!data) {
    return null;
  }
  return data.reduce(
    (range: [minTime: number, maxTime: number], d: LightningObservation) => {
      const t = d.time;
      range[0] = Math.min(range[0], t);
      range[1] = Math.max(range[1], t);
      return range;
    },
    [Infinity, -Infinity],
  );
};

const getTooltip = ({ object }: PickingInfo<LightningObservation>): any => {
  return (
    object && {
      html: `
          <div><b>Peak current:</b> ${object.peak_current} kA</div>
          <div><b>Time</b>: ${formatTimeStamp(object.time)}</div>
          `,
      style: {
        fontSize: "0.9em",
        color: "#fff",
        backgroundColor: "#1e1e1e",
      },
    }
  );
};

const MapComponent = ({ data }: { data: LightningObservation[] | null }) => {
  const [_filterRange, setFilterRange] = useState<
    [start: number, end: number] | null
  >(null);
  const [radiusScale, setRadiusScale] = useState<number>(20);
  const [animationSpeed, setAnimationSpeed] = useState<number>(1000);

  const timeRange = useMemo(() => getTimeRange(data), [data]);
  const filterRange = _filterRange || timeRange;

  const dataFilter = new DataFilterExtension({
    filterSize: 1,
  });

  const layers = [
    filterRange &&
      new ScatterplotLayer({
        id: "ScatterplotLayer",
        data: data,
        stroked: false,
        getPosition: (d: LightningObservation) => [d.longitude, d.latitude],
        getRadius: (d: LightningObservation) => d.peak_current,
        getFillColor: [225, 210, 255, 180],
        radiusScale: radiusScale,
        radiusMinPixels: 0.1,
        billboard: true,
        pickable: true,

        getFilterValue: (d: LightningObservation) => d.time,
        filterRange: [filterRange[0], filterRange[1]],
        extensions: [dataFilter],
      }),
  ];
  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 20,
    latitude: 60,
    zoom: 5,
  };

  return (
    <div style={{}}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
        getTooltip={getTooltip}
      >
        <Map mapStyle={BASEMAP.DARK_MATTER} attributionControl={false}>
          <AttributionControl position="bottom-right" compact={false} />
        </Map>
      </DeckGL>
      {timeRange && filterRange && (
        <FilterSlider
          min={timeRange[0]}
          max={timeRange[1]}
          filterRange={filterRange}
          setFilterRange={setFilterRange}
          animationSpeed={animationSpeed}
        />
      )}
      {filterRange && (
        <InfoPanel
          timeRange={filterRange}
          animationSpeed={animationSpeed}
          setAnimationSpeed={setAnimationSpeed}
          radiusScale={radiusScale}
          setRadiusScale={setRadiusScale}
        />
      )}
    </div>
  );
};

export default MapComponent;
