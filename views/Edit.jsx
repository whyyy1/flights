import React from 'react'
import Flights from '../models/Flights';

function Edit({flight}) {
    let airLines = ['American', 'Southwest', 'United']
    
   

    return (
        <div>
            <h1>Edit</h1>
            <form action={`/flights/${flight._id}?_method=PUT`} method='POST'>

                <label htmlFor='airline'>Airline:</label>
                <br />
                <select id='airline' name='airline' defaultValue={flight.airline}>
                    {airLines.map((airline) => {
                        console.log(airline)
                        return (<option  required>{airline}</option>)
                    })}
                </select>

                <br />
                <label htmlFor='flightNo'>Flight Number:</label><br />
                <input type='number' id='flightNo' name='flightNo' min={10} max={9999} defaultValue={flight.flightNo}></input><br /><br />

                <label htmlFor='departs'>Departs</label><br />
                <input type='datetime-local' id='departs' name='departs' defaultValue={flight.departs.toISOString().slice(0,19)}></input><br /><br /><br />

                <button>Update</button>
            </form>
            <a href='/flights'>back</a>
        </div>
    )
}

export default Edit;