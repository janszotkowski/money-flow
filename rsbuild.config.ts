import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  plugins: [pluginReact(), pluginSass(), pluginSvgr()],
  server: {
    port: 8080
  },
  html: {
    title: 'MoneyFlow'
  },
  tools: {
    rspack: {
      plugins: [
        TanStackRouterRspack({ target: 'react', autoCodeSplitting: true }),
      ],
    },
  },
});
