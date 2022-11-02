import { useState } from "react"
const Post = (props) => {

    const [numOfLikes, setNumOfLikes] = useState(props.numberOfLike)

    function handleOnClick(){
        setNumOfLikes(previous => previous + 1)
    }

    return (
    <div className="PostCollection" style={{display: "flex", justifyContent: "center"}}>
        <div className="Post" style={{textAlign: "center" , border: "1px solid", width: "50%"}}>
            <img/>
            <p>{props.content}</p>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={handleOnClick} style={{marginRight: "10px"}}>Like</button>
            <h6>{numOfLikes} Likes</h6>
            </div>
        </div>
    </div>
    )
}

export default Post