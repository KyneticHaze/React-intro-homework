import axios from "axios";

async function axiosData(id) {

    const { data: response } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    return (
        console.log(response),
        console.log(post)
    );
};

export default axiosData;