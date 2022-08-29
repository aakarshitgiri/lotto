import React from "react";
import "./adminPanel.css";
import "aos/dist/aos.css";
import GameInfo from '../GameInfo/gameInfo';
import GameRecord from '../GameRecord/gameRecord';
import NewLotteryForm from '../NewLotteryForm/newLotteryForm';


function Admin() {
    return (
        <div className="Admin-container">
            <h1 className="admin_heading">Welcome To Lotto Admin Panel</h1>
            <div className="Admin-container__gameInfo"> {/* show only when there is lottery is running and hide after declaring results */}
                <GameInfo />
                <button className="Admin-container__btn">Delcare Result</button>   {/* Disable button till the lottery is running   */}
            </div>
            <div className="Admin-container__newLotteryForm">  {/* show only when there is no lottery is running and show after the decleration of previous lottery result and hide after creating a lottery */}
                <NewLotteryForm />
            </div>
            <div className="Admin-container__gameRecord">
                <GameRecord />
            </div>
        </div>
    );
}

export default Admin;
