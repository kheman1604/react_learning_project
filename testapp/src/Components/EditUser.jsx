import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function EditUser() {

    var [userObj, setUserObj] = useState({
        uid: "Enter Uid",
        pwd: "Enter Password",
        mob: "Enter Mobile",
        picname: ""
      });

      var [Uplfile,setUplFile]=useState( );

      function doUpdate(event)
      {
        var { name, value } = event.target;

        setUserObj({
          ...userObj,
          [name]: value,
        });
      }

      function dofileSave(event)
      {
        setUplFile(event.target.files[0]);
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
        var {uid,pwd,mob,picname}=response.data[0];
        setUserObj({"uid":uid,"pwd":pwd,"mob":mob,"picname":picname});
      }
      useEffect(()=>{
        doFetcOne(curruid);
      },[curruid])
      
      async function doEdit()
      { 
        if(Uplfile===undefined)
        {
          var url = "/api/react/update-post";
          var response = await axios.post(url, userObj);
          alert(JSON.stringify(response.data));
        }
        else
        {
          var url2="/api/react/update-with-img";
          var fd=new FormData();
          for ( var key in userObj) {
            fd.append(key, userObj[key]);
          }
            fd.append("newpic",Uplfile);
          var response2 = await axios.post(url2, fd,{ headers: {
            'Content-Type': 'multipart/form-data'
          }});
          await alert(JSON.stringify(response2.data));
          window.location.reload();
        }
       
      }
      
      



    return (
        <div>
             <center>
            <form method="POST">
                <br></br>
                <h2>User Image</h2>
                <br></br>
                <img src={`../uploads/${userObj.picname}`} height="200px" width="200px" style={{border:"1px solid black" , padding:"10px" , borderRadius:"10px"}} alt="user Profile Pic"></img>
                <label>Change User Image : </label>
                <input type="file" onChange={dofileSave}></input>
                <br></br>
                <br></br>
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
