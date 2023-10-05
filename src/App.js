import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Join from "./components/pages/Join";
import Login from "./components/pages/Login";
import MyPage from "./components/pages/MyPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />}/>
                <Route path="join" element={<Join />} />
                <Route path="login" element={<Login />} />
                <Route path="mypage" element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
