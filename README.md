# Procedural Terrain Generation

A simple procedural terrain generator built with [p5.js](https://p5js.org/), using Perlin noise to create a top-down map with water, grass, mountains, and snowcaps.

## What it does

Each pixel's height value is sampled from Perlin noise and mapped to a terrain color based on threshold bands:

- **Snowcaps** — highest elevation (noise > 0.75)
- **Mountains** — high elevation (noise > 0.6)
- **Grass** — mid elevation (noise > 0.4)
- **Shallow water** — low elevation (noise > 0.35)
- **Deep water** — lowest elevation

Clicking anywhere on the canvas regenerates the terrain with a new random noise pattern.

## Files

- `index.html` – loads p5.js and runs the sketch
- `sketch.js` – p5.js setup and mouse click handling
- `terrain.js` – noise sampling, color mapping, and terrain rendering logic

## Running the project

Open `index.html` in a browser (requires an internet connection to load the p5.js library from CDN, unless it's bundled locally).

Click anywhere on the canvas to generate a new terrain map.

## Customization

You can tweak the look of the terrain by adjusting the constants in `terrain.js`:

- `noiseScale` – controls the "zoom level" of the noise (smaller = smoother, larger landforms)
- `snowcapThreshold`, `mountainThreshold`, `grassThreshold`, `shallowWaterThreshold` – control where each terrain band starts
