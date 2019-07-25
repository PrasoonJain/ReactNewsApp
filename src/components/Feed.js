
import React, { Component } from 'react'
import Item from './Item'
import Navbar from './NavBar';
class Feed extends Component {
    
    constructor(props){
    super(props);
    this.handleNewFeed=this.handleNewFeed.bind(this)
    this.state={
        items:[],
        query : "bitcoin"
    }
    
}


    componentDidMount(query,check){
        
        console.log(query)
        if(check==false){
            fetch('https://newsapi.org/v2/top-headlines?apiKey=ebc5bc0d7ff04e13b9de398d5725ba83&country=in&category='+ query)
        
        .then(res=>res.json())
        .then((json)=>{
            this.setState({ items: json.articles })
            this.setState({query:query})
            console.log(this.state.items)
         
        });
        }
        else{
            fetch('https://newsapi.org/v2/everything?apiKey=ebc5bc0d7ff04e13b9de398d5725ba83&q=' + query)
            .then(res=>res.json())
            .then((json)=>{
                this.setState({ items: json.articles })
                this.setState({query:query})
                console.log(this.state.items)
             
            });
        }
       
    }

    handleNewFeed(value,check) {
       
     //   console.log(this.state.query)
        this.componentDidMount(value,check);
       // this.render()
    }
 
 
    render() {
        const items = this.state.items.map((item, index) =>
        <Item key={index} value={item} />
      
      );
      
//  var {items}=this.state;
      return (
       
        <div className="feed">
           <Navbar handleSearch={this.handleNewFeed}/>
              {items}
          </div>
          
        
      )
    }
  }
  export default Feed;