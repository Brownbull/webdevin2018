import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  // // this is to force error 
  // if (true) {
  //   throw new Error('NOOOO')
  // }
  return (
    <div>
      {robots.map((robot, i) => {
        return <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      })}
    </div>
  )
}

export default CardList