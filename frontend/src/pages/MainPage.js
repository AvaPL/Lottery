import React from 'react';
import './MainPage.css';

class MainPage extends React.Component {
    render() {
        return (
            <div className="MainPage">
                <div className="vertical-center">
                    <span className="quote">You must play boldly to win.<br/></span>
                    <span className="quote-author">- Arnold Palmer</span>
                </div>
            </div>
        );
    }
}

export default MainPage;
