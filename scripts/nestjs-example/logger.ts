import { configure, getConsoleSink, getLogger } from "@logtape/logtape";

await configure({
  sinks: { console: getConsoleSink() },
  loggers: [
    {
      category: ["logtape", "meta"],
      lowestLevel: "warning",
      sinks: ["console"],
    },
    { category: "payfaucet", lowestLevel: "debug", sinks: ["console"] },
  ],
});

export const logger = getLogger(["payfaucet", "scripts"]);
