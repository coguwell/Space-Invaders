'use client';
import { useEffect } from "react";
import { GameClass } from './scripts/Game/index.js';
import { ListenerClass } from './scripts/Listener/index.js';
import { RenderClass } from './scripts/Render/index.js';

export default function Home() {
    useEffect(() => {
        const Game = new GameClass()
        const Listener = new ListenerClass()
        const Render = new RenderClass()

        Game.listenerState = Listener
        Game.renderState = Render

        Listener.gameState = Game
        Listener.renderState = Render

        Render.gameState = Game
        Render.listenerState = Listener
    }, []);

    return (
        <main>
            <canvas id="gameCanvas" />
            <div id="screenElements" />
        </main>
    );
}