import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Header = props => {
  useEffect(() => {
    console.log('inside header useEffect, the prop auth is: ', props.auth);
    return () => {
      console.log('clean up function from second render');
    };
  }, [props.auth]);

  const renderContent = () => {
    switch (props.auth) {
      case null:
        return 'still deciding';
      case false:
        return 'im loggedout';
      default:
        return 'im in';
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo" href="/">
          Emaily
        </a>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
