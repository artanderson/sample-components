import React from "react";
import styles from './index.module.css';
import clsx from "clsx";

const TreeNode = (props) => {
    const { nodes, activePath, setActivePath, setContent, depth = 0, path = [], active = null } = props;

    const handleSelect = (content, path) => {
        setContent(content);
        setActivePath(path);
    }

    return (
    nodes.map((node, idx) => {
        let newPath = [...path, idx];
        let newActive = active !== null ? (active && activePath[depth] === idx) : activePath[depth] === idx;

        let onclick = {
            onClick: () => handleSelect(node.content, newPath)
        }

        return (
            node.children ?
            <details className={styles.nodeDetails} key={idx}>
                <summary data-open="-" data-closed="+" className={clsx(newActive && "active")}><span {...(node.content ? onclick : {})}>{node.name}</span></summary>
                <div className="treeBar">
                    <TreeNode {...props}  nodes={node.children} depth={depth + 1} path={newPath} active={newActive} />
                </div>
            </details>
            :
            <a key={idx} className={clsx(newActive && "active", styles.nodeElem)} {...onclick}>{node.name}</a>
        )
    }))
}

export default TreeNode;