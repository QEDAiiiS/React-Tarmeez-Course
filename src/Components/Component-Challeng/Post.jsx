


export default function Post ({postTitle= 'Post Title', postBody='This is the Post body'}){



    return(
        <div style={{
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            border: '5px solid teal',
            marginBottom: '3%'
        }}>
            <h3>{postTitle}</h3>
            <div style={{border: '1px solid grey',width: '95%'}}></div>
            <p>{postBody}</p>
        </div>
    )
}