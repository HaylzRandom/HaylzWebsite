const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: './',
	title: 'HM',
};

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Hayley McCafferty',
	role: 'Aspiring Web Developer',
	description:
		'A highly motivated individual who has self-taught herself the skills required to be a web developer in order to change career after being unfortunately made redundant.',
	resume:
		'https://drive.google.com/file/d/1J_3CS72oIiWswmRkUcRMvg13-KD3E5g5/view?usp=sharing',
	social: {
		linkedin: 'https://www.linkedin.com/in/hayleymcc/',
		github: 'https://github.com/HaylzRandom',
		blog: 'https://hashnode.com/@HaylzRandom',
	},
};

const projects = [
	// projects can be added an removed
	// if there are no projects, Projects section won't show up
	{
		name: 'Smart Brain',
		imageUrl: './screenshots/smartBrain.png',
		description:
			'A two part project with one project being front-end and another being back-end. Allows a user to register/log-in and enter an image for the face detection API to find',
		stack: ['React', 'JavaScript', 'HTML', 'CSS'],
		sourceCode: 'https://github.com/HaylzRandom/smart-brain-project',
		livePreview: 'https://haylz-smart-brain.herokuapp.com',
	},
	{
		name: 'E-Commerce',
		imageUrl: './screenshots/ecommerceProject.png',
		description: 'Project of a mock clothing store built using React along with utilising Stripe API and Styled Components',
		stack: ['React', 'JavaScript', 'HTML', 'CSS'],
		sourceCode: 'https://github.com/HaylzRandom/ecommerce-clothing-store',
		livePreview: 'https://haylz-ecommerce-store.herokuapp.com',
	},
	{
		name: 'Frontend Mentor Challenges',
		imageUrl: './screenshots/frontendMentor.png',
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
	'HTML5',
	'CSS3',
	'JavaScript',
	'SQL',
	'React',
	'Redux',
	'SASS',
	'Git',
	'GitHub',
	'Atlassian Products',
	'Visual Studio Code',
];

const training = [
	{
		name: 'The Complete Web Developer in 2022: Zero To Mastery',
		description:
			'Go from absolute beginner, learn to code and get hired as a Developer in 2022. This is the most modern, up-to-date coding bootcamp online. Guaranteed. You will learn HTML, CSS, JavaScript, React, Node.js, Machine Learning & much more. ',
		stack: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'React + Redux',
			'Git',
			'Node.js',
			'Express.js',
			'PostgresSQL',
			'SQL',
		],
		courseLink:
			'https://academy.zerotomastery.io/p/complete-web-developer-zero-to-mastery',
		certificateLink:
			'https://drive.google.com/file/d/10Gg_y7gS_MJcatoHimh-r-L2480ZGMjp/view?usp=sharing',
		githubLink: 'https://github.com/HaylzRandom/ZTM-CompleteWebDev',
	},
	{
		name: 'Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)',
		description:
			'Learn from React.js experts. This is the only React JS tutorial + projects course you need to learn React, build advanced large-scale applications from scratch & get hired as a React Developer in 2022. Go from Zero To React Mastery.',
		stack: [
			'React',
			'React Router',
			'Firebase',
			'Redux',
			'Stripe',
			'Styled Components',
			'SASS',
			'Heroku',
			'Redux-Saga',
			'Context API',
			'GraphQL',
		],
		courseLink:
			'https://academy.zerotomastery.io/p/complete-react-developer-redux-hooks-graphql-zero-to-mastery',
		certificateLink:
			'https://drive.google.com/file/d/1mieDfkVjGMnZDb9CqHuLXZ7bKarhKmLF/view?usp=sharing',
		githubLink: 'https://github.com/HaylzRandom/ecommerce-clothing-store',
	},
	{
		name: 'FreeCodeCamp - Responsive Web Design Certification',
		description:
			'Course covering the basics of responsive web design including accessibilty, web design principles and CSS layouts.  Topics included: HTML, CSS, Applied Visual Design, Applied Accessibility, Responsive Web Design Principles, Flexbox and Grid',
		stack: [
			'HTML5',
			'CSS3',
			'Accessibility',
			'Visual Design',
			'Responsive Web Design Principles',
		],
		courseLink: 'https://www.freecodecamp.org/learn/responsive-web-design/',
		certificateLink:
			'https://www.freecodecamp.org/certification/haylzrandom/responsive-web-design',
		githubLink:
			'https://github.com/HaylzRandom/ResponsiveWebDesignCertification',
	},
	{
		name: 'FreeCodeCamp - JavaScript Algorithms and Data Structures',
		description:
			'Course covering the fundamentals of JavaScript including ES6, regular expressions, debugging, functional and object oriented programming',
		stack: ['JavaScript', 'ES6'],
		courseLink:
			'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
		certificateLink:
			'https://www.freecodecamp.org/certification/haylzrandom/javascript-algorithms-and-data-structures',
		githubLink:
			'https://github.com/HaylzRandom/JavaScriptAlgorithmsDataStructures',
	},
	{
		name: '50 Projects in 50 Days - HTML, CSS & JavaScript',
		description:
			'Sharpen your skills by building 50 quick, unique & fun mini projects using HTML, CSS and JavaScript',
		stack: ['HTML5', 'CSS3', 'JavaScript'],
		courseLink:
			'https://www.udemy.com/share/103Pv23@660cMmYQBy0UeFI6WuvcDS1PK4Jqx_kcX29UROdOyJiouEGbQkXs14aGswH0Ec7Z/',
		certificateLink:
			'https://www.udemy.com/certificate/UC-95ab4929-779f-4782-b787-de77d03c876d/',
		githubLink: 'https://github.com/HaylzRandom/50projects-html-css-js',
	},

	{
		name: 'The Complete Junior to Senior Web Developer Roadmap (2022)',
		description:
			'Go from Junior Developer to Senior Developer. Learn all the technical and non-technical skills you need to become a Senior Web Developer in 2022!',
		stack: [
			'SSH',
			'React + Redux',
			'Webpack4 + Parcel',
			'Node.js + Express',
			'Typescript',
			'Docker',
			'Redis',
			'AWS',
		],
		courseLink:
			'https://academy.zerotomastery.io/p/the-complete-junior-to-senior-web-developer-roadmap',
		githubLink: 'https://github.com/HaylzRandom/ZTM-JuniorToSenior',
	},
];

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: 'contact@haylzrandom.co.uk',
};

export { header, about, projects, skills, training, contact };
