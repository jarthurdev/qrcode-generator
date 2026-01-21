import chalk from "chalk";
import message from "prompt";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("ESCOLHA A FERRAMENTA: 1 - QRCODE ou 2 - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("ESCOLHA APENAS ENTRE 1 E 2  "),
        required: true,
    }
]

export default mainPrompt;