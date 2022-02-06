import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [index, setIndex] = useState(0)
  const [money, setMoney] = useState(100)
  const [eatenSushi, setEatenSushi] = useState([])

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((items) => setSushis(items));
  }, []);

 function moreSushi(){
  setIndex(index + 4)
 }

 function payBill(price){
    setMoney(money-price) 
 }

 const sushisToDisplay = sushis.slice(index, index+4)

 function eatSushi(id){
   const newSushi = [...eatenSushi, id]
   setEatenSushi(newSushi)
 }



  return (
    <div className="app">
      <SushiContainer sushis={sushisToDisplay} moreSushi={moreSushi} payBill={payBill} money={money} eatSushi={eatSushi}/>
      <Table money={money} plates={eatenSushi} />
    </div>
  );
}

export default App;
