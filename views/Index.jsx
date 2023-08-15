import React from 'react'

function Index({flights}) {
    let time = Date()
    console.log(time)
  return (
    <div>
      <h1>{time}</h1>
      <a href='/flights/new'>ADD FLIGHT</a>
    {flights.map((flight, i) => {
      let currentDate = new Date()
      let time = currentDate.getTime() - flight.departs
  
      return(time > 0 ? <a key={i} style={{color:"red"}} href={`/flights/${flight._id}`}><><p key={i}>{flight.airline} <br/> DATE: {flight.departs.toISOString().slice(0,11).replace('T','')} <br/>  TIME: {flight.departs.toISOString().slice(12,16)} <strong>MISSED</strong></p>
      </></a>: <a key={i} style={{color:"green"}} href={`/flights/${flight._id}`}><><p key={i}>{flight.airline} <br/> DATE: {flight.departs.toISOString().slice(0,11).replace('T','')} <br/>  TIME: {flight.departs.toISOString().slice(12,16)} <strong>ON TIME</strong></p>
      </></a>)
     }
                
            )}
    </div>
  )
}

export default Index