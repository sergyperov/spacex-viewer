# SpaceX Viewer

## General stack

- `React`+`Redux`
- `NextJS` for SSR
- `TypeScript` for Type-Safety
- `SCSS`, `CSS Modules` for styling
- `ESLint`, `Stylelint` and `Prettier` for code formatting

## Auto-Interface Generation

I have added integration with `json2ts` tool in order to generate TypeScript interfaces of
SpaceX API automatically based on the provided [JSON Schema](https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/rockets/schema.md).
On practice, this comes in handy for apps with non-JS backend. Run `npm run generate-interfaces` in order to update existing typings.

## Data normalization

On large project with rich API data it could be hard to efficiently find data within store.
I have added data normalization using `normalizr` library, so we have separate list of ids.
Moreover, any rocket now can ba access by *O(1)* complexity rather than *O(n)*.

## UX
Images are wrapped in `react-image` component in order to provide loading spinners.

## Project Structure

- `/types` - all general TS typings
- `/src/common/components` - components that can be reused on various pages
- `/src/common/api` - API Handlers
- `/src/containers` - Logic blocks that are used to assemble the websie
- `/src/pages` - pages for NextJS
- `/src/store` - State management setup

## Build & Setup

- Run `npm i` to install all required dependencies.
- Run `npm run dev` in order to start Dev Server.
- Run `npm run build` to produce a production-ready build