/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text"],
      all: true,
      include: ["src/*"],
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/types.ts",
        "**/*.d.ts",
        "src/main.tsx",
      ],
    },
  },
});
