import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./new/pages/Main";
import Join from "./new/pages/User/Join";
import Login from "./new/pages/User/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}/>
                <Route path="join" element={<Join />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
