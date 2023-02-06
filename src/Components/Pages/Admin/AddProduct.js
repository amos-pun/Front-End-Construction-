const [ product , setProduct ] = useState({
    product_name: '',
    product_price: '',
    product_description: '',
    count_in_stock: '',
    product_image: '',
    category: '',
    error: '',
    success: '',
    formdata: ''
})

const {product_name, product_price, product_description, count_in_stock, error, success, formdatea } = product

const handleChange = name => e => {
    if(name === 'product_image'){
        value = e.target.file[0]
    }
    else{
        value = e.target.value
    }
    setProduct({...product,[name]: value})
    formdata.set(name,value)
}