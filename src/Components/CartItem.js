import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text'

export default function CartItem(props){
    let {item} = props
    return(
        <div classname='cart'>
            <img src={item.imageURL} />
            <Text isHeader={true} text={item.title} />
            <Text isHeader={false} text={item.description} />
            <Text isHeader={false} text={item.price} />
        </div>
    )
}

CartItem.propTypes={
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired
    })
}