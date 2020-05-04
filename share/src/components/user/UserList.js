import React from "react";

import UserSummary from "../user/UserSummary"

import {Link} from 'react-router-dom'
const UserList = ({ users }) => {
  console.log(users)
  
  return (

    <div className="section ">
      <div className="card z-depth-0 notification">
        <div className="card-content pp">
          <span className="card-title header_text aa">All Users</span>
          <ul className="online-users "></ul>
    <div className="post-list section">

    { users && users.map(user => {
      console.log(user.id)
        return (
          <div className="content">
          
          <Link to={'/user/' + user.id} key={user.id}>
  
            
          <UserSummary user={user}  />
        
          </Link>
          </div>
        )
      })} 

    </div>
    <div className="center"><Link to="/allNotifications">See All</Link></div>
        
        </div>
      </div>
    </div>
  )
}

export default UserList;