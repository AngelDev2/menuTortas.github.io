class FiguraWeb extends HTMLElement {
    connectedCallback() {
        this.x = 0;
        this.y = parseInt(this.getAttribute("y"), 10);
        this.velocidad = parseInt(this.getAttribute("velocidad"), 10);
    }
    muevete() {
        this.style.right = `${this.x}px`;
        this.style.top = `${this.y}px`;
        this.x = this.x > document.documentElement.clientWidth ? 0 : this.x + this.velocidad;
    }
}
customElements.define("figura-web", FiguraWeb);
