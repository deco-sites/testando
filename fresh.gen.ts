// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/LiveControls.tsx";
import * as $$$0 from "./sections/OfertasExclusivas.tsx";
import * as $$$1 from "./sections/SliderMain.tsx";
import * as $$$2 from "./sections/header.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: { "./islands/LiveControls.tsx": $$0 },
  sections: {
    "./sections/OfertasExclusivas.tsx": $$$0,
    "./sections/SliderMain.tsx": $$$1,
    "./sections/header.tsx": $$$2,
  },
  functions: { "./functions/LoadGitHubRaw.ts": $$$$0 },
  schemas: {
    "./sections/OfertasExclusivas.tsx": {
      "inputSchema": {
        "title": " Ofertas Exclusivas",
        "type": "object",
        "properties": {
          "imgOfertasExclusivas": {
            "title": "Img Ofertas Exclusivas",
            "type": "object",
            "properties": {
              "ofertas": {
                "type": "string",
                "title": "Ofertas",
              },
              "ofertas1": {
                "type": "string",
                "title": "Ofertas1",
              },
              "ofertas2": {
                "type": "string",
                "title": "Ofertas2",
              },
            },
            "required": [
              "ofertas",
              "ofertas1",
              "ofertas2",
            ],
          },
          "imgPromoImperdivel": {
            "title": "Img Promo Imperdivel",
            "type": "object",
            "properties": {
              "promo": {
                "type": "string",
                "title": "Promo",
              },
              "promo1": {
                "type": "string",
                "title": "Promo1",
              },
              "promo2": {
                "type": "string",
                "title": "Promo2",
              },
            },
            "required": [
              "promo",
              "promo1",
              "promo2",
            ],
          },
        },
        "required": [
          "imgOfertasExclusivas",
          "imgPromoImperdivel",
        ],
      },
      "outputSchema": null,
    },
    "./sections/SliderMain.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/header.tsx": {
      "inputSchema": {
        "title": "Header",
        "type": "object",
        "properties": {
          "imgSrc": {
            "title": "Img Src",
            "type": "object",
            "properties": {
              "logo": {
                "type": "string",
                "title": "Logo",
              },
              "navBarToggle": {
                "type": "string",
                "title": "Nav Bar Toggle",
              },
              "cartToggle": {
                "type": "string",
                "title": "Cart Toggle",
              },
              "searchToggle": {
                "type": "string",
                "title": "Search Toggle",
              },
            },
            "required": [
              "logo",
              "navBarToggle",
              "cartToggle",
              "searchToggle",
            ],
          },
        },
        "required": [
          "imgSrc",
        ],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
