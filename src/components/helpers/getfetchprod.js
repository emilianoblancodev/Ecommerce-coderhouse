import { products } from "../ILContainer/products"

export const getfetchprod = new Promise((resolve, reject)=>{
    let url = "google.com"
    if(url === "google.com"){
        setTimeout(()=>{
            resolve(product)
        }, 2000);
    }else{
        reject ("400 not found")
    }
})