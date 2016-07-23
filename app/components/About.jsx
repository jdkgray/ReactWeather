var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This weather app was created using the following resources:</p>
      <ol>
        <li>
          <a href="http://openweathermap.org/api">Open Weather Map API</a>
        </li>
        <li>
          <a href="https://github.com/">Git Hub</a>
        </li>
        <li>
          <a href="https://www.heroku.com/home">Heroku</a>
        </li>
      </ol>
      <p>I frequently check the weather for the following locations:</p>
      <ol>
        <li>
          <Link to='/?location=Pleasant Grove'>Pleasant Grove, UT</Link>
        </li>
        <li>
          <Link to='/?location=Salem'>Salem, OR</Link>
        </li>
        <li>
          <Link to='/?location=Lincoln City'>Lincoln City, OR</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
