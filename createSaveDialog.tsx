import { Editor, serializeTldrawJsonBlob, TldrawUiButton, TldrawUiButtonLabel, TldrawUiDialogBody, TldrawUiDialogCloseButton, TldrawUiDialogFooter, TldrawUiDialogHeader, TldrawUiDialogTitle } from "@tldraw/tldraw";
import { useState } from "react";
import { compressBlob } from "./zip";

export function createSaveDialog(editor: Editor) {
	return ({ onClose }: { onClose(): void }) => {
		const [fileName, setFileName] = useState(`project_${getTimestamp()}`);

		const save = async () => {
			const link = document.createElement('a');
			const file = await serializeTldrawJsonBlob(editor);
			const gzFile = await compressBlob(file);
			link.href = URL.createObjectURL(gzFile);
			link.download = fileName + '.tldz';
			link.click();
			URL.revokeObjectURL(link.href);
			onClose();
		}

		return (
			<>
				<TldrawUiDialogHeader>
					<TldrawUiDialogTitle>
						<strong>Enter a file name</strong>
					</TldrawUiDialogTitle>
					<TldrawUiDialogCloseButton />
				</TldrawUiDialogHeader>
				<TldrawUiDialogBody style={{ maxWidth: 350 }}>
					<input type='text' value={fileName} onChange={e => setFileName(e.target.value)} />
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
		)
	}
}

function getTimestamp(): string {
	// adds a leading zero to two-digit numbers
	const twoD = (x: number) => x.toString().padStart(2, '0');

	const d = new Date();
	const date = `${d.getFullYear()}-${twoD(d.getMonth() + 1)}-${twoD(d.getDate())}`;
	const time = `${twoD(d.getHours())}-${twoD(d.getMinutes())}-${twoD(d.getSeconds())}`;
	return `${date}_${time}`;
}