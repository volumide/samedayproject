import React from 'react'


 function Img() {
	return (
		<div style={{padding:'0 10px', textAlign:'center'}}>
			<img src={'/asset/me.jpg'} style={{width:'30px', border:'solid 1px grey', borderRadius:'50%', color:'#000'}} /><br/>
			<small>
				Hello
			</small>
			
		</div>
	)
}
export default Img
