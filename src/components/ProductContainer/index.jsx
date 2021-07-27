import React, {useState, useEffect} from 'react';
import Commerce from '@chec/commerce.js';

const ProductContainer = () => {

const commerce = new Commerce('pk_test_30882fab32f4c4637cb98abe3f53760ae52db4f85e82b');
const [products, setProducts] = useState([])

    useEffect(() => {
        commerce.products.list()
          .then(res => {
            setProducts(res.data)
          })
          .catch(err => console.log(err))
    },[])

    return (
      <>
          <Grid stackable columns='equal' centered>
              <Image src={hero} fluid/>
              {products.map(product => <Grid.Column width={5} key={product.id}><ProductCard product={product} /></Grid.Column>)}
          </Grid>
      </>
  );
}

const ProductCard = ({product}) => {
  return (
      <Card 
          image={product.media.source}
          header={product.name}
          meta={product.price.formatted_with_symbol}
          description={product.description.replace(/(<([^>]+)>)/ig,"")}
      />
  );
};

export default ProductCard;