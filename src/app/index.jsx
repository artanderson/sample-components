import React, { useState } from 'react';
import styles from './index.module.css';
import Container from '../components/container';
import TreeView from '../components/treeView';
import { tree } from '../tree';
import Tabs from '../components/tabs';
import { useModal } from '../hooks/useModal';
import Modal from '../components/modal';

function App() {
	const [content, setContent] = useState("");
	const { props, ref, open, close } = useModal();

  	return (
      	<div className={styles.app}>
			<Container>
				<div className={styles.content}  pos="left">
					<TreeView tree={tree} setContent={setContent}/>
					<button onClick={open}>Click</button>
					<Modal {...props} ref={ref}>
						This is a test
					</Modal>
				</div>
				<div className={styles.content} pos="right">{content}</div>
				<div className={styles.content} pos="bottom">
					<Tabs tabs={[
						{id: "tab1", name: "Tab 1"},
						{id: "tab2", name: "Tab 2"},
						{id: "tab3", name: "Tab 3"}
					]}>
						<div tabid="tab1">Tab 1 content.</div>
						<div tabid="tab2" default>Tab 2 content, set as default.</div>
						<div tabid="tab3">Tab 3 content.</div>
					</Tabs>
				</div>
			</Container>
      	</div>
  	)
}

export default App
