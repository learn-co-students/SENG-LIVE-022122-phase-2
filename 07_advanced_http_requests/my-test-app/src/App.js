// 💡 Break Out Activity 1: Enable POST Request to json-server to add new Cards
//   ❗ Notable files:
//      - App.js

// 💡 Break Out Activity 2: Enable DELETE Request to json-server to remove Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// 💡 Break Out Activity 3: Enable PATCH Request to json-server to edit Cards
//   ❗ Notable files:
//      - App.js
//      - CardList.js
//      - Card.js
//      - Button.js

// useState Hook Import
import { useState, useEffect } from 'react';

// Import CSS Styles
import './App.css';

// Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';
import CardForm from './components/CardForm';

function App() {
  // Set "cards" state + setter function
  const [ cards, setCards ] = useState([]);
  const [ isLoggedIn, setLoggedIn ] = useState(false);

  // 🚧 Add states to manage POST (addCard), PATCH (removeCard), and DELETE (editCard)
  // ❗ Why is setting state necessary?
  // const [ addCard, setAddCard ] = useState(false);
  // const [ removeCard, setRemoveCard ] = useState(false);
  // const [ editCard, setEditCard ] = useState(false);

  // Combining All States Into One
  const [ issueRequest, setIssueRequest ] = useState(false);

  // !addCard => false
  // !addCard => true

  // Use fetch to retrieve Cards from db.json and
  // set as our initial value for "cards"
  function loadCards() {
    fetch("http://localhost:3001/cards")
      .then(res => res.json())
      .then(data => {
        console.log("Data fetched!", data);
        setCards(data);
    });
  }

  useEffect(() => {
    console.log("Fetching data...");

    // Invoke "loadCards" via useEffect 
    loadCards();

    // Add
    // Other
    // Behaviors

  // ❗ What states can we add to our dependencies array and why?
  }, [issueRequest]);

  function onHandleAddCard(newCard) {

    const newCardsArray = [...cards, newCard]

    // 🚧 Refactor handleAddCard() to handle POST

    fetch("http://localhost:3001/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCard)
    }).then(
      // Pass new array to "setState."
      setCards(newCardsArray)
    );
  }

  // 🚧 Add function to handle DELETE (handleRemoveCard)
  // ❗ Remember to invoke loadCards() and toggle "removeCard" state after successful fetch

  function onHandleRemoveCard(card) {
    fetch(`http://localhost:3001/cards/${card.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
    }).then(
      // setRemoveCard(!removeCard)
      
      // Combining All States Into One
      setIssueRequest(!issueRequest)
    );
  }

  // 🚧 Add function to handle PATCH (handleEditCard)
  // ❗ Remember to invoke loadCards() and toggle "editCard" state after successful fetch

    function onHandleEditCard(card) {
      fetch(`http://localhost:3001/cards/${card.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          liked: !card.liked
        })
      }).then(
        // setEditCard(!editCard)

        // Combining All States Into One
        setIssueRequest(!issueRequest)
      )
    }

  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar 
        isLoggedIn={isLoggedIn} 
      />

      {/* Header Component */}
      <Header 
        firstName="Test" 
        lastName="User" 
      />
      
      {/* CardForm Component */}
      <CardForm 
        onHandleAddCard={onHandleAddCard}
        cards={cards}
      />

      {/* CardList Component */}
      <CardList 
        cards={cards}

        // 🚧 Pass handleRemoveCard() and handleEditCard as props
        onHandleRemoveCard={onHandleRemoveCard}
        onHandleEditCard={onHandleEditCard}
      />
    </div>
  );
}

export default App; 