import axios from "axios";

export const fetchArticles = async (query, page) => {
    const {data}  = await axios.get(`https://api.unsplash.com/photos/?client_id=Zi55gyuZOSdRIJwLHjEldTSbP4dwZv-E9vELqZun-m8&query=${query}`, {
        params: {
            page: page,
            per_page: 5,
        }
    })
    return data
}

fetchArticles()
console.log(fetchArticles);


