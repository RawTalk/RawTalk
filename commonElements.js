class MySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="topBar">
                <div id="sideBarButton">
                    Menu
                </div>
                <div id="topBar__logo"></div>
            </div>

            <div id="modalCover"></div>

            <div id="sideBar">
                <a href="./"><div class="navButton">🏡 Home</div></a>
                <a><div class="navButton">📘 About Us <span class="comingSoon">coming soon</span></div></a>
                <a href="events"><div class="navButton">📅 Events</div></a>
                <a><div class="navButton">🧾 Blog <span class="comingSoon">coming soon</span></div></a>
                <a href="waterwell"><div class="navButton">🌊 Water Well Project</div></a>
                <a><div class="navButton">🍩 Donate <span class="comingSoon">coming soon</span></div></a>
                <a href="contactus"><div class="navButton">📞 Contact Us </div></a>

                <div id="footer">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSex7cgwwARzO6U1leDuoDIUw6SvdXmQ4l-VbvcbY610ZjthYA/viewform" target="_blank">
                        <div id="footer__needSupport">
                            <div id="footer__needSupport__container">Need Support?</div>
                        </div>
                    </a>
                    <div id="darkThemeToggle">Dark Theme</div>
                    <div><span id="year">2021</span> RAW TALK</div>
                    <div id="businessInquiry">For business inquiry, <br>
                        please contact Zakaria at <br>+44 774 928 4101</div>
                </div>
            </div>
        `;

        // make current page navButton active
        let navButton = document.getElementsByClassName('navButton');
        let index = parseInt(this.getAttribute('data-navID'));
        navButton[index].classList.add('active');
    }
}

customElements.define('my-sidebar', MySidebar);