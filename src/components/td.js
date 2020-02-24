import React from 'react'
import { Link } from 'react-router-dom'

function Td(props) {
	return (
		<td style={{padding:'10px'}} >
		<span className={props.name}>{props.value}</span>
		</td>
	)
}


export default Td