import uniqid from 'uniqid';

import { training } from '../../portfolio';
import TrainingContainer from '../TrainingContainer/TrainingContainer';

import './Training.css';

const Training = () => {
	if (!training.length) {
		return null;
	}

	return (
		<section id='trainings' className='section trainings'>
			<h2 className='section__title'>Training</h2>

			<div className='trainings__grid'>
				{training.map((course) => (
					<TrainingContainer training={course} key={uniqid()} />
				))}
			</div>
		</section>
	);
};

export default Training;
