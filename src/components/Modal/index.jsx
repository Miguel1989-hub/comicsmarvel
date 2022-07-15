import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "700px",
    bgcolor: 'background.paper',
    border: '1px solid #e62429',
    boxShadow: 24,
    p: 4,
    display: "flex",
    gap: "20px"
};


const BasicModal = ({ comicTitle, comicImg, comicExt, comicDesc, comicSeries }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button sx={{ marginLeft: "5px", marginRight: "5px" }} variant="contained" color="error" size="small" onClick={handleOpen}>Informações</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box bgcolor={"background.default"} color={"text.primary"} sx={styleModal}>
                    <Box >
                        <img  src={`${comicImg}.${comicExt}`} style={{ width: "250px", height: "350px" }} />
                    </Box>
                    <Box>
                        <Typography id="modal-modal-title" sx={{ mt: 2 }} variant="h6" component="h2">
                            {comicTitle}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
                            {comicDesc}
                        </Typography>
                        <Typography variant="subtitle1" component="h3" sx={{ mt: 1 }}>
                          Série: {comicSeries}
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;