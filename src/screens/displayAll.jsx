import { useState, useEffect } from "react";
import React from "react"
import { Link } from "react-router-dom";
// import Archive from "./Archive";
import Navigate from "../components/navigate";

const DisplayAll = ({ state }) => {

    // console.log(state);

    const { contract, account } = state;
    // console.log(contract, account);

    const [RecordList, setRecordList] = useState([])
    const [search, setSearch] = useState('');






    useEffect(() => {
        const allRecords = async () => {

            try {
                // const res = await fetch("http://localhost:3134/api/ethereum/evault/display-all",{
                //     method: "GET",
                //     headers:{
                //         "content-type": "application/json" 
                //     },
                // })

                // const data = await res.json();

                // if(data.status === 200){
                //     console.log(data.recordList);
                //     setRecordList(data.recordList);
                // }

                const records = await contract.methods.getAllSales().call({ from: account });
                console.log(records);

                setRecordList(records);


            }
            catch (error) {
                console.error(error);
            }
        }

        allRecords();
    }, [])

    // const deleteRecord = async()=>{
    //     let Id = record.id;
    //     console.log(Id);
    // }



    return <>
    <div style={{
            // border:"2px solid red",
            marginTop:"2rem",
            // backgroundColor:"red",
            marginBottom:"4rem",
            width:"80vw",
            display: "flex",
            minHeight: "60vh",
            backdropFilter:"blur(0.25rem)",
            borderRadius:"3rem",
            backgroundColor:"rgba(48, 53, 75, 0.2)",
            // background-color:rgba(48, 53, 75, 0.4);
            boxShadow: "0px 0px 2rem 0.5rem rgba(0,0,0,0.5)"
        }}>
        <div >
            <Navigate />

        </div>

        <div>
            {!account ? 
            <div style={{ 
                display:"block", 
                margin:"2rem 2rem",
            }}>
            <h1 >Connect <span> Metamask</span></h1>
            <span>Note: </span>
            <p>Not connected to the metamask wallet</p>
            <button className='btn wallet_btn' >

                <Link className="nav_link" to="/">
                    <i class='bx bx-log-in' style={{ color: "black" }}> Connect </i>
                </Link>
            </button>
        </div> :

            <div className="display_all_records" 
            style={{
                paddingLeft: "0rem",
                background:"none"
            }}>
                <h1 className="h_name" style={{ marginTop: '-2rem', marginBottom: '2rem' }}>AGRO <span> MART</span></h1>
                
                {/* <div>Account:  {account ? <span>{account}</span> : ""} </div> */}

                {/* <Archive/> */}

                

                {/* <p>{RecordList==="" ? "":"No Files Found!" }</p> */}
                <div className="searchDiv">
                    
                    
                    
                    <input className="searchBar" type="search" placeholder="Search Items" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                                  

                        <div className="display_all_records_card_type">
                            <p>Id </p>
                            <p></p>
                            <p>Name</p>
                            {/* <p>Date</p> */}
                            {/* <p>Type</p> */}
                            <p></p>
                            {/* <p>File</p> */}

                            <p></p>
                            <p></p>
                            <p></p>
                            <p>Delete</p>
                            <p>Share</p>

                        </div>
                </div>


                <div className="display_all_records_container">
                {RecordList && RecordList
                .filter((item) =>  item.title.toLowerCase().includes(search.toLowerCase()))
                // .filter((item) => (item.name === RecordList.name) && item.name.toLowerCase().includes(search.toLowerCase()))
                                    
                .map((record) => {
                    return (
                        <>
                            

                            
                            <div className="display_all_records_card" key={record.id} style={record.id !== '' && record.title !== '' && record.price !== '' && record.quantity !== '' ? {} : { display: "none" }}>
                            {/* <Link  style={{width:"100%"}}> */}
                                <a href={record.url} target="_blank" style={{color:"rgb(57, 56, 56)",fontSize:"0.8rem",fontWeight:"500",width:"100%"}}>
                                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                                        <p style={{color: "green",fontSize:"1.1rem"}}> ID: {record.id}</p>
                                        <p style={{color: "red",fontSize:"1.1rem"}}> {record.title}</p>
                                    </div>
                                    <hr/>
                                    <div>

                                    </div>
                                    <p className="card_desc" style={{color: ""}}> description: {record.description}</p>
                                    <p className="card_desc" style={{color: ""}}> contact: {record.phno}</p>
                                    <hr/>
                                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly",fontSize:"1rem"}}>
                                        <p > Price: <span style={{color: "red"}}>{record.price}</span> </p>
                                        <p style={{color: ""}}> Quantity:<span style={{color: "red"}}> {record.quantity}</span> q</p>

                                    </div>
                                   
                                        
                                    <Link  to="/payement" style={{width:"100%", cursor:"pointer"}}>
                                    {/* <Link  to="/create" style={{width:"100%",display:"flex",justifyContent:"center"}}> */}
                                        <div style={{zIndex:"100",background:"red",color:"white",width:"30%",display:"flex",justifyContent:"center",borderRadius:"1rem"}}>BUY</div>
                                        
                                    </Link>
                                    
                                
                                
                                </a>
                            {/* </Link> */}
                                
                            </div>


                            
                        </>
                    )
                }
                )}
                </div>

                {/* <Link className="nav_link " to="/create" style={{ zIndex: "1000", position: "fixed", top: "6rem", right: "6rem" }}>
                                <i class='bx bxs-plus-circle ' style={{ fontSize: "4rem", color: "#0ef" }}></i>
                </Link> */}
                
            </div>


        }</div>
    </div>
    </>

}

export default DisplayAll;
