import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <div>
            {createList(robots)}
        </div>
    ); // eof return
} // eof const CardList 

export default CardList;

// Functions
function createList(robots) {
    return robots.map((robot, i) => {
        return (
        <Card 
            key={i} 
            id={robot.id} 
            name={robot.name} 
            email={robot.email} 
            />
        ); // eof return
    }); // eof  return robots.map
} // eof function createList
