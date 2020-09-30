import React from 'react';
import './App.css';
import DragList from "./components/DragList";
import DropList from "./components/DropList";

function App() {
  return (
        <div className="container-fluid" style={{ height: "100vh" }}>
            <div className="row" style={{ height: "40vh" }}>
                <div className="col-6" style={{ height: "40vh", padding: "20px" }}>
                    <DragList />
                </div>
                <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                    <DropList />
                </div>
            </div>
        </div>
  );
}

export default App;
