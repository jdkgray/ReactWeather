var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This weather app was created using the following resources:</p>
      <ul>
        <li>
          <a href="http://openweathermap.org/api">Open Weather Map API</a>-I used this to gather weather information.
        </li>
        <li>
          <a href="https://github.com/">Git Hub</a>-This is where I store my code on the internet.
        </li>
        <li>
          <a href="https://www.heroku.com/home">Heroku</a>-This is where I deploy my app.
        </li>
      </ul>
      <p>I frequently check the weather for the following locations:</p>
      <ul>
        <li>
          <Link to='/?location=Pleasant Grove'>Pleasant Grove, UT</Link>
        </li>
        <li>
          <Link to='/?location=Salem'>Salem, OR</Link>
        </li>
        <li>
          <Link to='/?location=Lincoln City'>Lincoln City, OR</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
