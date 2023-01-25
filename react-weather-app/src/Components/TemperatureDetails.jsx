import React from 'react'
import { UilSun } from '@iconscout/react-unicons'

function TemperatureDetails() {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl'>
                <p>Cloudy</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <UilSun className='w-150' ></UilSun>
                <p className='text-5xl'>34°</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sn items-center justify-center'></div>
                </div>
            </div>
        </div>
    )
}

export default TemperatureDetails