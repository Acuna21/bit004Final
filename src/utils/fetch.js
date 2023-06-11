const baseUrl = 'https://fakestoreapi.com/';
export const dynamicFetch = async (url, data, method) => {
    try {
        let response;
        switch (method) {
            case 'POST':
            case 'PUT':
            {
                response = await fetch(baseUrl+url,{
                    method,
                    body:JSON.stringify(data)
                });
                break;
            }
            case 'DELETE':{
                response = await fetch(baseUrl+url,{method});
                break;
            }
            default:{
                response = await fetch(baseUrl + url);
                break;
            }
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}