import React from 'react';
import { Link } from '@reach/router';

const Header = ({allActivities}) => {
  // console.log("location:", window.location.pathname);

  return (
      <div className="jumbotron py-3">
        <h1 className="display-4">Corona Friendly Outdoor Activities</h1>
        <hr className="my-4" />
        <p className="lead py-3">
          {
            allActivities === true ?
              <Link to="/activities/new" className="text-primary" style={{marginRight: "10px", marginLeft: "10px"}}><h3>Add your favorite activity</h3></Link>
                :
              <Link to="/activities" className="text-primary" style={{marginRight: "10px", marginLeft: "10px"}}><h3>back to home</h3></Link>
          }
        </p>
      </div>
  );
}

export default Header;
