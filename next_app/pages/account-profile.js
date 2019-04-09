import React from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'next/router';
import Router from 'next/router';


import Main_Layout from '../layouts/Main_Layout.js';
class Account_Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state={}
  }
  static async getInitialProps(ctx){
    let state = ctx.store.getState()
    console.log(state.user.is_loggedin)
    if(!state.user.is_loggedin){
      console.log('NOT LOGGED IN')
      // Router.push('/')
    }
    else {
      console.log('Is logged in')
    }
    return {}

  }
  render(){
    // console.log(this.props)
    return(
      <Main_Layout>
        <h1>Account Profile</h1>
      
      </Main_Layout>
    )
  }
}


function mapStateToProps(state) {
  const { user } = state;
  return { user };
}


export default connect(mapStateToProps)(withRouter(Account_Profile));