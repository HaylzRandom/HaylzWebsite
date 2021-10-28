import { useEffect, useState } from 'react';
import { BsArrowUpCircle as ArrowUp } from 'react-icons/bs';

import './ScrollToTop.css';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return isVisible ? (
		<div className='scroll-top'>
			<a href='#top' className='link link--icon'>
				<ArrowUp style={{ fontSize: '1.9rem' }} />
			</a>
		</div>
	) : null;
};

export default ScrollToTop;
