import React, { useState } from "react";

const ActivityForm = (props) => {
  const {initialActivity, onSubmitProp, errors} = props;

  const [name, setName] = useState(initialActivity.name);
  const [category, setCategory] = useState(initialActivity.category);
  const [description, setDescription] = useState(initialActivity.description);
  const [lat, setLat] = useState(initialActivity.lat);
  const [lon, setLon] = useState(initialActivity.lon);
  const [url, setUrl] = useState(initialActivity.url);
  // const [likeCount, setLikeCount] = useState(initialActivity.likeCount);

  // set a default value for category so if they don't change it, it will still be set
  //    to a non empty string
  if(category === "") {
    setCategory("Hiking");
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("name:", name);
    console.log("type:", category);
    console.log("descr:", description);
    console.log("lat:", lat);
    console.log("lon:", lon);
    console.log("url:", url);
    // console.log("likes:", likeCount);

    onSubmitProp({name, category, description, lat, lon, url});

    // this will wipe it out even if there is an error  :(
    if (initialActivity.name === "" && Object.keys(errors).length === 0 ) {
      // reset the textbox values to be empty since we have successfully created a new
      setName("");
      setCategory("");
      setDescription("");
      setLat("");
      setLon("");
      setUrl("");
      // setLikeCount(0);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} autocomplete="off" className="">
      <div className="form-group">
        {errors.name ? <p><span className="error-message">{errors.name.message}</span></p> : ""}
        <label htmlFor="nameInput" className="control-label float-left">Name</label>
        <input type="text" 
          className="form-control"
          id="nameInput"
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
      </div>
      <div className="form-group">
        {errors.category ? <p><span className="error-message">{errors.category.message}</span></p> : ""}
        <label htmlFor="categoryInput" className="control-label float-left">Category</label>
        <select 
            className="form-control"
            id="categoryInput"
            value={category} 
            onChange={(event) => setCategory(event.target.value)
        }>
          <option value="Biking">Biking</option>
          <option value="Camping">Camping</option>
          <option value="Hiking">Hiking</option>
          <option value="Shooting">Shooting</option>
        </select>
      </div>
      <div className="form-group">
        {errors.description ? <p><span className="error-message">{errors.description.message}</span></p> : ""}
        <label htmlFor="descriptionInput" className="control-label float-left">Description</label>
        <input type="text" 
          className="form-control"
          id="descriptionInput"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          />
      </div>
      <div className="form-group">
        {errors.lat ? <p><span className="error-message">{errors.lat.message}</span></p> : ""}
        <label htmlFor="latInput" className="control-label float-left">Latitude</label>
        <input type="text" 
          className="form-control"
          id="latInput"
          value={lat}
          onChange={(event) => setLat(event.target.value)}
          />
      </div>
      <div className="form-group">
        {errors.lon ? <p><span className="error-message">{errors.lon.message}</span></p> : ""}
        <label htmlFor="lonInput" className="control-label float-left">Longitude</label>
        <input type="text" 
          className="form-control"
          id="lonInput"
          value={lon}
          onChange={(event) => setLon(event.target.value)}
          />
      </div>
      <div className="form-group">
        <label htmlFor="urlInput" className="control-label float-left">URL</label>
        <input type="text" 
          className="form-control"
          id="urlInput"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          />
      </div>
      <div className="form-group">
        <button className="btn btn-success margin-auto">{initialActivity.name === "" ? "Add Activity" : "Update Activity"}</button>
      </div>
    </form>
  );
};

export default ActivityForm;
