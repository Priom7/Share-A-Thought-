import React,{ Component } from 'react'
import Notifications from "./Notifications";
import {connect} from "react-redux"
import {firestoreConnect } from 'react-redux-firebase'
import {compose } from 'redux'

class AllNotifications extends Component {
  render() {

  const {auth, notifications } = this.props;
  console.log(this.props)

  return (
    <div>

<div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
     

    </div>
  )
}}

const mapStateToProps = (state)=> {
  // console.log(state)
  return{
    auth : state.firebase.auth,
    notifications : state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
  ])
) (AllNotifications);
