import React from 'react'

const ShowTimeLimits = ({timeLimits}) => {
    const times = () =>
        timeLimits.map(timeLimit => (
          <li key={timeLimit.time}>{timeLimit.description + " => " + timeLimit.time}</li>
        )
    );

    return(
        <div>
            <h3>Added limits</h3>
            <ul>{times()}</ul>
          </div>
    )
}

export default ShowTimeLimits