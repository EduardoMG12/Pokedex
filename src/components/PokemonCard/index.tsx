import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IPokemon } from 'interfaces';


const PokemonCard = ({ name, image, alt }: IPokemon) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgba(15, 14, 14, 0.7)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography color="rgba(222,222,222,0.9)" gutterBottom variant="h5" component="div" textAlign={"center"} >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;