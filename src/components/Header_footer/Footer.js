import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
function Footer(props) {
    return (
        <div className='footer font_righteous'>
            <div>
                This project was done by Abhijith,joann,shriram and vaishnav.
            </div>
            <div className='icon'> 
                <a href='https://github.com/slaybhi/intrusion-detection-stystem'>
                <GitHubIcon fontSize='large'/>
                </a>
            </div>
        </div>
    );
}

export default Footer;