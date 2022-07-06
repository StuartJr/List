import React from 'react';
import List from './List';
import './List.tsx';

const App: React.FC = () => {

	const visibleRows: number = 3;
	const rowHeght: number = 200;
	const list: Array<any> = Array.from(Array(10000).keys());

	const setRandomColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	}

	list.map((item:any, id:number) => {
		return (
			list[id] = {
				id: id,
				color: setRandomColor(),
			}
		)
	})

	return (
		<div className='container'>
			<div className='wrapper flex-center'>
				<List list={list}
							visibleRows={visibleRows}
							rowHeght={rowHeght}></List>
			</div>
		</div>
	)
};

export default App;