import React from "react";


function Video({video, videoComments, handleUpvotes, handleDownvotes, upvotes, downvotes, handleHideButton, hideButton}) {
console.log(video.comments)
const commentDisplay = 
videoComments.map((element) => {
   return  (
    <div className="comments">
    <p> User: {element.user}</p>
    <p>"{element.comment}"</p>
    </div>
   )

})

function hideComments() {
handleHideButton()
}
    return  (
    <div className="Video">
    <iframe
    width="919"
    height="525"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"
  />
<p>{video.title}</p>
<p>Views: {video.views}</p>
<p>Date Posted: {video.createdAt}</p>
<button onClick={handleUpvotes}>👍{upvotes}</button>
<button onClick={handleDownvotes}>👎{downvotes}</button>
<button onClick={hideComments}>{hideButton ? "Hide Comments" : "Show Comments"}</button>
    <p style={{display: hideButton ? 'none' : 'block'}}>Comments:
    {commentDisplay}</p>
  </div>
)}

export default Video