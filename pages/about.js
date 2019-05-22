export default {
    title: 'About Page',
    content: () => {
        return `<h1>${formatTitle('This is the about page')}</h1>
                <main>kak in</main>`;
    },
};



export let formatTitle = title => title.toUpperCase();


export const author = (name,surname) => `${name} ${surname}`;

