import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import StripeWrapper from './StripeWrapper';

const Header = props => {
  useEffect(() => {
    console.log('inside header useEffect, the prop auth is: ', props.authUser);
    return () => {
      console.log('clean up function from second render');
    };
  }, [props.authUser]);

  const logoutClickEvent = () => {
    props.logoutUser();
  };

  const renderContent = () => {
    switch (props.authUser) {
      case null:
        return '';
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="stripeWrapper">
            <StripeWrapper />
          </li>,
          <li key="credits" style={{ margin: '0px 10px 0px 10px' }}>
            Credits: {props.authUser.credits}
          </li>,
          <li key="logout">
            <a onClick={logoutClickEvent}>Logout</a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={props.authUser ? '/surveys' : '/'} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return { authUser: state.authUser };
}

export default connect(
  mapStateToProps,
  actions,
)(Header);
