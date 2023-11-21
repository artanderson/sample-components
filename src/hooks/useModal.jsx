import { useState } from "react";
import { useShow } from "./useShow";

/**
 * Hook for controlling a Modal. Set `danger` true
 * to remove the event handlers and force user interaction.
 * 
 * @see useShow
 * 
 * @param {boolean} [danger] - optional param to turn off event handlers.
 * @returns {{props: {open, show, closeModal}, ref: showRef, open: openModal, close: closeModal}} a modal Component in a portal and functions to control its open state.
 */

export const useModal = (danger = false) => {
    const [open, setOpen] = useState(false);
    
    const callback = () => {
        setTimeout(() => setOpen(false), 300)
    };
    
    const [ showRef, show, setShow ] = useShow(danger, callback);

    const openModal = () => {
        setOpen(true);
        setTimeout(() => setShow(true), 100);
    }
    const closeModal = () => {
        setShow(false);
        setTimeout(() => setOpen(false), 300);
    }

    return { props: {open, show, closeModal, danger}, ref: showRef, open: openModal, close: closeModal }
}