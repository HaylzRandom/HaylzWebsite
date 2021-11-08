import uniqid from 'uniqid';

import { MdLaunch as LaunchIcon } from 'react-icons/md';
import { FaGithub as GitHubIcon } from 'react-icons/fa';

import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
	<div className='project'>
		<h3>{project.name}</h3>
		{project.imageUrl && (
			<img
				className='project__image'
				src={project.imageUrl}
				alt={project.name}
			/>
		)}
		<p className='project__description'>{project.description}</p>

		{project.stack && (
			<ul className='project__stack'>
				{project.stack.map((item) => (
					<li key={uniqid()} className='project__stack-item btn--plain'>
						{item}
					</li>
				))}
			</ul>
		)}

		{project.sourceCode && (
			<a
				href={project.sourceCode}
				aria-label='source code'
				className='link link--icon'
				target='_blank'
				rel='noreferrer'
				title='GitHub Repo'>
				<GitHubIcon />
			</a>
		)}

		{project.livePreview && (
			<a
				href={project.livePreview}
				aria-label='live preview'
				className='link link--icon'
				target='_blank'
				rel='noreferrer'
				title='Live Preview'>
				<LaunchIcon />
			</a>
		)}
	</div>
);

export default ProjectContainer;
