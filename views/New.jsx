import React from 'react'

function New({ dates }) {
    let airLines = ['American', 'Southwest', 'United']
    let airStation = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    console.log(dates)


    return (
        <div>
            <h1>New</h1>
            <form action='/flights' method='POST'>

                <label htmlFor='airlineDep'>Airline:</label>
                <br />
                <select id='airlineDep' name='airlineDep'>
                    {airLines.map((airline) => {
                        console.log(airline)
                        return (<option required value={airline}>{airline}</option>)
                    })}
                </select>
                <select id='airportDep' name='airportDep'>
                    {airStation.map((airport) => {
                        console.log(airport)
                        return (<option required value={airport}>{airport}</option>)
                    })}
                </select>


                <br />
                <label htmlFor='flightNo'>Flight Number:</label><br />
                <input type='number' id='flightNo' name='flightNo' min={10} max={9999}></input><br /><br />

                <label htmlFor='departs'>Departs</label><br />
                <input type='datetime-local' id='departs' name='departs' defaultValue={dates.depart}></input><br /><br /><br />
                <br />
                <label htmlFor='airlineArr'>Airport:</label><br />
                <select type='text' id='airlineArr' name='airlineArr'>
                    {airStation.map((airport, i) => (<option key={i} value={airport} required>{airport}</option>))}
                </select>
                <br />
                <br />
                <label htmlFor='airportArr'>Arrival Date:</label>
                <br />
                <input type='datetime-local' id='airportArr' name='airportArr' defaultValue={dates.arrival}></input><br /><br /><br />
                <br />
                <br />
                <button>Submit</button>
            </form>
            <a href='/flights'>back</a>
        </div>
    )
}

export default New;