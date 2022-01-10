//ES6 Version Code
import { useState } from "react";
import "./styles.css";

export default function App() {
  let [inputValue, setInputValue] = useState("Meaning will appear here ^_^");
  const inputChangeHandler = (event) => {
    let input = event.target.value;

    let animal;

    if (input in animalDictionary) {
      let have = animalDictionary[input];
      animal = input + " " + have;
    } else {
      animal = "Can't find in Database";
    }

    // var animal = animalDictionary[event.target.value];
    // if (animal === undefined) {
    //   console.log(animal);
    //   animal = "We don't have this one in the Database";
    // }
    setInputValue(animal);
  };

  const animalDictionary = {
    "🐵": "Monkey",
    "🦍": "Gorilla",
    "🐶": "Dog",
    "🐺": "Wolf",
    "🐱": "Cat",
    "🦝": "Racoon",
    "🦄": "Unicorn",
    "🦌": "Deer",
    "🐷": "Pig",
    "🦊": "Fox",
    "🦓": "Zebra",
    "🐮": "Cow",
    "🐪": "Camel",
    "🦒": "Giraffe",
    "🐘": "Elephant",
    "🐼": "Panda"
  };

  let animalList = Object.keys(animalDictionary);

  const emojiClickHandler = (emoji) => {
    let animal = animalDictionary[emoji];

    setInputValue(`${emoji}  ${animal}`);
  };

  return (
    <div className="App">
      <h1>Animal Emoji Dictionary</h1>

      <input
        placeholder="Enter animal emoji here or choose one from below!"
        onChange={inputChangeHandler}
      ></input>
      <div id="outputDiv">{inputValue}</div>
      <div>
        {
          <ul>
            {animalList.map((animal) => (
              <span
                key={animal}
                onClick={() => emojiClickHandler(animal)}
                style={{ fontSize: "1.5rem", cursor: "grabbing" }}
              >
                {animal}
              </span>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}
