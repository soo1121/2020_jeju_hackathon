import React, {useEffect, useState} from "react";
import axios from 'axios';

function Mypage() {

    const [user, setUser] = useState([]);

    useEffect(async ()=> {
<<<<<<< HEAD
        const userFetch = await axios.get(`https://blog.nopublisher.dev/user/mypage`,{
            withCredentials: true
        });
=======
        await axios.get('https://blog.nopublisher.dev/lessor/mypage',
        {
            headers: {
              "Content-Type" : "application/json"  
            }
          }
        ).then(setUser)
    })
>>>>>>> 3aa47a96b85d5aff54639513b1dfc90930a7a7bf

        // const userFetch = await axios.get(`https://blog.nopublisher.dev/user/mypage`,{
    //         method: 'GET',
    //         url: `https://blog.nopublisher.dev/user/mypage`,
    //     }).then(console.log(user));
    //     setUser(userFetch);
    // },[])

    //     const userFetch = await axios.get(`https://blog.nopublisher.dev/user/mypage`);

    //     setUser(userFetch);
    //     console.log(userFetch);
    // },[])

    return(
        <div>
            회원 : {user.userType}
        </div>
    );
}

export default Mypage;