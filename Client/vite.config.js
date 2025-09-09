import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        theme: {
          extend: {
            fontFamily: {
              satoshi: ['"Satoshi Variable"', "sans-serif"],
            },
          },
        },
      },
    }),
    react(),
    
  ],
});
