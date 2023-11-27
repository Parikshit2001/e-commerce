import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

const Cards = (props) => {
    const { product } = props;
    return (
        <div>
            {product && (
            <Card sx={{width:300, height:700, margin:2, padding:2}} elevation={3} variant='outlined'>
            <CardMedia
                component="img"
                image={product.image}
                title={product.title}
                sx={{
                  width:300,
                  height:300,
                  objectFit:'fill'
                }}

            />
            <CardContent>
                <Typography variant="h5" component="div">
                {product.title}
                </Typography>
                <Typography color="text.secondary">
                {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
                </Typography>
            </CardContent>
            </Card>
        )}
        </div>
  )
}

Cards.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      // Add any other expected properties
    }),
  };

export default Cards