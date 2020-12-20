import React from 'react'

function clock(props)
{
    console.log(props);
    const tempo=Date.now() + props.timezone * 3600 * 1000;
    const data=new Date(tempo);

    return <h2> Clock: { props.nazione }: { data.toLocaleDateString() + ' ' + data.toLocaleTimeString() } </h2>
}

export default clock;