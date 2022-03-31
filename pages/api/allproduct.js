import axios from 'axios'

export default async function getAllProduct(req, res) {
    try {
        
        console.log(process.env.NEXT_PUBLIC_API_PRODUCT+'/products');
        const get =  await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + '/products')
        .then(res => res.data)
        console.log(get);
        res.status(200).send(get)
        
    } catch (err) {
        console.log(err);
        res.status(500)
        res.send(err)
        return err
    }
  }