import bleues from "./icons/bleues.png"
import grises from "./icons/grises.png"
import jaunes from "./icons/jaunes.png"
import jetons from "./icons/jetons.png"
import merveilles from "./icons/merveilles.png"
import militaires from "./icons/militaires.png"
import or from "./icons/or.png"
import vertes from "./icons/vertes.png"
import violettes from "./icons/violettes.png"

import Score from "./Scores"

function App() {
    const data = {
        gameName: "7 Wonders Duel",
        players: ["Sandra", "Matthieu"],
        max_players: 2,
        criteria: [
            { img: bleues, color: "#d5eef3", extension: "" },
            { img: vertes, color: "#d7edd1", extension: "" },
            { img: jaunes, color: "#f3ec95", extension: "" },
            { img: violettes, color: "#ad94d5", extension: "" },
            { img: merveilles, color: "#c7c7c7", extension: "" },
            { img: jetons, color: "#8aa489", extension: "" },
            { img: or, color: "#f7d87d", extension: "" },
            { img: militaires, color: "#fbe4dc", extension: "" },
            { img: grises, color: "#f5f5f5", extension: "pantheon" },
        ],
    }
    return (
        <div className="App">
            <Score gameData={data} />
        </div>
    )
}

export default App
