// import { useState } from "react";
import { Slider, Box } from "@mui/material";

import formatTimeStamp from "../format-timestamp";

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
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setFilter(newValue as number[]);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        width: "60%",
        bottom: "0.5em",
        // left: "5em",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={formatTimeStamp}
        // sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default FilterSlider;
