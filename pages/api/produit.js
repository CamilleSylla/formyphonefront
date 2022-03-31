import axios from 'axios'

export default async function handler(req, res) {
    
    try {
        const target = req.body.id
        const product = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT+'/products'+ `/${target}`)
        .then(res => res.data)
        .catch(err => err)
        res.status(200).send(product)

    } catch (err) {
        res.status(400).send(err)
    }
  }