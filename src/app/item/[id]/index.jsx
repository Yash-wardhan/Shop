import React from 'react';

export const getStaticProps = async (context) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const data = await res.json();
    return {
        props: { data }
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    const paths = data.map((item) => ({
        params: { id: item.id.toString() }
    }));

    return {
        paths,
        fallback: false // or true if you want to use fallback for not-yet-generated pages
    };
};

function index({ data }) {
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div>
        <h1>{data.title}</h1>
        <p>Price: {data.price}</p>
        <p>Description: {data.description}</p>
        {/* Add other elements to display other product information */}
        </div>

    );
}

export default index;
