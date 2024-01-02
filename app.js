const staticFile = async (desiredFile) => {
    console.log('desiredFile: ', desiredFile)
    const file = await Deno.readFile(`${Deno.cwd()}/static/${desiredFile}`)
    return new Response(file, {
        status: 200
    });
}

const index = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/index.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const about = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/about.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const contact = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/contact.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
            "content-type": "text/html"
        }
    })
}

const notFound = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/notfound.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
            "content-type": "text/html"
        }
    })
}

const reqHandler = async (req) => {
    const url = new URL(req.url)
    const pathname = url.pathname

    if (pathname.includes('/static/')) {
        const desiredFile = pathname.split('/static/')[1]
        return staticFile(desiredFile);
    }

    switch (pathname) {
        case "/":
            return index();
        case "/about":
            return about();
        case "/contact":
            return contact();
        default:
            return notFound();
            break;
    }
}

Deno.serve(reqHandler);