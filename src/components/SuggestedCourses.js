import '../style/Block.css';
import '../style/SuggestedCourses.css';
import SuggestedCourseCard from './SuggestedCourseCard.js';
import imgHug from '../images/hug.png';
import imgCats from '../images/cats.png';
import data from '../data/suggested-courses.json';

function SuggestedCourses() {
    const images = {
        hug: imgHug,
        cats: imgCats
    }

    return (
        <div className="block suggested-courses">
            <h2>Suggested courses</h2>
            <select>
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
            <div className="courses-list">
                {data.map((item, index) =>
                    <SuggestedCourseCard
                        key={index}
                        data={item}
                        imgSource={images[item.img]} />)}
            </div>
        </div>
    );
}

export default SuggestedCourses;
