import { useEffect, useState } from "react";
import "./App.css";
import BoxComponent from "./Components/Box";
import { projectFirestore } from "./firebase";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await projectFirestore.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <div className="app">
      {/* <ul>
        {users.map((user) => {
          return (
            <div className="" key={user.name}>
              {/* <li>
                <a href={user.file} download target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    width="100"
                    height="100"
                    src={user.file}
                    alt={user.name}
                  />
                </a>

                <p>{user.name}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
                <p>{user.company}</p>
                <p>{user.designation}</p>
              </li> */}
              <li>

              </li>
            </div>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
