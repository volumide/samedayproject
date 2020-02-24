import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar.js';
import Topbar from './components/topbar'
import TopBarIcon from './components/topbarIcon'
import SubTopBar from './components/subtobbar'
import Button  from './components/button';
import Input from './components/input';
import Table from "./components/table";
import Footer from './components/footer'
import Img from './components/img'
import  Productdetails from './components/productdetails'




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      className :'max',
      display: 'show',
      mainwidth:'maxwidth'
    }
  }

  changeClass = ()=>{
    if(this.state.className == 'max'){
      this.setState({className:'min', display:'hide', mainwidth:'minwidth'})
      
    }else{
      this.setState({className:'max', display:'show', mainwidth:'maxwidth'})
    }
    
  }
 
  render(){
    const TopNavBar = {
      background:'#fff', 
      display:'flex',
      cololr:'grey',
      marginBottom:'20px'
    }
    
    return (
      <Router>
        <div className="App"  >

        <div style={{position:'fixed', height:'100vh', background:'#196BD8', paddingLeft:'20px'}} className={this.state.className}>
          <div style={{padding:'20px 10px', textAlign:'left', marginBottom:'20px'}}>
            <img src = '/asset/menu.svg' width='15px' onClick={this.changeClass} style={{cursor:'pointer'}} />
          </div>
          <Sidebar class={this.state.display}/>
        </div>

        <div className={this.state.mainwidth} style={{display:'flex', flexDirection:'column',minHeight:'100vh'}} >
          <div style={{padding:'40px'}}>
            <div style={TopNavBar}>
              <div style={{flex:1}}>
              <Topbar />
              </div>
              <div style={{flex:2, display:'flex', right:'0px', justifyContent:'flex-end' }}>
                <TopBarIcon src='/asset/magnifying-glass.svg'/>
                <TopBarIcon link="Message" src='/asset/mail.svg'/>
                <TopBarIcon link="Market Place" src='/asset/shopping-cart.svg' />
                <TopBarIcon link="Notification" src='/asset/menu.svg'/>
                
                <Img />
              </div>
            </div>

            <div style ={TopNavBar} className='spacebottom'>
              <div style = {{flex:'1'}}>
                <SubTopBar class = {this.state.display}/>
              </div>
              <div style={{flex:1, display:'flex', justifyContent:'flex-end'}}>
                <Button values = 'Categories' />
                <Input/>
              </div>          
            </div>
            <Switch>
              <Route exact path ="/">
                <div className='spacetop'>
                  <Table />
                </div>
              </Route>
              <Route path ="/details">
                <div className='spacetop'>
                  <Productdetails />
                </div>
              </Route>
              
            </Switch>
          </div>
          <div style={{justifySelf:'right'}}>
            <Footer />
          </div>

        </div>

      </div>
    </Router>
    )
  }
   
}






export default App;
