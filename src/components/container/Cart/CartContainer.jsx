import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext'
import ButtonSignos from '../../Buttons/ButtonSignos'
import './CartContainer.css'

export default function CartContainer() {

    const { items, removeItems, total } = useContext(CartContext)

    return (
        <div className='itemsCart'>
            {items.map((item) =>
                <div className='itemCart'>

                    <div className='quitarBtn'>
                        <span className='delete-btn' onClick={()=>removeItems(item.props.id)}>X</span>
                    </div>

                    <div className="image">
                        <img src={item.props.img} className='fotoCart'></img>
                    </div>

                    <div className='tituloCartCont'>
                        <h3 className='tituloCart'>{item.props.titulo}</h3>
                    </div>

                    <div className="buttons">
                        {/* <ButtonSignos clase='fas fa-minus btn' /> */}
                        <span> Cantidad: {item.cnt} </span>
                        {/* <ButtonSignos clase='fas fa-plus btn' /> */}
                    </div>

                    <div className='subtotal'>Subtotal ${item.subTotal} </div>
                </div>
            )}
            <div className='total'><b>Total: ${total()}</b></div>
        </div>
    )
}