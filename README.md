# local tldraw with filesystem things

this is a [tldraw](https://tldraw.dev) derivative project that adds a `file` menu
(like the `tldraw.com` demo), allowing you to save and open projects, and compiles 
it to a single .html file. this does not include "multiplayer" tldraw compatibility.
this can also be built as an executable via [tauri](https://tauri.app).

the intended use case is a portable note-taking/whiteboard application for a single user, 
for example placed in google drive or ms one drive or drop box and accessed from wherever 
and able to save and load files to continue working while being cloud-agnostic.

## frontend commands

install: `npm i`

frontend dev: `npm run dev`

frontend build (creates a single .html file): `npm run build`

## desktop application development

1. IMPORTANT! install [rust](https://www.rust-lang.org/tools/install)
1. (optional) tauri dev server: `npx tauri dev`
1. (optional) generate new icons: `npx tauri icon ./src-tauri/icons/icon.png`
1. full build: `npx tauri build`
	1. the `.exe` will be at `./src-tauri/target/release/app.exe`
	1. installers will be in `./src-tauri/target/release/bundle/`

## todo

1. error checking on file open (see: https://github.com/tldraw/tldraw/blob/d9448fa3621c301a2b3a5de9ee2e5b67e14ff3a4/packages/tldraw/src/lib/utils/tldr/file.ts#L233)
1. `enter` should save in the legacy file dialog

## notes

Based heavily on:

- https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/src/components/LocalEditor.tsx
  - Menu: https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/src/components/FileMenu.tsx#L14
  - Actions: https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/src/utils/useFileSystem.tsx#L26
- https://github.com/tldraw/tldraw/issues/1650#issuecomment-1874267405