import React, { useState } from "react";
import axios from "axios";
import ActivityForm from "../components/ActivityForm";
import Header from "../components/Header";
import { navigate } from "@reach/router";

const ActivityNew = (props) => {
  const [errors, setErrors] = useState({});

  const createActivity = (newActivity) => {
    // event.preventDefault();   // this is done in the shared component now

    console.log("new activity:", newActivity);
    axios
      .post("http://localhost:8000/api/activities", newActivity)
      .then((res) => {
        console.log("new activity submit response: ", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("err:", err);
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return (
    <div>
      <Header allActivities={false} />
      <h3>Can't wait to share your favorite outdoor activities?</h3>
      <ActivityForm 
        initialActivity={{name: "", category: "", description: "", lat: "", lon: "", url: ""}} 
        onSubmitProp={createActivity} 
        errors={errors} 
      />
    </div>
  )
}

export default ActivityNew;
