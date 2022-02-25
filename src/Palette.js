import { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css"

export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            level: 500
        }

        this.changeLevel = this.changeLevel.bind(this);
    }
    
    changeLevel(level){
        this.setState({ level })
    }
    
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;

        const colorBoxes = colors[level].map((c) => (
            <ColorBox background={c.hex} name={c.name} key={c.hex} />
        ))
        
        return (   
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} />
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}