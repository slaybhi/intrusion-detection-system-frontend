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
                    backgroundColor:'#0099cc',
                    boxShadow:'none',
                    padding:'10px 0px'
                }}
                >
                    <Toolbar>
                        <div className='header_logo'>
                            <div className='header_text'>
                                Tester Module
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;