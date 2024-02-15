import { getAllProjectsJSON } from "../utils/getallprojectsjson-utils.js"
import { Liquid } from "npm:liquidjs@10.10.0"

const engine = new Liquid({
    root: `${Deno.cwd()}/views/`,
    extname: '.liquid'
})

export const index = async (pathname, method) => {
    const file = await engine.renderFile("index", {
        uxuiProjects: await getAllProjectsJSON("uxui"),
        otherProjects: await getAllProjectsJSON("other")
    })
    
    return new Response(file, {
        status: 200,
        headers: {
          "content-type": "text/html",
        }
    });
}