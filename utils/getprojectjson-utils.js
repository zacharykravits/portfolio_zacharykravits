export const getProjectJSON = async (desiredProjectType, desiredProject) => {
    const filePath = `${Deno.cwd()}/models/${desiredProjectType}/${desiredProject}.json`
    const JSONmodel = await import(filePath, { with: { type: "json" } });
    return JSONmodel.default
}