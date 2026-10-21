# Still — Photo Gallery

A small React + Vite gallery styled with Tailwind CSS. Requires Node.js 20.19+ or 22.12+ and npm. Internet access is needed for the Picsum API and images.

## Run locally

Extract the ZIP, open the `photo-gallery` folder in VS Code, and run:

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal, usually http://localhost:5173.

## Production build

```sh
npm run build
npm run preview
```

## How it works

- `useFetchPhotos` fetches 30 photos once on mount, handles errors and loading, and cancels the request on unmount.
- `Gallery` uses `useCallback` for the search handler and `useMemo` for case-insensitive author filtering.
- `favouritesReducer` toggles unique photo IDs. Its initializer reads localStorage, and an effect saves each change. If browser storage is blocked, favourites still work for the current session.
- `PhotoCard` renders only the image, author, and accessible heart button.
- The grid has one column below 768px, two from 768px, and four from 1024px.
- The dark palette follows the supplied reference. Only the loading spinner is animated, as required by the assignment.

## Manual checks

1. Load the page and confirm the spinner is replaced with 30 photos.
2. Search an author's name with mixed case; only matching cards should remain without another API call.
3. Search an unknown name to see the no-results message.
4. Toggle a heart, refresh, and check that it remains selected. Toggle it off and refresh again.
5. Test widths of 390px, 800px, and 1280px for one, two, and four columns.
6. Block the list request in browser developer tools and reload to see the error message.
