import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lightning-map/",
  plugins: [react()],
  resolve: {
    alias: {
      "mapbox-gl": "maplibre-gl",
    },
  },
});
