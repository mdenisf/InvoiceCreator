# Invoice Creator

## Structure

- `frontend/` - React + TypeScript application powered by Vite.
- `backend/` - Reserved for the future API, authentication, and database integration.

## Frontend development

Use Node.js 24 LTS and npm.

```sh
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. Changes in `frontend/src/` update automatically.

Run the following commands from `frontend/`:

- `npm run dev` - Start the development server.
- `npm run build` - Check TypeScript and create a production build in `frontend/dist/`.
- `npm run lint` - Run Oxlint.
- `npm run preview` - Preview the production build locally after building.

## Frontend files

- `frontend/src/main.tsx` - React entry point.
- `frontend/src/App.tsx` - Root component; start building here.
- `frontend/src/App.css` - Root component styles.
- `frontend/src/index.css` - Global styles.
- `frontend/public/` - Static files copied into the build.
- `frontend/vite.config.ts` - Vite configuration.

The root `.gitignore` applies to both applications.

Do not place credentials in frontend code. Variables prefixed with `VITE_` are exposed to the browser. Keep future server secrets in the backend.
