import { defineConfig } from '@strapi/pack-up';

export default defineConfig({
  minify: true,
  sourcemap: false,
  externals: [
    // Strapi core packages - must use host app's instances to share React contexts
    '@strapi/design-system',
    '@strapi/icons',
    '@strapi/strapi',
    '@strapi/admin',
    '@strapi/admin/strapi-admin',
    // React ecosystem - must be shared with host
    'react',
    'react-dom',
    'react/jsx-runtime',
    'react-router-dom',
    'react-intl',
    'styled-components',
    // Radix UI primitives - must use host app's instances to share React contexts
    // Using explicit paths since regex patterns may not work reliably
    '@radix-ui/react-toolbar',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-primitive',
    '@radix-ui/react-context',
    '@radix-ui/react-collection',
    '@radix-ui/react-compose-refs',
    '@radix-ui/react-slot',
    '@radix-ui/react-roving-focus',
    '@radix-ui/react-direction',
    '@radix-ui/react-use-controllable-state',
    '@radix-ui/react-id',
    '@radix-ui/primitive',
    // Also use regex as fallback for any other radix packages
    /^@radix-ui\/.*/,
    // Slate editor - should be shared
    'slate',
    'slate-react',
    'slate-history',
    // Other peer dependencies
    'prismjs',
  ],
});
