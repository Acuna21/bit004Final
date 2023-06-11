import { dynamicFetch } from "../utils/fetch";

export const getAllCarts = async () => {
    try {
        return await dynamicFetch('carts',null,'GET');
    } catch (error) {
        console.error(error);
    }
}