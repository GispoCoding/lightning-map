import { useState, useEffect } from "react";
import { Slider, Box, Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import { Pause } from "@mui/icons-material";

import formatTimeStamp from "../format-timestamp";

const FilterSlider = ({
  min,
  max,
  filterRange,
  setFilter,
}: {
  min: number;
  max: number;
  filterRange: [start: number, end: number];
  animationSpeed: number;
  setFilter: Function;
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isPlayEnabled = filterRange[0] > min || filterRange[1] < max;
  const [animation] = useState<{
    id?: number;
  }>({});

  useEffect((): any => {
    return () => animation.id && cancelAnimationFrame(animation.id);
  }, [animation]);

  if (isPlaying && !animation.id) {
    const span = filterRange[1] - filterRange[0];
    let nextValueMin = filterRange[0] + 1000;
    if (nextValueMin + span >= max) {
      nextValueMin = min;
    }
    animation.id = requestAnimationFrame(() => {
      animation.id = 0;
      setFilter([nextValueMin, nextValueMin + span]);
    });
  }
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setFilter(newValue as number[]);
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
