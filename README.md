# embeddable-monaco

[![NPM](https://img.shields.io/npm/v/embeddable-monaco)](https://www.npmjs.com/package/embeddable-monaco) [![Workflow](https://img.shields.io/github/workflow/status/dizys/embeddable-monaco/Build)](https://github.com/dizys/embeddable-monaco/actions/workflows/build.yml) [![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=embeddable)](https://embeddable.vercel.app)

Embeddable online playground using Monaco editor. Also made to be a Vue component suitable to be embedded in [Slidev](https://github.com/slidevjs/slidev) slides.

![Used in Slidev](./docs/slidev-component.png)

## Install

```bash
$ npm install --save embeddable-monaco
```

or

```bash
$ yarn install embeddable-monaco
```

## Use in Slidev

Edit file `setup/main.ts`:

```ts
import {defineAppSetup} from '@slidev/types';
import {Embeddable} from 'embeddable-monaco';

import 'embeddable-monaco/dist/embeddable.css';

export default defineAppSetup(({app}) => {
  Embeddable.install(app);
});
```

Use component `Embeddable` in your slides:

```md
<Embeddable
  height="300"
  sourceURL="https://embeddable.vercel.app/?lang=typescript&code=aW50ZXJmYWNlIFVzZXIgewogIGlkOiBudW1iZXI7CiAgbmFtZTogc3RyaW5nOwogIGFnZTogbnVtYmVyOwp9CgpmdW5jdGlvbiBnZXRWYWx1ZShvYmosIGtleSkgewogIHJldHVybiBvYmooa2V5KTsKfQoKbGV0IHVzZXIxOiBVc2VyID0ge2lkOiAxLCBuYW1lOiAnYWRtaW4nLCBhZ2U6IDE4fTsKbGV0IHZhbHVlID0gZ2V0VmFsdWUodXNlcjEsICduYW1lJyk7CmNvbnNvbGUubG9nKHZhbHVlKTsK"
  lineNumbers="off"
/>
```

## Component Props

**Embeddable**

- `width`
  - string
  - default: `"100%"`
- `height`
  - string
  - default: `"100%"`
- `language`
  - string
  - Language name that Monaco supports.
  - default: `"typescript"`
- `code`
  - string
  - Default code to be shown.
  - default: `"// Start here..."`
- `sourceURL`
  - string
  - Use a source URL instead of `language` and `code`. This will override `language` and `code` props.
  - Go to `https://embeddable.vercel.app/?lang=<YOUR_LANGUAGE>` and type in the code, then press `cmd/ctrl + S`. The address bar will give you this `sourceURL`.
  - e.g. `https://embeddable.vercel.app/?lang=typescript&code=Ly8gU3RhcnQgaGVyZS4uLgo%3D`
- `lineNumbers`: `"on"` | `"off"`
  - Whether to show line numbers on the left side.
  - default: `"on"`
- `wordWrap`
  - string: `"on"` | `"off"`
  - Whether to wrap a line into new lines when it reaches the full width of the editor.
  - default: `"on"`
- `scrollbar`
  - string: `"auto"` | `"visible"` | `"hidden"`
  - `"auto"` shows the scrollbar when mouse hover; `"visible"` makes the scrollbar always visible; `"hidden"` always hides it.
  - default: `"auto"`

## License

MIT, see the [LICENSE](./LICENSE) file for more details.
