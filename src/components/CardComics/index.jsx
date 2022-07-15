import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";
import BasicModal from '../Modal';

const StyledCard = styled(Card)({
  maxWidth: "345px",
  marginTop: "20px",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "inset 0 0 0 1px #e62429",
    transform: "scale(1.025)",
    transition: "0.5s"
  }
})



const CardComics = ({ comicTitle, comicImg, comicExt, comicAuthor, comicDesc, comicSeries }) => {

  return (
    <StyledCard  >
      <img style={{ width: "345px", height: "400px" }} src={`${comicImg}.${comicExt}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {comicTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {comicAuthor}
        </Typography>
      </CardContent>
      <CardActions>
        <BasicModal
          comicTitle={comicTitle}
          comicImg={comicImg}
          comicExt={comicExt}
          comicDesc={comicDesc}
          comicSeries={comicSeries}
        />
        <Button variant="contained" color="error" size="small">Enviar</Button>
      </CardActions>
    </StyledCard>
  );
}

export default CardComics;