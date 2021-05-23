const path = require("path");
const fs = require("fs-extra");
const program = require("commander");
const glob = require("glob");

program
    .command("new <component>")
    .description("Create a brand new component")
    .option('-c, --container', 'Create container component')
    .action((component, options)=>{
        const componentType = options.container ? "__Class" :"__Pure";

        const rootFolder = path.join(process.cwd());
        
        const folder = options.container ? "containers" : "components";

        const rootFolderForComponent = path.join(rootFolder, folder, component);
        createComponent(rootFolderForComponent, component, componentType);
    })

const createComponent = (componentPath, componentName, componentType) => {
    const from = path.join(process.cwd(), "scripts", componentType);
    const to = componentPath;
    fs.copySync(path.join(from), path.join(to));
    remapComponent(componentPath, componentName, componentType);
}

const remapComponent = (componentPath, componentName, componentType) => {
    const files = glob.sync(`${componentPath}/**/*`);

    files.map((file) => {
        const componentFile = path.join(file);
        replaceInFile(componentFile, componentType, componentName);
        const replacedFile = componentFile.replace(componentType, componentName);
        fs.renameSync(componentFile, replacedFile);
    })
}

const replaceInFile = (file, replace, replacement) => {
    const content = fs.readFileSync(file, "utf8");
    const re = new RegExp(replace, 'g');
    const result = content.replace(re, replacement);
    fs.writeFileSync(file, result, "utf8");
}

program.parse(process.argv);