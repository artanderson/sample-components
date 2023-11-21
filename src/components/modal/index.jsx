import React, { forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";
import clsx from "clsx";

const Modal = forwardRef((props, ref) => {
    const portalRef = useRef(document.createElement("div"));
    const { open, show, children} = props;

    useEffect(() => {
        portalRef.current.classList.add("portal");
        document.body.appendChild(portalRef.current);
        return () => {
            document.body.removeChild(portalRef.current);
        }
    }, [])

    return (
        open && createPortal(
            <div className={styles.modalContainer}>
            <div className={clsx(styles.modalBackground, show && styles.modalBackgroundOpen)}/>
            <div className={clsx(styles.modalMain, show && styles.modalMainOpen)} ref={ref}>{children}</div>
            </div>, portalRef.current
        )
    )
})

export default Modal;