import React, { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currDtata) => {
      return { ...currDtata, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h4>Give a Comment!</h4>
      <form action="">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remark">Remarks</label>
        <textarea
          placeholder="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          id="remark"
          name="remarks"
        ></textarea>
        <br /> <br />
        <label htmlFor="rating">Ratings</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Add Comments</button>
      </form>
    </div>
  );
}
