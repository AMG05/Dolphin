import {Fragment, h} from 'preact';
import DefaultLayout from '@layouts/default';
import Header from '@components/header';
import Skip from '@components/skip';
import Footer from '@components/footer';

const SavingsPage = () => <Fragment>
    <Header>
        <Skip />
    </Header>
    <main class="main" id="main">
        <div class="wrap">
            <div class="row">
                <div class="col xs-12 md-8">
                    <div class="banner">
                        <h2 class="banner-title">Savings account</h2>
                    </div>
                </div>
                <div class="col xs-12 md-4"></div>
            </div>
        </div>
        <div class="wrap">
            <div class="row intro">
                <div class="col xs-6 md-8"><h2 class="savings-title">£51,234.<span class="digits-savings">56</span></h2></div>
                <div class="col xs-6 md-4">
                    <div class="form-container">
                        <form class="search__form" action="/search-results/" method="get" autocomplete="off" novalidate="">
                            <div class="search__container">
                                <button class="search__submit">
                                    <span class="visuallyhidden">Search</span>
                                        <svg class="search__submit-icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24"
                                        width="36px" fill="#333333"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                </button>
                                <label class="search__label" for="search">Search transactions</label>
                                <input class="search__input" type="search" placeholder="Search transactions" id="search" name="q" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap expandable-search__wrap">
            <div class="expandable-search__container">
                <button class="expandable-search__btn js-toggle__local__btn" aria-label="Show or hide site search">
                    <svg class="expandable-search__btn-icon" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#333333">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                </button>
                <form class="expandable-search js-toggle__local" id="expandable-search" data-toggle="js-toggle__local__btn" action="#" role="search">
                    <input class="expandable-search__input" aria-label="Search transactions" type="search" id="q" name="q" />
                </form>
            </div>
        </div>
    <div class="block-list">
            <div class="block block--bg block--bg-dark block-first">
                <div class="wrap table-main-container">
                    <div class="table__container">
                        <table class="table table--statements">
                            <thead class="table__head">
                                <tr class="table__row">
                                    <th class="table__header">Date</th>
                                        <th class="table__header">Transactions</th>
                                        <th class="table__header"></th>
                                        <th class="table__header">Balance</th>
                                </tr>
                            </thead>
                                <tbody class="table__bd">
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/" tabindex="-1">Today</a></td>
                                        <td data-th="Transactions" class="table__cell">004849/29927226 T Bloom</td>
                                        <td data-th="Amount" class="table__cell">-£150.00</td>
                                        <td data-th="Balance" class="table__cell">£51224.56</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/accounts/account-detail/" tabindex="-1">12 June 23</a></td>
                                        <td data-th="Transactions" class="table__cell">070809/45127896 J Bloggs</td>
                                        <td data-th="Amount" class="table__cell">-£150.00</td>
                                        <td data-th="Balance" class="table__cell">£51084.56</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/accounts/account-detail/" tabindex="-1">12 May 23</a></td>
                                        <td data-th="Transactions" class="table__cell">004849/29927226 T Bloom</td>
                                        <td data-th="Amount" class="table__cell">£450.00</td>
                                        <td data-th="Balance" class="table__cell">£50034.56</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/accounts/account-detail/" tabindex="-1">1 May 23</a></td>
                                        <td data-th="Transactions" class="table__cell">004849/29927226 T Bloom</td>
                                        <td data-th="Amount" class="table__cell">£450.00</td>
                                        <td data-th="Balance" class="table__cell">£50034.56</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/accounts/account-detail/" tabindex="-1">1 May 23</a></td>
                                        <td data-th="Transactions" class="table__cell">004849/29927226 T Bloom</td>
                                        <td data-th="Amount" class="table__cell">£450.00</td>
                                        <td data-th="Balance" class="table__cell">£50034.56</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/accounts/account-detail/" tabindex="-1">1 May 23</a></td>
                                        <td data-th="Transactions" class="table__cell">004849/29927226 T Bloom</td>
                                        <td data-th="Amount" class="table__cell">£450.00</td>
                                        <td data-th="Balance" class="table__cell">£50034.56</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/accounts/account-detail/" tabindex="-1">1 May 23</a></td>
                                        <td data-th="Transactions" class="table__cell">004849/29927226 T Bloom</td>
                                        <td data-th="Amount" class="table__cell">£450.00</td>
                                        <td data-th="Balance" class="table__cell">£50034.56</td>
                                    </tr>
                                    <tr class="table__row">
                                        <td data-th="Date" class="table__cell"><a class="table__link" href="/accounts/account-detail/" tabindex="-1">1 May 23</a></td>
                                        <td data-th="Transactions" class="table__cell">004849/29927226 T Bloom</td>
                                        <td data-th="Amount" class="table__cell">£450.00</td>
                                        <td data-th="Balance" class="table__cell">£50034.56</td>
                                    </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        <Footer />
</Fragment>
    
;

export default SavingsPage;