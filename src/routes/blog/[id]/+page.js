/** @type {import('./$types').PageLoad} */
export const load = async({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const blog = await res.json();
    return {
       blog
    };
};