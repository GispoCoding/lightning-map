import { Paper, Typography } from "@mui/material";

import formatTimeStamp from "../format-timestamp";

const InfoPanel = ({
  timeRange,
}: {
  timeRange: [minTime: number, maxTime: number];
}) => {
  const [minTime, maxTime] = timeRange.map((t: number) => formatTimeStamp(t));

  return (
    <Paper sx={{ position: "absolute", top: "1em", padding: "10px" }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Lightnings in Northern Europe
      </Typography>
      <Typography variant="body1" gutterBottom>
        Showing every lightning strike between <br></br> {minTime} and {maxTime}
      </Typography>
    </Paper>
  );
};

export default InfoPanel;
