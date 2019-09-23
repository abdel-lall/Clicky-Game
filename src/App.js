import React,{Component} from "react"
import Navbar from "./components/navbar"
import Jumbotron from "./components/jumbotron"
import Footer from "./components/footer"
import Main from "./components/maincard"
class App extends Component{
    state={
        score :0,
        topscore : 0
    }
    getScore= (newscore,newtopscore)=>{
        this.setState({score: newscore ,
                    topscore: newtopscore })
    }
  
render(){
    
    return(
    <div>
    <Navbar score={this.state.score} topscore={this.state.topscore}/>
    <Jumbotron/>  
    <Main getScore={this.getScore} />
    <Footer/>
    </div>
        )
}


}

export default App