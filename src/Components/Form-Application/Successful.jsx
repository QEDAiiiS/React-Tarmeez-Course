export default function Successful({ errorMessage }) {
  console.log(errorMessage);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "80px",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {errorMessage == '' ? (
        <h1 style={{color:'green'}}>The Form Has Been Submitted Successfully</h1>
      ) : (
        <h1 style={{color:'red'}}>{errorMessage}</h1>
      )}
    </div>
  );
}
