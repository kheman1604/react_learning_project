import React,{useState} from 'react';
import axios from "axios";

function Login() {

    var [userObj, setUserObj] = useState({
        uid: "Enter Uid",
        pwd: "Enter Password",
        mob: "Enter Mobile",
      });

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
      }

      async function doSavePost() {
        var url = "api/react/save-post";
        var response = await axios.post(url, userObj);
        await alert(JSON.stringify(response.data));
      }


    return (
        <div>
            <center>
            <form method="POST" onSubmit={doSave}>
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
                <input type="submit" value="Save"></input> 
                <input
            type="button"
            value="Save Record (POST)"
            onClick={doSavePost}
          ></input>
            </form>
        </center>
        </div>
    )
}

export default Login;
