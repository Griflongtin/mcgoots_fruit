import React from 'react';
// import ReactDOM from 'react-dom';
import Week from './Week';
import About from './About';
import Month from './Month';
import Day from './Day';
import farm from './../farm.jpg';


function App() {
  const appStyles = {
    display: 'flex',
    backgroundColor: 'pink'
  };
  const componentCard = {
    width: '33%',
    border: '1px solid black',
    margin: 10,
    padding: 20
  };

  return (
    <div >
      <div>
        <h1 className="title">McGoot's Fruit</h1>
        <style jsx>{`
            .title {
              text-align: center;
              height: 300px;
              padding: 2%;
              font-size: 100px;
              color: white;
              text-shadow: 1px 1px 1px black;
              background-image: url(${farm});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            `}</style>
      </div>
      <div style={appStyles}>
        <div style={componentCard}>
          <About />
        </div>
        <div style={componentCard}>
          <Day />
        </div>
        <div style={componentCard}>
          <Month />
        </div>
      </div>
      <div>
        <Week />
      </div>

    </div>
  );
}

export default App;
