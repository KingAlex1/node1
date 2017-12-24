const fs = require("fs");
const path = require("path");

const src = "../nodeHw1/source/";
const dest = "../nodeHw1/dest/";
const readDir = (src, level) => {
    const files = fs.readdirSync(src);
    files.forEach(item => {
        let local = path.join(src, item);
        let state = fs.statSync(local);
        if (state.isDirectory()) {
            readDir(local, level + 1);
        } else {
            switch (item.charAt(0)) {
                case item.charAt(0): {
                    if (!fs.existsSync(`./dest/${item.charAt(0)}/`)) {
                        fs.mkdirSync(`./dest/${item.charAt(0)}/`);
                    }
                    let start = async () => {
                        await fs.linkSync(
                            local,
                            `dest/${item.charAt(0)}/${item}`
                        );
                        await fs.unlinkSync(local);
                    };
                    start();
                }
            }
        }
    });
};

readDir(src, 0);