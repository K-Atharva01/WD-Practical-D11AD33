//Create an app for scheduling appointments with businesses or professionals.

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MyForm from'./components/BookAppointment';
import MySchedule from './components/MySchedule';

function App() {
  let content

  switch (window.location.pathname) {
    case "/":
      content = <Home />
      break
    case "/BookAppointment":
      content = <MyForm />
      break
    case "/MySchedule":
      content = <MySchedule />
      break
    // case "/Profile":
    //   content = <Profile />
    //   break
  }

  return (
    <div className="App">
      <Header />
      <main className='maincontent'>
        {content}
      </main>
    </div>
  );
}

export default App;
