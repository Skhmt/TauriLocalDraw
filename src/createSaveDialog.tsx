import {
	Editor,
	serializeTldrawJsonBlob,
	TldrawUiButton,
	TldrawUiButtonLabel,
	TldrawUiDialogBody,
	TldrawUiDialogCloseButton,
	TldrawUiDialogFooter,
	TldrawUiDialogHeader,
	TldrawUiDialogTitle,
	useToasts
} from "@tldraw/tldraw";
import { useState } from "react";
import { compressBlob } from "./fileLoaderUtils.ts";
import { getTimestamp } from "./getTimestamp";

export function createSaveDialog(editor: Editor) {
	return ({ onClose }: { onClose(): void }) => {
		const {addToast} = useToasts();

		const [fileName, setFileName] = useState(`project_${getTimestamp()}`);

		const save = async () => {
			const file = await serializeTldrawJsonBlob(editor);
			const gzFile = await compressBlob(file);

			const link = document.createElement('a');
			link.href = URL.createObjectURL(gzFile);
			link.download = fileName + '.tldz';
			link.click();
			link.remove();
			URL.revokeObjectURL(link.href);
			addToast({title: 'Project saved', severity: 'success'})
		}

		return (
			<>
				<TldrawUiDialogHeader>
					<TldrawUiDialogTitle>
						<strong>Enter a file name</strong>
					</TldrawUiDialogTitle>
					<TldrawUiDialogCloseButton/>
				</TldrawUiDialogHeader>
				<TldrawUiDialogBody style={{maxWidth: 350}}>
					<input type='text' value={fileName} onChange={e => setFileName(e.target.value)}/>
				</TldrawUiDialogBody>
				<TldrawUiDialogFooter className="tlui-dialog__footer__actions">
					<TldrawUiButton type="normal" onClick={onClose}>
						<TldrawUiButtonLabel>Cancel</TldrawUiButtonLabel>
					</TldrawUiButton>
					<TldrawUiButton type="primary" onClick={save}>
						<TldrawUiButtonLabel>Save project</TldrawUiButtonLabel>
					</TldrawUiButton>
				</TldrawUiDialogFooter>
			</>
		);
	}
}