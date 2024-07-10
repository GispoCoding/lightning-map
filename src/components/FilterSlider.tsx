import { useState, useEffect } from "react";
import { Slider, Box, Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Pause } from "@mui/icons-material";

import formatTimeStamp from "../format-timestamp";

const FilterSlider = ({
  min,
  max,
  filterRange,
  setFilterRange,
}: {
  min: number;
  max: number;
  filterRange: [start: number, end: number];
  animationSpeed: number;
  setFilterRange: Function;
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isPlayEnabled = filterRange[0] > min || filterRange[1] < max;
  // const [newMin, setNewMin] = useState<number>()

  useEffect((): any => {
    let animation: number;

    if (isPlaying) {
      animation = requestAnimationFrame(() => {
        const span = filterRange[1] - filterRange[0];
        let nextValueMin = filterRange[0] + 1000; // animation speed
        let nextValueMax = nextValueMin + span;
        if (nextValueMax >= max) {
          nextValueMin = min;
          nextValueMax = nextValueMin + span;
        }
        setFilterRange([nextValueMin, nextValueMax]);
        // console.log(nextValueMin);
      });
    }

    return () => animation && cancelAnimationFrame(animation);
  });

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setFilterRange(newValue as number[]);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        width: "60%",
        bottom: "0.5em",
        // left: "5em",
        display: "flex",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Button
        color="primary"
        disabled={!isPlayEnabled}
        onClick={() => setIsPlaying(!isPlaying)}
        title={isPlaying ? "Stop" : "Animate"}
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </Button>
      <Slider
        min={min}
        max={max}
        value={filterRange}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        valueLabelFormat={formatTimeStamp}
        // sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default FilterSlider;
