export const getProjectJSON = async (desiredProjectType, desiredProject) => {
    // console.log('desiredProjectType: ', desiredProjectType)
    // console.log('desiredProject: ', desiredProject)
    const filePath = `${Deno.cwd()}/models/${desiredProjectType}/${desiredProject}.json`
    console.log('filePath: ', filePath)
    const JSONmodel = await import(filePath, { with: { type: "json" } });
    console.log('JSONmodel: ', JSONmodel)
    return JSONmodel.default
}