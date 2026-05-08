const root = ReactDOM.createRoot(document.getElementById("root"));

function App(){
  return (
    <div style={{
      minHeight:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      color:"white",
      textAlign:"center",
      padding:"40px"
    }}>
      <div>
        <h1 style={{fontSize:"48px"}}>🏆 Premier League Run In Forecast Game 🏆</h1>
        <p>Your latest GitHub export package is ready.</p>
        <p>Paste your full React canvas code into app.js to deploy the complete version.</p>
      </div>
    </div>
  );
}

root.render(<App />);
