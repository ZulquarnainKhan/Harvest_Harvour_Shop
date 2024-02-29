import Web3 from 'web3';
import ABI from "./../../abi.json"
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';




const Wallet = ({saveState})=>{

    const navigateTo = useNavigate();

    const connectWallet = async()=>{
        try{
            if(window.ethereum){
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({
                    method : "eth_requestAccounts",
                })

                console.log(web3,accounts);
        
                
                const contractAddress = "0x7a0aeA0d96636bfF33FFf481A0930b600C4d4F15";
                const contract = new web3.eth.Contract(ABI,contractAddress);
                console.log(contract);

                saveState({web3:web3,contract:contract,account:accounts[0]})

                navigateTo('/display');
            }
            else{
                throw new Error;
            }
        }
        catch(error){
            console.log(error);
        }
        // console.log(Web3);
    }

    return (
        <div style={{
            
        }}>
        {/* <div style={{position: 'absolute'}}>
            <ParticleSettings/>
        </div> */}
        <div className='wallet_header' style={{background: "none",
        //  margin:"1rem 1rem 5rem 5rem",
        //  width:"80vw",
         display:"block",
        //  alignSelf: "center",
        //  alignItems: "center" 
        // margin: "1rem auto",
        // marginLeft: "5px"
         }}>
            <div className="wallet_div" style={{
                
            }}>
                
                <span>WELCOME TO</span>
                <p>E-MARKET</p>
            </div>
        </div>
        <div className='wallet_body' style={{
            
        }}>

            {/* <h1>WELCOME <span>BACK! </span></h1> */}
            <p>Securely store and access your digital assets </p>
             <p> with our cutting-edge web storage platform,</p>
            <p> backed by the transparency and immutability of </p>
            <p><span>blockchain technology.  </span></p>
            {/* <p>Your data, your control—experience the future of secure and decentralized web storage</p> */}
            <div className='wallet_container'>

            <button onClick={connectWallet} className='btn wallet_btn' >Connect Wallet</button>
            </div>
        </div>
        </div>
    )
}

Wallet.propTypes = {
    saveState : PropTypes.func.isRequired,
};

export default Wallet;