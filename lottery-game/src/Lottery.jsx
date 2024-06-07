import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinner = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinner && "Congratulations , you won!"}</h3>
    </div>
  );
}
