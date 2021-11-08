import { useContext, useState } from 'react';
import { MdBrightness2 as DarkModeIcon } from 'react-icons/md/';
import { BsFillBrightnessHighFill as DayModeIcon } from 'react-icons/bs';
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi';
import { GrClose as CloseIcon } from 'react-icons/gr';
import { ThemeContext } from '../../contexts/theme';
import { projects, skills, contact, training } from '../../portfolio';

import './Navbar.css';

const Navbar = () => {
	const [{ themeName, toggleTheme }] = useContext(ThemeContext);
	const [showNavList, setShowNavList] = useState(false);

	const toggleNavList = () => setShowNavList(!showNavList);

	return (
		<nav className='center nav'>
			<ul
				style={{ display: showNavList ? 'flex' : null }}
				className='nav__list'>
				{projects.length ? (
					<li className='nav__list-item'>
						<a
							href='#projects'
							onClick={toggleNavList}
							className='link link--nav'>
							Projects
						</a>
					</li>
				) : null}

				{skills.length ? (
					<li className='nav__list-item'>
						<a
							href='#skills'
							onClick={toggleNavList}
							className='link link--nav'>
							Skills
						</a>
					</li>
				) : null}

				{training.length ? (
					<li className='nav__list-item'>
						<a
							href='#skills'
							onClick={toggleNavList}
							className='link link--nav'>
							Training
						</a>
					</li>
				) : null}

				{contact.email ? (
					<li className='nav__list-item'>
						<a
							href='#contact'
							onClick={toggleNavList}
							className='link link--nav'>
							Contact
						</a>
					</li>
				) : null}
			</ul>

			<button
				type='button'
				onClick={toggleTheme}
				className='btn btn--icon nav__theme'>
				{themeName === 'dark' ? <DayModeIcon /> : <DarkModeIcon />}
			</button>

			<button
				type='button'
				onClick={toggleNavList}
				className='btn btn--icon nav__hamburger'>
				{showNavList ? <CloseIcon /> : <MenuIcon />}
			</button>
		</nav>
	);
};

export default Navbar;
