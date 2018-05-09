
import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

const Header = props => {
    return (
        <React.Fragment>
            <div className="menu-bar" >
                <MenuIcon 
                    className="menu-icon" />
                <h2>Scrape Reddit News</h2>
            </div>
            
        </React.Fragment>
    )
};

export default Header;