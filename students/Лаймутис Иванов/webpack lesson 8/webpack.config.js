module.exports = {
    mode: "development",
    entry: "./src/script",
    output: {
        filename: "./build.js"
    },
    
    devServer: {
        inline: true,
        port: 3001
    },
    
}