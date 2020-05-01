import React from 'react'
import moment from 'moment'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TimerIcon from '@material-ui/icons/Timer';

const Notifications = (props) => {
  const {notifications} = props
  console.log(props)
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"><NotificationsActiveIcon></NotificationsActiveIcon>Notifications</span>
          <ul className="online-users">
            {notifications && notifications.map(item =>{
              return(
                <li key={item.id}><ArrowRightAltIcon></ArrowRightAltIcon>
                  <span className="blue-text">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="grey-text note-date">
                  <TimerIcon></TimerIcon>  {moment(item.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
