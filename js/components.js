const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
  <style>
    nav {
      height: 56px;
      background-color: #1a202c;
      color: #f7fafc;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 1rem;
      column-gap: 1rem;
      font-weight: 150;
    }

    a {
      color: #f7fafc;
    }

    a:hover {
      color: blue;
    }

    a:visited {
      color: #f7fafc;
    }
  </style>
    <nav class="h-14 bg-gray-400 text-green-400 flex w-screen items-center">
        <a href="/">Home</a>
        <a href="/about.html">About</a>
    </nav>
`;

// Define Navbar class
class NavbarElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
  }
}

// Define navbar
customElements.define("navbar-element", NavbarElement);
