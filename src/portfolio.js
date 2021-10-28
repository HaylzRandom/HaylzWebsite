const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: './',
	title: 'HM',
};

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Hayley McCafferty',
	role: 'Self-Learning Web Developer',
	description:
		'A highly motivated individual who has self-taught herself the skills required to be a web developer.',
	resume: '#',
	social: {
		linkedin: 'https://www.linkedin.com/in/hayleymcc/',
		github: 'https://github.com/HaylzRandom',
	},
};

const projects = [
	// projects can be added an removed
	// if there are no projects, Projects section won't show up
	{
		name: 'Smart Brain',
		description:
			'Project built to recognise faces in any image that is uploaded',
		stack: ['React', 'JavaScript', 'HTML', 'CSS'],
		sourceCode: 'https://github.com/HaylzRandom/smart-brain-project',
		livePreview: 'https://haylz-smart-brain.herokuapp.com',
	},
	{
		name: 'E-Commerce',
		imageUrl: '././images/frontPage.png',
		description: 'React project of a mock clothing store website',
		stack: ['React', 'JavaScript', 'HTML', 'CSS'],
		sourceCode: 'https://github.com/HaylzRandom/ecommerce-clothing-store',
		livePreview: 'https://haylz-ecommerce-store.herokuapp.com',
	},
	{
		name: 'Frontend Mentor Challenges',
		description:
			'A selection of challenges from frontendmentor.io that utilises different frontend skills',
		stack: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
		sourceCode: 'https://github.com/HaylzRandom/frontend-mentor-challenges',
		livePreview: 'https://haylzrandom.github.io/frontend-mentor-challenges/',
	},
];

const skills = [
	// skills can be added or removed
	// if there are no skills, Skills section won't show up
	'HTML',
	'CSS',
	'JavaScript',
	'SQL',
	'React',
	'Redux',
	'SASS',
	'Git',
];

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: 'contact@haylzrandom.co.uk',
};

export { header, about, projects, skills, contact };
