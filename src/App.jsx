import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Web3 } from 'web3';
import Wallet from './screens/wallet';
import Navigate from './components/navigate';
import DisplayAll from './screens/displayAll';
import CeralsSale from './subScreens/ceralsSale';
import VegetableSale from './subScreens/vegetableSale';
import FruitSales from './subScreens/FruitSale';
import DeleteSales from './subScreens/deleteSales';
import CreateSales from './subScreens/createSales';
import UpdateSales from './subScreens/updateSale';
import PayementSales from './subScreens/payement';
// import DisplayImage from './sub_Screen/displayImage';
// import DisplayAudio from './sub_Screen/displayAudio';
// import DisplayVideo from './sub_Screen/displayVideo';
// import DisplayDocument from './sub_Screen/displayDocument';
import Sell from './screens/Sell';

function App() {
  let [state, setState] = useState({ web3: null, contract: null, account: null })

  let saveState = ({ web3, contract, account }) => {
    setState({ web3: web3, contract: contract, account: account })
  }

  const router = createBrowserRouter([
    { path: '/', element: <Wallet saveState={saveState} /> },
    { path: '/create', element: <CreateSales state={state} /> },
    { path: '/update', element: <UpdateSales state={state} /> },
    { path: '/delete', element: <DeleteSales state={state} /> },
    { path: '/payement', element: <PayementSales state={state} /> },
    // { path: '/share', element: <Share state={state} /> },
    // //{path:'/view-task', element:<ViewTask/>},
    { path: '/display', element: <DisplayAll state={state} /> },
    { path: '/fruits', element: <FruitSales state={state} /> },
    { path: '/vegetables', element: <VegetableSale state={state} /> },
    { path: '/cereals', element: <CeralsSale state={state} /> },
    // { path: '/displayAudio', element: <DisplayAudio state={state} /> },
    { path: '/sell', element: <Sell state={state}/> },

    { path: '/Navigate', element: <Navigate /> },
  ])

  return (
    <>
      <RouterProvider router={router} />
      

    </>
  )
}

export default App
