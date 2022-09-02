export default function Nav() {
    return (
        <nav>
            <img src="/yoihairflower.png" className="mediumIcon navIcon"/>
            <span>The Game Library</span>

            {/*TODO: implement conditional classes for theme*/}
            <button className="purpleTheme">Purple Mode</button>
        </nav>
    )
}