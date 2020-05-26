import React from 'react';
import { Link } from '@reach/router';

const Header = ({allActivities}) => {
  // console.log("location:", window.location.pathname);

  return (
      <div>
        <div style={{display: "inline-block", textAlign: "left", width: "50%"}}>
          <h1>Corona Friendly Outdoor Activities</h1>
        </div>
        <div style={{display: "inline-block", textAlign: "right", width: "20%"}}>
          {
            allActivities === true ?
              <Link to="/activities/new" className="btn" style={{marginRight: "10px", marginLeft: "10px"}}><h3>Add your favorite activity</h3></Link>
                :
              <Link to="/activities" className="btn" style={{marginRight: "10px", marginLeft: "10px"}}><h3>back to home</h3></Link>
          }
        </div>
      </div>
  );
}

export default Header;
