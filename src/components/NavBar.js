import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'



class NavBar extends Component {
  constructor(props) {
    super(props);

   this.inputField=React.createRef();
   
   
   // this.handleSearch = this.handleSearch.bind(this);
   
  }
  submitHandler(evt) {
    evt.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    console.log(this.inputField.current.value)
    this.props.handleSearch(this.inputField.current.value,true);
    
    
  }
  onItemClick (evt){
    evt.preventDefault();
    this.props.handleSearch(evt.currentTarget.dataset.id,false);
  }
  

  // handleChange(event) {
  //   this.setState({
  //     inputField: event.target.value
  //   });
  //   //console.log(this.state.inputField)
  // }




  render(){
    return(
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#" onClick={(e)=>this.onItemClick(e)} data-id="">WynkTribune</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" >
     
      <li class="nav-item" onClick={(e)=>this.onItemClick(e)} data-id="entertainment">
        <a class="nav-link"  href="#">Entertainment <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" onClick={(e)=>this.onItemClick(e)} data-id="technology">
        <a class="nav-link"  href="#">Technology <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" onClick={(e)=>this.onItemClick(e)} data-id="sports">
        <a class="nav-link"  href="#">Sports <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" onClick={(e)=>this.onItemClick(e)} data-id="business">
        <a class="nav-link"  href="#"> Business <span class="sr-only">(current)</span></a>
      </li>
     
      
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" ref={this.inputField} 
                />
      <button class="btn btn-outline-success my-2 my-sm-0"   onClick={(e)=>this.submitHandler(e)} type="submit">Search</button>
    </form>
  </div>
</nav>

)
}

}
export default NavBar;