import { Fragment, h } from "preact";
import DefaultLayout from "@layouts/default";
import Header from "@components/header";
import Skip from "@components/skip";

const SpendingPage = () => (
    <Fragment>
        <Header>
            <Skip />
        </Header>
        <main class="main" id="main">
            <div class="wrap">
                <div class="row">
                    <div class="col xs-12 md-8">
                        <div class="banner">
                            <h2 class="banner-title">My spending</h2>
                        </div>
                    </div>
                    <div class="col xs-12 md-4"></div>
                </div>
            </div>
            <div class="block-list">
                <div class="block block--bg block--bg-dark block-first">
                    <div class="card__container-spending">
                        <div class="wrap">
                            <div class="row cards">
                                <div class="col xs-12 md-11 art__card-white">
                                    <div class="spend-category">
                                        <a href="/" class="card-title">
                                            Money you've spent this month
                                        </a>
                                        <h3 class="card-account">£2234.56</h3>
                                    </div>
                                    <div class="spend-category">
                                        <div class="spend-titles">
                                            <a href="/" class="card-title">
                                            Bills
                                            </a>
                                            <p>Top spend this month</p>
                                        </div>
                                            <h3 class="card-account">£1139.21</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block block--bg block--bg-light">
                    <div class="chart__container-nav">
                        <div class="wrap">
                            <div class="row">
                                <div class="col xs-12 md-8">
                                    <div class="tab__container-title">Spending summary</div>
                                </div>
                            </div>
                        </div>
                        <div class="wrap tabs js-tabs">
                            <div class="col xs-12 md-8 lg-5 tab__container">
                                <div class="tabs__tabslist" role="tablist">
                                    <a
                                    id="tab-1"
                                    class="tabs__tab js-tabs__link"
                                    href="#week"
                                    role="tab"
                                    >
                                    Week
                                    </a>
                                    <a
                                    id="tab-2"
                                    class="tabs__tab js-tabs__link"
                                    href="#month"
                                    role="tab"
                                    >
                                    Month
                                    </a>
                                    <a
                                    id="tab-3"
                                    class="tabs__tab js-tabs__link"
                                    href="#year"
                                    role="tab"
                                    >
                                    Year
                                    </a>
                                    <a 
                                    id="tab-4"
                                    class="tabs__tab js-tabs__link" 
                                    href="#select-amounts" 
                                    role="tab"
                                    >Select Dates
                                    </a>
                                </div>
                            </div>
                            <div id="week" class="tabs__tabpanel" role="tabpanel">
                                <div class="wrap">
                                    <div class="row">
                                        <div class="col xs-12">
                                            <div class="dl__container">
                                                <dl class="description__list">
                                                    <dt class="description__title">June</dt>
                                                        <div class="chart__elements">
                                                            <span class="date">20th</span>
                                                            <dd class="percentage percentage-64"></dd>
                                                            <span class="amount">£639.21</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">19th</span>
                                                            <dd class="percentage percentage-24"></dd>
                                                            <span class="amount">£12.51</span>
                                                         </div>
                                                        <div class="chart__elements">
                                                            <span class="date">18th</span>
                                                            <dd class="percentage percentage-46"></dd>
                                                            <span class="amount">£123.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">17th</span>
                                                            <dd class="percentage percentage-66"></dd>
                                                            <span class="amount">£873.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">16th</span>
                                                            <dd class="percentage percentage-76"></dd>
                                                            <span class="amount">£983.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">15th</span>
                                                            <dd class="percentage percentage-88"></dd>
                                                            <span class="amount">£1983.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">14th</span>
                                                            <dd class="percentage percentage-34"></dd>
                                                            <span class="amount">£123.51</span>
                                                        </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="month" class="tabs__tabpanel" role="tabpanel" hidden>
                            <div class="wrap">
                                    <div class="row">
                                        <div class="col xs-12">
                                            <div class="dl__container">
                                                <dl class="description__list">
                                                    <dt class="description__title">Month</dt>
                                                        <div class="chart__elements">
                                                            <span class="date">Jan</span>
                                                            <dd class="percentage percentage-64"></dd>
                                                            <span class="amount">£1539.21</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">Feb</span>
                                                            <dd class="percentage percentage-84"></dd>
                                                            <span class="amount">£2112.51</span>
                                                         </div>
                                                        <div class="chart__elements">
                                                            <span class="date">Mar</span>
                                                            <dd class="percentage percentage-80"></dd>
                                                            <span class="amount">£1923.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">Apr</span>
                                                            <dd class="percentage percentage-76"></dd>
                                                            <span class="amount">£1873.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">May</span>
                                                            <dd class="percentage percentage-82"></dd>
                                                            <span class="amount">£1983.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">June</span>
                                                            <dd class="percentage percentage-60"></dd>
                                                            <span class="amount">£1683.51</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">July</span>
                                                            <dd class="percentage percentage-34"></dd>
                                                            <span class="amount">£1123.51</span>
                                                        </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div id="year" class="tabs__tabpanel" role="tabpanel" hidden>
                            <div class="wrap">
                                    <div class="row">
                                        <div class="col xs-12">
                                            <div class="dl__container">
                                                <dl class="description__list">
                                                    <dt class="description__title">Year</dt>
                                                        <div class="chart__elements">
                                                            <span class="date">2022</span>
                                                            <dd class="percentage percentage-64"></dd>
                                                            <span class="amount">£26789</span>
                                                        </div>
                                                        <div class="chart__elements">
                                                            <span class="date">2021</span>
                                                            <dd class="percentage percentage-84"></dd>
                                                            <span class="amount">£28112</span>
                                                         </div>
                                                        <div class="chart__elements">
                                                            <span class="date">2020</span>
                                                            <dd class="percentage percentage-80"></dd>
                                                            <span class="amount">£19123</span>
                                                        </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="select-amounts" class="tabs__tabpanel" role="tabpanel" hidden>
                            <div class="wrap">
                                    <div class="row">
                                        <div class="col xs-12">
                                            <div class="dl__container">
                                                <dl class="description__list">
                                                    <dt class="description__title">Dates</dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
           
        </main>
    </Fragment>
);

export default SpendingPage;
