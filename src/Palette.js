import { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css"

export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }

        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    
    changeLevel(level){
        this.setState({ level })
    }

    changeFormat(val){
        this.setState({ format: val })
    }
    
    render() {
        const { colors, paletteName, emoji } = this.props.palette;
        const { level, format } = this.state;

        const colorBoxes = colors[level].map((c) => (
            <ColorBox background={c[format]} name={c.name} key={c.id} />
        ))
        
        return (   
            <div className="Palette">
                <Navbar 
                    level={level} 
                    changeLevel={this.changeLevel} 
                    handleChange={this.changeFormat}
                />
                
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="Paletter-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}