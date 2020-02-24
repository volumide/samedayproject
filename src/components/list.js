import React  from 'react';

function List(props){
	return (
		<li style ={{display:'flex', padding:'10px 0', overflow:'hidden', borderBottom:'1px solid rgba(0,0,0,.1)'}} className='links'>
			<div style={{width:'30px', textAlign:'left', padding:'10px'}}>
				<img src = {props.src} width='15px' />
			</div>
			<div style={{width:'calc(100%-30px)', padding:'10px', textAlign:'left'}} className={props.class}>
				{props.name}
			</div>
		</li>
	)
}

export default List