Step 1 :
Create a file under utils folder lets say => Usercontext.js

Step 2:
Create context using createContext utility function in Usercontext.js => to set default value
    const UserContext = createContext({
        loggedInUser: "default user"
    })

Step 3:
To access the value from the context which is setup => we need to use useContext hook to access.
    const data = useContext(UserContext); (anywhere I can access)

Step 4: (use UserContext.Provider to modify the context according to the logic)

4.1.1 (Normally) =>To modify the default value 
    <UserContext.Provider value={{loggedInUser:"default-updated"}}>
4.1.2 (Feature FLOW) => that is loggedinuser , here am updating using state variable
    const AppLayout = () => {
    const [userName,setUserName]=useState("");
    return (
        <div className="app">
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}> 
        -----I am passing function setUserName to modify itself------
        <Header />
        <Outlet />
        </UserContext.Provider>
        </div>
    );
    };
4.1.3 => I can modify in different component lets say
    const {loggedInUser, setUserName}=useContext(UserContext);
    <input type="text" className="mx-3 border border-black" value={loggedInUser} onChange={(e)=>{
            setUserName(e.target.value)
    }}></input>
    
Summary:
1) Create a context using createContext utility function.
2) To access the context => we need to use useContext hook to access.
3) To modify the context => Wrap the div with UserContext.Provider in root level page , so that only the elements which is wrapped will be updated. 