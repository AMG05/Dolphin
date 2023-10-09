import { h } from 'preact';

const Header = ({ children }) => 
<header class="header">
    <div class="wrap">
        <div class="header-elements">
            <div class="header-left">
                <div class="row">
                    <div class="col xs-12 md-6">
                        <a class="site-logo" aria-label="Home" href="/">
                            <img class="header__logo" src="\static\img\logo.svg" alt="Dolphin Bank" height="200" ></img>
                        </a>
                    </div>
                </div>
            </div>
            <div class="header-right">
                <div class="primary-nav__container">
                    <div class="row">
                        <div class="col xs-12 nav-container-elements">
                            <nav class="nav-primary" aria-label="Primary navigation">
                                <ul class="nav-primary__list">
                                    <li class="nav-primary__item">
                                        <a href="" class="nav-primary__link">My accounts</a>
                                    </li>
                                    <li class="nav-primary__item">
                                        <a href="/transfers" class="nav-primary__link">Transfers</a>
                                    </li>
                                    <li class="nav-primary__item">
                                        <a href="/spending" class="nav-primary__link">My spending</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav class="off-canvas-nav js-toggle" data-toggle="js-toggle-btn-nav" id="off-canvas-nav">
                                <button class="off-canvas-nav__btn js-toggle-btn-nav" aria-label="Show or hide navigation menu">
                                Menu
                                </button>
                                <div class="wrap">
                                    <div class="">
                                        <div class="row">
                                            <div class="col xs-12 lg-4">
                                                <div class="off-canvas-nav__container">
                                                <ul class="off-canvas__list">
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link profile">Profile</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">My accounts</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Transfers</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">My spending</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Cards</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Products and applications</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Security codes</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Statements</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Messages</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Help</a>
                                                    </li>
                                                    <li class="off-canvas__item">
                                                        <a href="" class="off-canvas__link">Logout</a>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>;

export default Header;