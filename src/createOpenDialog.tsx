import { Editor, parseTldrawJsonFile, TldrawUiButton, TldrawUiButtonLabel, TldrawUiDialogBody, TldrawUiDialogCloseButton, TldrawUiDialogFooter, TldrawUiDialogHeader, TldrawUiDialogTitle } from "@tldraw/tldraw";

export function createOpenDialog(editor: Editor) {
    return ({ onClose }: { onClose(): void }) => {
        const open = () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.onchange = function () {
                const files = input.files;
                if (!files || files.length <= 0) return;

                const reader = new FileReader();
                reader.onload = async (event) => {
                    const result = event.target?.result as string;
                    if (result) {
                        const parseFileResult = parseTldrawJsonFile({
                            schema: editor.store.schema,
                            json: result,
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
                };
                reader.readAsText(files[0]);
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