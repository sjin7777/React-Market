import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Join from "./components/pages/User/Join";
import Login from "./components/pages/User/Login";
import Header from "./components/module/Header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Main />}/>
                <Route path="join" element={<Join />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
