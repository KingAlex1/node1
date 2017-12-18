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
                case "a": {
                    if (!fs.existsSync("./dest/A/")) {
                        fs.mkdirSync("./dest/A/");
                    }
                    fs.linkSync(local, `dest/A/${item} `);
                    fs.unlinkSync(local);
                }
                case "b": {
                    if (!fs.existsSync("./dest/B/")) {
                        fs.mkdirSync("./dest/B/");
                    }
                    fs.linkSync(local, `dest/B/${item} `);
                    fs.unlinkSync(local);
                }
                case "c": {
                    if (!fs.existsSync("./dest/C/")) {
                        fs.mkdirSync("./dest/C/");
                    }
                    fs.linkSync(local, `dest/C/${item} `);
                    fs.unlinkSync(local);
                }
                case "d": {
                    if (!fs.existsSync("./dest/D/")) {
                        fs.mkdirSync("./dest/D/");
                    }
                    fs.linkSync(local, `dest/D/${item} `);
                    fs.unlinkSync(local);
                }
                case "e": {
                    if (!fs.existsSync("./dest/E/")) {
                        fs.mkdirSync("./dest/E/");
                    }
                    fs.linkSync(local, `dest/E/${item} `);
                    fs.unlinkSync(local);
                }
                case "f": {
                    if (!fs.existsSync("./dest/F/")) {
                        fs.mkdirSync("./dest/F/");
                    }
                    fs.linkSync(local, `dest/F/${item} `);
                    fs.unlinkSync(local);
                }
                case "g": {
                    if (!fs.existsSync("./dest/G/")) {
                        fs.mkdirSync("./dest/G/");
                    }
                    fs.linkSync(local, `dest/G/${item} `);
                    fs.unlinkSync(local);
                }
                case "h": {
                    if (!fs.existsSync("./dest/H/")) {
                        fs.mkdirSync("./dest/H/");
                    }
                    fs.linkSync(local, `dest/H/${item} `);
                    fs.unlinkSync(local);
                }
                case "i": {
                    if (!fs.existsSync("./dest/I/")) {
                        fs.mkdirSync("./dest/I/");
                    }
                    fs.linkSync(local, `dest/I/${item} `);
                    fs.unlinkSync(local);
                }
                case "g": {
                    if (!fs.existsSync("./dest/G/")) {
                        fs.mkdirSync("./dest/G/");
                    }
                    fs.linkSync(local, `dest/G/${item} `);
                    fs.unlinkSync(local);
                }
                case "k": {
                    if (!fs.existsSync("./dest/K/")) {
                        fs.mkdirSync("./dest/K/");
                    }
                    fs.linkSync(local, `dest/K/${item} `);
                    fs.unlinkSync(local);
                }
                case "l": {
                    if (!fs.existsSync("./dest/L/")) {
                        fs.mkdirSync("./dest/L/");
                    }
                    fs.linkSync(local, `dest/L/${item} `);
                    fs.unlinkSync(local);
                }
                case "m": {
                    if (!fs.existsSync("./dest/M/")) {
                        fs.mkdirSync("./dest/M/");
                    }
                    fs.linkSync(local, `dest/M/${item} `);
                    fs.unlinkSync(local);
                }
                case "n": {
                    if (!fs.existsSync("./dest/N/")) {
                        fs.mkdirSync("./dest/N/");
                    }
                    fs.linkSync(local, `dest/N/${item} `);
                    fs.unlinkSync(local);
                }
                case "o": {
                    if (!fs.existsSync("./dest/O/")) {
                        fs.mkdirSync("./dest/O/");
                    }
                    fs.linkSync(local, `dest/O/${item} `);
                    fs.unlinkSync(local);
                }
                case "p": {
                    if (!fs.existsSync("./dest/P/")) {
                        fs.mkdirSync("./dest/P/");
                    }
                    fs.linkSync(local, `dest/P/${item} `);
                    fs.unlinkSync(local);
                }
                case "q": {
                    if (!fs.existsSync("./dest/Q/")) {
                        fs.mkdirSync("./dest/Q/");
                    }
                    fs.linkSync(local, `dest/Q/${item} `);
                    fs.unlinkSync(local);
                }
                case "r": {
                    if (!fs.existsSync("./dest/R/")) {
                        fs.mkdirSync("./dest/R/");
                    }
                    fs.linkSync(local, `dest/R/${item} `);
                    fs.unlinkSync(local);
                }
                case "s": {
                    if (!fs.existsSync("./dest/S/")) {
                        fs.mkdirSync("./dest/S/");
                    }
                    fs.linkSync(local, `dest/S/${item} `);
                    fs.unlinkSync(local);
                }
                case "t": {
                    if (!fs.existsSync("./dest/T/")) {
                        fs.mkdirSync("./dest/T/");
                    }
                    fs.linkSync(local, `dest/T/${item} `);
                    fs.unlinkSync(local);
                }
                case "u": {
                    if (!fs.existsSync("./dest/U/")) {
                        fs.mkdirSync("./dest/U/");
                    }
                    fs.linkSync(local, `dest/U/${item} `);
                    fs.unlinkSync(local);
                }
                case "v": {
                    if (!fs.existsSync("./dest/V/")) {
                        fs.mkdirSync("./dest/V/");
                    }
                    fs.linkSync(local, `dest/V/${item} `);
                    fs.unlinkSync(local);
                }
                case "w": {
                    if (!fs.existsSync("./dest/W/")) {
                        fs.mkdirSync("./dest/W/");
                    }
                    fs.linkSync(local, `dest/W/${item} `);
                    fs.unlinkSync(local);
                }
                case "x": {
                    if (!fs.existsSync("./dest/X/")) {
                        fs.mkdirSync("./dest/X/");
                    }
                    fs.linkSync(local, `dest/X/${item} `);
                    fs.unlinkSync(local);
                }
                case "y": {
                    if (!fs.existsSync("./dest/Y/")) {
                        fs.mkdirSync("./dest/Y/");
                    }
                    fs.linkSync(local, `dest/Y/${item} `);
                    fs.unlinkSync(local);
                }
                case "z":
                    {
                        if (!fs.existsSync("./dest/Z/")) {
                            fs.mkdirSync("./dest/Z/");
                        }
                        fs.linkSync(local, `dest/Z/${item} `);
                        fs.unlinkSync(local);
                    }

                    defalut: {
                        if (!fs.existsSync("./dest/123/")) {
                            fs.mkdirSync("./dest/123/");
                        }
                        fs.linkSync(local, `dest/123/${item} `);
                        fs.unlinkSync(local);
                    }
            }

            console.log(local);
        }
    });
};

readDir(src, 0);
