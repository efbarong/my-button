# my-button

Minimal React button component library built with Vite + TypeScript.

## Installation

```bash
npm install my-button
```

> Requires `react >= 18` as a peer dependency.

## Usage

```tsx
import { Button } from "my-button";

export default function App() {
  return (
    <Button variant="primary" size="md" onClick={() => alert("clicked!")}>
      Click me
    </Button>
  );
}
```

## Props

| Prop       | Type                               | Default     | Description               |
|------------|------------------------------------|-------------|---------------------------|
| `variant`  | `"primary" \| "secondary" \| "danger"` | `"primary"` | Visual style              |
| `size`     | `"sm" \| "md" \| "lg"`            | `"md"`      | Button size               |
| `loading`  | `boolean`                          | `false`     | Shows loading state       |
| `disabled` | `boolean`                          | `false`     | Disables the button       |
| `...rest`  | `ButtonHTMLAttributes`             | —           | All native button props   |

## Build

```bash
npm run build
```

## Publish

```bash
npm login
npm publish
```
