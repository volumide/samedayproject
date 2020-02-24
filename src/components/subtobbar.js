import React from 'react';


function SubTopbar(props){
	return (
		<div style={{display:'flex'}}> 

			<img src={'/asset/product.svg'} width='30px' /><br/>

			<h2 style={{color:'#000', paddingLeft:'10px'}}>
				Production House 
			</h2>
		</div>
		
	)
}

export default SubTopbar