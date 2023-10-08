import axios from "axios";
const proto = 'https://';
const domain = 'api.platovcorp.site';
const path = '/product.json';

export default class ProductService {

    static async fetch() {
        const data = await axios.get(`${proto}${domain}${path}`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        return data;
    }
}
