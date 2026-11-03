
export default async function Sort() {
    try {
        const response = await fetch(`https://dummyjson.com/products?sortBy=title&order=asc`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.error("Sort API is not working", error);
    }
}