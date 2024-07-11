import { Typography, Box, CircularProgress } from "@mui/material";
import { Thunderstorm } from "@mui/icons-material";

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        textAlign: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Thunderstorm
        fontSize="large"
        sx={{
          animation: "blink 2s linear infinite",
          "@keyframes blink": {
            "0%": {
              opacity: "1",
            },
            "5%": {
              opacity: "0",
            },
            "10%": {
              opacity: "1",
            },
            "15%": {
              opacity: "0",
            },
            "49%": {
              opacity: "0",
            },
            "50%": {
              opacity: "1",
            },
            "55%": {
              opacity: "0",
            },
            "100%": {
              opacity: "0",
            },
          },
        }}
      />
      <Typography variant="h5">Loading data </Typography>
    </Box>
  );
};

export default LoadingScreen;
