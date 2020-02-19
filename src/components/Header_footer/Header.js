import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                position='fixed'
                style={{
                    backgroundColor:'#70bcd6ce',
                    boxShadow:'none',
                    padding:'10px 0px'
                }}
                >
                    <Toolbar>
                        <div className='header_logo'>
                            <div className='header_text'>
                               <a href='/'> Tester Module</a>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;