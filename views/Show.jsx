import React from 'react'

export default function Show({ flight }) {
    let { airline, flightNo, departs, _id } = flight
    console.log(flight)
    return (
        <div>
            <h1>Show</h1>
            <p>Airline: {airline}</p>
            <p>flightNo: {flightNo}</p>
            <p>depart : {departs.toString()}</p><br />

            <form action={`/flights/${_id}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
            <a href='/flights'>back</a>
            <br></br>
            <a href={`/flights/${_id}/Edit`}>Edit</a>
        </div>
    )
}