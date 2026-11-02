
export default async function getProduct() {    
    try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()        
        return data;
    } catch (error) {
        console.error("getProduct API is not working", error);
    }
}

