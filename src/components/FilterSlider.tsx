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
  animationSpeed,
}: {
  min: number;
  max: number;
  filterRange: [start: number, end: number];
  setFilterRange: Function;
  animationSpeed: number;
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isPlayEnabled = filterRange[0] > min || filterRange[1] < max;

  useEffect((): any => {
    let animation: number;
    if (isPlaying) {
      animation = requestAnimationFrame(() => {
        const span = filterRange[1] - filterRange[0];
        let nextValueMin = filterRange[0] + animationSpeed;
        let nextValueMax = nextValueMin + span;
        if (nextValueMax >= max) {
          nextValueMin = min;
          nextValueMax = nextValueMin + span;
        }
        setFilterRange([nextValueMin, nextValueMax]);
      });
    }
    return () => animation && cancelAnimationFrame(animation);
  });

  const handleSliderChange = (_: Event, newRange: number | number[]) => {
    setFilterRange(newRange as number[]);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        width: "80%",
        bottom: "0.5em",
        display: "flex",
        left: "50%",
        transform: "translate(-50%, -50%)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100em",
      }}
    >
      <Button
        color="primary"
        disabled={!isPlayEnabled}
        onClick={() => setIsPlaying(!isPlaying)}
        title={isPlaying ? "Stop" : "Animate"}
      >
        {isPlaying ? (
          <Pause fontSize="large" />
        ) : (
          <PlayArrow fontSize="large" />
        )}
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
