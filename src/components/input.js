import React from 'react';




function Input(props) {
	return (
		<div>
			<input type='text' style={Butttonstyle} />
		</div>
	)
}

const Butttonstyle ={
	padding:'10px 8px', 
	background:'#EEEEEE', 
	border:'solid 1px transparent', 
	minWidth:'300px',
	marginLeft:'10px',
	borderRadius:'5px'
}

export default Input;