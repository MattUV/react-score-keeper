import React from "react"
import { nanoid } from "nanoid"

export default function Score(props) {
    const [criteria, setCriteria] = React.useState(
        props.gameData.criteria.map((c) => ({ ...c, id: nanoid() }))
    )

    const [players, setPlayers] = React.useState(
        props.gameData.players.map((p) => ({
            name: p,
            id: nanoid(),
        }))
    )

    const [scores, setScores] = React.useState(
        players
            .map((p) =>
                criteria.map((c) => ({
                    player: p.id,
                    criteria: c.id,
                    score: 0,
                }))
            )
            .flat()
    )

    const [total, setTotal] = React.useState(
        players.map((p) => ({ player: p.id, total: 0 }))
    )

    React.useEffect(() => {
        total.forEach((t) => {
            let subTotal = 0
            scores
                .filter((item) => item.player == t.player)
                .forEach((item) => (subTotal += parseInt(item.score)))
            setTotal((prevTotal) =>
                prevTotal.map((item) =>
                    item.player == t.player
                        ? { ...item, total: subTotal }
                        : item
                )
            )
        })
    }, [scores])

    const listPlayers = players.map((p) => <td key={p.id}>{p.name}</td>)
    const listColumns = criteria.map((c) => (
        <tr key={c.id} style={{ backgroundColor: c.color }}>
            <td>
                <img className="icon" src={c.img} />
            </td>
            {players.map((p) => (
                <td key={p.id}>
                    <input
                        type="number"
                        value={getScore(p.id, c.id)}
                        player={p.id}
                        criteria={c.id}
                        onChange={(event) => handleChange(p.id, c.id, event)}
                        name="pouet"
                    />
                </td>
            ))}
        </tr>
    ))
    const listTotal = (
        <tr>
            <td>TOTAL</td>
            {total.map((t) => (
                <td key={t.player}>{t.total}</td>
            ))}
        </tr>
    )

    function getScore(_player, _criteria) {
        // Retourne le score pour un joueur et un critère
        const obj = scores.find(
            (item) => item.player == _player && item.criteria == _criteria
        )
        return obj.score
    }

    function handleChange(_player, _criteria, event) {
        setScores((prevScores) =>
            prevScores.map((item) =>
                item.player != _player || item.criteria != _criteria
                    ? item
                    : { ...item, score: event.target.value }
            )
        )
    }

    return (
        <table className="score">
            <thead>
                <tr>
                    <th>{props.gameData.gameName}</th>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    {listPlayers}
                </tr>
            </thead>
            <tbody>{listColumns}</tbody>
            <tfoot>{listTotal}</tfoot>
        </table>
    )
}
