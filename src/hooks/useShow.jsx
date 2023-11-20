import { useEffect, useRef, useState } from "react";

/**
 * Hook for controlling the display of a component with event handlers 
 * for clicking outside the ref and pressing Escape. Set `danger` true
 * to remove the event handlers and force user interaction.
 * 
 * @param {boolean} [danger] - optional param to turn off event handlers.
 * @returns {[showRef, show, setShow]} a ref to attach to a DOM element, a stateful boolean, and a function to set it.
 */

export const useShow = (danger = false) => {
    const showRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleEscape = (e) => {
        if(e.code === "Escape") setShow(false);
    }
    const handleOutside = (e) => {
        if(showRef.current && !showRef.current.contains(e.target)) setShow(false);
    }

    useEffect(() => {
        if(show && !danger){
            window.addEventListener("keydown", handleEscape);
            window.addEventListener("mousedown", handleOutside);
            
            return () => {
                window.removeEventListener("keydown", handleEscape);
                window.removeEventListener("mousedown", handleOutside);
            }
        }
    },[show, danger]);

    return [ showRef, show, setShow ];
}