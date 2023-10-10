import { useState } from "react";

function Join() {
    const [ userId, setUserId ] = useState("");
    const [ userPwd, setUserPwd ] = useState("");

    const onUserIdHandler = (e) => setUserId(e.target.value);
    const onUserPwdHandler = (e) => setUserPwd(e.target.value);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(`userId: ${userId}, userPwd: ${userPwd}`)
    }
    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId} onChange={onUserIdHandler}/>
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} onChange={onUserPwdHandler}/>
                </div>
                <div>
                    <button type="submit">가입</button>
                </div>
            </form>
        </>
    )
}
export default Join;