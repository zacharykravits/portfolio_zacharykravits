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

const work_uxui_chugsrus = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/uxui-chugsrus.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const work_uxui_renewproject = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/uxui-renewproject.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const work_uxui_dkprojectbuilding = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/uxui-dkprojectbuilding.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const work_uxui_elburro = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/uxui-elburro.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const work_other_idelic = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/other-idelic.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const work_other_dkprojectbuilding = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/other-dkprojectbuilding.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const work_other_authvow = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/other-authvow.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}

const work_other_authvowcsslibrary = async () => {
    const decoder = new TextDecoder("utf-8")
    const file = await Deno.readFile(`${Deno.cwd()}/pages/other-authvowcsslibrary.html`)
    const data = decoder.decode(file)
    return new Response(data, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
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
        case "/uxui/chugsrus":
            return work_uxui_chugsrus();
        case "/uxui/renewproject":
            return work_uxui_renewproject();
        case "/uxui/dkprojectbuilding":
            return work_uxui_dkprojectbuilding();
        case "/uxui/elburro":
            return work_uxui_authvow();
        case "/other/idelic":
            return work_other_idelic();
        case "/other/dkprojectbuilding":
            return work_other_dkprojectbuilding();
        case "/other/authvow":
            return work_other_authvow();
        case "/other/authvowcsslibrary":
            return work_other_authvowcsslibrary();
        default:
            return notFound();
            break;
    }
}

Deno.serve(reqHandler);