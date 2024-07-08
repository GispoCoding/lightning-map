import { Slider, Box } from "@mui/material";

const formatLabel = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}`;
};

const FilterSlider = ({
  min,
  max,
  value,
  // animationSpeed,
  setFilter,
}: {
  min: number;
  max: number;
  value: [start: number, end: number];
  animationSpeed: number;
  setFilter: Function;
}) => {
  const handleChange = (_: Event, newValue: number | number[]) => {
    setFilter(newValue as number[]);
  };
  return (
    <Box sx={{ width: 400 }}>
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
