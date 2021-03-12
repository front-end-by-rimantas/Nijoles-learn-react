function RunningCoursesCard(props) {
    const { itemData } = props;
    const { label, title, author, progress } = itemData;

    return (
        <div className="card">
            <div className="label">{label}</div>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="progress">{progress}</div>
        </div>
    );
}

export default RunningCoursesCard;
