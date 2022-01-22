import axios from 'axios';

const baseUrl = process.env.VUE_APP_ENVIRONMENT === 'DEV' ? 'http://localhost:5000/api/' : `${process.env.VUE_APP_APIBASEURL}'/api/'`

export async function get_groceries(token) {return await get_async('groceries', token)}
export async function get_all_recipes(token) {return await get_async('recipes', token)}
export async function getUOM(token) {return await get_async('uom', token)}

export async function save_grocery(body, token) {return post_async('saveGrocery', body, token)}
export async function edit_grocery(body, token) {return post_async('editGrocery', body, token)}
export async function save_recipe(body, token) {return  post_async('saveRecipe', body, token)}
export async function edit_recipe(body, token) {return post_async('editRecipe', body, token)}
export async function orderToTodo(body, token) {return post_async('orderRecipe', body, token)}

// export async function delete_grocery(body, token) {return delete_async('deleteGrocery', body, token)}
export async function delete_recipe(body, token) {return await delete_async('deleteRecipe', body, token)}



async function get_async(endpoint, token) {
    let res = {};
    await axios.get(`${baseUrl}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
    }).then(response => res = response);
    return res.data;
}

async function post_async(endpoint, body, token) {
    return await axios.post(`${baseUrl}${endpoint}`, body, {
        headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
    });
}

async function delete_async(endpoint, body, token) {
    let res = {};
    await axios.delete(`${baseUrl}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: body
    }).then(response => res = response);
    return res.data;
}