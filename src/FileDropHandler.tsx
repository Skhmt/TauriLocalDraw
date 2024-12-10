import { Editor, useDialogs, useEditor, useToasts } from "@tldraw/tldraw";
import { parseDecompressBlob, parseString } from "./fileLoaderUtils.ts";
import { useEffect } from "react";
import { OpenDialog } from "./createOpenDialog.tsx";

export default function FileDropHandler() {
    const editor = useEditor();
    const { addToast } = useToasts();
    const { addDialog } = useDialogs();

    useEffect(() => {
        // @ts-expect-error editor.externalContentHandlers does actually exist
        const defaultOnDrop = editor.externalContentHandlers['files'];

        editor.registerExternalContentHandler('files', async (content) => {
            const { files } = content;
            const file = files[0];
            if (!file) return;

            if (file.name.endsWith('.tldr')) {
                addDialog({ component: createTldrDialog(editor, file, addToast) });
            }
            else if (file.name.endsWith('.tldz')) {
                addDialog({ component: createTldzDialog(editor, file, addToast) });
            }
            else {
                defaultOnDrop?.(content);
            }
        });
    }, [editor, addDialog, addToast]);

    return null;
}

function createTldrDialog(editor: Editor, file: File, addToast: any) {
    return ({ onClose }: { onClose(): void }) => {
        return OpenDialog(onClose, async () => {
            const json = await file.text();
            parseString(json, editor, addToast);
            addToast({ title: `"${file.name}" loaded`, severity: 'success' });
            onClose();
        })
    }
}

function createTldzDialog(editor: Editor, file: File, addToast: any) {
    return ({ onClose }: { onClose(): void }) => {
        return OpenDialog(onClose, async () => {
            const blob = new Blob([file]);
            await parseDecompressBlob(blob, editor, addToast);
            addToast({ title: `"${file.name}" loaded`, severity: 'success' });
            onClose();
        })
    }
}