import { useState } from "react";
// import axios from "axios";
import Navigate from "../components/salesNavigate";


// api key = 0445571bddc20953c3b6
// api secret key = 3b37a4d588793a8fad3d1be02e0d6a0306cbc6776709504ac377fb168546a772




const CreateSales = ({ state }) => {
    const { contract, account } = state;
    // console.log("in create");
    // const [file, setFile] = useState(null);
    // const [fileName, setFileName] = useState("No image selected");
    const [loading, setLoading] = useState(false);

    
    const create = async (e) => {
        const taskTitle = document.querySelector("#taskTitle").value; 
        const taskDesc = document.querySelector("#taskDesc").value; 
        const taskCat = document.querySelector("#cropType").value;
        const taskPrice = document.querySelector("#taskPrice").value; 
        const taskWeight = document.querySelector("#taskWeight").value; 
        const phno = document.querySelector("#phno").value; 
        e.preventDefault();
        setLoading(true);
        
        await contract.methods.CreateSale(taskTitle,taskDesc,taskCat,taskPrice,taskWeight,phno).send({from:account})
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
                    <h1>CREATE NEW<span> SALE</span></h1>
                    <div style={{display:'flex'}}>
                        <label htmlFor="" style={{width:'18vw', marginRight:'2rem'}} >

                            <input id='taskTitle' type='string' placeholder="Enter Crop Name: " required />
                        </label>
                        Select crop type:
                        <select id="cropType" className="" required style={{marginBottom:"2rem",padding:'0.4rem 1rem', marginLeft:"1rem"}}>
                            <option value="vegetable">vegetable</option>
                            {/* <option value="image">File</option> */}
                            <option value="cereal">cereal</option>
                            <option value="fruit">fruit</option>
                            {/* <option value="audio">Audio</option> */}
                        </select>
                        

                    </div>
                    <label htmlFor="" style={{width:'auto'}}>

                            <input id='taskDesc' type='string' placeholder="Enter Description: " required/>
                    </label>
                    <label htmlFor="" style={{width:'auto'}}>

                            <input id='phno' type='string' placeholder="Enter Mobile Number: " required/>
                    </label>
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
                        CREATE
                    </button>
                    }
                    
                    {/* <button type='submit' className="btn">CREATE TASK</button> */}
                </form>
            </div>
            </div>
        </>
    )

    

}

export default CreateSales;