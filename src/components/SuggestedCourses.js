import '../style/Block.css';
import '../style/SuggestedCourses.css';

function SuggestedCourses() {
    return (
        <div className="block suggested-courses">
            <h2>Suggested courses</h2>
            <select>
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
            <div className="courses-list">
                <div className="item">
                    SUGGESTED COURSES
                </div>
                <div className="item">
                    SUGGESTED COURSES
                </div>
            </div>
        </div>
    );
}

export default SuggestedCourses;
