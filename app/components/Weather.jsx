var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var self = this;
        self.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(err){
            self.setState({isLoading: false});
            alert('Can not find this city');
            console.log(err);
        });  
    },
    render : function(){
        var {isLoading, location, temp} = this.state;

        function renderMessage(){
            if(isLoading){
                return (<h3>Fetching data....</h3>);
            }else if(temp && location){
                return (<WeatherMessage location={location} temp={temp}/>);
            }
        }

        return (
            <div>
                <h3 className="text-center">Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;