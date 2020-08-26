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

   const [homeStatus, setHomeStatus] = useState('link active')
   const [calendarStatus, setCalendarStatus] = useState('link')
   const [subjectStatus, setSubjectStatus] = useState('link')
   const [timeTableStatus, setTimeTableStatus] = useState('link')
   const [teacherStatus, setTeacherStatus] = useState('link')

   function openMenu() {
      setMenuItems('-20px')
   }
   

   function handleRouteClick(param) {
      setMenuItems('-300px')

      if(param === 1) {
         setHomeStatus('link active')
         setCalendarStatus('link')
         setSubjectStatus('link')
         setTimeTableStatus('link')
         setTeacherStatus('link')
      } else if(param === 2) {
         setCalendarStatus('link active')
         setHomeStatus('link')
         setSubjectStatus('link')
         setTimeTableStatus('link')
         setTeacherStatus('link')
      } else if(param === 3) {
         setCalendarStatus('link')
         setHomeStatus('link')
         setSubjectStatus('link')
         setTimeTableStatus('link active')
         setTeacherStatus('link')
      } else if(param === 4) {
         setCalendarStatus('link')
         setHomeStatus('link')
         setSubjectStatus('link active')
         setTimeTableStatus('link')
         setTeacherStatus('link')
      } else if(param === 5) {
         setCalendarStatus('link')
         setHomeStatus('link')
         setSubjectStatus('link')
         setTimeTableStatus('link')
         setTeacherStatus('link active')
      }
   }

   return (
      <div className="nav">
         <div className="bar">
            <i onClick={openMenu} className="fa fa-bars"></i>
         </div>
         <div style={{ left: menuItems }} className="menu">
            <div className="navigate">
               <div className="info">School Helper</div>
               <Link onClick={() => handleRouteClick(1)} className={homeStatus} to="/">
                  <HomeIcon />
                  <div className="text" id="overnav">Overview</div>
               </Link>
               <Link onClick={() => handleRouteClick(2)} className={calendarStatus} to="/calendar">
                  <CalendarIcon />
                  <div className="text" id="calnav">Calendar</div>
               </Link>
               <Link onClick={() => handleRouteClick(3)} className={timeTableStatus} to="/timetable">
                  <TimeTableIcon />
                  <div className="text" id="timenav">Time Table</div>
               </Link>
               <Link onClick={() => handleRouteClick(4)} className={subjectStatus} to="/subjects">
                  <SubjectIcon />
                  <div className="text" id="subnav">Subjects</div>
               </Link>
               <Link onClick={() => handleRouteClick(5)} className={teacherStatus} to="/teachers">
                  <TeacherIcon />
                  <div className="text" id="teachnav">Teachers</div>
               </Link>
            </div>
         </div>
      </div>
   )
}
