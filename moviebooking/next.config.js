/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'in.bmscdn.com',
            'assets-in.bmscdn.com',
            'd388d59m61mm0v.cloudfront.net' // Add the new domain here
        ],
    },
};

module.exports = nextConfig;



// old code
//** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['in.bmscdn.com','assets-in.bmscdn.com'], // Add the hostname(s) here
//     },
// }

// module.exports = nextConfig
