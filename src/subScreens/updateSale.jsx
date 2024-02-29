import { useState } from "react";
import Navigate from "../components/salesNavigate";



const UpdateSales = ({ state }) => {
    const { contract, account } = state;
    
    const [loading, setLoading] = useState(false);

    
    const create = async (e) => {
        const taskId = document.querySelector("#taskId").value; 
        const taskPrice = document.querySelector("#taskPrice").value; 
        const taskWeight = document.querySelector("#taskWeight").value; 
        // const phno = document.querySelector("#phno").value; 
        e.preventDefault();
        setLoading(true)
        await contract.methods.updateSales(taskId,taskPrice,taskWeight).send({from:account})
        setLoading(false)
    };

    return (
        <>
            <div style={{
            // border:"2px solid red",
            marginTop:"2rem",
            marginBottom:"4rem",
            width:"80vw",
            display: "flex",
            minHeight: "60vh",
            backdropFilter:"blur(1rem)",
            borderRadius:"3rem",
            boxShadow: "0px 0px 2rem 0.5rem rgba(0,0,0,0.5)"
        }}>
        <div >
            <Navigate />

        </div>

            <div className="top" style={{marginTop: "7rem",
        marginLeft:"10rem"}}>
                

                <form onSubmit={create}>
                    <h1>UPDATE <span>SALES</span></h1>
                    {/* <div style={{display:'flex'}}> */}
                        {/* <label htmlFor="" style={{width:'18vw', marginRight:'2rem'}} >

                            <input id='taskTitle' type='string' placeholder="Enter Crop Name: " required />
                        </label>
                        Select crop type:
                        <select id="cropType" className="" required style={{marginBottom:"2rem",padding:'0.4rem 1rem', marginLeft:"1rem"}}>
                            <option value="vegetable">vegetable</option>
                            
                            <option value="cereal">cereal</option>
                            <option value="fruit">fruit</option>
                            
                        </select> */}
                        

                    {/* </div> */}
                    <label htmlFor="" style={{width:'auto'}}>

                            <input id='taskId' type='string' placeholder="Enter Id of Sale: " required/>
                    </label>
                    {/* <label htmlFor="" style={{width:'auto'}}>

                            <input id='phno' type='string' placeholder="Enter Mobile Number: " required/>
                    </label> */}
                    <div style={{display:'flex'}}>

                        <label htmlFor="" style={{width:'18vw', marginRight:'2rem'}}>

                            <input id='taskPrice' type='string' placeholder="Enter Crop Price: " required/>
                        </label>
                        <label htmlFor="" style={{width:'18vw'}}>

                            <input id='taskWeight' type='string' placeholder="Enter Crop Weight in quintals: " required/>
                        </label>
                    </div>

                    {/* <label htmlFor="" placeholder="Select Crop Type: " required style={{display:"inline"}}>
                    </label> */}
                        
                        
                    
                    


                    {/* <input
                        disabled={!account}
                        type="file"
                        id="file-upload"
                        className="data"
                        onChange={retrieveFile}
                        style={{display:"block"}}
                    /> */}
                    {/* <span className="textArea">Image: {fileName}</span><br/> */}

                    {loading ? 
                    <div class="loadingio-spinner-spinner-u8ly2t3l7cg"><div class="ldio-n3uibpy4xdi">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div></div> :
                    <button type="submit" className="upload btn" style={{display:"block", marginLeft:'auto'}}disabled={loading}>
                        UPDATE
                    </button>
                    }
                    
                    {/* <button type='submit' className="btn">CREATE TASK</button> */}
                </form>
            </div>
            </div>
        </>
    )

    

}

export default UpdateSales;