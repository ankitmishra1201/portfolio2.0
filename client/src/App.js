
import './App.css';
import { Landing } from './Landing/landing.tsx';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import {React,useState,useEffect} from 'react';

function App() {
  const [isLoading, setLoading] = useState(true);

  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }


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
