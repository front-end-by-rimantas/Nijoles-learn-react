function AsideFavoriteItem(props) {
    const { active, handleClick, item } = props;
    const { title, unique, count } = item;

    return (
        <div className={'menu-item' + (active ? ' active' : '')}
            onClick={() => handleClick(unique)}
        >
            <span>{title}</span>
            <span>({count})</span>
        </div>
    );
}

export default AsideFavoriteItem;