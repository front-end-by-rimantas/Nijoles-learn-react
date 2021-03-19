function AsideMenuItem(props) {
    const { active, handleClick, item } = props;
    const { title, unique, img } = item;

    return (
        <div className={'menu-item' + (active ? ' active' : '')}
            onClick={() => handleClick(unique)}
        >
            <img src={img} alt="" />
            <span>{title}</span>
        </div>
    );
}

export default AsideMenuItem;