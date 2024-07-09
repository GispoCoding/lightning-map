import { useState } from "react";
import { Slider, Box } from "@mui/material";

const formatLabel = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}`;
};

const FilterSlider = ({
  min,
  max,
  value,
  setFilter,
}: {
  min: number;
  max: number;
  value: [start: number, end: number];
  animationSpeed: number;
  setFilter: Function;
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setFilter(newValue as number[]);
  };
  return (
    <Box
      sx={{ position: "absolute", width: 600, bottom: "0.5em", left: "3em" }}
    >
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        valueLabelFormat={formatLabel}
      />
    </Box>
  );
};

export default FilterSlider;
