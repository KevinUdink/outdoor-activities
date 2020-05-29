import React, { useState } from 'react';
// import Axios from 'axios';

const FileUpload = (props) => {
  // saves an array of file objects - but we will only have one element
  const [fileForUpload, setFileForUpload] = useState([]);

  const postImage = (event) => {
    event.preventDefault();
    const formData = new FormData();

    console.log("fileName", fileForUpload[0].name);
    formData.append("fileName", fileForUpload[0].name);
    console.log("image", fileForUpload[0]);
    formData.append("image", fileForUpload[0]);

    // Axios.post('http://localhost:8000/', {
    //   method: 'POST',
    //   body: formData,
    // }).then(res => {
    //   console.log(res)
    // })
    // console.log("uploaded file:", fileForUpload[0]);
    // console.log("form data:", formData);   // this will not print properly - don't waste your time!
  };

  const updateFile = (event) => {
    console.log("updating file");
    setFileForUpload(event.target.files);
    // setFileForUpload(event.target.files[0]);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Image Upload</h1>
        <p className="lead">
          This is a test page to upload and retrieve images from a database
        </p>
        <hr className="my-4" />
      </div>
      <form onSubmit={postImage}>
        <div className="input-group my-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputFile"
              // aria-describedby="inputFileAddon01"
              onChange={updateFile}
            />
            <label className="custom-file-label" htmlFor="inputFile">
            { fileForUpload.length === 0 ? "Choose file" : fileForUpload[0].name }
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
      <div className="card-set">
        <div className="card-deck my-4">
          <div className="card">
            <div className="card-header">Header</div>
            <div className="card-body">Body</div>
            <div className="card-footer">Footer</div>
          </div>
          <div className="card">
            <div className="card-header">Header</div>
            <div className="card-body">Body</div>
            <div className="card-footer">Footer</div>
          </div>
          <div className="card">
            <div className="card-header">Header</div>
            <div className="card-body">Body</div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4>This is a card</h4>
        </div>
        <div className="card-body">
          card body
        </div>
        <div className="card-footer">
          card footer
        </div>
      </div>
    </div>
  )
};

export default FileUpload;