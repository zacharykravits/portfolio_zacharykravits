import { staticFile } from "./controllers/staticfiles-controller.js"
import { index } from "./controllers/index-controller.js"
import { about } from "./controllers/about-controller.js"
import { projectUXUI } from "./controllers/projectuxui-controller.js"
import { projectOther } from "./controllers/projectother-controller.js"
import { notFound } from "./controllers/notfound-controller.js"


const handler = async (req) => {
    const url = new URL(req.url)
    const pathname = url.pathname
    const method = req.method

    if (pathname.includes('/static/')) {
        return await staticFile(pathname, method);
    } else if (pathname == "/" && method == "GET") {
        return await index(pathname, method)
    } else if (pathname == "/about" && method == "GET") {
        return about(pathname, method)
    } else if (pathname.includes("/uxui/")) {
        return projectUXUI(pathname, method)
    } else if (pathname.includes("/other/")) {
        return projectOther(pathname, method)
    } else {
        return notFound(pathname, method)
    }
}

Deno.serve(handler);