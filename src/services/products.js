import { dynamicFetch } from "../utils/fetch";

export const getAllProducts = async () => {
    try {
        return await dynamicFetch('products',null,'GET');
    } catch (error) {
        console.error(error);
    }
}