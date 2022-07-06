import React, { useEffect, useRef, useState } from 'react';

interface ListInt {
	id: number;
	color: string;
}

interface Props {
	list: Array<ListInt>;
	visibleRows: number;
	rowHeght: number;
}

const List: React.FC<Props> = ({list, visibleRows, rowHeght}) => {

	const [start, setStart] = useState(0);
	const currentRef = useRef<HTMLDivElement>(null);

	const getTopHeight = () => {
		return start * rowHeght;
	}

	const getBottomHeight = () => {
		return rowHeght * (list.length - (visibleRows + start));
	}

	const onScroll = (e: any) => {
		setStart(Math.floor(e.target.scrollTop / rowHeght))
	}

	useEffect(() => {
		const ref = currentRef.current;
		ref?.addEventListener('scroll', onScroll);

		return () => {
			ref?.removeEventListener('scroll', onScroll);
		}
	})

	return (
		<div ref={currentRef} className='list scrollbar' style={{height: rowHeght * visibleRows}}>
			<div className="list__empty" style={{height: getTopHeight()}} />
			<div className="list__wrapper">
				{list.slice(start, start + visibleRows + 1).map((item) => 
					<div className="list__item flex-center" 
							style={{backgroundColor: item.color, height: rowHeght}}
							 key={item.id}>
						<div className="list__img flex-center">
							<p className="list__name">{item.id}</p>
						</div>
						<p className="list__text">Name_{item.id}</p>
					</div>
				)}
			</div>
			<div className="list__empty" style={{height: getBottomHeight()}} />
		</div>
	)
};

export default List;