import {
	Editor,
	TldrawUiButton,
	TldrawUiButtonLabel,
	TldrawUiDialogBody,
	TldrawUiDialogCloseButton,
	TldrawUiDialogFooter,
	TldrawUiDialogHeader,
	TldrawUiDialogTitle
} from "@tldraw/tldraw";
import { parseDecompressBlob, parseString } from "./fileLoaderUtils.ts";
import { useToasts } from "@tldraw/tldraw";

export function createOpenDialog(editor: Editor) {
	return ({ onClose }: { onClose(): void }) => {
		const { addToast } = useToasts();
		const open = () => {
			// creates an input element, and then clicks it later instead of using showOpenFilePicker
			const input = document.createElement('input');
			input.type = 'file';
			input.accept = '.tldr, .tldz';

			input.onchange = function () {
				const files = input.files;
				if (!files || files.length <= 0) return;

				const file = files[0];

				const extension = file.name.split('.').pop();

				const reader = new FileReader();
				// normal .tldr files, like from tldraw.com
				if (extension === 'tldr') {
					reader.onload = async () => {
						const result = reader.result as string;
						if (result) {
							parseString(result, editor, addToast);
							addToast({ title: `"${file.name}" loaded`, severity: 'success' });
						}
					};
					reader.readAsText(file);
				}
				// gzipped .tldr files saved as .tldz, like from this project
				else if (extension === 'tldz') {
					reader.onload = async () => {
						// ... ArrayBuffer to Blob to decompressed Blob to String... there has to be a better way?
						const result = reader.result as ArrayBuffer;
						if (result) {
							const blob = new Blob([result]);
							await parseDecompressBlob(blob, editor, addToast);
							addToast({ title: `"${file.name}" loaded`, severity: 'success' });
						}
					}
					reader.readAsArrayBuffer(file)
				}
				else {
					addToast({ title: 'File type not supported', severity: 'error' });
				}
			};
			input.click();
			onClose();
		}

		return OpenDialog(onClose, open)
	}
}

export function OpenDialog(onCancel: () => void, onOpen: () => void) {
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
				<TldrawUiButton type="normal" onClick={onCancel} >
					<TldrawUiButtonLabel>Cancel </TldrawUiButtonLabel>
				</TldrawUiButton>
				< TldrawUiButton type="primary" onClick={onOpen} >
					<TldrawUiButtonLabel>Open project </TldrawUiButtonLabel>
				</TldrawUiButton>
			</TldrawUiDialogFooter>
		</>
	)
}