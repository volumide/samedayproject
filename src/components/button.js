import React from 'react';




function Button(props) {
	return (
		<div>
			<button type='button' style={Butttonstyle}>
				{props.values}
			</button>
		</div>
	)
}

const Butttonstyle ={
	padding:'10px 8px', 
	background:'#007BFF', 
	border:'solid 1px transparent', 
	minWidth:'200px',
	borderRadius:'5px'
}

export default Button;