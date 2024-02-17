export const getProjectJSON = async (desiredProjectType, desiredProject) => {
    const filePath = `${Deno.cwd()}/models/${desiredProjectType}/${desiredProject}.json`
    const decoder = new TextDecoder('utf-8');
    const fileData = await Deno.readFile(filePath);
    const jsonData = JSON.parse(decoder.decode(fileData))
    return jsonData
}