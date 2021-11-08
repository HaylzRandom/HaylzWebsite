import {
	FaGithub as GitHubIcon,
	FaLinkedin as LinkedInIcon,
} from 'react-icons/fa';
import { BsPencilSquare as BlogIcon } from 'react-icons/bs';

import { about } from '../../portfolio';
import './About.css';

const About = () => {
	const { name, role, description, resume, social } = about;

	return (
		<div className='about center'>
			{name && (
				<h1>
					Hi, I am <span className='about__name'>{name}</span>
				</h1>
			)}

			{role && <h2 className='about__role'>A {role}.</h2>}
			<p className='about__desc'>{description && description}</p>

			<div className='about__contact center'>
				{resume && (
					<a
						href={resume}
						target='_blank'
						rel='noreferrer'
						title='Coming Soon!'>
						<span type='button' className='btn btn--outline'>
							Resume
						</span>
					</a>
				)}

				{social && (
					<>
						{social.github && (
							<a
								href={social.github}
								className='link link--icon'
								target='_blank'
								rel='noreferrer'
								title='GitHub Profile'>
								<GitHubIcon />
							</a>
						)}

						{social.linkedin && (
							<a
								href={social.linkedin}
								className='link link--icon'
								target='_blank'
								rel='noreferrer'
								title='LinkedIn Profile'>
								<LinkedInIcon />
							</a>
						)}

						{social.blog && (
							<a
								href={social.blog}
								className='link link--icon'
								target='_blank'
								rel='noreferrer'
								title='My Blog Profile'>
								<BlogIcon />
							</a>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default About;
