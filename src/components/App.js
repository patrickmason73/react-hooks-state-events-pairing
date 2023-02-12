import React, {useState} from "react";
import video from "../data/video.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);
const numberOfUpvotes = parseInt(video.upvotes)
const numberOfDownvotes = parseInt(video.downvotes)
const [upvotes, setUpvotes] = useState(numberOfUpvotes)
const [downvotes, setDownvotes] = useState(numberOfDownvotes)
const [hideButton, setHideButton] = useState(false)

function handleUpvotes() {
  setUpvotes(parseInt(upvotes + 1))
  console.log(upvotes)
}

function handleDownvotes() {
  setDownvotes(parseInt(downvotes + 1))
}

function handleHideButton() {
  setHideButton(!hideButton)
}

const videoComments = video.comments
  return (
    <div className="App">
      <Video handleHideButton={handleHideButton} hideButton={hideButton} video={video} videoComments={videoComments} handleUpvotes={handleUpvotes} handleDownvotes={handleDownvotes} upvotes={upvotes} downvotes={downvotes} />
    </div>
  );
}

export default App;
