import React from 'react'
import Wave from 'react-wavify'

const Waves = (props) => {
  const imgurl = props;
  return (
    <div className="wavestop">
      <Wave
        fill="url(#gradient3)"
        className="waves wave1"
        options={{
          height: 0,
          amplitude: 0,
          speed: 0.15,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="gradient3" gradientTransform="rotate(0)">
            <stop offset="10%" stopColor="#6CA1E4" />
            <stop offset="90%" stopColor="#40C8B1" />
          </linearGradient>
        </defs>
      </Wave>
      <Wave
        fill="url(#gradient2)"
        className="waves wave2"
        options={{
          height: 40,
          amplitude: 50,
          speed: 0.15,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="gradient2" gradientTransform="rotate(0)">
            <stop offset="10%" stopColor="#78aae7" />
            <stop offset="90%" stopColor="#47cdb8" />
          </linearGradient>
        </defs>
      </Wave>
      {/* <img src={imgurl.url} alt="Dog" className="dogwave" /> */}
      <Wave
        fill="url(#gradient)"
        className="waves wave3"
        options={{
          height: 60,
          amplitude: 15,
          speed: 0.15,
          points: 2,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(0)">
            <stop offset="10%" stopColor="#f4f8fd" />
            <stop offset="90%" stopColor="#eefbf9" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}

export default Waves
