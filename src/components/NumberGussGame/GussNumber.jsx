import { useState, useEffect } from "react";
import Input from "./Input";
import { Buttons } from "./Button";
import "../../../assets/css/game.css";
function Game() {
  const [number, setnumber] = useState();
  const [rand, setrand] = useState(0);
  const [guss, setguss] = useState("Start Gussing........................");
  const [attempt, setattempt] = useState(5);
  const [score, setscore] = useState(0);
  const [result, setresult] = useState("initial");

  const changehandler = (e) => {
    setnumber(e.target.value);
  };

  const again = () => {
    setscore(0);
    setattempt(5);
    ranfun();
    setguss("Start Gussing...................");
    setresult("initial");
  };

  const checknum = (e) => {
    if (number == rand) {
      setresult("matched");
      setguss(`You are lucky now`);
      setattempt(attempt + 1);
      setscore(score + 10);
      ranfun();
    } else {
      setresult("notmatched");
      if (number > rand) {
        setguss(`${number} is too high,Guss again ............... `);

        setattempt(attempt - 1);
        if (attempt == 1) {
          again();
          setguss(`Game re-stared due to no attempt left`);
        }
      }
      if (number < rand) {
        setguss(`${number} is too less,Guss again .................`);
        setattempt(attempt - 1);
        if (attempt == 1) {
          again();
          setguss(`Game restared due to no attempt left`);
        }
      }
    }
  };

  const ranfun = () => {
    const RandomNumber = Math.floor(Math.random() * 20);
    setrand(RandomNumber);
  };

  useEffect(ranfun, []);
  return (
    <>
      <div className="game-body">
        <div className="headdingflex">
          <Buttons title="AGAIN" clickevent={again} />
          <h4>&lt; Between 1 and 20 &gt;</h4>
        </div>
        <h1 className="headingtext">How Lucky Are You? 👻</h1>
        <div className="divider"></div>
        {/* <div className="❔">❔</div> */}
        <div className="buttomflex">
          <Input
            basedonevent={result}
            score={score}
            attempt={attempt}
            guss={guss}
            changehandler={changehandler}
          />
          <div className="rule">
            <h2>Rules</h2>
            <br />
            <ul>
              <li>You only have 5 chance to guss the number</li>
              <br />
              <li>After 5 attempt game get started</li>
              <br />
              <li>The number to be gussed is between 1-20</li>
            </ul>
          </div>
        </div>
        <Buttons title="CHECK?" clickevent={checknum} />
      </div>
    </>
  );
}

export default Game;
