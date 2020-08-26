import React from 'react';
import { Route, Switch } from 'react-router-dom' 
import './scss/App.scss'

// pages
import Overview from './pages/Overview'
import Calendar from './pages/Calendar'
import Subjects from './pages/Subjects'
import Teachers from './pages/Teachers'
import TimeTable1 from './pages/TimeTable1'
import TimeTable2 from './pages/TimeTable2'

// components
import Nav from './components/Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route path="/subjects" component={Subjects} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/timetable" component={TimeTable1} />
          <Route path="/timetables" component={TimeTable2} />
          <Route path="/" component={Overview} exact={true} />
        </Switch>
    </div>
  );
}

export default App;
