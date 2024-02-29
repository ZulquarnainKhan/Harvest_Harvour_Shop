// We are using navigate to acces each page or navigate to a screen without making any reload
// if we make reload then we will loose the state

import { Link } from "react-router-dom";



const SaleNavigate = () => {
    return (
        <>
            <header style={{
                boxShadow: "0 0 0.8rem rgba(0, 0, 0, 0.8)",
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "2rem",
            }}>
                <div className="logo">E-FARM 3.0</div>
                <hr />
                <nav >
                    <ul >
                        <div className="navDiv"style={{
                            
                            
                        }}>
                            AGRO-MART
                        </div>
                        <li >
                            <Link className="nav_link" to="/display" style={{color: "grey"}}>
                                SHOP </Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/sell" style={{color: "grey"}}>
                                SELL</Link>
                        </li>
                       

                        <li>

                            <hr />
                            <ul>
                                <div style={{
                                    fontSize: "0.8rem"
                                }}>
                                    FUNCTIONALITY
                                </div>

                                <div>
                                    <li >
                                        <Link className="nav_link" to="/create" style={{color: "grey",fontSize:"0.8rem"}}>
                                            Create Sale </Link>
                                    </li>
                                </div>
                                <div>

                                    <li >
                                        <Link className="nav_link" to="/delete" style={{marginRight:"1rem",color: "grey",fontSize:"0.8rem"}}>
                                            Delete Sale  </Link>
                                    </li>
                                    
                                </div>

                                <div>

                                    
                                    <li>
                                        <Link className="nav_link" to="/update" style={{marginRight:"1rem",color: "grey",fontSize:"0.8rem"}}>
                                            Update Sale</Link>
                                    </li>

                                    
                                </div>
                            </ul>

                            <hr />

                            <div style={{marginTop:"2rem"}}>
                                <div style={{
                                    // border:"2px solid red",
                                    width: "100%",
                                    height: "6rem",
                                    marginBottom:"1rem",
                                    borderRadius:"0.5rem",
                                    background: "linear-gradient(to right ,#c800ff,#6f00ff)",
                                    fontSize:"0.8rem",
                                    padding: "0.5rem"
                                }}>
                                    {/* <p>"Please connect your account"</p> */}
                                    <p>If needed, consider </p>
                                    <p>switching to the relevant.</p>
                                    <p>account <span> Thank you!</span></p>
                                </div>
                            <Link className="nav_link nav_link_wallet" to="/" >
                                Connect
                                Wallet
                            </Link>
                            <a href="http://example.com" style={{display:"block", marginTop:"3rem"}}>
                                <button className="nav_link nav_link_wallet" style={{background:"white",  color:"red"}}>HOME</button>
                            </a>
                            </div>

                        </li>
                    </ul>
                </nav>
            </header>
            <div className="hamburger">
                |||
            </div>
        </>
    )
}

export default SaleNavigate;