import { Paper, Slider } from "@mui/material";

const Panel = ({ text }: { text: string }) => {
  return (
    <Paper style={{ zIndex: 10, position: "absolute" }}>
      <p>{text}</p>
      <Slider />
    </Paper>
  );
};

export default Panel;
