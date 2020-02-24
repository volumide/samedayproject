import React from 'react'
import Td from './td'

function Img(props) {
	return (
		<div style={{padding:'10px 0'}}>
			<img src={props.src} style={props.style}></img>
			<p style={{color:'#000', fontWeight:'bold', margin:'0', padding:'0' }}>{props.label}</p>
		</div>
	)
}

function Head(props){
	return (<div>
		<p style={{color:'#1A3A54', fontWeight:'bold'}}>
			{props.title}
		</p>
		<small style={{color:'#007BFF', fontWeight:'bold'}}>{props.value} <span style={props.style}>{props.other}</span></small>
	</div>
	)
}

function  Button(props) {
	return (
		<div>
			<button style={props.style}>
				{props.name}
			</button>
		</div>
	)
}
function Ptag(props) {
	return (
		<div>
			<p style={{fontWeight:'bold', fontSize:'17px'}}>
				{props.name}
			</p>
		</div>
	)
}

function Productdetails() {
	return (
		<div>
			<div style={{display:'flex'}}> 
				<div style={{flex:'1'}}>
					<h4>
						Order: #ADJ
					</h4>
					<small style={{color:'#007BFF'}}>Amount>setup</small>
				</div>
				<div style={{flex:'1', textAlign:'right'}}>
					<span style={{color:'#007Bff'}}>Production status </span>
					<span style={{color:'#1E8406', fontWeight:'bold', fontSize:'larger'}}>Running 2 of 4</span>
				</div>
			</div>
			<div style={{display:'flex', justifyContent:'space-around', padding:'30px 10px', background:'#fff' }}>
				<Head title='Order Value' value='$40,000' />
				<Head title='Order Date' value='25-june-2017' />
				<Head title='Delivery date' value='PickupOrder' others='can edit' />
				<Head title='Rush Option' value='Rush' />
				<Head title='Status' value='Pending' />
				<Head title='Requested By' value='25-june-2017' other='10:00:00' />
				<Head title='Shipped or Picked Date' value='Pending' />
			</div>
			<div style={{width:'98%'}}>
				<div style={{display:'flex', borderBottom:'solid 1px #D0D0D0'}}>
					<div style={{flex:'1', display:'flex'}}>
						<Ptag name='Product Details' />
						<Ptag name='History/Notes' />
					</div>
					<div style={{flex:'1', display:'flex',justifyContent:'flex-end', }}>
						<Button name='Workout' style={{color:'#1E8406',border:'solid 1px transparent', padding:'10px', margin:'5px', borderRadius:'5px'}}/>
						<Button name='Print' style={{background:'#D0D0D0', border:'solid 1px transparent', padding:'10px 20px', margin:'5px' , borderRadius:'5px'}} />
						<Button name='Add Note' style={{background:'#fff', border:'solid 1px #707070', padding:'10px 30px', margin:'5px',  borderRadius:'5px'}} />
						<Button name='Complete Production' style={{background:'#007BFF', border:'solid 1px transparent', padding:'10px', margin:'5px',  borderRadius:'5px', color:'#fff'}} />
					</div>
				</div>
					<div style={{display:'flex', display:'flex', justifyContent:'space-between'}}>
						<Ptag name='Product'/>
						<div>
							<Button name='Download Artwork' style={{color:'#007BFF', border:'solid 1px #007BFF', padding:'10px 20px', margin:'5px',  borderRadius:'5px',background:'#fff'}} />
						</div>
					</div>
					<div>
					</div>
					<div style={{display:'flex', textAlign:'center'}}>
						<Img src='/asset/back.png'  label='front' style={{padding:'20px', width:'200px'}}/>
						<Img src='/asset/front.png'  label='back' style={{padding:'20px', width:'200px'}}/>
						<Img src='/asset/back.png'  label='side'  style={{padding:'20px', width:'200px'}}/>
						<Img src='/asset/front.png'  label='side' style={{padding:'20px', width:'200px'}}/>
					</div>

					<div>
						<table style={{background:'#ffffff', width:'100%'}}>
							<thead style={{fontWeight:'bold', background:'#EEEEEE', padding:'10px'}}>
								<tr >
									<Td value = "Item #" />
									<Td value = "Details" />
									<Td value = "Production Type" />
									<Td value = "Colors" />
									<Td value = "Qty" />
									<Td value = "Paid" />
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<Td value = '#232JODJSDKN2' />
									<Td value = 'No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)'/>
									<Td value = 'DGT Print' />
									<Td value = 'Royal' />
									<Td value = 'Lx4' />
									<Td value = 'Paid in full' />
									
								</tr>
							</tbody>
						</table>
					</div>
				
			</div>
		</div>
	)
}
export default  Productdetails