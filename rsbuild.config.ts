import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';
import { resolve } from 'path';

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
  source: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    define: {
      'process.env.APPWRITE_ENDPOINT': JSON.stringify(process.env.APPWRITE_ENDPOINT),
      'process.env.APPWRITE_PROJECT_ID': JSON.stringify(process.env.APPWRITE_PROJECT_ID),
      'process.env.APPWRITE_DATABASE_ID': JSON.stringify(process.env.APPWRITE_DATABASE_ID),
      'process.env.APPWRITE_COLLECTION_ID_TRANSACTIONS': JSON.stringify(process.env.APPWRITE_COLLECTION_ID_TRANSACTIONS),
      'process.env.APPWRITE_COLLECTION_ID_ACCOUNTS': JSON.stringify(process.env.APPWRITE_COLLECTION_ID_ACCOUNTS),
      'process.env.APPWRITE_COLLECTION_ID_INVESTMENTS': JSON.stringify(process.env.APPWRITE_COLLECTION_ID_INVESTMENTS),
    },
  },
});
