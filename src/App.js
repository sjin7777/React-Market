import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/page/MainPage";
import Join from "./components/page/Join";
import Login from "./components/page/Login";
import MyPage from "./components/page/MyPage";

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
