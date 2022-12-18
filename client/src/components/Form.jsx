import React from "react";

let customStyles = {
  resize: "none",
  width: "300px"
};

const Form = ()=>{
  return (
    <div className="App">
    <section>
      <div className="register">
        <div className="col-1">
        <h2>Make a Request</h2>
          <span>Enter whatever you would like to be done!</span>

          <form action="" id="form">
            <label htmlFor="serviceTitle">Title of the service</label>
            <input
              name="serviceTitle"
              placeholder="Title of the Service"
              style={customStyles}
              required
            />{" "}
            <br />
            <label htmlFor="description">Describe the task?</label>
            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              style={customStyles}
              required
            />
            {/* <br />cols="50" */}
            <select style={customStyles}>
              <option value="Food">Food</option>
              <option value="Iron">Iron</option>
              <option value="">Add new</option>
            </select>
            <br />
            <button className="btn">Add Request</button>
          </form>
        </div>
        <div className="col-2">
          <img src="img1.jpg" alt="" />
        </div>
      </div>
    </section>
    </div>
  );
}
