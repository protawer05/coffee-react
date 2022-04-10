import { Component } from 'react';

import HomePage from './component/home-page/HomePage'

import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
          page: ''
        }
    }
    changePage = (page) => {
        this.setState({
          page: page
        })
    }
    setPage = () => {
      const page = this.state.page
      if (page === ''){
        return <HomePage changePage={this.changePage}/>
      } else if (page === 1){
        return 1 // <CoffePage/>
      }
    }

  render(){
    return(
      this.setPage()
    )
  }

}

export default App;
