import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles/global.scss";
import FormBuilder from "./components/FormBuilder";
import RunTimePage from "./pages/RuntimePage";
import '@ionic/react/css/core.css';
import { IonRadio, IonRadioGroup, setupIonicReact } from '@ionic/react';
import "./App.scss";
import { translate, setLanguage, initLanguage } from "./i18n";

setupIonicReact();
const App = () => {
  const [mode, setMode] = useState("run");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    initLanguage();
    console.log(navigator.language.slice(0, 2));
    setLang(navigator.language.slice(0, 2));
  }, []);

  const handleLanguageChange = (lang) => {
    setLang(lang);
    setLanguage(lang);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="header">
        <div className="logo">
          <svg viewBox="-0.5 28.5 256 197.385" preserveAspectRatio="xMidYMid meet" data-bbox="-0.5 28.5 256 197.385" height="256" width="256" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" data-type="color" role="presentation" aria-hidden="true" aria-label="">
              <g>
                  <path d="M87.5 28.5q7.716-.012 12.5 6A6075 6075 0 0 1 179.5 213q-4.131 17.814-21 11l-3.5-3.5A6076 6076 0 0 1 75.5 42q1.632-10.87 12-13.5" fill="#1602e1" opacity=".976" data-color="1"></path>
                  <path d="M255.5 122.5v10a1256 1256 0 0 1-51 52.5q-10.719 5.865-19.5-2.5-5-8 0-16a2122 2122 0 0 0 38.5-39 2122 2122 0 0 0-38.5-39q-5.814-10.235 2.5-18.5 8.5-5 17 0a1256 1256 0 0 1 51 52.5" fill="#1501e0" opacity=".984" data-color="2"></path>
                  <path d="M-.5 137.5v-11a3998 3998 0 0 1 53-53.5q16.673-5.423 20 11.5-.12 5.608-3.5 10L31.5 132A607 607 0 0 1 72 174.5q1.23 19.764-18.5 16.5a1363 1363 0 0 1-54-53.5" fill="#1501e1" opacity=".979" data-color="3"></path>
              </g>
          </svg>
        </div>
        <h1>{translate("heading")}</h1>
      </div>
      <IonRadioGroup value={mode === "run" ? "run" : "design"} className="mode-selector"
       onIonChange={(event) => setMode(()=>event.detail.value)}>
        <IonRadio value="run" labelPlacement="start" justify="start" alignment="start">Display Mode</IonRadio>
        <br />
        <IonRadio value="design" labelPlacement="start" justify="start" alignment="start">Design Mode</IonRadio>
        <br />
      </IonRadioGroup>
      {
        mode === "run" ? <RunTimePage /> : <FormBuilder />
      }
      
    </DndProvider>
  );
};

export default App;
