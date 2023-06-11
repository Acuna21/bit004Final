import { dynamicFetch } from "../utils/fetch";

export const getAllProducts = async () => {
    try {
        return await dynamicFetch('products',null,'GET');
    } catch (error) {
        console.error(error);
    }
}

export const getProductById = async (id) => {
    try {
        return await dynamicFetch(`products/${id}`,null,'GET');
    } catch (error) {
        console.log(error);
    }
};