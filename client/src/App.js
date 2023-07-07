
import './App.css';
import { Landing } from './Landing/landing.tsx';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Landing />
        <div className="center full">
        <p className='spacing'>
          <h3 className='gray content'>Something is Cooking up !!</h3>
          <br></br>
          <h1 className='gray headline'>Coming Soon</h1>
        </p>
      </div>

      </ParallaxProvider>
    </div>
  );
}

export default App;
