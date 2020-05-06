import React from 'react';
import Notifications from './Notifications';

class Dashboard extends React.Component {
  render() {
    return;
    <div className="dashboard">
      <div className="row">
        <div className="leftSide"></div>
        <div className="rightSide">
          <Notifications />
        </div>
      </div>
    </div>;
  }
}

export default Dashboard;
