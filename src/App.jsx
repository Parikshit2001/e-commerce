import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const App = () => {

  const [products, setProducts] = useState([]);
  const [x, setx] = useState('');

  useEffect(() => {
    // const [categoryChosen, setCategoryChosen] = useState('');
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Box 
        display='flex'
        justifyContent='space-around'
        sx={{marginTop:2}}
      >
        <Button variant="contained" color="primary" onClick={() => setx("men's clothing")}>
          Men
        </Button>
        <Button variant="contained" color="primary" onClick={() => setx("women's clothing")}>
          Women
        </Button>
        <Button variant="contained" color="primary" onClick={() => setx("jewelery")}>
          Jewelery
        </Button>
        <Button variant="contained" color="primary" onClick={() => setx("electronics")}>
          Electronics
        </Button>
      </Box>
      <Box display='flex' sx={{flexWrap:'wrap'}} >
        {products.filter(product => product.category == `${x}`).map(product => <Cards key={product.id} product={product}/>)}
      </Box>
    </div>
  );
};

export default App;
