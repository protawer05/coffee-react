import { Component } from 'react';
import HomePage from './component/home-page/HomePage';
import CoffeHouse from './component/coffeHouse-page/CoffeHouse';

import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          page: 1
        }
    }
    changePage = (page) => {
        this.setState({
          page: page
        })
    }
    setPage = () => {
      const page = this.state.page
      if (page === 1){
        return <HomePage changePage={this.changePage}/>
      } else if (page === 2){
        return <CoffeHouse changePage={this.changePage}/>
      } else if (page === 3){
        return  // Our coffe
      } else if (page === 4){
        return // For your pleasure
      }
    }

    render(){
      return(
         this.setPage()
      )
    }

}

export default App;
