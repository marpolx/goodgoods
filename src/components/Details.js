import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,img,info,price,name,collect,icon,inCart}= value.detailProduct;

                    return(
                        <div className="container py-5">
                            {/*name*/}
                            <div className="row">
                                <div className="col-10 mx-autotext-center text-slanted text-blue my-5">
                                    <h1>{name}</h1>
                                </div>
                            </div>

                            {/* end name*/}
                            {/* product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>

                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>{name}</h1>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>£ </span>{price}
                                        </strong>  
                                    <p className="text-muted lead">{info}</p>
                                    </h4>
                                    <h4 className="text-blue">Collect</h4>
                                    <img src={icon} className="img-fluid" alt="material"/>
                                    <text className="text-blue">{" "}x {collect}</text>
                                </div>
                                <Link to="/">
                                    <ButtonContainer>
                                        back to products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer 
                                    disabled={inCart ? true : false}
                                    onClick={() =>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                {inCart ? "inCart": "add to cart"}
                                </ButtonContainer>                                    
                                
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
