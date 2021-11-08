import uniqid from 'uniqid';

import {
	FaGithub as GitHubIcon,
	FaAward as CertificateIcon,
} from 'react-icons/fa';
import { MdLaunch as LaunchIcon } from 'react-icons/md';

import './TrainingContainer.css';

const TrainingContainer = ({ training }) => (
	<div className='training'>
		<h3>{training.name}</h3>
		<p className='training__description'>{training.description}</p>

		{training.stack && (
			<ul className='training__stack'>
				{training.stack.map((skill) => (
					<li key={uniqid()} className='training__stack-item btn--plain'>
						{skill}
					</li>
				))}
			</ul>
		)}

		{training.courseLink && (
			<a
				href={training.courseLink}
				className='link link--icon'
				target='_blank'
				rel='noreferrer'
				title='Course Website'>
				<LaunchIcon />
			</a>
		)}

		{training.certificateLink && (
			<a
				href={training.certificateLink}
				className='link link--icon'
				target='_blank'
				rel='noreferrer'
				title='Certificate of Completion'>
				<CertificateIcon />
			</a>
		)}

		{training.githubLink && (
			<a
				href={training.githubLink}
				className='link link--icon'
				target='_blank'
				rel='noreferrer'
				title='GitHub Repo for coursework'>
				<GitHubIcon />
			</a>
		)}
	</div>
);

export default TrainingContainer;
