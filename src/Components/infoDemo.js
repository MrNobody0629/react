import React from 'react';
import jsCookies from 'js-cookie';
import '../App.css';

const Infodemo = ()=> {
        return (
            <>
               <div className='container-fluid info-demo-container p-5'>
                    <div className=''>
                        {
                            userExist() == true ? userInfo():''
                        }
                        <h2>Welcome to RoomOrent</h2>
                    </div>
                </div> 
            </>
        )
}
const userInfo = ()=> {
        return (
            <>
                <h1 className=''>Hello {jsCookies.get('userGender') === 'M'?"Mr. ":"Miss "}<span>{jsCookies.get('userName')}</span></h1>
            </>
        )
}

const userExist = ()=>{
    var data = jsCookies.get('userName');
    return data? true:false;
}

export default Infodemo;
