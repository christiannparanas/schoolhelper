import React, { useState} from 'react'
import { Link } from 'react-router-dom'

// icon components
import CalendarIcon from './navIcons/CalendarIcon'
import HomeIcon from './navIcons/HomeIcon'
import SubjectIcon from './navIcons/SubjectIcon'
import TeacherIcon from './navIcons/TeacherIcon'
import TimeTableIcon from './navIcons/TimeTableIcon'


export default function Nav() {
   const [menuItems, setMenuItems] = useState('-300px');

   function openMenu() {
      setMenuItems('-20px')
   }
   

   function handleRouteClick() {
      setMenuItems('-300px')
   }

   return (
      <div className="nav">
         <div className="bar">
            <i onClick={openMenu} className="fa fa-bars"></i>
         </div>
         <div style={{ left: menuItems }} className="menu">
            <div className="navigate">
               <div className="info">School Helper</div>
               <Link onClick={handleRouteClick} className="link" to="/">
                  <HomeIcon />
                  <div className="text" id="overnav">Overview</div>
               </Link>
               <Link onClick={handleRouteClick} className="link" to="/calendar">
                  <CalendarIcon />
                  <div className="text" id="calnav">Calendar</div>
               </Link>
               <Link onClick={handleRouteClick} className="link" to="/timetable">
                  <TimeTableIcon />
                  <div className="text" id="timenav">Time Table</div>
               </Link>
               <Link onClick={handleRouteClick} className="link" to="/subjects">
                  <SubjectIcon />
                  <div className="text" id="subnav">Subjects</div>
               </Link>
               <Link onClick={handleRouteClick} className="link" to="/teachers">
                  <TeacherIcon />
                  <div className="text" id="teachnav">Teachers</div>
               </Link>
            </div>
         </div>
      </div>
   )
}
