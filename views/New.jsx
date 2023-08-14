import React from 'react'

function New() {
    let airLines = ['American', 'Southwest', 'United']
    const currentDate = new Date();
    const defaultDate = new Date(currentDate);
    defaultDate.setFullYear(currentDate.getFullYear() + 1);
    defaultDate.toISOString().split('T')[0]
    console.log(defaultDate)

    return (
        <div>
            <h1>New</h1>
            <form action='/flights' method='POST'>

                <label htmlFor='airline'>Airline:</label>
                <br />
                <select id='airline' name='airline' value={airline}>
                    {airLines.map((airline) => {
                        console.log(airline)
                        return (<option  required>{airline}</option>)
                    })}
                </select>

                <br />
                <label htmlFor='flightNo'>Flight Number:</label><br />
                <input type='number' id='flightNo' name='flightNo' min={10} max={9999}></input><br /><br />

                <label htmlFor='departs'>Departs</label><br />
                <input type='datetime-local' id='departs' name='departs' value={defaultDate}></input><br /><br /><br />

                <button>Submit</button>
            </form>
            <a href='/flights'>back</a>
        </div>
    )
}

export default New;