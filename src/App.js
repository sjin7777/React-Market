import { BrowserRouter, Routes, Route, /* Outlet, Navigate */ } from "react-router-dom";
// import { shallowEqual, useSelector } from "react-redux";

import Header from "./components/module/Header";
import Main from "./components/pages/Main";
import Join from "./components/pages/User/Join";
import Login from "./components/pages/User/Login";
import MyPage from "./components/pages/User/MyPage";
import MyPageInfo from "./components/pages/User/MyPageInfo";
import ProductDetail from "./components/pages/Products/ProductDetail";
import CartList from "./components/pages/User/CartList";


function App() {
    // const isToken = useSelector((state) => ({ token: state.Token}), shallowEqual).token.isToken;
    // const PrivateRoute = () => {
    //     (isToken) ? <Navigate to="/"/> : <Outlet /> 
    // }

    // console.log(isToken)

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {/* 로그인 여부와 상관 없음 */}
                <Route index element={<Main />}/>
                <Route path="/product/detail/:productId" element={<ProductDetail />} />

                {/* 로그인 하지 않았을 떄 */}
                {/* <Route element={<PrivateRoute isToken={false}/>} > */}
                    <Route path="join" element={<Join />} />
                    <Route path="login" element={<Login />} />
                {/* </Route> */}

                {/* 로그인 했을 때 */}
                {/* <Route path={'/user/*'} element={<PrivateRoute isToken={true}/>} > */}
                    <Route path="user/mypage" element={<MyPage />} />
                    <Route path="user/mypageinfo" element={<MyPageInfo />} />
                    <Route path="user/cartlist" element={<CartList />} />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
