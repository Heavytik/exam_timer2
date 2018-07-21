import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <label>Description</label>
      <input
        type="text"
        name="timeDescription"
        value={props.newDescription}
        onChange={props.handleDescription}
      />
      <label>Time Limit</label>
      <input
        type="time"
        name="timeLimit"
        value={props.newTimeLimit}
        onChange={props.handleTimeLimit}
      />
      <button type="submit">Add time limit</button>
    </form>
  );
};

export default Form;
