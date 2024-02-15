import { Liquid } from "npm:liquidjs@10.10.0"

const engine = new Liquid({
    root: `${Deno.cwd()}/views/`,
    extname: '.liquid'
})

export const notFound = async (pathname, method) => {
    const file = await engine.renderFile("notfound")
    
    return new Response(file, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}