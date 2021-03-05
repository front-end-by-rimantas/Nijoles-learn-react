import './App.css';
import Header from './components/Header.js';
import AsideMenu from './components/AsideMenu.js';
import Welcome from './components/Welcome.js';
import RunningCourses from './components/RunningCourses.js';
import SuggestedCourses from './components/SuggestedCourses.js';
import Activity from './components/Activity.js';

function App() {
  return (
    <div className="App">
      <Header />
      <AsideMenu />
      <main>
        <Welcome />
        <RunningCourses />
        <Activity />
        <SuggestedCourses />
      </main>
    </div>
  );
}

export default App;
