import React, { useState } from 'react';
import styles from './index.module.css';
import Container from '../components/container';
import TreeView from '../components/treeView';
import { tree } from '../tree';
import Tabs from '../components/tabs';
import { useModal } from '../hooks/useModal';

function App() {
	const [content, setContent] = useState("");
	const Modal = useModal();
	const OtherModal = useModal();

  	return (
      	<div className={styles.app}>
			<Container>
				<div className={styles.content}  pos="left">
					<TreeView tree={tree} setContent={setContent}/>
					<button onClick={Modal.open}>Click</button>
					<Modal.Modal>This is a test</Modal.Modal>
					<button onClick={OtherModal.open}>Other Click</button>
					<OtherModal.Modal>Other Modal test<button onClick={OtherModal.close}>Close</button></OtherModal.Modal>
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
