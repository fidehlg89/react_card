import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Card Test</h1>
        <h2>Testing card components style</h2>
      </header>
      <main>
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Body header</h3>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid perspiciatis soluta tenetur doloremque vero architecto, similique quidem ratione neque, non magni eum sint impedit rem? Recusandae accusantium excepturi architecto.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
