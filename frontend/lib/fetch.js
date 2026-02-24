const fetchAPI = async ({message, verb, id}) => {
    const url = process.env.NEXT_PUBLIC_API_URL + (id ? '/' + id: '');

    let data = [];
    const options = {
        method: verb,
        headers: { 'content-type': 'application/json' },
    };

    if(message){
        options.body = JSON.stringify({ message: message });
    }

    try {
        const response = await fetch(url, options);
        data = await response.json();
        //console.log(data);
    } catch (error) {
        console.error(error);
    }

    return data;
}

export default fetchAPI;