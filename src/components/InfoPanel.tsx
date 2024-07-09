import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Link,
  Switch,
  Slide,
  FormControlLabel,
} from "@mui/material";

import { Info } from "@mui/icons-material";

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
  const [visibility, setVisibility] = useState<boolean>(true);

  const [minTime, maxTime]: Array<string> = timeRange.map((t: number): string =>
    formatTimeStamp(t),
  );

  return (
    <Box
      sx={{ position: "absolute", left: "0em", top: "0em", margin: "0.5em" }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={visibility}
            onChange={() => setVisibility(!visibility)}
          />
        }
        // labelPlacement="top"
        label="Show info"
      />
      <Slide direction="right" in={visibility} mountOnEnter unmountOnExit>
        <Stack>
          <Card>
            <CardContent>
              <PrimaryHeading text="Lightnings in Northern Europe" />
              <NormalText text="Showing every lightning strike between" />
              <SecondaryHeading text={minTime} />
              <NormalText text="and" />
              <SecondaryHeading text={maxTime} />
            </CardContent>
          </Card>
          <Accordion>
            <AccordionSummary
              expandIcon={<Info />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>
                Data by the{" "}
                <Link href="https://en.ilmatieteenlaitos.fi/">
                  {" "}
                  Finnish Meteorological Institute{" "}
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Link href="https://en.ilmatieteenlaitos.fi/open-data">
                  FMI open data
                </Link>{" "}
                licensed under{" "}
                <Link href="https://creativecommons.org/licenses/by/4.0/">
                  CC-BY 4.0
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Slide>
    </Box>
  );
};

export default InfoPanel;
