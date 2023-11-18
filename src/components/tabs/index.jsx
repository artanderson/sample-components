import React, { useState } from "react";
import styles from './index.module.css';
import clsx from "clsx";

const Tabs = ({tabs, children}) => {
    const def = children.findIndex(child => child.props.default) ?? 0;
    const [activeTab, setActiveTab] = useState(def === -1 ? 0 : def);
    const tabRef = [];

    return (
        <div className={styles.tabs}>
            <div className={styles.tabItems}>
                {tabs.map((tab, idx) => {
                    tabRef.push(tab.id);
                    return <a key={tab.id} className={clsx(styles.tab, activeTab === idx && styles.active)} onClick={() => setActiveTab(idx)}>{tab.name}</a>
                })}
            </div>
            <div className={styles.tabPanel}>
                {children.filter(child => child.props.tabid === tabRef[activeTab])}
            </div>
        </div>
    )
}

export default Tabs;