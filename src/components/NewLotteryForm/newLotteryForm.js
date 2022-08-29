import * as React from 'react';
import TextField from '@mui/material/TextField';
import "./newLotteryForm.css";
import "aos/dist/aos.css";




function GameRecord() {
    return (
        <form
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50remrem' },
            }}
            Validate
            autoComplete="off"
            className='formBox'
        >
            <div className='formInputBox'>
                <TextField type="text" id="lotteryName" label="Lottery Name" variant="outlined" required />
                <TextField type={'number'} onChange={(event) =>
                    event.target.value < 0
                        ? (event.target.value = 0)
                        : event.target.value
                } id="lotteryBasePrice" label="Lottery Base Price" variant="outlined" required />
            </div>
            <div className='formInputBox'>
                <TextField type={'number'} onChange={(event) =>
                    event.target.value < 0
                        ? (event.target.value = 0)
                        : event.target.value
                } id="lotteryTicketPrice" label="Lottery Ticket Price" variant="outlined" required />
                <TextField type="text" id="poolSize" label="Pool Size" variant="outlined" required />
            </div>
            <div className='formInputBox'>
                <TextField type="date" id="endTime" label="End Time" InputLabelProps={{
                    shrink: true,
                }} required />
            </div>
            <button type='submit' className='btn'>Create Lottery</button>


        </form>
    );
}

export default GameRecord;