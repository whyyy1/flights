import React from 'react'

function New({dateTime}) {
    let airLines = ['American', 'Southwest', 'United']

    
   

    return (
        <div>
            <h1>New</h1>
            <form action='/flights' method='POST'>

                <label htmlFor='airline'>Airline:</label>
                <br />
                <select id='airline' name='airline'>
                    {airLines.map((airline) => {
                        console.log(airline)
                        return (<option  required  value={airline}>{airline}</option>)
                    })}
                </select>

                <br />
                <label htmlFor='flightNo'>Flight Number:</label><br />
                <input type='number' id='flightNo' name='flightNo' min={10} max={9999}></input><br /><br />

                <label htmlFor='departs'>Departs</label><br />
                <input type='datetime-local' id='departs' name='departs' defaultValue={dateTime}></input><br /><br /><br />

                <button>Submit</button>
            </form>
            <a href='/flights'>back</a>
        </div>
    )
}

export default New;