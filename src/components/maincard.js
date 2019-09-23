import React, { Component } from "react"
import data from "../utils/data"
import _ from "lodash"
class Main extends Component {
    state = {
        dataArray: [],
        displayArray: [],
        clicked: [],
        score: 0,
        topscore: 0
    };
    componentDidMount() {
        this.setState({ dataArray: data })
    }

    displayimages = () => {
        let stateArray = this.state.dataArray
        const newDataArray = _.shuffle(stateArray).map((ele) => {
            let { id, url } = ele
            return (<div className="col-3">
                <img
                    src={url}
                    key={id}
                    id={id}
                    alt={` card n# ${id}`}
                    className="img-thumbnail"
                    onClick={(event) => { this.handleClick(event);  }}
                    // onChange={()=>}
                >
                </img></div>)
        })
        
        return newDataArray
    }
    
    handleClick = (event) => {

        const { id } = event.target
        this.setState((prev) => {
            var isEmpty = _.isEmpty(prev.clicked)
            if (!isEmpty) {
                var cOn = prev.clicked.includes(id)
                if (!cOn) { 
                    
                    let newscore = prev.score + 1
                    this.props.getScore(newscore,prev.topscore)
                    return {
                        
                        clicked: [ ...this.state.clicked, id],
                        score: newscore,
                        displayArray: this.displayimages(),
                    }
                }else{
                    if(prev.topscore<prev.score){
                        prev.topscore = prev.score
                    }
                    this.props.getScore(0,prev.topscore)
                    return {
                        topscore: prev.topscore,
                        score: 0,
                        clicked: [],
                        displayArray: this.displayimages(),
                    }
                }
            }else{
                let arrayN = [];
                arrayN.push(id)
                this.props.getScore(1,prev.topscore)
                return {
                    score: 1,
                    clicked: [ ...this.state.clicked, id],
                    displayArray: this.displayimages(),
                }
            }
        })

    }

    render() {
        
        return (
            <div className={`container maincontainer ${this.state.score===0 ? "animatemydiv" : ""} `}>
                <div className="row">
                    {this.state.displayArray.length === 0 ? this.displayimages() : this.state.displayArray}
                </div>
            </div>
        )
    }


}

export default Main