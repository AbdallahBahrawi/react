import Header from "./Header";
import Post from "./Post"
import Footer from "./Footer"
import Form from "./Form"
import { useState } from "react";

function App() {
  let post = [
    {
      content: "this is my first post",
      numberOfLikes: 10
    },
    {
      content: "this is my second post",
      numberOfLikes: 20
    }
  ]

  let [textField, setTextField] = useState("")
  const updateTextField = e =>  setTextField(e.target.value)

  let [posts, setPosts] = useState(post)

  function handlePost(){
      setPosts(prevPosts => [
            ...prevPosts,
            {content: textField, numberOfLikes: 0},
          ])
  }
  
  let arrayOfTags = []
  arrayOfTags = posts.map((post, index) => <Post key={index} content={post.content} numberOfLike={post.numberOfLikes} />)
  
  return (
    <div className="App">
        <Header />
        <Form post={handlePost} textField={textField} updateTextField={updateTextField}/>
        {arrayOfTags}
        <hr />
        <Footer />
    </div>
  );
}
export default App;
