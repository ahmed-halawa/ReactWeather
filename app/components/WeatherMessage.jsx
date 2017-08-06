var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (
            <div>
                <h3 className="text-center"> it is a {temp} in {location} . </h3>
            </div>
        );
};

module.exports = WeatherMessage;