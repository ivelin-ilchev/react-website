import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="main">
          <div className="logo">
            <img src="images/logo.jpg" alt="logo" />
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100000875270810">Contact</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>
        </div>
        <div className="title">
          <h1>Website</h1>
        </div>

        <div className="button">
          <a href="https://www.youtube.com/" className="btn">Watch video</a>
          <a href="#" className="btn">Learn more</a>
        </div>
      </header>
    </div>
  );
}

export default App;
