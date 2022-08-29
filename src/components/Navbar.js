import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@material-ui/core/Grid";
import Icon1 from "../img/meta.webp";
import Icon2 from "../img/wallet.png";
import { ethers } from "ethers";
// import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  p: 4,
};

function Navbar() {
  const provider = new WalletConnectProvider({
    infuraId: "7a04f5a9200041c8b82445299e76ea16",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [accounts, setAccount] = useState("");
  const [isMetaMask, setMetMask] = useState(false);
  const [isWalletConnect, setWalletConnect] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const checkNetwork = async () => {
    if (window.ethereum) {
      const currentChainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      // return true if network id is the same
      if (currentChainId !== 1) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }], // chainId must be in hexadecimal numbers
        });
      }
      // return false is network id is different
      return true;
    }
  };

  const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        const acc = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(acc);
        setOpen(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const connectWalletConnect = async () => {
    try {
      await provider.enable();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      Window.w3 = web3Provider;
      const signer = web3Provider.getSigner();
      setWalletConnect(true);
      // console.log(await web3Provider);
      // if (window.ethereum) {
      const acc = signer.provider.provider.accounts[0];
      console.log(signer.provider.provider.accounts[0].length);
      setAccount(acc);
      setOpen(false);
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    checkNetwork();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1 className="logoName">Lotto</h1>
        </div>
        <div className="navbar-container">
          <div className="left-Nav">

          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <button className="btn-wallet" onClick={handleOpen}>
                <a className="wallet">
                  {accounts.length > 0
                    ? isWalletConnect
                      ? `${accounts[0]}${accounts[1]}${accounts[2]}${accounts[3]}${accounts[4]}${accounts[5]}...${accounts[32]}${accounts[40]}${accounts[41]}`
                      : `${accounts[0][0]}${accounts[0][1]}${accounts[0][2]}${accounts[0][3]}${accounts[0][4]}...${accounts[0][30]}${accounts[0][31]}${accounts[0][32]}`
                    : "Connect Wallet"}
                </a>
              </button>
            </li>
          </ul>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="box-modal">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h1 className="modal-head">Connect Wallet With</h1>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={6} sm={6} className="iconbtnBox">
                  <div className="IconBox">
                    <img className="metaIcon" src={Icon1} />
                  </div>
                  <br />
                  <button
                    className="btn-wallet"
                    onClick={() => connectMetamask()}
                  >
                    <a className="wallet">Metamask</a>
                  </button>
                </Grid>
                <Grid item xs={12} md={6} sm={6} className="iconbtnBox">
                  <div className="IconBox">
                    <img className="metaIcon" src={Icon2} />
                  </div>
                  <br />
                  <button
                    className="btn-wallet"
                    onClick={() => connectWalletConnect()}
                  >
                    <a className="wallet">WalletConnect</a>
                  </button>
                </Grid>
              </Grid>
            </Typography>
          </Box>
        </Modal>
      </nav>
    </>
  );
}

export default Navbar;