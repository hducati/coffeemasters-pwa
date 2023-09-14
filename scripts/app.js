import Menu from './Menu.js';
import Order from './Order.js';
import Router from './Router.js';

// Request persistence storage
(async function() {
    if (navigator.storage && navigator.storage.persist) {
        if (!await navigator.storage.persisted()) {
            const result = await navigator.storage.persist();
            console.log(`Persist result: ${result}`)
        }
    }

    // Quota
    if (navigator.storage && navigator.storage.estimate){
        const q = await navigator.storage.estimate();
        console.log(`Quota available: ${q.quota/1024/1024}MiB`)
        console.log(`Quota used: ${q.usage/1024}KiB`)
    }
})();

window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    Menu.load();
    Order.render();
 } );
