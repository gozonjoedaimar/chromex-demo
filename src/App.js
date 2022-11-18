import React, {useState} from "react";
import axios from "axios";
import downline from "./downline";

const App = () => {
  const [userID, setUserID] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [downlineList, setDownlineList] = useState([]);

  let data = [];

  let list = []

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    axios.get('https://fasttrackfba.com/FTF/API/test/')
      .then(function(res) {
        list = res.data;
      })
      .catch(function(e) {
        console.log(e.message);
      })
      .finally(function() {
        data = downline(Number(userID), list);
        setDownlineList(data);
        setSubmitting(false);
      })
    ;
  }
  function handleInputChange(e) {
    //
    setUserID(e.target.value)
  }
  return (
    <>
      <React.StrictMode>
        <form
          onSubmit={handleSubmit}
          style={{
            minWidth: "350px"
          }}
        >
          <p>
            Enter User ID:
            <input
              value={userID}
              onChange={handleInputChange}
              style={{
                width: "80px",
                padding: "8px 5px",
                margin: "0 12px",
                border: "2px solid black"
              }}
            />
            <button type="submit" disabled={submitting}>View Downline</button>
          </p>
        </form>

        {
          downlineList.map(item => <p>- ID {item.id}: {item.name}</p>)
        }
      </React.StrictMode>
    </>
  );
};

export default App;