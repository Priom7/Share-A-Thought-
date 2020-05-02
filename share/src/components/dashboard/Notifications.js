import React from 'react'
import moment from 'moment'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TimerIcon from '@material-ui/icons/Timer';
import {Link} from 'react-router-dom'
import './Notification.css'
import "../layout/Navbar.css"

const Notifications = (props) => {
  const {notifications} = props
  console.log(props)
  return (
    <div className="section ">
      <div className="card z-depth-0 notification">
        <div className="card-content pp">
          <span className="card-title header_text aa"><NotificationsActiveIcon></NotificationsActiveIcon>Notifications</span>
          <ul className="online-users ">
            {notifications && notifications.map(item =>{
              return(
                <li key={item.id}><ArrowRightAltIcon className="aa"></ArrowRightAltIcon>
                  <span className="blue-text username">{item.user} </span>
                  <span className="content">{item.content}</span>
                  <div className="grey-text note-date date">
                  <TimerIcon></TimerIcon>  {moment(item.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="center"><Link to="/allNotifications">See All</Link></div>
        
        </div>
      </div>
    </div>
  )
}

export default Notifications
