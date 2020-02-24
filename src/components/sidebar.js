import React from 'react';
import List  from "./list";



function SideBar(props) {
	return (
		<div style={Decoration}>
			<ul style={{listStyleType:'none'}}>
				<List name="Dashboard" src= '/asset/Group 1717.svg' class= {props.class} />
				<List name="Operations" src= '/asset/time-left.svg' class= {props.class}/>
				<List name="Records" src= '/asset/file.svg' class= {props.class}/>
				<List name="Supply Store" src= '/asset/shopping-cart.svg' class= {props.class}/>
				<List name="Market Place" src= '/asset/supply.svg' class= {props.class}/>
				<List name="Forum" src= '/asset/chat.svg'  class= {props.class}/>
			</ul>
		</div>
	)
}

const Decoration = {
	
	background:'#196BD8',
	color:'#fff',
	
}

export default SideBar;