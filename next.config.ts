import { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        environment: "DEVELOPMENT",
        db_collection: "local_daveraspberry",
      },
    };
  }

  return {
    env: {
      environment: "PRODUCTION",
      db_collection: "prod_daveraspberry",
    },
  };
};

export default nextConfig;
