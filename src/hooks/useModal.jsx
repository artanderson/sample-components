import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useShow } from "./useShow";

/**
 * Hook for creating and controlling a Modal. Set `danger` true
 * to remove the event handlers and force user interaction.
 * 
 * @see useShow
 * 
 * @param {boolean} [danger] - optional param to turn off event handlers.
 * @returns {{Modal: Modal, open: openModal, close: closeModal}} a modal Component in a portal and functions to control its open state.
 */

export const useModal = (danger = false) => {
    const portalRef = useRef(document.createElement("div"));
    const [open, setOpen] = useState(false);
    const [showRef, show, setShow] = useShow(danger);
    
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    useEffect(() => {
        portalRef.current.classList.add("portal");
        document.body.appendChild(portalRef.current);
        return () => {
            document.body.removeChild(portalRef.current);
        }
    }, [])

    useEffect(() => {
        if(show) setOpen(true);
        else setTimeout(() => setOpen(false), 300);
    }, [show])

    const Modal = ({children}) => (
        createPortal(
            open && 
            <div className="modalContainer">
            <div className="modalBackground"/>
            <div className="modalMain" ref={showRef}>{children}</div>
            </div>, portalRef.current
        )
    )

    return { Modal, open: openModal, close: closeModal }
}