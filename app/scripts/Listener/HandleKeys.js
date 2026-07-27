export default async(Listener, { event, on }) => {
    let keys = {
        /*KeyUp: state.game?.state.smallFunctions.getConfig('KeyUp'),
        KeyDown: state.game?.state.smallFunctions.getConfig('KeyDown'),
        KeyLeft: state.game?.state.smallFunctions.getConfig('KeyLeft'),
        KeyRight: state.game?.state.smallFunctions.getConfig('KeyRight'),
        KeyEnter: state.game?.state.smallFunctions.getConfig('KeyEnter'),
        KeyExit: state.game?.state.smallFunctions.getConfig('KeyExit')*/
    }

    let keyPressed = event.code
    let lastClick = Listener.keys[keyPressed]
    let hold = !Listener.keys[keyPressed] || +new Date()-Listener.keys[keyPressed]?.time <= 1000/15
    Listener.keys[keyPressed] = {
        key: event.key || '',
        code: keyPressed || '',
        hold,
        clicked: on,
        time: +new Date(),
        lastClickTime: lastClick?.time || null
    }
    let keyInfo = Listener.keys[keyPressed]
}