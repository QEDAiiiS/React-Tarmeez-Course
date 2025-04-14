import Header from "./Header";
import Post from "./Post";
import SideMenue from "./SideMenue";
import { useState } from "react";

export default function ComponentChallenge() {
  const postBody = "React Course is the best react Course to learn";

  const posts = [
    {
      id: 1,
      postName: 'React',
      postBody: "React Course is the best react Course to learn",
    },
    {
      id: 2,
      postName: 'Angular',
      postBody: "Angular Course is the best react Course to learn",
    },
    {
      id: 3,
      postName: 'javaScript',
      postBody: "javaScript Course is the best react Course to learn",
    },
  ];


  const postsList= posts.map((post)=>{
    return <Post key={post.id}  postTitle={post.postName} postBody={postBody} />
  })


  const [name, setName]= useState('Ali')
  function changeName(){
    setName('Mahmoud')
  }
  const [inputValue, setInputValue] = useState("")

  function handleInputValue (event){
    setInputValue(event.target.value)
  }
  return (
    <>
      <Header name="Tarmeez" ac="Academy">
        <p>(React Course)</p>
      </Header>

      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "3% auto",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "60%" }}>

            {postsList}
          {/* <Post postTitle="React" postBody={postBody} />
          <Post />
          <Post /> */}
        </div>

        <div style={{ width: "35%" }}>
          <SideMenue />
        </div>

      </div>
        <button onClick={changeName}>Change Name</button>
        <h2>{inputValue}</h2>

        <input onChange={handleInputValue} />
    </>
  );
}
