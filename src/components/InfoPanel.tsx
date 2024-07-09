import { Card, CardContent, Typography } from "@mui/material";

import formatTimeStamp from "../format-timestamp";

const NormalText = ({ text }: { text: string }) => (
  <Typography variant="body1">{text}</Typography>
);

const PrimaryHeading = ({ text }: { text: string }) => (
  <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
    {text}
  </Typography>
);

const SecondaryHeading = ({ text }: { text: string }) => (
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    {text}
  </Typography>
);

const InfoPanel = ({
  timeRange,
}: {
  timeRange: [minTime: number, maxTime: number];
}) => {
  const [minTime, maxTime]: Array<string> = timeRange.map((t: number): string =>
    formatTimeStamp(t),
  );

  return (
    <Card sx={{ position: "absolute", top: "1em" }}>
      <CardContent>
        <PrimaryHeading text="Lightnings in Northern Europe" />
        <NormalText text="Showing every lightning strike between" />
        <SecondaryHeading text={minTime} />
        <NormalText text="and" />
        <SecondaryHeading text={maxTime} />
      </CardContent>
    </Card>
  );
};

export default InfoPanel;
