export const getAllProjectsJSON = async (desiredProjectType) => {
    const desiredDir = `${Deno.cwd()}models/${desiredProjectType}`
    console.log('desiredDir: ', desiredDir)
    let projects = [];

    for await (const project of Deno.readDir(desiredDir)) {
        const filePath = `${Deno.cwd()}/models/${desiredProjectType}/${project.name}`
        console.log('filePath: ', filePath)
        const JSONmodel = await import(filePath, { with: { type: "json" } });
        projects.push(JSONmodel.default.basics)
    }
    console.log('projects: ', projects)

    return projects
}