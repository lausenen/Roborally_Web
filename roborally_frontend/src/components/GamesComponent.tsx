import {FunctionComponent, useContext, useState} from "react";
import GameContext from "../context/GameContext";
import {GameComponent} from "../components/GameComponent";
import styles from "../styling/BoardComponent.module.scss";
import GameApi from "../api/GameApi";


type GamesComponentProps = {}
const GamesComponent: FunctionComponent<GamesComponentProps> = () => {

    const {games, loaded, validateUser, currentUser} = useContext(GameContext)
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const[width, setWidth] = useState<number>(8)
    const[height, setHeight] = useState<number>(8)
    const[playerCount, setPlayerCount] = useState<number>(2)
    const[nameOfGame, setNameOfGame] = useState<string>("Default Board")

    const onClickCreateGame = async () => {
         await GameApi.createGame(nameOfGame, width,height,playerCount)
    }
    const onClickCreateUser = async () => {
       await GameApi.createUser(name)
        setName("")
    }
    const onClickValidateUser = async () => {
        validateUser(userName)
        setUserName("")

    }


    return (

        !loaded ?(
                <div>
                        <label>
                            Create new user: &nbsp;
                            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                        </label>
                        <button  value="Create User" onClick={onClickCreateUser} >Click Here</button>
                    <br/>

                        <label>
                            Username: &nbsp;
                            <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
                        </label>
                    <button  value="Validate Username" onClick={onClickValidateUser}>Click Here </button>
                    <br/>
                    <p>Logged in as {currentUser.name}</p>
            <div className={styles.container}>
                <div>{ games.map((game,index) =>
        <GameComponent key={"game" + index} game={game}/>
            )
            }

        </div>



                </div>
                    <br/>
                    <h2>Create New Game</h2>
                    <label>Name Of Game: &nbsp;
                        <input type="text" value={nameOfGame}  onChange={event => setNameOfGame(event.target.value)}/>
                    </label>
                    <br/>
                    <label>Width: &nbsp;
                        <input type="number" value={width}  onChange={event => setWidth(event.target.valueAsNumber)}/>
                    </label>
                    <br/>
                    <label>Height: &nbsp;
                        <input type="number" value={height} onChange={event => setHeight(event.target.valueAsNumber)}/>
                    </label>
                    <br/>
                    <label>Number Of Players: &nbsp;
                        <input type="number" value={playerCount} onChange={event => setPlayerCount(event.target.valueAsNumber)}/>
                    </label>
                    <br/>
                    <button className="button button2" onClick={onClickCreateGame}>Create Game</button>
                </div>)
            :
            <div/>

    )

}

export default GamesComponent