export const staticFile = async (pathname, method) => {
    const desiredFile = pathname.split('/static/')[1]
    const file = await Deno.readFile(`${Deno.cwd()}/static/${desiredFile}`)
    return new Response(file, {
        status: 200
    });
}