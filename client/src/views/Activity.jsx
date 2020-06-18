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
      <div class="col-md-10 offset-md-1">
        <div class="card card-outline-secondary">
          <div class="card-header">
            <div style={{display: "inline-block", textAlign: "left", width: "60%"}}>
              <h3 class="mb-0">Details about: <span className="text-primary">{activity.name}</span></h3>
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
          <div class="card-body">
            {/* <div style={{border: "1px solid black", width: "61%", margin: "auto"}}> */}
              <div className="row">
                <span className="col-4 px-2 text-right"><b>Category:</b></span>
                <span className="col-8 px-2 text-left text-primary">{activity.category}</span>
              </div>
              <div className="row">
                <span className="col-4 px-2 text-right"><b>Description:</b></span>
                <span className="col-8 px-2 text-left text-primary">{activity.description}</span>
              </div>
              <div className="row">
                <span className="col-4 px-2 text-right"><b>Latitude:</b></span>
                <span className="col-8 px-2 text-left text-primary">{activity.lat}</span>
              </div>
              <div className="row">
                <span className="col-4 px-2 text-right"><b>Longitude:</b></span>
                <span className="col-8 px-2 text-left text-primary">{activity.lon}</span>
              </div>
              <div className="row">
                <span className="col-4 px-2 text-right"><b>URL:</b></span>
                <span className="col-8 px-2 text-left text-primary"><a href={activity.url} alt="activity url">{activity.url}</a></span>
              </div>
              <div className="row">
                <span className="col-4 px-2 text-right"><b>Likes:</b></span>
                <span className="col-8 px-2 text-left text-primary">{activity.likeCount}</span>
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
