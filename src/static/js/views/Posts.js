import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
         <nav class="nav">
         <a href="/" class="nav__link" data-link>Dashboard</a>
         <a href="/posts" class="nav__link" data-link>Posts</a>
         <a href="/settings" class="nav__link" data-link>Settings</a>
         </nav>
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}