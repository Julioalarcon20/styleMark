import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify(),
  image: {
    domains: ["astro.build"],
  },
  static: {
    directory: "public", // Especifica la carpeta donde se encuentran los archivos estáticos
    // Puedes añadir más opciones si es necesario
  },
});
