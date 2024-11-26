import { Editor, parseTldrawJsonFile, TldrawUiButton, TldrawUiButtonLabel, TldrawUiDialogBody, TldrawUiDialogCloseButton, TldrawUiDialogFooter, TldrawUiDialogHeader, TldrawUiDialogTitle } from "@tldraw/tldraw";
import { decompressBlob } from "./zip";

export function createOpenDialog(editor: Editor) {
	return ({ onClose }: { onClose(): void }) => {
		const open = () => {
			const input = document.createElement('input');
			input.type = 'file';
			input.onchange = function () {
				const files = input.files;
				if (!files || files.length <= 0) return;

				const file = files[0];

				const extension = file.name.split('.').pop();

				const reader = new FileReader();
				if (extension === 'tldr') {
					reader.onload = async () => {
						const result = reader.result as string;
						if (result) parseString(result);
					};
					reader.readAsText(file);
				}
				else if (extension === 'tldz') {
					reader.onload = async () => {
						const result = reader.result as ArrayBuffer;
						if (result) {
							const blob = new Blob([result]);
							const decompressedBlob = await decompressBlob(blob);
							const decompressedString = await decompressedBlob.text();
							parseString(decompressedString);
						}
					}
					reader.readAsArrayBuffer(file)
				};

				function parseString(str: string) {
					if (str) {
						const parseFileResult = parseTldrawJsonFile({
							schema: editor.store.schema,
							json: str,
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
			};
			input.click();
			onClose();
		}

		return (
			<>
				<TldrawUiDialogHeader>
					<TldrawUiDialogTitle>
						<strong>Open new project ? </strong>
					</TldrawUiDialogTitle>
					< TldrawUiDialogCloseButton />
				</TldrawUiDialogHeader>
				< TldrawUiDialogBody style={{ maxWidth: 350 }}>
					Opening a project will replace your current
					project and any unsaved changes will be lost.
					Are you sure you want to do this ?
				</TldrawUiDialogBody>
				< TldrawUiDialogFooter className="tlui-dialog__footer__actions" >
					<TldrawUiButton type="normal" onClick={onClose} >
						<TldrawUiButtonLabel>Cancel </TldrawUiButtonLabel>
					</TldrawUiButton>
					< TldrawUiButton type="primary" onClick={open} >
						<TldrawUiButtonLabel>Open project </TldrawUiButtonLabel>
					</TldrawUiButton>
				</TldrawUiDialogFooter>
			</>
		)
	}
}