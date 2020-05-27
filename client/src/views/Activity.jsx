import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Header from "../components/Header";
import MapContainer from "../components/MapContainer";

const Activity = (props) => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/activities/" + props.id)
      .then((res) => {
        setActivity(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [props.id]);

  const removeActivity = (event, activityId) => {
    axios.delete("http://localhost:8000/api/activities/" + activityId)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error trying to delete activity id: ", activityId);
      })
  }

  if (activity === null) {
    return (
      <div>
        <p>"Loading..."</p>
        <p>{props.id}</p>
      </div>
    )
  }

  // const location = {
  //   name: activity.name,
  //   location: { 
  //     lat: activity.lat,
  //     lng: activity.lon
  //   },
  // };

  return (
    <div>
      <Header allActivities={false} />
      <div>
        <div style={{display: "inline-block", textAlign: "left", width: "40%"}}>
          <h3>Details about: {activity.name}</h3>
        </div>
        <div style={{display: "inline-block", textAlign: "right", width: "30%"}}>
          <button 
            className="btn btn-danger"
            onClick={(event) => {
              removeActivity(event, activity._id);
            }}
          >Remove Activity</button>
        </div>
      </div>
      <div style={{border: "1px solid black", width: "61%", margin: "auto"}}>
        <div className="details">
          <span className="col-25"><b>Category:</b></span>
          <span className="col-75">{activity.category}</span>
        </div>
        <div className="details">
          <span className="col-25"><b>Description:</b></span>
          <span className="col-75">{activity.description}</span>
        </div>
        <div className="details">
          <span className="col-25"><b>Latitude:</b></span>
          <span className="col-75">{activity.lat}</span>
        </div>
        <div className="details">
          <span className="col-25"><b>Longitude:</b></span>
          <span className="col-75">{activity.lon}</span>
        </div>
        <div className="details">
          <span className="col-25"><b>URL:</b></span>
          <span className="col-75"><a href={activity.url} alt="activity url">{activity.url}</a></span>
        </div>
        <div className="details">
          <span className="col-25"><b>Likes:</b></span>
          <span className="col-75">{activity.likeCount}</span>
        </div>
        <MapContainer 
          locations={[
            {
              name: activity.name,
              location: {
                lat: activity.lat,
                lng: activity.lon
              }
            }
          ]}
          mapSize="500px"
        />
      </div>
    </div>
  );
};

export default Activity;
