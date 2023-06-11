import { dynamicFetch } from "../utils/fetch";

export const getAllCarts = async () => {
    try {
        return await dynamicFetch('carts',null,'GET');
    } catch (error) {
        console.error(error);
    }
};

export const getCartById = async (id) => {
    try {
        return await dynamicFetch(`carts/${id}`,null,'GET');
    } catch (error) {
        console.log(error);
    }
};