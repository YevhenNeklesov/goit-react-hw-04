import axios from "axios";

export const fetchArticles = async (query, page = 0) => {
    const {data}  = await axios.get(`https://api.unsplash.com/search/photos/?client_id=Zi55gyuZOSdRIJwLHjEldTSbP4dwZv-E9vELqZun-m8&`, {
        params: {
            page: page,
            per_page: 12,
            query: query,
        }
    })
    return data
}




