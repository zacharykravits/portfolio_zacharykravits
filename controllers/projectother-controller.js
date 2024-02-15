import { getProjectJSON } from "../utils/getprojectjson-utils.js"
import { Liquid } from "npm:liquidjs@10.10.0"

const engine = new Liquid({
    root: `${Deno.cwd()}/views/`,
    extname: '.liquid'
})

export const projectOther = async (pathname, method) => {
    const desiredProjectType = pathname.split("/")[1]
    const desiredProject = pathname.split("/")[2]
    getProjectJSON(desiredProjectType, desiredProject)

    const file = await engine.renderFile("project", {
        project: await getProjectJSON(desiredProjectType, desiredProject)
    })

    return new Response(file, {
        status: 200,
        headers: {
            "content-type": "text/html"
        }
    })
}