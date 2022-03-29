import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewGame = () => {
    const [showForm, setShowForm] = useState(false)
    const [isTeam1Full, setIsTeam1Full] = useState(false)
    const [isTeam2Full, setIsTeam2Full] = useState(false)
    const [gameMode, setGameMode] = useState('')
    const [selectedTeam1, setSelectedTeam1] = useState<string[]>([])
    const [selectedTeam2, setSelectedTeam2] = useState<string[]>([])


    const submitForm = () => {
        console.log('Team 1', selectedTeam1);
        console.log('Team 2', selectedTeam2);
        console.log('isTeam1Full', isTeam1Full);
        console.log('isTeam2Full', isTeam2Full);
    }

    const isSelectedUser = (user: string) => selectedTeam1.includes(user) || selectedTeam2.includes(user)

    const registerPlayer = (team: number, user: string) => {
        if (team === 1)
            setSelectedTeam1(selectedTeam1.concat(user))
        else
            setSelectedTeam2(selectedTeam2.concat(user))
    }
    useEffect(() => {
        setIsTeam1Full(gameMode && gameMode === '1v1' ? !!selectedTeam1.length : selectedTeam1.length > 1)
        setIsTeam2Full(gameMode && gameMode === '1v1' ? !!selectedTeam2.length : selectedTeam2.length > 1)
    }, [gameMode, selectedTeam1, selectedTeam2])

    const clearSelection = () => {
        setSelectedTeam1([])
        setSelectedTeam2([])
        setIsTeam1Full(false)
        setIsTeam2Full(false)
    }

    const renderForm = (gameMode: string) => {
        console.log(isTeam1Full, isTeam2Full);
        console.log(selectedTeam1, selectedTeam2);
        return (
            <>
                <h2>{gameMode}</h2>
                <h3>Team 1</h3>
                {data.map(user => <button onClick={() => { registerPlayer(1, user) }} disabled={isSelectedUser(user) || isTeam1Full} >{user}</button>)}
                <h3>Team 2</h3>
                {data.map(user => <button onClick={() => { registerPlayer(2, user) }} disabled={isSelectedUser(user) || isTeam2Full} >{user}</button>)}
                {!!selectedTeam1.concat(selectedTeam2).length && <button onClick={clearSelection}>Clear selection</button>}
            </>
        )
    }

    const cancel = () => {
        setShowForm(false);
        setGameMode('');
        clearSelection()
    }
    return (
        <>
            {!showForm && <button onClick={() => setShowForm(true)}>New Game</button>}
            {!gameMode && showForm &&
                <>
                    <button onClick={() => setGameMode('1v1')}>1v1</button>
                    <button onClick={() => setGameMode('2v2')}>2v2</button>
                </>
            }
            {gameMode && showForm && renderForm(gameMode)}
            {showForm && <button onClick={cancel}>Cancel</button>}
        </>
    )
}
const data = [
    'Felipe',
    'May Britt',
    'Johannes',
    'Preben',
    'Olve',
    'Ragnhild',
    'Ruben'

]

