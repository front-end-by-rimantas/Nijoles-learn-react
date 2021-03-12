import '../style/Block.css';
import '../style/RunningCourses.css';
import data from '../data/running-courses.json';
import RunningCoursesCard from './RunningCoursesCard.js';

function RunningCourses() {
    return (
        <div className="block running-courses">
            <h2>Running courses</h2>
            <button type="button">Filters</button>
            <div className="card-list">
                {data.map((item, index) => <RunningCoursesCard key={index} itemData={item} />)}
            </div>
        </div>
    );
}

export default RunningCourses;