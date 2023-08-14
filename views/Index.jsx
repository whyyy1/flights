import React from 'react'

function Index(props) {
    console.log(props)
  return (
    <div><a href='/flights/new'>ADD FLIGHT</a>
    {props.flights.map((flight, i) => 
                <a href={`/flights/${flight._id}`}><p key={i}>{flight.airline}</p></a>
            )}
    </div>
  )
}

export default Index