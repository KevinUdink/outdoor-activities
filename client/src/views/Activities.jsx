import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Header from "../components/Header";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/activities")
      .then((res) => {
        setActivities(res.data);
      })
  }, []);

  return (
    <div>
      <Header allActivities={true} />
      <h3>These activities are calling your name!  Get OUTSIDE!!</h3>
      <table className="activities-table">
        <thead>
          <tr>
            <th className="activities-th">Name</th>
            <th className="activities-th">Category</th>
            <th className="activities-th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => {
            return (
              <tr key={activity._id}>
                <td className="activities-td">
                  {activity.name}
                </td>
                <td className="activities-td">
                  {activity.category}
                </td>
                <td className="activities-td">
                  <Link to={`/activities/${activity._id}`}>Details</Link>
                  {" "} | {" "}
                  <Link to={`/activities/${activity._id}/edit`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
