import React, {useState, Fragment} from 'react';
import data from './data';

const Menu = (props) => {
 console.log(props.selectedItems);
  return (
            <div className = "section-center">
              {props.selectedItems.map((singleItem) => <article className = 'menu-item'>
                                                
                                                <img className = "photo" src = {singleItem.img} alt = {singleItem.title}/>
                                                <div className = "item-info">
                                                  <header>
                                                    <h4>
                                                    {singleItem.title}
                                                    </h4>
                                                    <h4 className = "price">
                                                    {singleItem.price}
                                                    </h4>
                                                  </header>
                                                  <p className = "item-text">{singleItem.desc}</p>

                                                </div>
                                                </article>)}
              
            </div>           
          
  )
};

export default Menu;
