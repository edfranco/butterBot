import React, { Component } from 'react';
import './home.css';
import './github.svg';
import './linkedin-logo.svg'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                        <div className="logo">
                            
                                <span className="Butter">Butter</span>
                                <span className="Bot">Bot</span>
                        </div>
                            <img src={require('./github.svg')} />
                            <img src={require('./linkedin-logo.svg')} />
                </div>

                <nav>
                    <a className='nav-items'>Home</a>
                    <a className='nav-items'>About</a>
                    <a className='nav-items'>Stats</a>
                    <a className='nav-items'>Contact Us</a>
                </nav>

                <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </React.Fragment>
        );
    }
}

export default Home;