
import { Children } from 'react';
                           {/* Props */}
export default function Header({name, ac, children}) {

    const tarmez= {
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
        backgroundColor: "teal",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
        color: "white",
        fontSize: "30px",
        boxShadow: "0px 5px 13px rgba(0, 0, 0, 0.4)",
      }
  return (
    <div
      style={tarmez}
    >
      <h1>{`${name} ${ac}`}</h1>
      {children}
    </div>
  );
}
