function AsideMenuItem(props) {
    const { active, handleClick, item } = props;
    const { title, unique } = item;

    return (
        <div className={'menu-item' + (active ? ' active' : '')}
            onClick={() => handleClick(unique)}
        >
            {title}
        </div>
    );
}

export default AsideMenuItem;