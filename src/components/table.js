import React from 'react'
import Td from './td'
import { Link } from 'react-router-dom'

let List =(props)=>{
	return <div>
		<li style= {props.style}>
			{props.name} <span style={props.span}>{props.badge}</span>
		</li>
	</div>
}
function Table() {
	
	return (
		<div>
			<div style={{display:'flex', marginTop:'20px'}}>
				<div style={{flex:'1'}}>
					<ul style={{listStyleType:'none', display:'flex'}}>
					<List name="All Production" style={{padding:'5px 15px', borderBottom:'2px solid dodgerblue'}} badge ='192' span={{marginLeft:'12px'}}  />
					<List name="Awaiting Production" style={{borderRight:'solid 1px grey', borderLeft:'solid 1px grey', padding:'5px 15px'}} badge ='19' span={{padding:' 4px 5px', background:'red', color:'#fff', marginLeft:'12px', borderRadius:'50%' }} />
					<List name="Completed" style={{padding:'5px 15px'}} />
					</ul>
				</div>
				<div style={{flex:'1',textAlign:'right', paddingBottom:'10px'}}>
					<button style={{padding:'10px', marginRight:'10px', border:'solid 1px grey', borderRadius:'3px'}}>Print worksheet</button>
					<button style={{padding:'10px', marginRight:'10px', border:'solid 1px transparent',  color:'dodgerblue', borderRadius:'3px'}}>Mark as Complete</button>
					<button style={{padding:'10px 30px', marginRight:'10px', border:'solid 1px transparent', background:'grey', borderRadius:'3px', color:'#fff'}}>Save</button>
				</div>
			</div>
			<table style={{background:'#ffffff', width:'100%'}}>
				<thead style={{fontWeight:'bold', background:'#EEEEEE'}}>
					<tr >
						<Td value = "Order #" />
						<Td value = "Item #" />
						<Td value = "Details" />
						<Td value = "Colors" />
						<Td value = "Qty" />
						<Td value = "Print type" />
						<Td value = "Delivery method" />
						<Td value = "Delivery time" />
						<Td value = "Production status" />
					</tr>
				</thead>
				<tbody>
					<tr>
						<Td value = '#232JODJSDKN2' />
						<Td value = '#232JODJSDKN2' />
						<Td value = 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)' />
						<Link to ='/details'>
							<Td value = 'Royal' name ='tablebutton'/>
						</Link>
						<Td value = 'Lx4' />
						<Td value = 'DGT Print' />
						<Td value = 'Rush Shipping' />
						<Td value = '23-june-2019' />
						<Td value = 'Running 2 0f 3' />
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table
