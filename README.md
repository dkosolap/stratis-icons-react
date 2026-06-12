# Stratis Icons React

React SVG icon components generated from Stratis UI Icons.

## Demo

Run the local icon browser:

```bash
pnpm install
pnpm dev
```

The demo includes search, icon preview, and click-to-copy React usage snippets.

Build the static demo:

```bash
pnpm build:demo
```

## Library Build

Build the package before publishing:

```bash
pnpm build
```

## Usage

```tsx
import { Search02Icon } from 'stratis-icons-react';

export function SearchButton() {
  return <Search02Icon />;
}
```

## Attribution

This package contains React components generated from Stratis UI Icons - 1000+
Free Figma icons.

Original work: Stratis UI Icons - 1000+ Free Figma icons

License: Creative Commons Attribution 4.0 International (CC BY 4.0)

License URL: https://creativecommons.org/licenses/by/4.0/

Changes made: icons were exported or converted into React SVG components and
packaged for npm.

This package is not affiliated with, sponsored by, or endorsed by the original
Stratis UI Icons author unless explicitly stated by that author.

## Publishing

Publish the built package to npm or a private registry:

```bash
pnpm build
npm publish
```
