function PaletteFooter(props){
    const { paletteName, emoji } = props;
    return(
        <footer className="Paletter-footer">
            {paletteName}
            <span className="emoji">{emoji}</span>
        </footer>
    )
}

export default PaletteFooter;