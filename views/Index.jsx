import React from 'react'

function Index({flights}) {
    let time = Date()
    console.log(flights)
  return (
    <div>
      <h1>{time}</h1>
      <a href='/flights/new'>ADD FLIGHT</a>
    {flights.map((flight, i) => {
      let currentDate = new Date()
      let time = currentDate.getTime() - flight.departDep
      console.log(time)
      return(time > 0 ? <div><p style={{color:"red"}} key={i}>Departing:{flight.airlineDep} <br/> DATE: {flight.departDep.toISOString().slice(0,11).replace('T','')} <br/>  TIME: {flight.departDep.toISOString().slice(12,16)} <strong>MISSED</strong></p><a key={i}  href={`/flights/${flight._id}`}>Deatils</a></div>
      : <div><p style={{color:"green"}} key={i}>Departing:{flight.airlineDep} <br/> DATE: {flight.departDep.toISOString().slice(0,11).replace('T','')} <br/>  TIME: {flight.departDep.toISOString().slice(12,16)} <strong>ON TIME</strong></p><a key={i}  href={`/flights/${flight._id}`}>Deatils</a></div>)
     }
                
            )
            }
    </div>
  )
}

export default Index