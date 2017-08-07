var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p> This is a Weather App built on React
                I have built this for 
                The Complete React Web Developer Course. 
            </p>
            <p>Here some of used tools </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                    - Javascript framework used
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a>
                    - Open Weather Map to search for weather by city name
                </li>
            </ul>
        </div>
    );
};

module.exports = About;