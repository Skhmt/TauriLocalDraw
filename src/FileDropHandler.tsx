import {useEditor, useToasts} from "@tldraw/tldraw";
import {parseDecompressBlob, parseString} from "./fileLoaderUtils.ts";
import {useEffect} from "react";

export default function FileDropHandler() {
    const editor = useEditor();
    const { addToast } = useToasts();

    useEffect(() => {
        // @ts-expect-error editor.externalContentHandlers does actually exist
        const defaultOnDrop = editor.externalContentHandlers['files'];

        editor.registerExternalContentHandler('files', async (content) => {
            const { files } = content;
            const file = files[0];
            if (!file) return;

            if (file.name.endsWith('.tldr')) {
                const json = await file.text();
                parseString(json, editor, addToast);
                addToast({ title: `"${file.name}" loaded`, severity: 'success' });
            }
            else if (file.name.endsWith('.tldz')) {
                const blob = new Blob([file]);
                await parseDecompressBlob(blob, editor, addToast);
                addToast({ title: `"${file.name}" loaded`, severity: 'success' });
            }
            else {
                defaultOnDrop?.(content);
            }
        });
    }, [editor, addToast]);

    return null;
}