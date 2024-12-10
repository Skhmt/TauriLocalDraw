# local tldraw with filesystem things

this is a [tldraw](https://tldraw.dev) derivative project that adds a `file` menu
(like the `tldraw.com` demo), allowing you to save and open projects, and compiles 
it to a single .html file or executable via [tauri](https://tauri.app).
this does not include tldraw "multiplayer" compatibility.

the intended use case is a portable note-taking/whiteboard application for a single user, 
for example placed in google drive or ms one drive or drop box and accessed from wherever 
and able to save and load files to continue working while being cloud-agnostic.

## frontend npm commands

install: `npm i`

frontend dev: `npm run dev`

frontend build (creates a single .html file): `npm run build`

## desktop application development

> [!IMPORTANT]
> install [rust](https://www.rust-lang.org/tools/install)

(optional) tauri dev server: `npx tauri dev`

(optional) generate new icons: `npx tauri icon ./src-tauri/icons/icon.png`

full build: `npx tauri build`
	- the `.exe` will be at `./src-tauri/target/release/taurilocaldraw.exe`
	- installers will be in `./src-tauri/target/release/bundle/`

## todo

1. `enter` should save in the legacy file dialog

## notes

Based heavily on:

- https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/src/components/LocalEditor.tsx
  - menu: https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/src/components/FileMenu.tsx#L14
  - actions: https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/src/utils/useFileSystem.tsx#L26
- https://github.com/tldraw/tldraw/issues/1650#issuecomment-1874267405
