import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityForm from "../components/ActivityForm";
import Header from "../components/Header";
import { navigate } from "@reach/router";

const ActivityUpdate = (props) => {
  const [activity, setActivity] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/activities/" + props.id)
      .then((res) => {
        setActivity(res.data);
      })
      .catch((err) => {
        console.log("error getting activity details for id:", props.id, "\nerror info:", err);
        navigate("/");
      })
  }, [props.id])

  const updateActivity = ((activity) => {
    axios.put("http://localhost:8000/api/activities/" + props.id, activity)
      .then((res) => {
        // do not navigate away....allow them to change more if they would like
        console.log(res.data);
        // reset errors once we have successfully submitted the changes
        setErrors({});
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      })
  })


  if (activity === null) {
    return "Loading...";
  }

  console.log("edit activity:", activity);
  return (
    <div>
      <Header allActivities={false} />
      <h3>Edit {activity.name}</h3>
      <ActivityForm 
        initialActivity={activity} 
        onSubmitProp={updateActivity} 
        errors={errors} 
      />
    </div>
  )
}

export default ActivityUpdate;
