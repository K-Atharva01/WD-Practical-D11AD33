import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewUpdates from './components/NewUpdates';
import History from './components/History'
import Teacher from './components/Teacher';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  let content

  switch (window.location.pathname) {
    // case "/":
    //   content = <Home />
    //   break
    case "/NewUpdates":
      content = <NewUpdates />
      break
    case "/History":
      content = <History />
      break
    // case "/Profile":
    //   content = <Profile />
    //   break
    case "/Teacher":
      content = <Teacher />
      break
  }

  return (
    <div className="App">
      <Navbar />
      <main className='maincontent'>
        {content}
      </main>
    </div>
  );
}

export default App;

