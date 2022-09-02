export default function GameTile(props) {
    let game = props.game;
    let featuredBadge = game.featured ? "HOT" : "";
    let price = game.price ? "$" + game.price : "Free"
    
    return (
        <div className="tile">
            {featuredBadge && <div className="tileBadge centerAlign">
                <span className="smallIcon">{featuredBadge}</span>
                <img src="/flame.png" className="smallIcon"/>
            </div>}

            <div className="gameImgContainer"><img src={`/${game.image}`} className="gameImg"/></div>
            <div className="centerAlign">
                <img src="/star.png" className="smallIcon"/>
                <span>{game.metrics.rating} <span className="light">({game.metrics.reviews + " reviews"})</span></span>
            </div>

            <p className="gameTitle">{game.title} <span>({game.type})</span></p>
            <p className="bold gamePrice">{price}</p>
        </div>
    )
}