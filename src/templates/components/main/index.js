import { h } from 'preact';

const Main = ({ children }) => 
<main class="main" id="main">
    <div class="wrap">
        <div class="row">
            <div class="col xs-12 md-8">
                <div class="banner">
                    <h1 class="banner-title">My accounts</h1>
                </div>
            </div>
            <div class="col xs-12 md-4"></div>
        </div>
    </div>
    <div class="block-list">
        <div class="block block--bg block--bg-dark block-first">
            <div class="card__container">
                <div class="wrap">
                    <div class="row cards">
                        <div class="col xs-12 md-6 lg-4 art-card">
                            <div class="card-category">
                                <a href="/current" class="card-title">Current account</a>
                            </div>
                                <h3 class="card-account">54-34-23  <span>32164534</span></h3>
                                <p class="card-total">£1234.<span class="digits">56</span></p>
                        </div>
                        <div class="col xs-12 md-6 lg-4 art-card">
                            <div class="card-category">
                                <a href="/savings" class="card-title">Savings account</a>
                            </div>
                                <h3 class="card-account">54-34-23  <span>32164534</span></h3>
                                <p class="card-total">£1234.<span class="digits">56</span></p>
                        </div>
                        <div class="col xs-12 md-6 lg-4 art-card">
                            <div class="card-category">
                                <a href="/isa" class="card-title">ISA account</a>
                            </div>
                                <h3 class="card-account">54-34-23  <span>32164534</span></h3>
                                <p class="card-total">£1234.<span class="digits">56</span></p>
                        </div>
                        <div class="col xs-12 md-6 lg-4 art-card">
                            <div class="card-category">
                                <a href="/more" class="card-title">More accounts</a>
                            </div>
                                <h3 class="card-account">54-34-23  <span>32164534</span></h3>
                                <p class="card-total">£1234.<span class="digits">56</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>;

export default Main;