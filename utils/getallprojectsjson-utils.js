export const getAllProjectsJSON = async (desiredProjectType) => {
    const desiredDir = await Deno.readDir(`${Deno.cwd()}/models/${desiredProjectType}`)
    let projects = [];

    for await (const project of desiredDir) {
        const filePath = `${Deno.cwd()}/models/${desiredProjectType}/${project.name}`
        const decoder = new TextDecoder('utf-8');
        const fileData = await Deno.readFile(filePath);
        const jsonData = JSON.parse(decoder.decode(fileData))
        if (jsonData.basics.state == "public" || jsonData.basics.state == "coming soon") {
            projects.push(jsonData.basics)
        }
    }
    return projects
}