import React from 'react'
import Navbar from "../layout/Navbar";
import "../../App.css";
// import MyImg from "../../../public/pok02.png"
import MyImg from "./pok02.png"


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <header className="App-header">
                <img src={MyImg} alt='pokeImg' />
                <h1>Cincinnatus  MiniProyect</h1>
            </header>
        </div>
    )
}

export default Home
