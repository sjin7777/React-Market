import Header from "../items/Header";
import store from "../../store";

import { Button } from "@mui/material";
import { FormControl } from '@mui/base';



function Join({userId, userPwd}) {
    return (
        <div>
            <Header />
            <h1>회원가입</h1>
            <FormControl required>
                <div>
                    <label>아이디</label>
                    <input type="text" value={userId}/>
                </div>
            </FormControl>
            <FormControl>
                <div>
                    <label>패스워드</label>
                    <input type="password" value={userPwd} />
                </div>
            </FormControl>
                {/* <div>
                    <label>패스워드 확인</label>
                    <input type="password" value={userPwdCk} />
                </div> */}
            <Button variant="contained" onClick={()=> store.dispatch({type: 'USER-ADD', user: {userId, userPwd}})}>가입</Button>
            
        </div>
    )
}

export default Join;