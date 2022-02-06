import React, { useState } from "react";

function Sushi({ sushi, name, image, price, payBill, money, eatSushi }) {

  const [eaten, setEaten] = useState(false)

  function clearPlate(){
    if (!eaten){
      if (money >= price){
        setEaten(eaten => !eaten)
        payBill(price)
        eatSushi(sushi.id)
      }else if (money < price){
        alert('You are Broke!')
      }
    } else if (eaten){
      return null
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={clearPlate}>
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
