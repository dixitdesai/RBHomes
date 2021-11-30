import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '3b03d2a0d4msh7bd411873e37c5fp19426cjsnde814d48fba7'
        }
    })

    return data;
}

