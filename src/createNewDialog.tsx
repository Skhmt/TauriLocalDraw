import { Editor, transact, TldrawUiDialogHeader, TldrawUiDialogTitle, TldrawUiDialogCloseButton, TldrawUiDialogBody, TldrawUiDialogFooter, TldrawUiButton, TldrawUiButtonLabel } from "@tldraw/tldraw";

export function createNewDialog(editor: Editor) {
    return ({ onClose }: { onClose(): void }) => {
        const newProj = () => {
            transact(() => {
                editor.loadSnapshot({ store: {}, schema: editor.store.schema.serialize() });
                editor.clearHistory();
            });
            onClose();
        }

        return (
            <>
                <TldrawUiDialogHeader>
                    <TldrawUiDialogTitle>
                        <strong>Clear current project?</strong>
                    </TldrawUiDialogTitle>
                    <TldrawUiDialogCloseButton />
                </TldrawUiDialogHeader>
                <TldrawUiDialogBody style={{ maxWidth: 350 }}>
                    Creating a new project will clear your current project and
                    any unsaved changes will be lost. Are you sure you want to
                    continue?
                </TldrawUiDialogBody>
                <TldrawUiDialogFooter className="tlui-dialog__footer__actions">
                    <TldrawUiButton type="normal" onClick={onClose}>
                        <TldrawUiButtonLabel>Cancel</TldrawUiButtonLabel>
                    </TldrawUiButton>
                    <TldrawUiButton type="primary" onClick={newProj}>
                        <TldrawUiButtonLabel>New project</TldrawUiButtonLabel>
                    </TldrawUiButton>
                </TldrawUiDialogFooter>
            </>
        )
    }
}