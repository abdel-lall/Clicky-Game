import React,{Component} from "react"

class Navbar extends Component{

    render(){
        return(<nav className="navbar navbar-light fixed-top">
        <h1 className="title">Clicky game</h1>
        <h1
        className={`guess ${this.props.topscore===0 && this.props.score===0  ? "" :this.props.score===0  ? "wrong" :"correct"}`}
        >{this.props.topscore===0 && this.props.score===0  ? "Click on an image to began" :this.props.score===0  ? "Wrong Guess" :"Correct Guess"}</h1>
        <h1 className="score">Score: {this.props.score} | Top Score: {this.props.topscore}</h1>

      </nav>)
    }
    
    
    }
    
    export default Navbar