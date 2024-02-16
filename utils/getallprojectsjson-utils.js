export const getAllProjectsJSON = async (desiredProjectType) => {
    const desiredDir = await Deno.readDir(`${Deno.cwd()}/models/${desiredProjectType}`)
    console.log('desiredDir: ', desiredDir)
    let projects = [];

    for await (const project of desiredDir) {
        const filePath = `${Deno.cwd()}/models/${desiredProjectType}/${project.name}`
        // const fileToImport = `${Deno.cwd()}/models/${desiredResource}/public/${file.name}`
        console.log('filePath in desiredDir loop: ', filePath)
        const JSONmodel = await import(filePath, {
            with: {
                type: "json"
            }
        });
        console.log("JSONmodel.default.basics: ", JSONmodel.default.basics)
        projects.push(JSONmodel.default.basics)
    }
    return projects
}