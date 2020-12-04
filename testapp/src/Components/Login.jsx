import React,{useState} from 'react';
import axios from "axios";

function Login() {

    var [userObj, setUserObj] = useState({
        uid: "Enter Uid",
        pwd: "Enter Password",
        mob: "Enter Mobile",
      });
    var [responseMsg,setResponse]=useState("*");
    var [jsonAry, fillJsonArray] = useState([{"fn":"Aman"}]);

      function doUpdate(event)
      {
        var { name, value } = event.target;

        setUserObj({
          ...userObj,
          [name]: value,
        });
      }

      async function doSave(event)
      {

          event.preventDefault();
          var url =
          "api/react/save?uid=" +
          userObj.uid +
          "&pwd=" +
          userObj.pwd +
          "&mob=" +
          userObj.mob;

          var response = await axios.get(url, userObj);
          await alert(JSON.stringify(response.data));
          setResponse(response.data.msg);
      }

      async function doSavePost() {
        var url = "api/react/save-post";
        var response = await axios.post(url, userObj);
        await alert(JSON.stringify(response.data));
        setResponse(response.data.msg);
      }

      async function doUpdatePost() {
        var url = "api/react/update-post";
        var response = await axios.post(url, userObj);
        alert(JSON.stringify(response.data));
        setResponse(response.data.msg);
      }
      async function doDelete() {
        var url = "api/react/delete";
        var response = await axios.post(url, userObj);
        await alert(JSON.stringify(response.data));
        setResponse(response.data.msg);
      }

      async function doFetcOne()
        {
          var url="api/react/fetch";
          var response=await axios.post(url,userObj);
          if(response.data.length==0)
              {
                setResponse("empty");
                  return;
              }
          setResponse(JSON.stringify(response.data[0]));
          var {uid,pwd,mob}=response.data[0];
          setUserObj({"uid":uid,"pwd":pwd,"mob":mob});
        }

        async function doFetchAll()
        {
          // var url="api/react/fetchAll";
          // var response=await axios.post(url);
          // if(response.data.length==0)
          //     {
          //       setResponse("empty");
          //         return;
          //     }
          //  fillJsonArray(response.data);
          //  alert(response.data.length);

          window.location.href="/Card-Show";
 
        }


    return (
        <div>
            <center>
            <form method="POST" onSubmit={doSave}>
                <label>Uid: </label>
                <input type="text" name="uid" value={userObj.uid} onChange={doUpdate}></input> 
                <input type="button" value="Fetch" onClick={doFetcOne}></input>
                <br></br> 
                <label >Password: </label>
                <input type="text" name="pwd" value={userObj.pwd} onChange={doUpdate}></input> 
                <br></br>
                <label>Mobile: </label>
                <input type="text" name="mob" value={userObj.mob} onChange={doUpdate}></input> 
                <br></br>
                <br></br>
                <input type="submit" value="Save"></input> 
                <input type="button" value="Save Record (POST)" onClick={doSavePost}></input>
                <input type="button" value="Delete Record" onClick={doDelete}></input>
                <input type="button" value="Update Record" onClick={doUpdatePost}></input>
                <input type="button" value="Fetch All Records" onClick={doFetchAll}></input>
            </form>
            <center>
              <p>
                {responseMsg}
              </p>
            </center>
        </center>
        </div>
    )
}

export default Login;
