console.log({
    Directory:process.cwd(),
    ID: process.pid,
    plat:process.platform,
    release: process.release,
    title:process.title,
    nodeV:process.version,
    vers: process.versions
})

console.log(process.arch);