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
            <h3 class="card-title">Innovations Lab</h3>
            <p class="card-text">
              Our direct-to-consumer referral channel{" "}
              <a
                href="https://www.billshark.com/"
                title="Billshark Site"
                target="_blank"
              >
                Billshark
              </a>{" "}
              serves as an incubator for new ideas. Product, pricing,
              communications, and other ideas get live market testing.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
