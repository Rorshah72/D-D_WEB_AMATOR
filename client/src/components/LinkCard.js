import React from 'react'

export const LinkCard = ({link}) => {
    return(
        <>
            <h2>Lable</h2>

            <p>Short Lable: <a href={link.to} target= "_blank" rel="noopener noreferrer" >{link.to}</a></p>
            <p>From: <a href={link.from} target= "_blank" rel="noopener noreferrer" >{link.from}</a></p>
            <p>How many clicks in Lable: <strong>{link.clicks}</strong></p>
            <p>Date create: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}

