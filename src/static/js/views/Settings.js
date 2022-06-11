import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
         <nav class="nav">
         <a href="/" class="nav__link" data-link>Dashboard</a>
         <a href="/posts" class="nav__link" data-link>Posts</a>
         <a href="/settings" class="nav__link" data-link>Settings</a>
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}