import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Header from "../components/Header";

const Activities = () => {
  const [allActivities, setAllActivities] = useState([]);
  const [activities, setActivities] = useState([]);
  // const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:8000/api/activities")
      .then((res) => {
        setActivities(res.data);
        setAllActivities(res.data);
      })
  }, []);

  const handleLike = (activity) => {
    activity.likeCount++;

    // update this specific activity like count
    axios
      .put(`http://localhost:8000/api/activities/${activity._id}`, activity)
      .then((res) => {
        // set all activities to be nothing so that it will reload
        // console.log("handle likes");
        setAllActivities([]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const filterActivities = (event) => {
    const category = event.target.value;
    // console.log("category:", category);

    const filteredActivities = allActivities.filter((activity) => {
      if(category === "All") {
        return true;
      }
      else
      {
        // console.log("\tcat:", category, "  act cat:", activity.category.toLowerCase());
        // console.log("\t\tcompare:", activity.category.toLowerCase() === category);
        return activity.category.toLowerCase() === category;
      }
    });
    // console.log("filtered acts:", filteredActivities);

    setActivities(filteredActivities);
  }

  return (
    <div>
      <Header allActivities={true} />
      <h3>These activities are calling your name!  Get OUTSIDE!!</h3>
      <div>
        Filter by category:
        <select
          onChange={(event) => {
            filterActivities(event);
          }}
        >
          <option defaultValue value="All">All</option>
          <option value="hiking">Hiking</option>
          <option value="biking">Biking</option>
          <option value="camping">Camping</option>
          <option value="shooting">Shooting</option>
        </select>
      </div>
      <hr />
      <table className="activities-table">
        <thead>
          <tr>
            <th className="activities-th">Name</th>
            <th className="activities-th">Category</th>
            <th className="activities-th">Likes</th>
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
                  {activity.likeCount}
                </td>
                <td className="activities-td">
                  <Link to={`/activities/${activity._id}`}>Details</Link>
                  {" "} | {" "}
                  <Link to={`/activities/${activity._id}/edit`}>Edit</Link>
                  {" "} | {" "}
                  <button onClick={(event) => {handleLike(activity)}}>Like</button>
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
