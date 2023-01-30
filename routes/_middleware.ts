import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 487,
  site: "testando",
  domains: ["testando.deco.site"],
});
