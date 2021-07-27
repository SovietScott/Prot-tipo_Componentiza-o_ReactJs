import React from 'react';
import './styles.css';

const CatalogItem = ({itemName, itemDescription, itemPrice, imageUrl}) => {
  return(
    <div className="Wrapper">
      <img alt={itemName} src={imageUrl}></img>
      <div className="Description">
        <h4>{itemName}</h4>
        <span>{itemDescription}</span>
      </div>
      <div className="Buy">
        <button id='button'>{`R$ ${itemPrice}`} <br/>
        Adicionar ao Carrinho</button>
      </div>
    </div>
  )
};

export default CatalogItem;