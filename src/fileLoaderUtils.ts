import { Editor, parseTldrawJsonFile } from "@tldraw/tldraw";

export async function decompressBlob(blob: Blob) {
	const ds = new DecompressionStream('gzip');
	const decompressedStream = blob.stream().pipeThrough(ds);
	return await new Response(decompressedStream).blob();
}

export async function compressBlob(blob: Blob) {
	const cs = new CompressionStream('gzip');
	const compressedStream = blob.stream().pipeThrough(cs);
	return await new Response(compressedStream).blob();
}

export function parseString(
	str: string,
	editor: Editor,
	addToast: any
) {
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
		else {
			addToast({ title: 'Error opening file', severity: 'error' });
		}
	}
}

export async function parseDecompressBlob(
	blob: Blob,
	editor: Editor,
	addToast: any
) {
	const decompressedBlob = await decompressBlob(blob);
	const decompressedString = await decompressedBlob.text();
	parseString(decompressedString, editor, addToast);
}