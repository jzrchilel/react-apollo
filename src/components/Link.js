import React from 'react'

function Link({ link }) {
    return (
        <>
            {link.description} ({link.url})
        </>
    )
}

export default Link