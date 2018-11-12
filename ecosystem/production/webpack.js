import path from 'path'
import Process from '@mhy/process/dist'

const { moduleHome } = require('../../index')

const CmdWebpackCLI = [
    'node',
    require.resolve('webpack-cli/bin/cli.js'),
    '--config',
    path.resolve(moduleHome, 'webpack/index.js')
]

class Webpack extends Process {
    static isEnabled = true

    constructor(args) {
        const {
            args: [defaultAction = 'start'],
            flags
        } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }) => this.spawn(name, CmdWebpackCLI)

    onRestart = async () => {
        await this.kill('start')
        this.run('start')
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        },
        {
            name: 'restart',
            label: 'Restart',
            shortcut: 'r',
            enabled: true,
            onRun: this.onRestart
        }
    ]
}

module.exports.default = () => Webpack
