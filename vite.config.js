import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/cccampb2/se-final-project",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
