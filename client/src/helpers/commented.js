
// .......................................::Side Notes::.................................................//
<a className="" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    Learn React
</a>



// .......................................::Routing::.................................................//

import { Link } from "react-router-dom";

export default function App() {
    return (
        <>
            <nav>
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
        </>
    );
}

//while the index.js is
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "expenses";
import Invoices from "invoices";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
        </Routes>
    </BrowserRouter>
);

// .......................................::Others::.................................................//