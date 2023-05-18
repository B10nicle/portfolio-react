function App() {
    return (
        <div className="page">
            <div className="main">
                <section className="hero">
                    <header className="header">
                        <a onClick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')">
                            <img className="header__logo opacity popup__open" src={require("../../images/logo.png")}
                                 alt="cow"/>
                        </a>
                        <ul className="header__navigation-list">
                            <li className="header__navigation-list__item opacity my-projects"
                                onClick="location.href='#projects'">
                                <a>Projects</a>
                            </li>
                            <li className="header__navigation-list__item opacity my-certificates"
                                onClick="location.href='#certificates'">
                                <a>Certificates</a>
                            </li>
                            <li className="link">
                                <button className="locale opacity" type="button"/>
                            </li>
                        </ul>
                        <button className="header__navigation-button opacity">
                            <i className="fas fa-bars"/>
                        </button>
                    </header>

                    <div className="hero-area">
                        <div className="hero-area__wrapper">
                            <h1 className="hero-area__wrapper__name">Oleg Khilko</h1>
                            <p className="hero-area__wrapper__profession">Full Stack Developer</p>
                            <div className="hero-area__wrapper__button opacity link"
                                 onClick="location.href='#about-me'">
                                <a>About me</a>
                            </div>
                        </div>
                        <div className="socials">
                            <div className="socials__social opacity">
                                <a onClick="window.open('https://leetcode.com/B10nicle')">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50"
                                         viewBox="0 0 32 32">
                                        <path
                                            d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="socials__social opacity">
                                <a onClick="window.open('https://www.codewars.com/users/B10nicle')">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M.76 12.2l-.08-.04c-.18-.1-.32-.25-.42-.44-.14-.26-.2-.5-.2-.75l.02-.13c0-.2.05-.38.14-.55l.08-.15c.04-.08.1-.15.15-.22.06-.07.07-.16.05-.24l-.05-.16c-.06-.2-.1-.4-.1-.6L.32 8.8c0-.22.06-.44.2-.6l.1-.13c.07-.1.18-.16.3-.2.1-.03.17-.13.18-.25l.02-.34c0-.27.13-.52.33-.7l.24-.18c.05-.05.1-.1.14-.18.05-.06.06-.14.05-.2-.02-.1 0-.13.05-.14.16.06.26.04.33-.04l.13-.17.36-.4c.1-.1.14-.28.08-.42l-.12-.26c-.02-.06 0-.13.05-.15.13 0 .22.05.26.13l.04.07c.06.12.2.18.3.13.22-.08.4-.1.57-.1h.32c.22 0 .4-.15.44-.38.04-.28.14-.5.28-.65.15-.17.32-.3.52-.4.26-.14.42-.34.47-.6.07-.32.24-.55.47-.7l.76-.43.22-.13c.13-.08.25-.18.35-.3l.2-.24c.1-.1.2-.17.32-.2.1-.03.24-.05.36-.04l.4.03c.2 0 .36.05.52.12l.1.05c.1.04.2.02.25-.05L10 .7l.43-.45c.1-.1.22-.14.35-.12.13.02.26.07.38.13.18.1.33.14.5.14h.1c.22 0 .44.03.66.08l.15.04c.15.04.3-.02.4-.14.03-.05.1-.06.14-.02.03.02.04.04.05.07.02.2.14.35.3.4l.16.05c.17.05.32.16.42.3.1.15.22.3.36.4l.1.1c.1.1.24.14.38.13h.59c.24 0 .47.04.7.14.22.1.45.12.66.04.22-.07.45-.1.68-.07l.43.07c.2.02.4.12.52.27l.05.05c.1.1.2.23.3.37.06.13.2.2.34.2h.62c.15 0 .3.03.42.1.13.1.24.2.34.3l.1.13c.12.14.18.33.17.53 0 .16.12.3.28.3l.2.02c.14 0 .26.1.33.23l.1.2.26.58c.04.1.05.2.04.28 0 .1.03.18.1.22l.1.07c.13.1.2.25.18.42l-.07.47-.02.2c-.02.1.03.23.12.3.15.1.22.23.23.38v.2c0 .1-.02.22-.1.3-.06.08-.1.18-.1.3l.03.23c0 .16.1.3.2.4.14.1.22.26.24.42.04.25.05.45.05.65v.23c0 .08 0 .16.03.24.02.07.07.14.13.18l.2.15c.2.13.34.3.42.53.1.22.13.45.13.68v.08c0 .18-.02.37-.08.54-.05.18-.04.35.03.5.08.14.13.3.15.47.04.2.02.4-.05.56l-.02.07c-.05.12-.13.23-.23.32-.1.1-.2.16-.26.23-.06.06-.1.16-.07.25l.03.14c.05.2.05.4 0 .58v.08c-.04.15-.1.28-.16.4-.07.13-.17.23-.3.3l-.15.1c-.07.04-.12.13-.12.22 0 .1-.04.2-.1.26l-.15.2c-.1.13-.23.24-.37.3-.14.1-.26.2-.35.3-.1.12-.18.26-.22.4-.04.18-.18.28-.33.28h-.54c-.14 0-.27.1-.33.22-.07.16-.14.27-.23.37-.1.1-.16.22-.2.36-.02.12-.12.2-.22.16-.13-.06-.26 0-.32.1-.12.2-.24.35-.37.48l-.07.06c-.13.1-.3.18-.45.18-.18 0-.27.08-.3.2-.03.1-.05.23-.06.34-.02.12-.06.23-.1.33l-.05.06c-.1.15-.18.3-.28.43l-.04.06c-.13.17-.3.3-.5.35-.24.08-.45.1-.66.1h-.14c-.1 0-.2.06-.27.16l-.06.1-.06.12-.13.22c-.1.18-.25.3-.45.36-.2.05-.43.07-.64.06l-.16-.02c-.14 0-.27-.04-.4-.1-.1-.04-.24 0-.3.1-.1.14-.22.22-.35.26l-.3.1c-.2.05-.42.05-.63 0l-.16-.05c-.1 0-.2-.05-.28-.1-.1-.05-.2-.07-.3-.06l-.13.02c-.2.02-.38 0-.56-.05l-.27-.06c-.12-.04-.23-.12-.3-.23-.05-.1-.16-.18-.3-.2H9.9c-.2-.03-.38-.1-.5-.25L9 22.5l-.14-.12-.22-.16-.13-.1c-.15-.1-.33-.18-.52-.2l-.6-.1c-.06 0-.1-.02-.16-.03L7 21.74c-.1-.02-.2-.1-.27-.2-.06-.1-.17-.14-.27-.1-.2.08-.36.1-.52.13H5.8c-.26.02-.5-.02-.74-.13-.24-.1-.4-.25-.55-.44-.12-.17-.3-.3-.52-.34l-.28-.06c-.2-.04-.4-.12-.58-.24-.2-.14-.3-.27-.38-.43-.08-.15-.13-.32-.14-.5v-.08c-.02-.2-.16-.38-.35-.43-.23-.07-.4-.17-.55-.3-.14-.13-.22-.32-.22-.52l.02-.44c0-.17-.05-.32-.17-.43-.12-.12-.2-.27-.2-.43l-.03-.36c-.02-.26-.07-.52-.13-.78-.06-.23.03-.46.22-.57l.07-.05c.1-.07.14-.2.08-.32l-.08-.1c-.1-.1-.2-.17-.3-.2-.08-.02-.1-.1-.1-.15l.1-.12c.06-.07.05-.18 0-.24-.08-.08-.12-.18-.13-.28l-.02-.7c0-.14.02-.28.06-.42.04-.12 0-.26-.12-.32zm9.9-1.32c.07-.07.06-.2 0-.25-.1-.08-.17-.17-.23-.27l-.1-.16c-.07-.13-.16-.24-.26-.34l-.02-.02c-.1-.08-.17-.18-.23-.3-.05-.1-.05-.2 0-.3l.06-.1c.06-.1.1-.24.1-.36v-.04c0-.1-.04-.2-.1-.3-.04-.08-.08-.18-.1-.28V8.1c-.03-.12 0-.25.08-.35.08-.13.14-.25.17-.4v-.02c.04-.1.02-.23-.04-.33s-.08-.2-.04-.32l.07-.2c.06-.18.15-.34.27-.48l.14-.15.1-.12.06-.06c.06-.06.07-.16.02-.24-.05-.1-.08-.2-.06-.3l.02-.14c.03-.2.1-.4.23-.56l.04-.04c.15-.2.34-.33.56-.4l.27-.1c.12-.04.2-.17.2-.3 0-.16.05-.3.14-.43l.05-.05c.1-.17.22-.34.3-.52l.07-.13c.02-.03.03-.07.03-.1 0-.17-.1-.32-.26-.33L11.76 2c-.25-.02-.5 0-.74 0l-.85.1c-.13 0-.23.1-.24.24 0 .14-.1.26-.22.3l-.36.1-.1.03-.3.1c-.22.07-.4.23-.5.45l-.08.13c-.1.22-.27.4-.48.53-.2.13-.3.34-.32.58v.1c-.02.2-.08.4-.2.54l-.05.08c-.08.1-.1.23-.05.34.05.12.08.25.07.38v.53c0 .14-.1.26-.2.3-.14.05-.23.16-.27.3l-.05.2c-.04.2.03.4.2.52.16.12.26.3.3.52v.18c.03.2.14.4.32.5.18.12.32.3.4.5l.05.16c.08.22.26.35.46.37h.06c.18 0 .34.1.44.26.1.16.26.27.44.3l.28.08c.17.05.33.14.46.27l.02.02c.1.08.26.07.35-.04l.07-.08zm1.14-.92c.1.06.2.03.24-.06l.03-.05c.07-.14.16-.28.26-.4l.2-.3c.03 0 .04-.02.05-.04l.24-.32c.1-.1.22-.17.36-.17.13 0 .24-.07.3-.2.04-.14.1-.27.22-.38l.05-.06c.1-.1.2-.15.3-.2.13-.02.25-.04.37-.04h.3c.12 0 .22-.05.28-.15.06-.1.15-.17.25-.22l.1-.04c.16-.07.34-.12.52-.14l.2-.02c.12 0 .25 0 .37.07.1.07.23.06.33-.02l.07-.04c.15-.1.32-.18.5-.2h.02c.2-.04.38-.04.58-.03h.1c.2.03.37.1.5.25l.03.04c.1.1.26.18.4.18h.17c.05 0 .1-.02.13-.07.03-.03.08-.06.13-.06h.1c.14 0 .27.04.4.08l.17.07c.16.05.33.1.5.12h.12c.08 0 .13-.05.13-.12 0-.1-.02-.2-.07-.28L20.68 7c-.08-.13-.14-.27-.2-.4l-.02-.05c-.05-.1-.05-.2 0-.3V6.2c.02-.08-.02-.17-.1-.2L20.28 6c-.16-.05-.3-.14-.4-.27l-.1-.1c-.1-.1-.16-.25-.2-.4-.05-.13-.16-.23-.3-.23h-.42c-.15-.02-.28-.1-.37-.22l-.04-.05c-.07-.1-.13-.22-.17-.34-.05-.1-.16-.16-.26-.13l-.12.04c-.2.07-.4.1-.6.08l-.16-.02c-.17 0-.33-.07-.46-.17l-.1-.07c-.08-.06-.16-.1-.25-.14-.1-.04-.18-.02-.24.05l-.05.06c-.1.1-.24.18-.38.2l-.54.03c-.1 0-.2.05-.27.12-.08.07-.17.12-.27.14h-.02c-.1 0-.2.07-.3.14v.02c-.1.1-.23.15-.36.15l-.04.02c-.12 0-.24 0-.36.03h-.12c-.17.03-.3.17-.34.35l-.04.23c-.03.16-.1.3-.2.43-.1.12-.22.2-.37.2h-.15-.02c-.1.02-.2.13-.18.25.02.17 0 .32-.03.47l-.04.17c-.04.15-.14.27-.27.32l-.06.03h-.02c-.06.04-.1.13-.05.2.06.1.08.2.07.3l-.03.32c0 .12-.05.23-.1.33-.06.1-.06.2-.02.3l.1.22c.05.1.06.2.03.32-.03.1-.05.2-.04.3 0 .1.06.2.14.24l.02.02zm7.9 7.23c.1.1.25.14.37.06l.2-.13c.1-.07.18-.17.22-.3v-.02l.1-.3.06-.1.04-.1.04-.07c.04-.08.1-.14.2-.17l.04-.02c.08-.02.13-.1.13-.18 0-.1.05-.18.1-.25l.08-.07.2-.26v-.02c.06-.08.1-.17.12-.27.02-.1 0-.2-.04-.3l-.02-.04c-.04-.1-.06-.17-.07-.26l-.03-.28-.03-.3c0-.1.04-.2.1-.3.07-.08.12-.18.16-.28v-.04l.02-.02c.02-.1-.03-.2-.12-.2-.1-.05-.2-.13-.23-.25l-.03-.06c-.05-.18-.08-.36-.08-.54l.02-.5v-.03c0-.17-.14-.3-.3-.3h-.02c-.2 0-.36-.06-.5-.2l-.08-.1-.2-.23-.26-.3c-.1-.14-.2-.26-.33-.38-.1-.1-.25-.2-.4-.22l-.2-.03c-.1-.02-.23-.07-.34-.14-.08-.06-.2-.04-.28.04l-.13.14-.06.04c-.07.02-.14-.02-.17-.1-.04-.12-.04-.26.02-.38v-.06c0-.07-.06-.12-.12-.1h-.16c-.18 0-.36-.02-.53-.1l-.1-.04c-.1-.05-.22-.08-.33-.08-.1 0-.2.02-.3.08l-.04.03c-.12.08-.26.12-.4.13h-.33c-.15 0-.3.05-.4.13-.13.08-.27.13-.42.16l-.27.04c-.12.03-.25.08-.36.17-.1.1-.24.16-.37.2l-.05.02c-.16.05-.3.15-.4.3l-.12.12c-.07.1-.07.22 0 .32.06.1.18.13.3.1l.15-.06c.08-.03.17 0 .24.04.06.05.15.08.24.07l.25-.03c.14 0 .28 0 .42.04.15.05.28.1.4.2s.25.14.4.16c.15.02.3.05.44.1l.1.02c.1.03.18.1.24.2.05.08.1.2.1.3v.03c0 .12.1.2.2.2h.06c.16 0 .33.02.5.07l.07.03c.1.04.2.1.27.2.08.1.13.2.16.3l.03.14c.03.15.04.3.04.46v.05c0 .1.07.2.18.24.1.02.22.06.33.12l.05.02c.13.08.26.18.36.3l.05.07c.13.15.2.34.2.53v.07c0 .15-.03.3-.08.44-.04.12 0 .26.13.3l.07.05c.15.06.28.17.38.3.1.15.14.32.14.5v.3c-.02.1-.05.18-.1.25s-.05.17 0 .24l.06.1zm-6.4-5.12h-.02c-.04 0-.06.05-.05.1l.04.2c.04.16.06.32.08.48.02.16.1.3.22.4h.04c.15.12.24.3.25.48v.5c-.02.1 0 .2.06.28l.05.05c.1.12.14.26.15.4l.03.55c0 .13-.08.24-.2.26l-.1.02c-.07 0-.1.08-.1.15 0 .08.03.17.06.25v.02c.03.1.04.2.03.3l-.04.27c-.04.2-.1.38-.2.56l-.07.12c-.05.1-.12.16-.2.2-.1.04-.17.12-.2.22l-.08.36c-.05.2-.14.4-.26.6h-.02c-.12.16-.27.3-.45.4l-.12.08-.3.15c-.1.04-.16.13-.18.24l-.05.33c-.03.2-.1.37-.24.5l-.13.15-.15.15L11 21c-.12.14-.3.2-.5.17l-.36-.07-.33-.04h-.09c-.04.04-.05.1-.02.16.07.12.18.2.3.2l.22.04c.1 0 .22.05.32.1.1.07.2.12.32.15h.02c.13.05.27.06.4.05l.15-.02c.17-.02.33 0 .47.06l.12.04c.05.02.13 0 .18-.05.06-.06.12-.1.2-.13l.08-.02c.13-.04.26-.06.4-.06h.08c.12 0 .23.02.33.08l.04.02c.07.03.15 0 .2-.06.03-.07.1-.14.17-.2l.25-.17.16-.1.08-.05c.1-.07.24-.1.36-.1l.36-.03c.14-.02.26-.12.3-.26.04-.15.1-.3.2-.43s.2-.24.3-.34c.13-.1.26-.15.4-.16h.08c.16-.03.28-.18.27-.34v-.02V18.77c.02-.1.06-.23.12-.33l.2-.3.08-.1c.06-.05.1-.12.17-.2l.1-.13c.06-.1.06-.23-.02-.32-.1-.1-.15-.24-.17-.38v-.04c-.02-.16-.02-.33.03-.5v-.05c.05-.13.12-.26.2-.38.08-.1.07-.24-.03-.32l-.17-.15c-.14-.12-.22-.3-.24-.48l-.02-.2c0-.06 0-.13-.02-.2l-.02-.15c-.02-.17-.12-.3-.26-.4l-.07-.02c-.1-.06-.2-.15-.28-.27-.08-.1-.12-.24-.15-.38l-.03-.17c0-.06-.04-.1-.1-.13l-.16-.05-.32-.1c-.1-.02-.2-.1-.27-.17h-.02c-.06-.08-.16-.08-.22-.02l-.1.1c-.02.03-.04.04-.07.03-.06 0-.1-.05-.08-.1.02-.16-.04-.32-.17-.42l-.13-.1-.3-.2c-.08-.03-.2 0-.24.1l-.04.06c0 .02-.03.03-.04.04-.04 0-.1 0-.1-.05l-.03-.05c-.03-.06-.1-.1-.16-.12zm-1.2 1l-.05-.05c-.05-.04-.1-.03-.15.02-.07.12-.13.25-.16.38v.02c-.03.13-.15.22-.27.2h-.1-.02c-.14 0-.25.12-.25.26 0 .18-.06.36-.17.5l-.06.06c-.1.13-.25.22-.4.27l-.08.02c-.1.03-.18.1-.2.22 0 .1-.06.2-.14.28l-.1.08c-.12.13-.3.2-.48.22l-.5.05c-.16 0-.3.1-.4.25-.1.15-.25.25-.4.27l-.22.02c-.16.02-.33.02-.5-.02l-.1-.02-.27-.07c-.1-.03-.18 0-.24.07l-.1.13c-.13.15-.32.22-.5.2l-.65-.08c-.1 0-.18-.05-.27-.1-.1-.06-.17-.13-.24-.2l-.25-.3c-.03-.02-.08-.03-.13-.02l-.14.06-.56.14c-.1.03-.23 0-.33-.06-.1-.08-.22-.1-.34-.1H3.2c-.12.03-.2.16-.16.28l.04.2c.03.1.02.22-.03.32s-.04.2.03.3l.06.08c.08.12.2.22.3.32.1.1.2.2.28.33l.15.27c.08.14.2.22.36.22.15 0 .3.05.42.15l.3.28c.08.07.2.08.28.02l.05-.02c.06 0 .1.04.1.1v.05c0 .13.1.25.23.3l.45.1c.16.05.32.1.47.2h.08c.08 0 .15-.07.14-.16v-.35c0-.1.04-.2.12-.24l.05-.02c.05.02.1.06.08.1v.17c0 .13.04.25.13.34.1.1.23.12.34.08.12-.05.24-.06.37-.05l.37.02c.18.02.35 0 .5-.07.18-.06.33-.14.47-.25l.06-.04.3-.27c.1-.1.23-.15.35-.15h.4c.2-.02.38-.2.4-.4l.04-.2c0-.13.06-.25.15-.35.1-.1.2-.16.3-.2l.12-.05c.17-.07.3-.22.36-.4l.06-.24c.05-.2.15-.4.3-.53l.02-.02c.12-.1.14-.3.06-.44l-.03-.07c-.07-.1-.08-.25-.03-.38.05-.14.1-.26.18-.38l.1-.14c.04-.08.04-.2-.02-.27-.06-.08-.1-.18-.1-.28l-.02-.14v-.34c.02-.1 0-.23-.03-.33l-.04-.12zm-1.43-.76v-.03c0-.1-.06-.16-.14-.16h-.26c-.1.02-.2.02-.28 0h-.45c-.23 0-.45-.04-.67-.1l-.24-.06-.2-.06-.45-.15c-.24-.07-.42-.23-.53-.45l-.05-.1c-.07-.15-.22-.23-.37-.2-.17 0-.34 0-.5-.08l-.12-.05c-.23-.1-.4-.3-.4-.57l-.04-.27c-.03-.14-.12-.27-.24-.32-.14-.06-.27-.14-.4-.23l-.05-.03c-.15-.12-.28-.28-.35-.47l-.02-.06c-.05-.16-.06-.33-.02-.5l.02-.06c.04-.13.05-.26.05-.4 0-.12-.05-.24-.14-.33l-.14-.13c-.16-.13-.26-.32-.27-.53-.02-.22-.02-.43.02-.64V6.3v-.03c0-.12-.1-.2-.2-.2H4.2c-.13 0-.24.08-.3.2-.05.14-.13.25-.22.36l-.04.05-.2.2-.1.1c-.1.1-.16.25-.18.4-.02.15-.06.3-.12.44l-.02.05c-.05.12-.13.23-.23.3-.1.08-.17.2-.17.32l-.02.46c0 .2-.03.4-.1.6l-.02.08c-.05.13 0 .27.12.33l.42.18.04.02c.03 0 .04.02.05.05.03.04 0 .1-.03.1l-.1.05c-.06.02-.1.08-.12.15l-.02.1v.02l-.1.56c-.02.08-.02.17-.02.26 0 .08.05.15.12.18l.22.1c.1.06.22.13.3.2l.1.08c.03.04.08.08.12.1l.04.04c.07.06.12.14.14.23l.1.45c0 .12.1.22.2.25l.16.05s.03 0 .05.02l.2.06c.16.05.3.14.42.26.12.1.24.23.34.37l.04.04c.08.1.2.15.32.12s.25-.04.38-.04h.15c.1 0 .23.03.34.1.1.06.23.1.35.15h.03c.12.05.25.03.35-.04.1-.08.23-.12.36-.12l.47.03c.1 0 .2-.02.25-.1h.02l.17-.16.05-.05c.08-.1.2-.14.32-.15h.45c.12 0 .23-.1.28-.2.05-.1.15-.18.27-.2l.2-.04c.08 0 .15-.07.18-.16.03-.1.08-.18.15-.24l.16-.16c.1-.1.15-.2.17-.32z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="socials__social opacity">
                                <a onClick="window.open('https://github.com/B10nicle')">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="50" height="50"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="subsection" id="about-me">
                    <div className="subsection__information">
                        <h2 className="subsection__information__title title">About Me</h2>
                        <p className="subsection__information__subtitle">
                            Hello and welcome! My name is Oleg Khilko and I am a Software
                            Developer with passion to learn everyday something new.
                        </p>
                    </div>
                    <div className="subsection__headshot-container">
                        <img className="subsection__headshot-container__headshot"
                             src={require("../../images/headshot.jpeg")}
                             alt="Oleg's Khilko headshot"
                        />
                    </div>
                </section>

                <section className="projects" id="projects">
                    <h2 className="projects__title title">Projects</h2>
                    <ul className="projects__project-container" aria-label="Projects"/>
                </section>

                <section className="certificates" id="certificates">
                    <h2 className="certificates__title title">Certificates</h2>
                    <ul id="qwe" className="certificates__grid" aria-label="Certificates"/>
                </section>

                <footer className="footer">
                    <div className="contact-box">
                        <div className="contact-box__image"/>
                        <form className="contact-box__form"
                              action="https://formsubmit.co/6fea598baf74642880b284fc5b3a57f7"
                              method="POST">
                            <h2 className="contact-box__title">Drop me a message</h2>
                            <input type="hidden" name="_subject" value="Oleg Khilko | New Message"/>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_autoresponse"
                                   value="Thank you for your message. I will revert with the answer shortly."/>
                            <input className="contact-box__field contact-box__field_type_name" type="text"
                                   placeholder="Name"
                                   name="name"
                                   required/>
                            <input className="contact-box__field contact-box__field_type_email"
                                   type="email"
                                   placeholder="Email"
                                   name="email"
                                   required/>
                            <textarea className="contact-box__field contact-box__field_type_message"
                                      placeholder="Message" name="message"
                                      required/>
                            <button className="send-button" type="submit">Send</button>
                        </form>
                    </div>
                </footer>

                <div className="popup">
                    <div className="popup__container">
                        <button className="popup__container__close-button opacity" type="button"/>
                        <img className="popup__container__cows" src={require("../../images/cows.png")} alt="cows"/>
                        <div className="popup__container__wrapper"/>
                        <h2 className="popup__container__title">Cows pwned you!</h2>
                        <p className="popup__container__subtitle">You're not the first one, you're not the last one ;)
                        </p>
                    </div>
                </div>

                <template className="projects__template">
                    <div className="projects__project-card">
                        <a className="projects__project-card__link link_black" href="" target="">
                            <img className="projects__project-card__image" src="" alt=""/>
                            <h2 className="projects__project-card__title"/>
                            <p className="projects__project-card__subtitle"/>
                        </a>
                    </div>
                </template>

                <template className="certificates__template">
                    <li>
                        <img
                            className="certificates__grid__item"
                            src=""
                            alt=""
                        />
                    </li>
                </template>
            </div>
        </div>
    )
}

export default App;
