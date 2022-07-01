import React from 'react';
// import { Link } from 'react-router-dom';
import cardInfo from './cardinfo'
import '../css/parent.css'

let strCrd = "card";

function Card(props) {
    return (
        <>
            <div className={strCrd + props.id + " " + "cards"}>
                <img src={require(`../img/${props.img}.jpg`)} alt=""></img>
                <p>{props.cardfname}</p>
            </div>
        </>
    )
}

function createCard(info) {
    return (
        <Card id={info.id} key={info.id} img={info.img} cardfname={info.cardfname} price={info.price} />
    )
}

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="dashboard">
                {cardInfo.map(createCard)}
            </div>
        </div>
    );
  }
  export default Dashboard;