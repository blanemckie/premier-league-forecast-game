const { motion } = Motion;

function App() {
  return (
    <div className="min-h-screen bg-[#37003c] text-white p-6 flex items-center justify-center">
      <div className="text-center max-w-3xl">
        <div className="text-6xl mb-6">🏆</div>
        <h1 className="text-5xl font-black mb-4">
          Premier League Run In Forecast Game
        </h1>
        <p className="text-xl text-white/80 mb-8">
          Latest GitHub export package created successfully.
        </p>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
          <p className="font-bold">
            This ZIP contains the GitHub-ready starter structure.
          </p>
          <p className="mt-4 text-white/70">
            Your latest Canvas React code can now be pasted directly into app.js
            if needed.
          </p>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
