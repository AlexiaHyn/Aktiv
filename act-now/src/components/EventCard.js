import React, { useState } from 'react'

export default function EventCard(props) {
    const [collected, setCollected] = useState(false);
    const [going, setGoing] = useState(false);
  return (
    <div className='card rounded event-card'>
        <div className='d-flex justify-content-between'>
            <h3>Event Name</h3>
            <i className={"cursor bi bi-star" + `${collected? "-fill": ""}` } onClick={()=>setCollected(!collected)}></i>
        </div>
        <div>Event shoorrrrrt Introoooo</div>
        <div>tags</div>
        <div className='d-flex align-items-center justify-content-end'>
            <div>Learn more</div>
            <button type='button' className={'btn ms-1 ' + `${going? "btn-outline-dark" : "btn-dark"}`} onClick={()=>setGoing(!going)}>
                {
                    going?
                    "Cancel Going"
                    :
                    "Going"

                }
            </button>
            
        </div>
    </div>
  )
}
