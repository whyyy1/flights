import React from 'react'

export default function Show({ flight }) {
    let { airline, flightNo, departs, _id } = flight
    console.log(flight,'hey')
    return (
        <div>
            <h1>Show</h1>
            <p>Airline Departed: {flight.airlineDep}</p>
            <p>flightNo: {flightNo}</p>
            <p>Depart Time: {flight.departDep.toString()}</p><br />

            <form action={`/flights/${flight._id}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
            <a href='/flights'>back</a>
            <br></br>
            <a href={`/flights/${_id}/Edit`}>Edit</a>
        </div>
    )
}