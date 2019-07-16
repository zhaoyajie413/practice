const runCommand = (command, args) => {
    const cp = require("child_process");
    return new Promise((resolve, reject) => {
        const executedCommand = cp.spawn(command, args, {
            stdio: "inherit",
            shell: true
        });

        executedCommand.on("error", error => {
            reject(error);
        });

        executedCommand.on("exit", code => {
            if (code === 0) {
                resolve();
            } else {
                reject();
            }
        });
    });
};
//runCommand('npm',['install','element-ui','-s'])
runCommand('notepad',[])
