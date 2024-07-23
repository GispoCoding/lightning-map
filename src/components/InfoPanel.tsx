import { useState } from "react";
import {
  Slider,
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

import { Info, Settings } from "@mui/icons-material";

import formatTimeStamp from "../format-timestamp";

const Emphasize = ({ text }: { text: string }) => (
  <Typography component="b" fontSize="large" fontWeight="bold">
    {text}
  </Typography>
);

const InfoPanel = ({
  timeRange,
  animationSpeed,
  setAnimationSpeed,
  radiusScale,
  setRadiusScale,
}: {
  timeRange: [minTime: number, maxTime: number];
  animationSpeed: number;
  setAnimationSpeed: Function;
  radiusScale: number;
  setRadiusScale: Function;
}) => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const [minTime, maxTime]: string[] = timeRange.map((t: number): string =>
    formatTimeStamp(t),
  );

  return (
    <Box
      sx={{
        position: "absolute",
        left: "0em",
        top: "0em",
        margin: "0.5em",
        maxWidth: "25em",
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={visibility}
            onChange={() => setVisibility(!visibility)}
          />
        }
        labelPlacement="end"
        label="Show panel"
      />
      <Slide direction="right" in={visibility} mountOnEnter unmountOnExit>
        <Stack>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Lightnings in Northern Europe
              </Typography>
              <Typography variant="body1" gutterBottom>
                Showing the location of every lightning strike from{" "}
                <Emphasize text={minTime} /> to <Emphasize text={maxTime} />.
              </Typography>
              <Typography variant="body1">
                Point size resembles the peak electrical current of the
                lightning.
              </Typography>
            </CardContent>
          </Card>
          <Accordion>
            <AccordionSummary expandIcon={<Settings />}>
              Customize the visualization
            </AccordionSummary>
            <AccordionDetails>
              Animation speed:
              <Slider
                aria-label="Animation Speed"
                value={animationSpeed}
                min={10}
                max={3000}
                onChange={(_, value: number | number[]) =>
                  setAnimationSpeed(value as number)
                }
              />
              Point size multiplier:
              <Slider
                aria-label="Point Size"
                value={radiusScale}
                min={1}
                max={100}
                onChange={(_, value: number | number[]) =>
                  setRadiusScale(value as number)
                }
              />
            </AccordionDetails>
          </Accordion>
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
