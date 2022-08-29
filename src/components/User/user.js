import * as React from 'react';
import "./user.css";
import "aos/dist/aos.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GameInfo from '../GameInfo/gameInfo';
import GameRecord from '../GameRecord/gameRecord';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function User() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="Admin-container">
            <h1 className="admin_heading">Welcome To Lotto</h1>
            <div className="Admin-container__gameInfo">
                <GameInfo />
                <button className="Admin-container__btn">Buy Ticket</button> {/* if user already connected wallet then call the buy ticket function else first ask connect wallet first */}
                <button className="Admin-container__btn" onClick={handleOpen}>View Ticket</button> {/* show if user address has buyed any ticket of current lottery */}
            </div>
            <div className="Admin-container__gameRecord">
                <GameRecord />
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Tickets
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}> {/* show only if user buyed any ticket of current lottery */}
                        <div className='tickets'>
                            <h1 className='ticket__Number'>123445</h1>
                            <h1 className='ticket__Number'>345678</h1>
                            <h1 className='ticket__Number'>224566</h1>
                            <h1 className='ticket__Number'>456797</h1>
                            <h1 className='ticket__Number'>125678</h1>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default User;
