import { Feed } from 'feed';
import { GetServerSideProps } from 'next';
import { getDatabase } from '../lib/notion';

const domain = 'http://localhost:3000';
const year = new Date().getFullYear();

const generateRSS = (posts) => {
    const feed = new Feed({
        id: domain,
        link: domain,
        title: 'Jaywhen',
        description: 'recordings and thoughts',
        copyright: `All rights reserved ${year}, Jaywhen Xiang`,
        image: `${domain}/favicon-32x32.png`,
        favicon: `${domain}/favicon.ico`,
        author: {
            name: 'Jaywhen Xiang',
            email: 'jaywhenx@gmail.com',
            link: domain,
        },
    })

    posts.forEach((post) => {
        feed.addItem({
            title: post.properties.name.title[0].text.content,
            id: post.id,
            link: `${domain}/blog/${post.properties.slug.rich_text[0].text.content}`,
            description: post.properties.summary.rich_text[0].text.content,
            date: new Date(post.properties.date.date.start),
        })
    })

    return feed.rss2();
}

export const getServerSideProps = async ({res}) => {
    if (res) {
        const posts = await getDatabase()
        const xmlFeed = generateRSS(posts)
    
        res.setHeader('Content-Type', 'text/xml')
        res.write(xmlFeed)
        res.end()
    }
    return {
        props: {},
    }
}


const RSSComponent = () => null;

export default RSSComponent;