import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({ sushis, moreSushi, payBill, money, eatSushi }) {
  return (
    <div className="belt">
      {
      sushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} name={sushi.name} image={sushi.img_url} price={sushi.price} payBill={payBill} money={money} eatSushi={eatSushi} />
      ))}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
