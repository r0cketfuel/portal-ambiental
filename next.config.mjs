/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        URL_API_BOYA_PBB0:process.env.URL_API_BOYA_PBB0,
        URL_API_BOYA_PBB1:process.env.URL_API_BOYA_PBB1,
        URL_API_BOYA_PBB2:process.env.URL_API_BOYA_PBB2
    }
};

export default nextConfig;
