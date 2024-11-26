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