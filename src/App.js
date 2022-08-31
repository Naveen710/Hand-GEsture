import React, { useState } from "react";
import "./styles.css";

const signsLib = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",

  "☝": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "✍": "Writing Hand",
  "💅": "Nail Polish",
  "🤳": "Selfie",
  "💪": "Flexed Biceps",
  "🦾": "Mechanical Arm"
};
var emojis = Object.keys(signsLib);

export default function App() {
  var [meaning, setMeaning] = useState("");
  const [emoji, setEmoji] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = signsLib[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = signsLib[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 class="heading">Hand Gestures</h1>
      <h2>Enter the hand gesture</h2>
      <input
        style={{ fontSize: "1.1rem" }}
        placeholder="Put you gesture here"
        onChange={emojiInputHandler}
      ></input>
      <h2>{emojiClickHandler}</h2>
      <h3>{meaning}</h3>
      <div className="output">
        {emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
