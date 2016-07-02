var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    //var updates = {};
    var location = this.refs.location.value;
    //var temp = this.refs.temp.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
    //if (message.length > 0) {
      //this.refs.message.value = '';
      //updates.message = message;
    //}
      //this.props.onNewData(updates);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter city name"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
