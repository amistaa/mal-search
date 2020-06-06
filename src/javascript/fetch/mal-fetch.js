const API_URL = "https://api.jikan.moe/v3/search/anime?q="

class MALFetch {
    static apiMAL(mal) {
        return fetch(API_URL + mal)
            .then(res => {
                return res.json()
            })
            .then(json => {
                if (mal.length === 0) {
                    return Promise.reject(`Missing anime name.`)
                } else if (mal.length < 3) {
                    return Promise.reject(`${mal} is the wrong anime name.`)
                } else if (json.results) {
                    return Promise.resolve(json.results);
                } else if (json.status === "403") {
                    return Promise.reject(`${mal} is the wrong anime name.`)
                } else if (!json.results) {
                    return Promise.reject(`${mal} is the wrong anime name.`)
                } else {
                    return Promise.reject(`${mal} is the wrong anime name.`)
                }
            })
    }
}

export default MALFetch;