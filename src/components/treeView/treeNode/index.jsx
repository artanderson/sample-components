import React from "react";
import styles from './index.module.css';
import clsx from "clsx";

const TreeNode = (props) => {
    const { nodes, activePath, setActivePath, setContent, depth = 0, path = [], active = null } = props;

    const handleSelect = (content, path) => {
        setContent(content);
        setActivePath(path);
    }

    const left = (20 * depth) + 10;

    return (
    nodes.map((node, idx) => {
        let newPath = [...path, idx];
        let newActive = active !== null ? (active && activePath[depth] === idx) : activePath[depth] === idx;
        let selected = (newActive && activePath.length === depth + 1);
        let onclick = node.content ? { onClick: () => handleSelect(node.content, newPath) } : {}

        return (
            node.children ?
            <details className={styles.nodeDetails} key={idx}>
                <summary data-open={"\u2212"} data-closed={"\u002B"} className={clsx(newActive && styles.active, selected && styles.selected)} style={{left: `-${left}px`}} ><span  className={styles.nodeName} {...onclick}>{node.name}</span></summary>
                <div className={styles.nodeContent}>
                    <TreeNode {...props}  nodes={node.children} depth={depth + 1} path={newPath} active={newActive} />
                </div>
            </details>
            :
            <a key={idx} className={clsx(newActive && styles.active, selected && styles.selected, styles.nodeElem)} {...onclick} style={{left: `-${left - 20}px`}} ><span className={styles.nodeName}>{node.name}</span></a>
        )
    }))
}

export default TreeNode;