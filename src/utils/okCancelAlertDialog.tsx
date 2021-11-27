import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { nanoid } from 'nanoid'

// https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680
// https://levelup.gitconnected.com/how-to-build-a-generic-reusable-synchronous-like-confirmation-dialog-in-react-js-71e32dfa495c

interface OkCancelAlertDialogInterface {
    title?: string,
    body?: string,
    okCallback?: () => void,
    cancelCallback?: () => void,
    okLabel?: string,
    cancelLabel?: string,
    isDestructiveAction?: boolean,
    backdropDismissible?: boolean,
}

interface OkCancelAlertReturnInterface {
    present: (_props?: OkCancelAlertDialogInterface) => void,
    dismiss: DialogProps['onClose'],
    output: JSX.Element,
    props: OkCancelAlertDialogInterface,
}

/**
 * Creates an OK - Cancel alert dialog
 * 
 * @example
 * // Props from alertDialog init
 * const alert = okCancelAlertDialog({
 *     title: "DELETE",
 *     body: "Are you sure you want to DELETE this item?",
 *     okCallback: async () => {
 *         console.log("DELETE", resource)
 *     },
 * })
 * 
 * // Props after alertDialog initialized. This can be done multiple times in the same compo
 * const alert = okCancelAlertDialog()
 * const handleDelete = (resource: any) => {
 *     alert.present({
 *         title: "DELETE",
 *         body: "Are you sure you want to DELETE this item?",
 *         okCallback: async () => {
 *             console.log("DELETE", resource)
 *         },
 *     })
 * }
 * 
 * @param props 
 * @returns `OkCancelAlertReturnInterface`
 */
export default function okCancelAlertDialog(props?: OkCancelAlertDialogInterface): OkCancelAlertReturnInterface {
    // TODO: translate
    const DEFAULT_PROPS: OkCancelAlertDialogInterface = {
        title: "",
        body: "",
        okLabel: "OK",
        cancelLabel: "Cancel",
        isDestructiveAction: false,
        backdropDismissible: true,
    }

    /**
     * Let's store the props in a local state which can later be
     * updated using the `setStateProps` dispatcher
     */
    const [stateProps, setStateProps] = React.useState({ ...DEFAULT_PROPS, ...(props || {}) })

    const { title, body, okCallback, cancelCallback, okLabel, cancelLabel, isDestructiveAction, backdropDismissible } = stateProps

    const [open, setOpen] = React.useState(false);
    const dialogEl = React.useRef(null);
    const titleId = (() => `alert-dialog-title-${nanoid()}`)()
    const descriptionId = (() => `alert-dialog-description-${nanoid()}`)()

    const present = (customProps?: OkCancelAlertDialogInterface) => {
        console.log("PROPERTIES", { props, customProps })

        /**
         * If initialized like this `const alert = okCancelAlertDialog({...})`, and then
         * alert.present({...}) is called with `customProps` then the state from the initial
         * `alert` init will be lost forever. In a situation like this, use a different `alert`
         * 
         * `!customProps && props` ==> `props` will be lost if `customProps` is set
         */

        if (customProps || (!props && !customProps)) {
            /**
             * It's important to do the rest operation in the order of
             * `stateProps > DEFAULT_PROPS > customProps`
             * 
             * So that whenever present is called, we automatically revert this dialog
             * to the general default state `DEFAULT_PROPS` and then replace that state with `customProps`
             */
            setStateProps({ ...stateProps, ...DEFAULT_PROPS, ...(customProps || {}) })
        }

        setOpen(true)
    }

    const dismiss: DialogProps['onClose'] = (_, reason) => {
        if (!backdropDismissible && ["backdropClick", "escapeKeyDown"].includes(reason)) return;

        setOpen(false)

        if (typeof cancelCallback === "function") cancelCallback()
    }

    const handleOkCallback = () => {
        if (typeof okCallback === "function") okCallback()
    }

    const output = (
        <div>
            <Dialog
                ref={dialogEl}
                open={open}
                onClose={dismiss}
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                maxWidth="sm"
                fullWidth
            >
                {!!title && <DialogTitle id={titleId}>
                    {title}
                </DialogTitle>}
                <DialogContent>
                    {!!body && <DialogContentText id={descriptionId}>
                        {body}
                    </DialogContentText>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => dismiss(e, "cancelBtnClick" as any)}>{cancelLabel}</Button>
                    <Button onClick={handleOkCallback} autoFocus color={isDestructiveAction ? 'error' : undefined}>
                        {okLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

    return { present, dismiss, output, props: stateProps }
}