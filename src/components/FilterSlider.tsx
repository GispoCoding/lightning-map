import { useState } from "react";
import { Slider, Box } from "@mui/material";

const formatLabel = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const formatter = new Intl.DateTimeFormat("en-FI", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formatter.format(date)}`;
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
      sx={{ position: "absolute", width: "50%", bottom: "0.5em", left: "5em" }}
    >
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={formatLabel}
      />
    </Box>
  );
};

export default FilterSlider;
