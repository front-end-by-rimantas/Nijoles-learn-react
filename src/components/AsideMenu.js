import { useState } from 'react';
import AsideMenuItem from './AsideMenuItem.js';
import AsideFavoriteItem from './AsideFavoriteItem.js';
import imgBook from '../images/menu/book.png';
import imgInbox from '../images/menu/inbox.png';
import imgCart from '../images/menu/cart.png';
import imgShare from '../images/menu/share.png';
import imgStar from '../images/menu/star.png';
import '../style/AsideMenu.css';

function AsideMenu() {
    const menu = [
        { title: 'Courses', unique: 'menu-Courses', img: imgBook },
        { title: 'Inbox', unique: 'menu-Inbox', img: imgInbox },
        { title: 'Carts', unique: 'menu-Carts', img: imgCart },
        { title: 'Sharing', unique: 'menu-Sharing', img: imgShare },
        { title: 'Achivements', unique: 'menu-Achivements', img: imgStar },
    ];
    const favorite = [
        { title: 'IOS app design', unique: 'favorite-IOS', count: 10 },
        { title: 'Carts', unique: 'favorite-Carts', count: 7 },
        { title: 'UX reaseardh', unique: 'favorite-UX', count: 5 },
        { title: 'Principle', unique: 'favorite-Principle', count: 3 },
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
                    <AsideFavoriteItem key={item.unique}
                        active={item.unique === activeItem}
                        handleClick={updateActiveItem}
                        item={item} />
                )}
            </div>
        </aside>
    );
}

export default AsideMenu;
