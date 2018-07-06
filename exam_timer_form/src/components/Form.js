import React, { Component } from 'react'

const TimeLimit = (props) => {
  return(
    <div>
      <label>Description</label>
      <input type="text" name="timeDescription" />
      <label>Time Limit</label>
      <input type="time" name="timeLimit" />
      <button type="button">add time limit</button>
    </div>
  )
}

class Form extends Component {
  render() {
    return(
    <div>
      <h2>Time Limits</h2>
      <p>Set time limit and write description. You can add extra time limits from button "add time limit".</p>
      <div>
        <form>
          <TimeLimit />
          <br />
          <button type="submit" onClick="">start</button>
        </form>
      </div>
      <div>
        <h3>Added limits</h3>
        <p>Added time limit (description, time), remove button</p>
      </div>
    </div>
    )
  }
}

export default Form