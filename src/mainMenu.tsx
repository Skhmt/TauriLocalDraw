import {
	DefaultMainMenu,
	DefaultMainMenuContent,
	Editor,
	parseTldrawJsonFile,
	serializeTldrawJsonBlob,
	TLComponents,
	TldrawUiMenuActionItem,
	TldrawUiMenuGroup,
	TldrawUiMenuSubmenu,
	TLUiActionsContextType,
	TLUiOverrides,
	useToasts,
} from '@tldraw/tldraw';
import { createOpenDialog } from './createOpenDialog';
import { createSaveDialog } from './createSaveDialog';
import { createNewDialog } from './createNewDialog';

import welcomeProject from './welcomeProject'
import { getTimestamp } from './getTimestamp';

// override the MainMenu component with most of the defaults plus the local file menu
export const MainMenuFileComponent: TLComponents = {
	MainMenu: () => (
		<DefaultMainMenu>
			<TldrawUiMenuSubmenu id='file' label='File'>
				<TldrawUiMenuGroup id='file-actions'>
					<TldrawUiMenuActionItem actionId='new-file' />
					<TldrawUiMenuActionItem actionId='open-file' />
					<TldrawUiMenuActionItem actionId='save-file' />
				</TldrawUiMenuGroup>
			</TldrawUiMenuSubmenu>
			<DefaultMainMenuContent />
		</DefaultMainMenu>
	)
}

export const actionOverrides: TLUiOverrides = {
	actions(editor: Editor, actions: TLUiActionsContextType, { addDialog }): TLUiActionsContextType {
		const { addToast } = useToasts();

		welcome(editor);

		actions['new-file'] = {
			id: 'new-file',
			label: 'New project',
			readonlyOk: true,
			kbd: '$n',
			async onSelect() {
				addDialog({ component: createNewDialog(editor) })
			}
		};
		actions['open-file'] = {
			id: 'open-file',
			label: 'Open',
			readonlyOk: true,
			kbd: '$o',
			async onSelect() {
				addDialog({ component: createOpenDialog(editor) });
			}
		};
		actions['save-file'] = {
			id: 'save-file',
			label: 'Save',
			readonlyOk: true,
			kbd: '$s',
			async onSelect() {
				if ('showSaveFilePicker' in window) {
					const file = await serializeTldrawJsonBlob(editor);
					try {
						// @ts-expect-error Type 'ShowSaveFilePickerOptions' is not assignable to type 'undefined'.
						const handle = await window.showSaveFilePicker({ suggestedName: `project_${getTimestamp()}.tldz` });
						const writableStream = await handle.createWritable();
						const compressionStream = new CompressionStream('gzip');
						await file.stream().pipeThrough(compressionStream).pipeTo(writableStream);
						addToast({ title: 'File saved', severity: 'success' })
					}
					catch (err: unknown) {
						if (err instanceof Error && err?.name !== 'AbortError') console.error(err);
					}
				}
				else {
					addDialog({ component: createSaveDialog(editor) });
				}
			}
		};
		return actions;
	},
}

function welcome(editor: Editor) {
	if (!localStorage.getItem('firstRunComplete')) {
		localStorage.setItem('firstRunComplete', 'true');

		const parseFileResult = parseTldrawJsonFile({
			schema: editor.store.schema,
			json: welcomeProject,
		});

		if (parseFileResult.ok) {
			editor.loadSnapshot(parseFileResult.value.getStoreSnapshot());
			editor.clearHistory();

			const bounds = editor.getCurrentPageBounds();
			if (bounds) {
				editor.zoomToBounds(bounds, { targetZoom: 1, immediate: true });
			}
		}
	}
}