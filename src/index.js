import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

const el = document.getElementById("app");

const root = createRoot(el);
root.render(<App tab="home" />);