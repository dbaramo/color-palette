import { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"

export default class Palette extends Component {
    render() {
        const colorBoxes = this.props.palette.colors.map((c) => (
            <ColorBox background={c.color} name={c.name} />
        ))
        
        return (   
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}