import React from "react";
import FormBuilder from "./components/FormBuilder";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles/global.scss";
import RunTimePage from "./pages/RuntimePage";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="header">
        <div class="logo">
          <svg viewBox="-0.5 28.5 256 197.385" preserveAspectRatio="xMidYMid meet" data-bbox="-0.5 28.5 256 197.385" height="256" width="256" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" data-type="color" role="presentation" aria-hidden="true" aria-label="">
              <g>
                  <path d="M87.5 28.5q7.716-.012 12.5 6A6075 6075 0 0 1 179.5 213q-4.131 17.814-21 11l-3.5-3.5A6076 6076 0 0 1 75.5 42q1.632-10.87 12-13.5" fill="#1602e1" opacity=".976" data-color="1"></path>
                  <path d="M255.5 122.5v10a1256 1256 0 0 1-51 52.5q-10.719 5.865-19.5-2.5-5-8 0-16a2122 2122 0 0 0 38.5-39 2122 2122 0 0 0-38.5-39q-5.814-10.235 2.5-18.5 8.5-5 17 0a1256 1256 0 0 1 51 52.5" fill="#1501e0" opacity=".984" data-color="2"></path>
                  <path d="M-.5 137.5v-11a3998 3998 0 0 1 53-53.5q16.673-5.423 20 11.5-.12 5.608-3.5 10L31.5 132A607 607 0 0 1 72 174.5q1.23 19.764-18.5 16.5a1363 1363 0 0 1-54-53.5" fill="#1501e1" opacity=".979" data-color="3"></path>
              </g>
          </svg>
        </div>
        <h1>Drag-and-Drop Form Builder</h1>
      </div>
      {/* <FormBuilder /> */}
      <RunTimePage />
    </DndProvider>
  );
};

export default App;
