import React, { useEffect, useRef, useState } from "react";
import styles from './index.module.css';
import TreeNode from "./treeNode";

const TreeView = ({tree , setContent}) => {
    const [expanded, setExpanded] = useState(false);
    const [activePath, setActivePath] = useState([]);
    const details = useRef();

    const hanldeToggle = () => {
        details.current.forEach(detail => (
            (expanded && detail.hasAttribute('open')) ? 
                detail.removeAttribute('open') 
                : 
                (!expanded && !detail.hasAttribute('open')) && detail.setAttribute('open', true)
        ));
        setExpanded(!expanded);
    }

    const checkToggle = () => {
        if(Array.from(details.current).filter(detail => (detail.hasAttribute('open'))).length > 0) setExpanded(true);
        else setExpanded(false);
    }

    useEffect(() => {
        if(!details.current) {
            details.current = document.querySelectorAll('details');
            details.current.forEach(detail => {
                detail.addEventListener("toggle", checkToggle);
            })
        }
    }, []);

    let sign = expanded ? "-" : "+";
    let text = expanded ? "Collapse" : "Expand";

    return (
        <div className={styles.treeView}>
            <a onClick={hanldeToggle} className={styles.expand}>
                <><span>{sign}</span><span>{text} all</span></>
            </a>
            <hr />
            <TreeNode nodes={tree} activePath={activePath} setActivePath={setActivePath} setContent={setContent} />
        </div>
    )
}

export default TreeView;