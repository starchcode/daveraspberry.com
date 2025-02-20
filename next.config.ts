import { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        environment: "DEVELOPMENT",
      },
    };
  }

  return {
    env: {
      environment: "PRODUCTION",
    },
  };
};

export default nextConfig;
