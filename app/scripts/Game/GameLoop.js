export default async function GameLoop(Game) {
    setTimeout(() => GameLoop(Game), 1000/30)
}