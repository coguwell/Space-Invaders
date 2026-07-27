export class RenderClass {
    constructor() {
        this.canvas = document.getElementById('gameCanvas')
        this.ctx = this.canvas.getContext('2d')
        
        this.rainbowColor = 0
        this.fps = '0-0',
        this.fpsDisplay = 0

        this.scale = 0

        this.lastWidth = 0
        this.lastHeight = 0

        let functions = require('./functions').default(this.ctx, this.canvas, this)
        for (let i in functions) this[i] = functions[i]
        
        this.loop()
    }

    loop() {
        if (+new Date()-this.fps.split('-')[1] > 1000) {
            this.fpsDisplay = this.fps.split('-')[0]
            this.fps = `0-${+new Date()}`
        }
        this.fps = `${Number(this.fps.split('-')[0]) + 1}-${this.fps.split('-')[1]}`
    
        this.scale = (window.innerWidth+window.innerHeight)/2
        
        if (this.lastWidth != window.innerWidth || this.lastHeight != window.innerHeight) {
            this.lastWidth = window.innerWidth
            this.lastHeight = window.innerHeight

            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight

            for (let x = 0; x < this.canvas.width; x++) {
                for (let y = 0; y < this.canvas.height; y++) {
                    document.getElementById('gameCanvas').getContext('2d').fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                    document.getElementById('gameCanvas').getContext('2d').fillRect(x, y, 1, 1)
                }
            }
        }

        window.requestAnimationFrame(() => this.loop())
        //setTimeout(() => this.loop(), 1000/10)
    }
}