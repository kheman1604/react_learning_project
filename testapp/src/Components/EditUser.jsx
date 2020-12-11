import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'

function EditUser() {

    var [userObj, setUserObj] = useState({
        uid: "Enter Uid",
        pwd: "Enter Password",
        mob: "Enter Mobile",
        file: null
      });

      function doUpdate(event)
      {
        var { name, value } = event.target;

        setUserObj({
          ...userObj,
          [name]: value,
        });
      }
      var {curruid}=useParams();
      async function doFetcOne(curruid)
      {
        var url="/api/react/fetch";
        var response=await axios.post(url,{uid:curruid});
        if(response.data.length===0)
            {
             alert("empty");
                return;
            }
        var {uid,pwd,mob}=response.data[0];
        setUserObj({"uid":uid,"pwd":pwd,"mob":mob});
      }
      useEffect(()=>{
        doFetcOne(curruid);
      },[curruid])
      
      async function doEdit()
      { 
        var url = "/api/react/update-post";
        var response = await axios.post(url, userObj);
        alert(JSON.stringify(response.data));
      }
      



    return (
        <div>
             <center>
            <form method="POST">
                <label>Uid: </label>
                <input type="text" name="uid" value={userObj.uid} onChange={doUpdate}></input> 
                <br></br> 
                <label >Password: </label>
                <input type="text" name="pwd" value={userObj.pwd} onChange={doUpdate}></input> 
                <br></br>
                <label>Mobile: </label>
                <input type="text" name="mob" value={userObj.mob} onChange={doUpdate}></input> 
                <br></br>
                <br></br>
                <input type="button" value="Edit" onClick={doEdit}></input> 
            </form>
            </center>
        </div>
    )
}

export default EditUser
