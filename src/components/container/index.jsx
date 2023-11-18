import React, { useState } from "react";
import styles from "./index.module.css";

const Container = ({children}) => {
    const [x, setX] = useState(300);
    const [y, setY] = useState(300);

    const style = {
        gridTemplateColumns: `${x}px 1fr`,
        gridTemplateRows: `1fr ${y}px`,
    }

    const handleX = (e) => {
        e.preventDefault();
        setX(Math.min(Math.max(e.x, 250), 800));
    }

    const handleY = (e) => {
        e.preventDefault();
        setY(Math.min(Math.max(parent.innerHeight - e.y, 250), 700));
    }

    const handleResize = (setter) => {
        const mouseup = () => {
            window.removeEventListener('mousemove', setter);
            window.removeEventListener('mouseup', mouseup);
        }
        window.addEventListener('mousemove', setter);
        window.addEventListener('mouseup', mouseup);
    }

    return (
        <div className={styles.container} style={style}>
            <aside className={styles.left}>
                {children.filter(child => child.props.pos === "left")}
            </aside>
            <div className={styles.leftAnchor} onMouseDown={() => handleResize(handleX)} />
            <main className={styles.right}>
                {children.filter(child => child.props.pos === "right")}
            </main>
            <aside className={styles.bottom}>
                {children.filter(child => child.props.pos === "bottom")}
            </aside>
            <div className={styles.bottomAnchor} onMouseDown={() => handleResize(handleY)} />
        </div>
    )
}

export default Container;