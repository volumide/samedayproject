import React from 'react'

function Footer() {
	return (
		
		<div style={{display:'flex', padding:'50px 20px', background:'#F4F7F6 ', width:'100%', }}>
			<div style={flex}>
				<p>
				Download App
				</p>
			</div>
			
			<div style={{flex:'1.5', color:'#707070'}}>
				<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
				</p>
			</div>

			<div style={flex}>
				<p style={{textAlign:'right'}}>
				Connect with us
				</p>
			</div>
			
		</div>
		
	)
}

const flex={
	flex:'1',
	color:'#007BFF',
	fontWeight: 'bold'
}

export default  Footer