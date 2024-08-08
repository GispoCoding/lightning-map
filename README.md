# lightning-map

An interactive map for exploring lightning observation data.
Made to be a general-purpose demonstration for mapmaking with deck.gl and React.

## Development

The visualization is made with Deck.gl & Maplibre,
using React & Material UI for UI.
The app is built with Vite.

Install dependencies:

```console
npm install
```

Start the dev server:

```console
npm run dev
```

Building for production is handled automatically (see deployment below),
but it is still sometimes handy to build locally. To build the app:

```console
npm run build
```

And to serve the build:

```console
npm run preview
```

## Deployment

The app is automatically deployed to GitHub Pages with a GitHub action.
The deployment runs on every push targetting the `main` branch.
