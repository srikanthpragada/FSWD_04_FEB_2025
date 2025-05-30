import React, { useState, useEffect } from 'react'
import $ from 'jquery'

export default function ShowIndiaTime() {
    const [now, setNow] = useState('')

    useEffect(getDateTime, [])

    function getDateTime() {
        $.ajax(
            'https://timeapi.io/api/time/current/zone?timeZone=Asia/Calcutta',
            {
                success: (data) => setNow(data.dateTime),
                error:
                    () => {
                        setNow(''); // clear output 
                        alert("Sorry! Couldn't get date and time!")
                    }
            }
        )

        function cleanup() {
            console.log("Cleanup function is called!")
        }

        return cleanup
    }


    return (
        <>
            <h2>AJAX with jQuery and useEffect()</h2>
            <h1>{now}</h1>
        </>
    )
}
