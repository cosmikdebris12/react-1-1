import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

export default function Product(props) {
  const { item, addToCart } = props;

  return (
    <div className="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <Text isHeader={true} text={item.title}/>
        <Text isHeader={false} text={item.description}/>
        <Text isHeader={false} text={item.price} />

        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

Product.propTypes={
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired
    })
}





// import React from 'react';

// export default function Product(props){
//     let {item,addToCart} = props;

//     return(
//         <div key={item.id} className='product'>
//             <img src={item.imageURL} />
//             <div className='product-info'>
//                 <h4>{item.title}</h4>
//                 <p>{item.description}</p>
//                 <p>{item.price}</p>
//                 <button onClick={()=>this.addToCart(item)}>Add to Cart</button>
//             </div>
//         </div>
//     )
// }