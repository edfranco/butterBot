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

                        <div className="img">
                            <img id="img-1" src={require('./github.svg')} alt="" />
                            <img id="img-2" src={require('./linkedin-logo.svg')} alt="" />
                        </div>
                        
                    
                </div>

                <div className="nav">
                    <a href="#" className='nav-items'>Home</a>
                    <a href="#" className='nav-items'>About</a>
                    <a href="#" className='nav-items'>Stats</a>
                    <a href="#" className='nav-items'>Contact Us</a>
                </div>

                <div className="content">
                    <div className="left-placeholder">

                    </div>

                    <div className="center-placeholder">

                    </div>

                    <div className="right-placeholder">

                    </div>

                </div>

                
                <div className="footer">
                    <div className="licensing">
                        Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;