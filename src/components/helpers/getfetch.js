import { products } from "../ILContainer/products"

export const getfetch = new Promise((resolve, reject)=>{
    let url = "google.com"
    if(url === "google.com"){
        setTimeout(()=>{
            resolve(products)
        }, 2000);
    } else {
        reject ("400 not found")
    }
})