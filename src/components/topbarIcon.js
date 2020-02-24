import React from 'react';

function TopBarIcon(props){
	return(
		<div style={{marginTop:'7px'}}>
			<div style={{color:' #070707', margin:'0px', borderRight:'solid 1px #1877FF1C', padding:'0 15px '}}>
			<img src={props.src} style={{width:'25px', float:'left', marginRight:'10px'}}></img>
			
			{props.link} 
			</div>	
		</div>
	)
}

export default TopBarIcon