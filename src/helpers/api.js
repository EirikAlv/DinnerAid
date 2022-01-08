import axios from 'axios';

const baseUrl = `${process.env.VUE_APP_APIBASEURL ?? 'http://localhost:5000/api/'}`

export async function get_groceries(token) {return await get_async('groceries', token)}
export async function get_all_recipes(token) {return await get_async('recipes', token)}
export async function getUOM() {return await get_async('uom')}

export async function saveGrocery(body) {return post_async('saveGrocery', body)}
export async function editGrocery(body) {return post_async('editGrocery', body)}
export async function saveRecipe(body) {return  post_async('saveRecipe', body)}
export async function editRecipe(body) {return post_async('editRecipe', body)}
export async function orderToTodo(body) {return post_async('orderRecipe', body)}

export async function deleteRecipe(body) {return await delete_async('deleteRecipe', body)}



async function get_async(endpoint, token) {
    let res = {};
    await axios.get(`${baseUrl}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
    }).then(response => res = response);
    return res.data;
}

async function post_async(endpoint, body) {
    return axios.post(`${baseUrl}${endpoint}`, body);
}

async function delete_async(endpoint, body) {
    let res = {};
    await axios.delete(`${baseUrl}${endpoint}`, {data: body})
            .then(response => res = response);
    return res.data;
}