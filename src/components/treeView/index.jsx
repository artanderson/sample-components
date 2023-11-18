import React, { useState } from "react";
import styles from './index.module.css';
import TreeNode from "../treeNode";

const TreeView = ({tree , setContent}) => {
    const [expanded, setExpanded] = useState(false);
    const [activePath, setActivePath] = useState([]);

    const hanldeToggle = () => {
        const details = document.querySelectorAll('details');
        details.forEach(detail => (
            (expanded && detail.hasAttribute('open')) ? 
                detail.removeAttribute('open') 
                : 
                (!expanded && !detail.hasAttribute('open')) && detail.setAttribute('open', true)
        ));
        setExpanded(!expanded);
    }

    let sign = expanded ? "-" : "+";
    let text = expanded ? "Collapse" : "Expand";

    return (
        <div id="treeView" className={styles.treeView}>
            <a onClick={hanldeToggle} className={styles.expand}>
                <><span>{sign}</span><span>{text} all</span></>
            </a>
            <hr />
            <TreeNode nodes={tree} activePath={activePath} setActivePath={setActivePath} setContent={setContent} />
        </div>
    )
}

export default TreeView;