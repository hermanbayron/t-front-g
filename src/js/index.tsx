import React, { ReactElement, ReactNode } from "react";
import { createRoot } from "react-dom/client";

import Layout from "./layout";


const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Layout /> 
    </React.StrictMode>
);