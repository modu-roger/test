'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' : 'data-target="#xs-controllers-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' :
                                            'id="xs-controllers-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' : 'data-target="#xs-injectables-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' :
                                        'id="xs-injectables-links-module-AppModule-c101a462439e445abcb624530c284299fb22a3f728890e346bd2483a319d044c21c27bb8cdfe1edddaefaa59fb8baf842bb118ec97ebdc7cf2a102b82da11f12"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BoardModule.html" data-type="entity-link" >BoardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' : 'data-target="#xs-controllers-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' :
                                            'id="xs-controllers-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' }>
                                            <li class="link">
                                                <a href="controllers/BoardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' : 'data-target="#xs-injectables-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' :
                                        'id="xs-injectables-links-module-BoardModule-1aa82f3fa45dc0ab1f8e87a1b648cc84b04bfe82122eb91ef79d70d2d13c689d7636323a5615a3ba99e4a1d61ad82653ae2b41de466f1fefe7bbb6ba8fb44a05"' }>
                                        <li class="link">
                                            <a href="injectables/BoardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Board.html" data-type="entity-link" >Board</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BoardDto.html" data-type="entity-link" >BoardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});