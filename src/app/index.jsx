import React, { useState } from 'react';
import styles from './index.module.css';
import Container from '../components/container';
import TreeView from '../components/treeView';
import { tree } from '../tree';
import Tabs from '../components/tabs';

function App() {
	const [content, setContent] = useState("");

  	return (
      	<div className={styles.app}>
			<Container>
				<div className={styles.content}  pos="left">
					<TreeView tree={tree} setContent={setContent}/>
				</div>
				<div className={styles.content} pos="right">{content}</div>
				<div className={styles.content} pos="bottom">
					<Tabs tabs={[
						{id: "tab1", name: "Tab1"},
						{id: "tab2", name: "Tab2"},
						{id: "tab3", name: "Tab3"}
					]}>
						<div tabid="tab1">Tab1</div>
						<div tabid="tab2" default>Tab2</div>
						<div tabid="tab3">Tab3</div>
					</Tabs>
				</div>
			</Container>
      	</div>
  	)
}

export default App
