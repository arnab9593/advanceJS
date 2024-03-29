import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs({ setQuery, units, setUnits }) {

  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city !== '') {
      console.log(city);
      setQuery({ q: city })
    }

  }

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      })
    }
  }

  const handleUnits = (e) => {
    const selectUnit = e.currentTarget.name;
    if (units !== selectUnit) {
      setUnits(selectUnit);
    }
  }

  return (
    <div className='flex flex-row justify-center my-6' >
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
          placeholder='Search'

        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleClick}
        />

        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocation}
        />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center' >
        <button
          name='metric'
          className='text-xl text-white cursor-pointer transition ease-out hover:scale-125 font-light'
          onClick={handleUnits}
        >
          °C
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button
          name='imperial'
          className='text-xl text-white cursor-pointer transition ease-out hover:scale-125 font-light'
          onClick={handleUnits}
        >
          °F
        </button>
      </div>

    </div>
  )
}

export default Inputs