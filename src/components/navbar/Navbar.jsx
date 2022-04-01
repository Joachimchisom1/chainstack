import './navbar.css'
import HeaderLogo from '../../asset/img/Chainstack.png'
import BNB from '../../asset/img/BNB.png'
import { MenuOutlined } from '@material-ui/icons';
// import Web3 from "web3";
// import Web3Modal from "web3modal";
import { useEthers } from '@usedapp/core'
import { Modal } from 'react-bootstrap'
import { useState } from 'react'

const Navbar = () => {
  // function for Modal
  const [show, popup] = useState(false)

  const modalOpen = () => popup(true)
  const modalClose = () => popup(false)

  // const providerOptions = {

  // }

  // const Web3Modal = new Web3Modal({
  //   network: "mainnet",
  //   cacheProvider: true,
  //   providerOptions
  // })
  // const { account, activateBrowserWallet } = useEthers()
  const { account, activateBrowserWallet } = useEthers()
  // figure out if we are connected or not
  // if not connect, shows a 'connect wallet' button
  // otherwise, just show the address or something
  // const isConnected = account !== undefined
  return (
    <nav>
      <div className="navbar">
        <img className="logo" src={HeaderLogo} alt="" />
        <ul>
          <li>
            <a href="#pool">Pool</a>
          </li>
          <li>
            <a href="#audit">Audit</a>
          </li>
          <li>
            <a href="#pdf">PDF</a>
          </li>
        </ul>

        <div className="bnb-image">
          <img src={BNB} alt="" />
          <span>$000.00</span>
          <div className="wallet">
            <button className='button' onClick={() => modalOpen()}>Connect Wallet</button>
            {/* {isConnected ?
              <button onClick={() => activateBrowserWallet()}>Connected</button>
              :
              <button onClick={() => activateBrowserWallet()}>Connect Wallet</button>

            } */}
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              onHide={modalClose} 
            >
              <Modal.Body>All Wallets IDs</Modal.Body>
            </Modal>

          </div>
        
        </div>
        <MenuOutlined className="menuIcon"/>
      </div>
   
    </nav>
  )
}

export default Navbar
