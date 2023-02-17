import React from 'react'
import { prices } from  './prices'

const PricesRadio = ({handlePrice}) => {

  const handleChange = e => {
    let price = prices.find(price => price.id == e.target.value)
    let price_value = price.value

    // console.log(price_value)  

    handlePrice(price_value, 'product_price')
  }
  
  return (
    <div>
        {
            prices.map((price) => {
                return (
                    <div key={price.id}>
                      <input name='price' type="radio" id={price.name} onChange={handleChange} value={price.id}/>
                      <label value={price.id} htmlFor={price.name}>{price.name}</label>
                    </div>
                  );
            })
        }
    </div>
  )
}

export default PricesRadio