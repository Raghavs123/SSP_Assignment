function parseURL(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return {
        protocol: parser.protocol,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash,
        host: parser.host
    };
}

// Example usage:
const url = "https://www.example.com/path/to/page?query=string#section";
console.log(parseURL(url));
