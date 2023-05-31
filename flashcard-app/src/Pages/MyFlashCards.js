import { useSelector, useDispatch } from "react-redux";

import React from "react";

const MyFlashCards = () => {
  const decks = useSelector((state) => state.deck);
  return (
    <React.Fragment>
      <ul>
        {decks.length > 0 &&
          decks.map((item) => (
            <li key={item.deckName}>
              <div>
            
                <h1> {item.deckName}</h1>
                <img src={item.image}></img>
                <h1>{item.description}</h1>
                <ul>
               {console.log(item.terms)}
                 
                  {item.terms.map((item1) => (
                    <li key={item1.id}>
                        <h1>{item1.term}</h1>
                        <h1>{item1.definition}</h1>
                      
                      <div>
                        <img src={item1.image}></img>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>{" "}
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default MyFlashCards;
