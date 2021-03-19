import { useState } from 'react';
import AsideMenuItem from './AsideMenuItem.js';
import '../style/AsideMenu.css';

function AsideMenu() {
    const menu = [
        { title: 'Courses', unique: 'menu-Courses' },
        { title: 'Inbox', unique: 'menu-Inbox' },
        { title: 'Carts', unique: 'menu-Carts' },
        { title: 'Sharing', unique: 'menu-Sharing' },
        { title: 'Achivements', unique: 'menu-Achivements' },
    ];
    const favorite = [
        { title: 'IOS app design', unique: 'favorite-IOS' },
        { title: 'Carts', unique: 'favorite-Carts' },
        { title: 'UX reaseardh', unique: 'favorite-UX' },
        { title: 'Principle', unique: 'favorite-Principle' },
    ];
    const [activeItem, updateActiveItem] = useState('menu-Courses');

    return (
        <aside className="aside">
            <div className="title">Menu</div>
            <div className="menu-list">
                {menu.map(item =>
                    <AsideMenuItem key={item.unique}
                        active={item.unique === activeItem}
                        handleClick={updateActiveItem}
                        item={item} />
                )}
            </div>

            <div className="title">Favorite list</div>
            <div className="menu-list">
                {favorite.map(item =>
                    <AsideMenuItem key={item.unique}
                        active={item.unique === activeItem}
                        handleClick={updateActiveItem}
                        item={item} />
                )}
            </div>
        </aside>
    );
}

export default AsideMenu;
