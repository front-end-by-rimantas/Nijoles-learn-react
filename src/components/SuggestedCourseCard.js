function SuggestedCourseCard(props) {
    const { data, imgSource } = props;
    const { label, title, author, publishedOn } = data;
    const { year, month, day } = publishedOn;
    return (
        <div className="item">
            <img src={imgSource} alt="" />
            <div className="label">{label}</div>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="published">{year}-{month}-{day}</div>
        </div>
    )
}

export default SuggestedCourseCard;