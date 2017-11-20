webpackJsonp([0,5],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'admin',
        template: __webpack_require__(531)
    })
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_business_business_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_component__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessesComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessesComponent = (function (_super) {
    __extends(BusinessesComponent, _super);
    function BusinessesComponent(_busin, _modal) {
        var _this = _super.call(this) || this;
        _this._busin = _busin;
        _this._modal = _modal;
        _this.someValue = 27; // TODO temp
        _this.businesses = [];
        _this.selectedForScraping = [];
        _this.showFilters = false;
        _this.searchQuery = '';
        _this.currentPage = 1;
        _this.totalPages = null;
        /**
         * currentDataset get/set
         * @type {number}
         * @private
         */
        _this._currentDataset = 0;
        /**
         * itemsPerPage get/set
         * @type {number}
         * @private
         */
        _this._itemsPerPage = 10;
        return _this;
    }
    Object.defineProperty(BusinessesComponent.prototype, "currentDataset", {
        get: function () {
            return this._currentDataset;
        },
        set: function (value) {
            this._currentDataset = value;
            this.currentPage = 1;
            this.getBusinesses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BusinessesComponent.prototype, "itemsPerPage", {
        get: function () {
            return this._itemsPerPage;
        },
        set: function (value) {
            this._itemsPerPage = value;
            this.currentPage = 1;
            this.getBusinesses();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get businesses by default params
     */
    BusinessesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBusinesses();
        this._busin.selectedForScraping.takeWhile(function () { return _this.isAlive; }).subscribe(function (res) {
            _this.selectedForScraping = res;
        });
    };
    /**
     * Get businesses as per current params set
     */
    BusinessesComponent.prototype.getBusinesses = function () {
        var _this = this;
        var args = {
            dataset: this.currentDataset,
            currPage: this.currentPage,
            perPage: this.itemsPerPage,
            search: this.searchQuery
        };
        this._busin.getBusinesses(args).subscribe(function (res) {
            _this.businesses = res.data;
            _this.totalPages = res.pagination.page_count;
            console.log(res);
        });
    };
    /**
     * Toggle filters on/off
     */
    BusinessesComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    /**
     * Update current page and get sites
     * @param page
     */
    BusinessesComponent.prototype.goToPage = function (page) {
        this.currentPage = page;
        this.getBusinesses();
    };
    /**
     * Update current page and get businesses
     * @param perPage
     */
    BusinessesComponent.prototype.updatePerPage = function (perPage) {
        this.currentPage = 1;
        this.itemsPerPage = perPage;
        this.getBusinesses();
    };
    /**
     * Set search query and get businesses
     * @param query
     */
    BusinessesComponent.prototype.setSearchQuery = function (query) {
        this.currentPage = 1;
        this.searchQuery = query;
        this.getBusinesses();
    };
    /**
     * Set current dataset and get businesses
     * @param dataset
     */
    BusinessesComponent.prototype.setDataset = function (dataset) {
        this.currentDataset = dataset;
        this.getBusinesses();
    };
    /**
     * Open upload dataset modal
     */
    BusinessesComponent.prototype.uploadDataset = function () {
        this._modal.openUploadDataset();
    };
    /**
     * Scrap selected items
     */
    BusinessesComponent.prototype.scrapSelected = function () {
        this._busin.scrapSelected();
    };
    /**
     * Clear all selected businesses
     */
    BusinessesComponent.prototype.clearSelected = function () {
        this._busin.clearSelection();
    };
    return BusinessesComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */]));
BusinessesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'businesses',
        template: __webpack_require__(533)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_business_business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_business_business_service__["a" /* BusinessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */]) === "function" && _b || Object])
], BusinessesComponent);

var _a, _b;
//# sourceMappingURL=businesses.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDesignsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BusinessDesignsComponent = (function () {
    function BusinessDesignsComponent() {
        this.designs = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 }
        ];
    }
    return BusinessDesignsComponent;
}());
BusinessDesignsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'business-designs',
        template: __webpack_require__(535)
    })
], BusinessDesignsComponent);

//# sourceMappingURL=business-designs.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_business_business_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDetailsComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessDetailsComponent = (function (_super) {
    __extends(BusinessDetailsComponent, _super);
    function BusinessDetailsComponent(_busin) {
        var _this = _super.call(this) || this;
        _this._busin = _busin;
        _this.site = null;
        return _this;
    }
    BusinessDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._busin.currentScrapUnderReview.takeWhile(function () { return _this.isAlive; }).subscribe(function (res) {
            _this.site = res;
        });
    };
    return BusinessDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base_component__["a" /* BaseComponent */]));
BusinessDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'business-details',
        template: __webpack_require__(536)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_business_business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_business_business_service__["a" /* BusinessService */]) === "function" && _a || Object])
], BusinessDetailsComponent);

var _a;
//# sourceMappingURL=business-details.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInteractionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BusinessInteractionsComponent = (function () {
    function BusinessInteractionsComponent() {
    }
    return BusinessInteractionsComponent;
}());
BusinessInteractionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'business-interactions',
        template: __webpack_require__(537)
    })
], BusinessInteractionsComponent);

//# sourceMappingURL=business-interactions.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_business_business_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleBusinessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleBusinessComponent = (function () {
    function SingleBusinessComponent(_ar, _busin) {
        this._ar = _ar;
        this._busin = _busin;
        this.lastScraped = null;
    }
    /**
     * Get current business per route params
     * and store it in the service
     */
    SingleBusinessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ar.params.subscribe(function (params) {
            _this.businessId = params.id;
            _this._busin.getLastBusinessScrap(_this.businessId).subscribe(function (res) {
                console.log(res);
                _this.lastScraped = res.site;
                _this._busin.setCurrentScrapUnderReview(res.site);
            });
        });
    };
    /**
     * Reset currently reviewed scrap
     */
    SingleBusinessComponent.prototype.ngOnDestroy = function () {
        this._busin.clearCurrentScrapUnderReview();
    };
    return SingleBusinessComponent;
}());
SingleBusinessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'single-business',
        template: __webpack_require__(538)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_business_business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_business_business_service__["a" /* BusinessService */]) === "function" && _b || Object])
], SingleBusinessComponent);

var _a, _b;
//# sourceMappingURL=single-business.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
        this.options = [
            { title: 'One', value: 1 },
            { title: 'Two', value: 2 },
            { title: 'Three', value: 3 },
            { title: 'Four', value: 4 },
            { title: 'this text is yuuuuuge and you should think of fitting it inside the div', value: 5 }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initBusinessesPieChart();
        this.initResponseBarChart();
    };
    DashboardComponent.prototype.initBusinessesPieChart = function () {
        var businessesCanvas = document.getElementById('businesses-pie-chart');
        var ctx = businessesCanvas.getContext('2d');
        var businessesChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                        label: 'Population (millions)',
                        backgroundColor: ['#5190fb', '#edeef2'],
                        data: [67, 33]
                    }]
            },
            options: {
                tooltips: {
                    enabled: false
                },
                maintainAspectRatio: false
            }
        });
    };
    DashboardComponent.prototype.initResponseBarChart = function () {
        var responseCanvas = document.getElementById('response-bar-chart');
        var ctx = responseCanvas.getContext('2d');
        var responseChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, {
            type: 'bar',
            data: {
                labels: ['Emailed', 'Link Clicked', 'Form Started', 'Form Submitted', 'Unsubscribed'],
                datasets: [{
                        data: [5767, 4678, 256, 253, 254],
                        backgroundColor: [
                            '#edeef2',
                            '#edeef2',
                            '#edeef2',
                            'rgba(75, 192, 192, 0.2)',
                            '#edeef2'
                        ]
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) {
                                    return value >= 1000 ? value / 1000 + 'K' : value;
                                }
                            }
                        }],
                    xAxes: [{
                            barThickness: 75
                        }]
                },
                tooltips: {
                    enabled: false
                },
                maintainAspectRatio: false
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__(539)
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailingComponent = (function () {
    function MailingComponent() {
    }
    MailingComponent.prototype.ngOnInit = function () {
    };
    return MailingComponent;
}());
MailingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'mailing',
        template: __webpack_require__(540)
    }),
    __metadata("design:paramtypes", [])
], MailingComponent);

//# sourceMappingURL=mailing.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueueComponent = (function () {
    function QueueComponent() {
        this.showFilters = false;
        this.emails = [1, 2, 3, 4, 5, 6, 7];
        this.currentPage = 1;
        this.totalPages = null;
        /**
         * itemsPerPage get/set
         * @type {number}
         * @private
         */
        this._itemsPerPage = 10;
    }
    Object.defineProperty(QueueComponent.prototype, "itemsPerPage", {
        get: function () {
            return this._itemsPerPage;
        },
        set: function (value) {
            this._itemsPerPage = value;
            this.currentPage = 1;
        },
        enumerable: true,
        configurable: true
    });
    QueueComponent.prototype.ngOnInit = function () {
    };
    QueueComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    return QueueComponent;
}());
QueueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'queue',
        template: __webpack_require__(543)
    }),
    __metadata("design:paramtypes", [])
], QueueComponent);

//# sourceMappingURL=queue.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompareScrapersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareScrapersComponent = (function () {
    function CompareScrapersComponent(_ar) {
        this._ar = _ar;
        this.scrapVersionLeft = null;
        this.scrapVersionRight = null;
        this.currentDataset = 0;
    }
    /**
     * Get scraper versions from route params
     */
    CompareScrapersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ar.params.subscribe(function (params) {
            _this.scrapVersionLeft = Number(params['scrap-left']);
            _this.scrapVersionRight = Number(params['scrap-right']);
        });
    };
    return CompareScrapersComponent;
}());
CompareScrapersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'compare-scrapers',
        template: __webpack_require__(544)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], CompareScrapersComponent);

var _a;
//# sourceMappingURL=compare-scrapers.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperSitePreviewComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScraperSitePreviewComponent = (function (_super) {
    __extends(ScraperSitePreviewComponent, _super);
    function ScraperSitePreviewComponent(_ar, _site) {
        var _this = _super.call(this) || this;
        _this._ar = _ar;
        _this._site = _site;
        _this.siteId = null;
        _this.site = null;
        _this.prevSite = null;
        _this.nextSite = null;
        return _this;
    }
    /**
     * Get site id from route params
     * Get site by id
     */
    ScraperSitePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ar.params.subscribe(function (params) {
            _this.siteId = params.id;
            _this.getSiteInfo();
        });
        this._site.feedbackAdded.takeWhile(function () { return _this.isAlive; }).subscribe(function (res) {
            if (res) {
                _this.getSiteInfo();
            }
        });
    };
    /**
     * Get site info call
     */
    ScraperSitePreviewComponent.prototype.getSiteInfo = function () {
        var _this = this;
        this._site.getSiteById(this.siteId).subscribe(function (res) {
            _this.site = res.site;
            var index = _this._site.currentSitesSet.map(function (site) {
                return site.id;
            }).indexOf(_this.site.id);
            _this.prevSite = _this._site.currentSitesSet[index - 1] || null;
            _this.nextSite = _this._site.currentSitesSet[index + 1] || null;
            console.log(res);
        });
    };
    /**
     * Set status for the site
     * @param status
     */
    ScraperSitePreviewComponent.prototype.setStatus = function (status) {
        var _this = this;
        this._site.updateSiteStatus(this.siteId, status).subscribe(function (res) { _this.getSiteInfo(); });
    };
    return ScraperSitePreviewComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */]));
ScraperSitePreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'scraper-site-preview',
        template: __webpack_require__(547)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__["a" /* SiteService */]) === "function" && _b || Object])
], ScraperSitePreviewComponent);

var _a, _b;
//# sourceMappingURL=scraper-site-preview.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperStatisticComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScraperStatisticComponent = (function () {
    function ScraperStatisticComponent(_scrap, _ar) {
        this._scrap = _scrap;
        this._ar = _ar;
        /**
         * currentDataset get/set
         * @type {number}
         * @private
         */
        this._currentDataset = 0;
    }
    Object.defineProperty(ScraperStatisticComponent.prototype, "currentDataset", {
        get: function () {
            return this._currentDataset;
        },
        set: function (value) {
            this._currentDataset = value;
            this.getScraperInfo();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get scraper by version from route param
     */
    ScraperStatisticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ar.params.subscribe(function (params) {
            _this.scraperVersion = params['version'];
            _this.getScraperInfo();
        });
    };
    /**
     * Get scraper info
     */
    ScraperStatisticComponent.prototype.getScraperInfo = function () {
        var _this = this;
        this._scrap.getScraperByVersion(this.scraperVersion, this.currentDataset).subscribe(function (res) {
            _this.scraper = res;
        });
    };
    return ScraperStatisticComponent;
}());
ScraperStatisticComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'scraper-statistic',
        template: __webpack_require__(549)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ScraperStatisticComponent);

var _a, _b;
//# sourceMappingURL=scraper-statistic.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_site_site_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base_component__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperTargetsComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScraperTargetsComponent = (function (_super) {
    __extends(ScraperTargetsComponent, _super);
    function ScraperTargetsComponent(_scrap, _site, _ar) {
        var _this = _super.call(this) || this;
        _this._scrap = _scrap;
        _this._site = _site;
        _this._ar = _ar;
        _this.sites = [];
        _this.scraperVersion = null;
        _this.showFilters = false;
        _this.currentFilters = null;
        _this.searchQuery = '';
        _this.currentPage = 1;
        _this.totalPages = null;
        _this.missingAssetPickers = [];
        _this.assetFailReasonPickers = [];
        /**
         * withErrors get/set
         * @type {boolean}
         * @private
         */
        _this._withErrors = false;
        /**
         * withMissedAssets get/set
         * @type {boolean}
         * @private
         */
        _this._withMissedAssets = false;
        /**
         * successfullyScraped get/set
         * @type {boolean}
         * @private
         */
        _this._successfullyScraped = false;
        /**
         * currentDataset get/set
         * @type {number}
         * @private
         */
        _this._currentDataset = 0;
        /**
         * itemsPerPage get/set
         * @type {number}
         * @private
         */
        _this._itemsPerPage = 10;
        return _this;
    }
    Object.defineProperty(ScraperTargetsComponent.prototype, "withErrors", {
        get: function () {
            return this._withErrors;
        },
        set: function (value) {
            if (value) {
                this.successfullyScraped = false;
            }
            this._withErrors = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScraperTargetsComponent.prototype, "withMissedAssets", {
        get: function () {
            return this._withMissedAssets;
        },
        set: function (value) {
            if (value) {
                this.successfullyScraped = false;
            }
            this._withMissedAssets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScraperTargetsComponent.prototype, "successfullyScraped", {
        get: function () {
            return this._successfullyScraped;
        },
        set: function (value) {
            if (value) {
                this.withErrors = false;
                this.withMissedAssets = false;
                this.missingAssetPickers = [];
                this.assetFailReasonPickers = [];
            }
            this._successfullyScraped = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScraperTargetsComponent.prototype, "currentDataset", {
        get: function () {
            return this._currentDataset;
        },
        set: function (value) {
            this._currentDataset = value;
            this.currentPage = 1;
            this.getSites();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScraperTargetsComponent.prototype, "itemsPerPage", {
        get: function () {
            return this._itemsPerPage;
        },
        set: function (value) {
            this._itemsPerPage = value;
            this.currentPage = 1;
            this.getSites();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get scraper by version per route param
     * Get sites by scraper version
     * Get sites as per search request change
     */
    ScraperTargetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ar.params.subscribe(function (params) {
            _this.scraperVersion = params['version'];
            _this._scrap.getScraperByVersion(params['version']).subscribe(function (res) {
                _this.scraper = res;
                _this.getSites();
            });
        });
        this._site.feedbackAdded.takeWhile(function () { return _this.isAlive; }).subscribe(function (res) {
            if (res) {
                _this.getSites();
            }
        });
    };
    /**
     * Get sites as per current params
     */
    ScraperTargetsComponent.prototype.getSites = function () {
        var _this = this;
        var args = {
            version: this.scraperVersion,
            dataset: this.currentDataset,
            currPage: this.currentPage,
            perPage: this.itemsPerPage,
            search: this.searchQuery
        };
        if (this.currentFilters) {
            args = Object.assign(args, this.currentFilters);
        }
        this._site.getSitesByScraper(args).subscribe(function (res) {
            _this.sites = res.data;
            _this._site.currentSitesSet = res.data;
            _this.totalPages = res.pagination.page_count;
            _this.totalSites = res.pagination.pagination_record_count;
            console.log(res);
        });
    };
    /**
     * Update current page and get sites
     * @param page
     */
    ScraperTargetsComponent.prototype.goToPage = function (page) {
        this.currentPage = page;
        this.getSites();
    };
    /**
     * Update current page and get sites
     * @param perPage
     */
    ScraperTargetsComponent.prototype.updatePerPage = function (perPage) {
        if (parseInt(perPage, 10) !== this.itemsPerPage) {
            this.currentPage = 1;
            this.itemsPerPage = parseInt(perPage, 10);
            this.getSites();
        }
    };
    /**
     * Toggle filters on/off
     */
    ScraperTargetsComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    /**
     * Set search query and get sites
     * @param query
     */
    ScraperTargetsComponent.prototype.setSearchQuery = function (query) {
        this.currentPage = 1;
        this.searchQuery = query;
        this.getSites();
    };
    /**
     * Add new missing asset filter
     */
    ScraperTargetsComponent.prototype.addMissingAssetFilter = function () {
        this.successfullyScraped = false;
        this.missingAssetPickers.push({
            id: Date.now(),
            assetType: ''
        });
    };
    /**
     * Remove missing asset filter
     * @param id
     */
    ScraperTargetsComponent.prototype.removeMissingAssetFilter = function (id) {
        var pickers = this.missingAssetPickers;
        for (var i = 0; i < pickers.length; i++) {
            if (pickers[i].id === id) {
                pickers.splice(i, 1);
            }
        }
    };
    /**
     * Set missing asset filter item
     * @param id
     * @param value
     */
    ScraperTargetsComponent.prototype.setMissingAssetItem = function (id, value) {
        var pickers = this.missingAssetPickers;
        for (var i = 0; i < pickers.length; i++) {
            if (pickers[i].id === id) {
                console.log(value);
                pickers[i]['assetType'] = value;
            }
        }
    };
    /**
     * Add asset fail reason picker
     */
    ScraperTargetsComponent.prototype.addAssetFailReasonFilter = function () {
        this.successfullyScraped = false;
        this.assetFailReasonPickers.push({
            id: Date.now(),
            assetType: '',
            assetFailReason: ''
        });
    };
    /**
     * Remove asset fail reason picker
     * @param id
     */
    ScraperTargetsComponent.prototype.removeAssetFailReasonFilter = function (id) {
        var pickers = this.assetFailReasonPickers;
        for (var i = 0; i < pickers.length; i++) {
            console.log(typeof pickers[i].id);
            console.log(typeof id);
            if (pickers[i].id === id) {
                pickers.splice(i, 1);
            }
        }
    };
    /**
     * Set fail reason array item
     * @param id
     * @param picker
     */
    ScraperTargetsComponent.prototype.setFailReasonItem = function (id, picker) {
        var pickers = this.assetFailReasonPickers;
        for (var i = 0; i < pickers.length; i++) {
            if (pickers[i].id === id) {
                pickers[i]['assetType'] = picker.assetType;
                pickers[i]['assetFailReason'] = picker.assetFailReason;
            }
        }
    };
    /**
     * Apply filters
     */
    ScraperTargetsComponent.prototype.applyFilters = function () {
        this.currentPage = 1;
        this.currentFilters = {
            withErrors: this.withErrors,
            withMissed: this.withMissedAssets,
            successScraped: this.successfullyScraped,
            byMissingAsset: this.missingAssetPickers.map(function (filter) { return filter.assetType; }),
            byAssetFailReason: this.assetFailReasonPickers.map(function (filter) { return filter; })
        };
        this.getSites();
    };
    /**
     * Reset filters
     */
    ScraperTargetsComponent.prototype.resetFilters = function () {
        this.withErrors = false;
        this.withMissedAssets = false;
        this.successfullyScraped = false;
        this.missingAssetPickers = [];
        this.assetFailReasonPickers = [];
        this.currentFilters = null;
        this.currentPage = 1;
        this.getSites();
    };
    return ScraperTargetsComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_base_component__["a" /* BaseComponent */]));
ScraperTargetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'scraper-targets',
        template: __webpack_require__(552)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_site_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_site_site_service__["a" /* SiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ScraperTargetsComponent);

var _a, _b, _c;
//# sourceMappingURL=scraper-targets.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_component__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrapersComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrapersComponent = (function (_super) {
    __extends(ScrapersComponent, _super);
    function ScrapersComponent(_scrap) {
        var _this = _super.call(this) || this;
        _this._scrap = _scrap;
        _this.scrapers = [];
        _this.selectedForComparison = [];
        _this.showFilters = false;
        /**
         * sorting get/set
         * @type {string}
         * @private
         */
        _this._sorting = '-version';
        /**
         * currentDataset get/set
         * @type {number}
         * @private
         */
        _this._currentDataset = 0;
        return _this;
    }
    Object.defineProperty(ScrapersComponent.prototype, "sorting", {
        get: function () {
            return this._sorting;
        },
        set: function (value) {
            this._sorting = value;
            this.getScrapers();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrapersComponent.prototype, "currentDataset", {
        get: function () {
            return this._currentDataset;
        },
        set: function (value) {
            this._currentDataset = value;
            this.getScrapers();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get all scrapers
     * Subscribe to scrapers selection
     */
    ScrapersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getScrapers();
        this._scrap.selectedForComparison.takeWhile(function () { return _this.isAlive; }).subscribe(function (res) {
            _this.selectedForComparison = res;
        });
    };
    /**
     * Get scrapers as per current params
     */
    ScrapersComponent.prototype.getScrapers = function () {
        var _this = this;
        var args = {
            sorting: this.sorting,
            dataset: this.currentDataset
        };
        this._scrap.getScrapers(args).subscribe(function (res) {
            _this.scrapers = res.scrapers;
        });
    };
    /**
     * Clear scrapers selection
     */
    ScrapersComponent.prototype.clearSelected = function () {
        this._scrap.clearSelection();
    };
    /**
     * Toggle filters on/off
     */
    ScrapersComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    return ScrapersComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_component__["a" /* BaseComponent */]));
ScrapersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'scrapers',
        template: __webpack_require__(554)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */]) === "function" && _a || Object])
], ScrapersComponent);

var _a;
//# sourceMappingURL=scrapers.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'settings',
        template: __webpack_require__(555)
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'users',
        template: __webpack_require__(558)
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = (function () {
    function SignInComponent(_auth) {
        this._auth = _auth;
        this.email = null;
        this.password = null;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onSubmit = function () {
        this._auth.authorize(this.email, this.password);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sign-in',
        template: __webpack_require__(585)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignInComponent);

var _a;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignedInGuard = (function () {
    function SignedInGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    SignedInGuard.prototype.canActivate = function (next, state) {
        if (this._auth.isSignedIn()) {
            return true;
        }
        else {
            this._router.navigate(['sign-in']);
            return false;
        }
    };
    return SignedInGuard;
}());
SignedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignedInGuard);

var _a, _b;
//# sourceMappingURL=signed-in.guard.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignedOutGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignedOutGuard = (function () {
    function SignedOutGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    SignedOutGuard.prototype.canActivate = function (next, state) {
        if (!this._auth.isSignedIn()) {
            return true;
        }
        else {
            this._router.navigate(['']);
            return false;
        }
    };
    return SignedOutGuard;
}());
SignedOutGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignedOutGuard);

var _a, _b;
//# sourceMappingURL=signed-out.guard.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModalService = (function () {
    function ModalService() {
        this.modal = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    /**
     * Show success modal
     * @param success
     */
    ModalService.prototype.showSuccess = function (success) {
        this.showModal({
            type: 'success',
            message: success
        });
    };
    /**
     * Show error modal
     * @param error
     */
    ModalService.prototype.showError = function (error) {
        this.showModal({
            type: 'error',
            message: error
        });
    };
    /**
     * Open asset fail reason modal
     * @param siteId
     * @param assetType
     */
    ModalService.prototype.openAssetFailReason = function (siteId, assetType, feedbackText) {
        this.showModal({
            type: 'asset-fail-reason',
            siteId: siteId,
            assetType: assetType,
            feedbackText: feedbackText || null
        });
    };
    /**
     * Open upload dataset modal
     */
    ModalService.prototype.openUploadDataset = function () {
        this.showModal({
            type: 'upload-dataset'
        });
    };
    /**
     * Display modal
     * @param modal
     */
    ModalService.prototype.showModal = function (modal) {
        this.modal.next(modal);
    };
    /**
     * Close modal
     */
    ModalService.prototype.closeModal = function () {
        this.modal.next(null);
    };
    return ModalService;
}());
ModalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ModalService);

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseComponent = (function () {
    function BaseComponent() {
        this.isAlive = false;
        this.isAlive = true;
    }
    BaseComponent.prototype.ngOnDestroy = function () {
        this.isAlive = false;
    };
    return BaseComponent;
}());
BaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'base',
        template: __webpack_require__(565)
    }),
    __metadata("design:paramtypes", [])
], BaseComponent);

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomSelectComponent = (function () {
    function CustomSelectComponent() {
        this.options = [];
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.elemWidth = '200px';
        this.addOptions = false;
        this.expandUp = false;
        this.showInput = false;
    }
    /**
     * Show/hide input
     */
    CustomSelectComponent.prototype.toggleInput = function () {
        this.showInput = !this.showInput;
    };
    /**
     * Focus on input when added
     */
    CustomSelectComponent.prototype.ngAfterViewChecked = function () {
        if (this.input) {
            this.input.nativeElement.focus();
        }
    };
    /**
     * Watch 'keydown' event
     * @param event
     */
    CustomSelectComponent.prototype.postOption = function (event) {
        var value = this.input.nativeElement.value;
        if (event.keyCode === 13) {
            if (value) {
                this.options = [{ label: value, value: value }].concat(this.options);
                this.valueChange.emit(value);
                this.input.nativeElement.blur();
            }
        }
        if (event.keyCode === 8 && !value) {
            this.input.nativeElement.blur();
        }
    };
    /**
     * Hide input text
     */
    CustomSelectComponent.prototype.hideInput = function () {
        this.showInput = false;
    };
    /**
     * Output chosen value
     * @param value
     */
    CustomSelectComponent.prototype.outputValue = function (value) {
        this.valueChange.emit(value);
        this.select.nativeElement.blur();
    };
    return CustomSelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], CustomSelectComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], CustomSelectComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], CustomSelectComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('style.width'),
    __metadata("design:type", String)
], CustomSelectComponent.prototype, "elemWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('class.add-options'),
    __metadata("design:type", Boolean)
], CustomSelectComponent.prototype, "addOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('class.expand-up'),
    __metadata("design:type", Boolean)
], CustomSelectComponent.prototype, "expandUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('class.input-text-shown'),
    __metadata("design:type", Boolean)
], CustomSelectComponent.prototype, "showInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('select'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
], CustomSelectComponent.prototype, "select", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('input'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], CustomSelectComponent.prototype, "input", void 0);
CustomSelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[custom-select]',
        template: __webpack_require__(567)
    })
], CustomSelectComponent);

var _a, _b, _c;
//# sourceMappingURL=custom-select.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScraperService = (function () {
    function ScraperService(_api) {
        this._api = _api;
        this.selectedForComparison = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    /**
     * Get scrapers selected for comparison
     * @returns {Array<any>}
     */
    ScraperService.prototype.getSelected = function () {
        return this.selectedForComparison.getValue();
    };
    /**
     * Add selected scraper to selected list
     * @param version
     */
    ScraperService.prototype.addSelected = function (version) {
        if (this.getSelected().length < 2) {
            this.selectedForComparison.next(this.getSelected().concat(version));
        }
    };
    /**
     * Remove selected scraper from selected list
     * @param version
     */
    ScraperService.prototype.removeSelected = function (version) {
        var selected = this.getSelected();
        var index = selected.indexOf(version);
        if (index > -1) {
            selected.splice(index, 1);
            this.selectedForComparison.next(selected);
        }
    };
    /**
     * Clear selected scrapers info
     */
    ScraperService.prototype.clearSelection = function () {
        this.selectedForComparison.next([]);
    };
    /**
     * Get all scrapers
     * @param args
     * @returns {Observable<R>}
     */
    ScraperService.prototype.getScrapers = function (args) {
        var reqUrl = "scrapers" + ("?sort=" + (args ? args.sorting : '') + "&dataset_id=" + (args && args.dataset ? args.dataset : ''));
        return this._api.get(reqUrl);
    };
    /**
     * Get scraper by version
     * @param version
     * @returns {Observable<R>}
     */
    ScraperService.prototype.getScraperByVersion = function (version, dataset) {
        return this._api.get("scrapers/" + version + "?dataset_id=" + (dataset || ''));
    };
    /**
     * Get scraper fail reasons by kind of reason
     * @param version
     * @param kind
     * @returns {Observable<R>}
     */
    ScraperService.prototype.getFailReasonsByKind = function (version, kind) {
        return this._api.get("scrapers/" + version + "/reasons/" + kind);
    };
    return ScraperService;
}());
ScraperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ScraperService);

var _a;
//# sourceMappingURL=scraper.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 332;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_modal) {
        this._modal = _modal;
        this.modal = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modal.modal.subscribe(function (res) {
            _this.modal = res;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(530)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_admin_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_base_base_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_dashboard_dashboard_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_scrapers_scrapers_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_navbar_navbar_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_sidebar_sidebar_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_businesses_businesses_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_queue_queue_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_mailing_mailing_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_users_users_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_settings_settings_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_sidebar_sidebar_menu_item_sidebar_menu_item_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_scrapers_scrapers_table_row_scrapers_table_row_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_scrapers_compare_scrapers_compare_scrapers_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_scrapers_scraper_statistic_scraper_statistic_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_scrapers_scraper_targets_scraper_targets_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_switch_toggle_switch_toggle_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_checkbox_wrapper_checkbox_wrapper_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_scrapers_scraper_targets_scraper_targets_table_row_scraper_targets_table_row_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_scrapers_scraper_site_preview_scraper_site_preview_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_sign_in_sign_in_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_api_api_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__guards_signed_in_guard__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__guards_signed_out_guard__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_log_log_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_modal_modal_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_modal_modal_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_percent_rate_pipe__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_admin_scrapers_scraper_statistic_scraper_success_rate_scraper_success_rate_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_admin_scrapers_scraper_statistic_scraper_fail_rate_scraper_fail_rate_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_pagination_pagination_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_loader_global_loader_global_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_loader_admin_loader_admin_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_loader_loader_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_admin_scrapers_fail_list_item_fail_list_item_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_custom_select_select_scraper_version_select_scraper_version_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_admin_scrapers_compare_scrapers_scraper_compared_scraper_compared_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_site_site_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_dataset_dataset_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_site_url_pipe__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_dynamic_search_dynamic_search_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pipes_safe_url_pipe__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_admin_businesses_businesses_table_row_businesses_table_row_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_business_business_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_datepicker_datepicker_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_increment_decrement_increment_decrement_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ngx_mydatepicker__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ng2_completer__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_mydaterangepicker__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_asset_wrapper_asset_wrapper_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_toggle_sorting_toggle_sorting_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_tiny_loader_tiny_loader_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_custom_select_custom_select_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_custom_select_select_add_asset_fail_reason_select_add_asset_fail_reason_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pipes_date_time_pipe__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_asset_wrapper_asset_feedback_asset_feedback_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_admin_businesses_single_business_business_details_business_details_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_admin_businesses_single_business_business_interactions_business_interactions_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_admin_businesses_single_business_business_designs_business_designs_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_admin_businesses_single_business_business_designs_business_designs_item_business_designs_item_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_daterangepicker_daterangepicker_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_admin_queue_queue_table_row_queue_table_row_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_admin_businesses_single_business_single_business_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_modal_modal_fail_reason_modal_fail_reason_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_modal_modal_upload_dataset_modal_upload_dataset_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__components_modal_modal_success_modal_success_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_modal_modal_error_modal_error_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__directives_input_number_input_number_directive__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__components_asset_fail_reason_filter_asset_fail_reason_filter_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__components_asset_fail_reason_filter_select_failed_asset_select_failed_asset_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__components_asset_fail_reason_filter_select_failed_asset_reason_select_failed_asset_reason_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__components_custom_select_select_data_set_select_data_set_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__components_custom_select_select_missing_asset_select_missing_asset_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__components_auto_complete_auto_complete_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__services_error_error_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__components_custom_select_select_per_page_select_per_page_component__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_base_base_component__["a" /* BaseComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_admin_scrapers_scrapers_component__["a" /* ScrapersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_admin_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_admin_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_admin_businesses_businesses_component__["a" /* BusinessesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_admin_queue_queue_component__["a" /* QueueComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_admin_mailing_mailing_component__["a" /* MailingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_admin_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_admin_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_sidebar_sidebar_menu_item_sidebar_menu_item_component__["a" /* SidebarMenuItemComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_scrapers_scrapers_table_row_scrapers_table_row_component__["a" /* ScrapersTableRowComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_scrapers_compare_scrapers_compare_scrapers_component__["a" /* CompareScrapersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_scrapers_scraper_statistic_scraper_statistic_component__["a" /* ScraperStatisticComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_scrapers_scraper_targets_scraper_targets_component__["a" /* ScraperTargetsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_switch_toggle_switch_toggle_component__["a" /* SwitchToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_checkbox_wrapper_checkbox_wrapper_component__["a" /* CheckboxWrapperComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_admin_scrapers_scraper_targets_scraper_targets_table_row_scraper_targets_table_row_component__["a" /* ScraperTargetsTableRowComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_admin_scrapers_scraper_site_preview_scraper_site_preview_component__["a" /* ScraperSitePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_35__pipes_percent_rate_pipe__["a" /* PercentRatePipe */],
            __WEBPACK_IMPORTED_MODULE_36__components_admin_scrapers_scraper_statistic_scraper_success_rate_scraper_success_rate_component__["a" /* ScraperSuccessRateComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_admin_scrapers_scraper_statistic_scraper_fail_rate_scraper_fail_rate_component__["a" /* ScraperFailRateComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_loader_global_loader_global_component__["a" /* LoaderGlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_loader_admin_loader_admin_component__["a" /* LoaderAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_admin_scrapers_fail_list_item_fail_list_item_component__["a" /* FailListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_custom_select_select_scraper_version_select_scraper_version_component__["a" /* SelectScraperVersionComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_admin_scrapers_compare_scrapers_scraper_compared_scraper_compared_component__["a" /* ScraperComparedComponent */],
            __WEBPACK_IMPORTED_MODULE_47__pipes_site_url_pipe__["a" /* SiteUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_48__components_dynamic_search_dynamic_search_component__["a" /* DynamicSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_49__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_50__components_admin_businesses_businesses_table_row_businesses_table_row_component__["a" /* BusinessesTableRowComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_datepicker_datepicker_component__["a" /* DatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_53__components_increment_decrement_increment_decrement_component__["a" /* IncrementDecrementComponent */],
            __WEBPACK_IMPORTED_MODULE_57__components_asset_wrapper_asset_wrapper_component__["a" /* AssetWrapperComponent */],
            __WEBPACK_IMPORTED_MODULE_58__components_toggle_sorting_toggle_sorting_component__["a" /* ToggleSortingComponent */],
            __WEBPACK_IMPORTED_MODULE_59__components_tiny_loader_tiny_loader_component__["a" /* TinyLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_60__components_custom_select_custom_select_component__["a" /* CustomSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_61__components_custom_select_select_add_asset_fail_reason_select_add_asset_fail_reason_component__["a" /* SelectAddAssetFailReasonComponent */],
            __WEBPACK_IMPORTED_MODULE_62__pipes_date_time_pipe__["a" /* DateTimePipe */],
            __WEBPACK_IMPORTED_MODULE_63__components_asset_wrapper_asset_feedback_asset_feedback_component__["a" /* AssetFeedbackComponent */],
            __WEBPACK_IMPORTED_MODULE_64__components_admin_businesses_single_business_business_details_business_details_component__["a" /* BusinessDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_65__components_admin_businesses_single_business_business_interactions_business_interactions_component__["a" /* BusinessInteractionsComponent */],
            __WEBPACK_IMPORTED_MODULE_66__components_admin_businesses_single_business_business_designs_business_designs_component__["a" /* BusinessDesignsComponent */],
            __WEBPACK_IMPORTED_MODULE_67__components_admin_businesses_single_business_business_designs_business_designs_item_business_designs_item_component__["a" /* BusinessDesignsItemComponent */],
            __WEBPACK_IMPORTED_MODULE_68__components_daterangepicker_daterangepicker_component__["a" /* DaterangepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_69__components_admin_queue_queue_table_row_queue_table_row_component__["a" /* QueueTableRowComponent */],
            __WEBPACK_IMPORTED_MODULE_70__components_admin_businesses_single_business_single_business_component__["a" /* SingleBusinessComponent */],
            __WEBPACK_IMPORTED_MODULE_71__components_modal_modal_fail_reason_modal_fail_reason_component__["a" /* ModalFailReasonComponent */],
            __WEBPACK_IMPORTED_MODULE_72__components_modal_modal_upload_dataset_modal_upload_dataset_component__["a" /* ModalUploadDatasetComponent */],
            __WEBPACK_IMPORTED_MODULE_73__components_modal_modal_success_modal_success_component__["a" /* ModalSuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_74__components_modal_modal_error_modal_error_component__["a" /* ModalErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_75__directives_input_number_input_number_directive__["a" /* InputNumberDirective */],
            __WEBPACK_IMPORTED_MODULE_76__components_asset_fail_reason_filter_asset_fail_reason_filter_component__["a" /* AssetFailReasonFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_77__components_asset_fail_reason_filter_select_failed_asset_select_failed_asset_component__["a" /* SelectFailedAssetComponent */],
            __WEBPACK_IMPORTED_MODULE_78__components_asset_fail_reason_filter_select_failed_asset_reason_select_failed_asset_reason_component__["a" /* SelectFailedAssetReasonComponent */],
            __WEBPACK_IMPORTED_MODULE_79__components_custom_select_select_data_set_select_data_set_component__["a" /* SelectDataSetComponent */],
            __WEBPACK_IMPORTED_MODULE_80__components_custom_select_select_missing_asset_select_missing_asset_component__["a" /* SelectMissingAssetComponent */],
            __WEBPACK_IMPORTED_MODULE_81__components_auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_83__components_custom_select_select_per_page_select_per_page_component__["a" /* SelectPerPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_54_ngx_mydatepicker__["NgxMyDatePickerModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_56_mydaterangepicker__["MyDateRangePickerModule"],
            __WEBPACK_IMPORTED_MODULE_55_ng2_completer__["a" /* Ng2CompleterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_27__services_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_28__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_82__services_error_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_32__services_log_log_service__["a" /* LogService */],
            __WEBPACK_IMPORTED_MODULE_33__services_modal_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_41__services_loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_29__guards_signed_in_guard__["a" /* SignedInGuard */],
            __WEBPACK_IMPORTED_MODULE_30__guards_signed_out_guard__["a" /* SignedOutGuard */],
            __WEBPACK_IMPORTED_MODULE_31__services_scraper_scraper_service__["a" /* ScraperService */],
            __WEBPACK_IMPORTED_MODULE_51__services_business_business_service__["a" /* BusinessService */],
            __WEBPACK_IMPORTED_MODULE_46__services_dataset_dataset_service__["a" /* DatasetService */],
            __WEBPACK_IMPORTED_MODULE_45__services_site_site_service__["a" /* SiteService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_admin_admin_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_admin_dashboard_dashboard_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_scrapers_scrapers_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_settings_settings_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_businesses_businesses_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_queue_queue_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_mailing_mailing_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_users_users_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_scrapers_compare_scrapers_compare_scrapers_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_scrapers_scraper_statistic_scraper_statistic_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_scrapers_scraper_targets_scraper_targets_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_scrapers_scraper_site_preview_scraper_site_preview_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sign_in_sign_in_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_signed_in_guard__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_signed_out_guard__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_businesses_single_business_business_details_business_details_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_businesses_single_business_business_designs_business_designs_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_businesses_single_business_business_interactions_business_interactions_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_businesses_single_business_single_business_component__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




















var appRoutes = [
    { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_13__components_sign_in_sign_in_component__["a" /* SignInComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_signed_out_guard__["a" /* SignedOutGuard */]] },
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_1__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_signed_in_guard__["a" /* SignedInGuard */]], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'scrapers', component: __WEBPACK_IMPORTED_MODULE_3__components_admin_scrapers_scrapers_component__["a" /* ScrapersComponent */] },
            { path: 'scrapers/statistic/:version', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_scrapers_scraper_statistic_scraper_statistic_component__["a" /* ScraperStatisticComponent */] },
            { path: 'scrapers/targets/:version', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_scrapers_scraper_targets_scraper_targets_component__["a" /* ScraperTargetsComponent */] },
            { path: 'scrapers/compare/:scrap-left/:scrap-right', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_scrapers_compare_scrapers_compare_scrapers_component__["a" /* CompareScrapersComponent */] },
            { path: 'businesses', component: __WEBPACK_IMPORTED_MODULE_5__components_admin_businesses_businesses_component__["a" /* BusinessesComponent */] },
            { path: 'businesses/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_businesses_single_business_single_business_component__["a" /* SingleBusinessComponent */], children: [
                    { path: '', redirectTo: 'details', pathMatch: 'full' },
                    { path: 'designs', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_businesses_single_business_business_designs_business_designs_component__["a" /* BusinessDesignsComponent */] },
                    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_16__components_admin_businesses_single_business_business_details_business_details_component__["a" /* BusinessDetailsComponent */] },
                    { path: 'interactions', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_businesses_single_business_business_interactions_business_interactions_component__["a" /* BusinessInteractionsComponent */] },
                ] },
            { path: 'queue', component: __WEBPACK_IMPORTED_MODULE_6__components_admin_queue_queue_component__["a" /* QueueComponent */] },
            { path: 'mailing', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_mailing_mailing_component__["a" /* MailingComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_users_users_component__["a" /* UsersComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_4__components_admin_settings_settings_component__["a" /* SettingsComponent */] }
        ]
    },
    { path: 'site-preview/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_scrapers_scraper_site_preview_scraper_site_preview_component__["a" /* ScraperSitePreviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_signed_in_guard__["a" /* SignedInGuard */]] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_business_business_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_business__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_business___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces_business__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_component__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessesTableRowComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessesTableRowComponent = (function (_super) {
    __extends(BusinessesTableRowComponent, _super);
    function BusinessesTableRowComponent(_busin) {
        var _this = _super.call(this) || this;
        _this._busin = _busin;
        _this.isChecked = false;
        return _this;
    }
    /**
     * Subscribe to selection list
     */
    BusinessesTableRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._busin.selectedForScraping.takeWhile(function () { return _this.isAlive; }).subscribe(function (res) {
            _this.isChecked = res.indexOf(_this.business.id) > -1;
        });
    };
    /**
     * Toggle item selection
     */
    BusinessesTableRowComponent.prototype.toggleChecked = function () {
        this.isChecked ? this._busin.removeSelected(this.business.id) : this._busin.addSelected(this.business.id);
    };
    return BusinessesTableRowComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_business__["Business"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces_business__["Business"]) === "function" && _a || Object)
], BusinessesTableRowComponent.prototype, "business", void 0);
BusinessesTableRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[businesses-table-row]',
        template: __webpack_require__(532)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_business_business_service__["a" /* BusinessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_business_business_service__["a" /* BusinessService */]) === "function" && _b || Object])
], BusinessesTableRowComponent);

var _a, _b;
//# sourceMappingURL=businesses-table-row.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDesignsItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusinessDesignsItemComponent = (function () {
    function BusinessDesignsItemComponent() {
    }
    return BusinessDesignsItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], BusinessDesignsItemComponent.prototype, "design", void 0);
BusinessDesignsItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[business-designs-item]',
        template: __webpack_require__(534)
    }),
    __metadata("design:paramtypes", [])
], BusinessDesignsItemComponent);

//# sourceMappingURL=business-designs-item.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_component__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent(_auth) {
        var _this = _super.call(this) || this;
        _this._auth = _auth;
        return _this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.currentUser.subscribe(function (res) {
            _this.currentUser = res;
        });
    };
    NavbarComponent.prototype.signOut = function () {
        this._auth.signOut();
    };
    return NavbarComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_component__["a" /* BaseComponent */]));
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[navbar]',
        template: __webpack_require__(541)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueTableRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueueTableRowComponent = (function () {
    function QueueTableRowComponent() {
    }
    QueueTableRowComponent.prototype.ngOnInit = function () {
    };
    return QueueTableRowComponent;
}());
QueueTableRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[queue-table-row]',
        template: __webpack_require__(542)
    }),
    __metadata("design:paramtypes", [])
], QueueTableRowComponent);

//# sourceMappingURL=queue-table-row.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperComparedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScraperComparedComponent = (function () {
    function ScraperComparedComponent(_scrap) {
        this._scrap = _scrap;
        this.scraperVersion = null;
        this.currDataset = 0;
        this.slug = null;
        this.scraper = null;
    }
    ScraperComparedComponent.prototype.ngOnChanges = function (changes) {
        this.getScraperInfo();
    };
    /**
     * Get compared scraper info
     */
    ScraperComparedComponent.prototype.getScraperInfo = function () {
        var _this = this;
        this._scrap.getScraperByVersion(this.scraperVersion, this.currDataset).subscribe(function (res) {
            _this.scraper = res;
        });
    };
    return ScraperComparedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], ScraperComparedComponent.prototype, "scraperVersion", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], ScraperComparedComponent.prototype, "currDataset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ScraperComparedComponent.prototype, "slug", void 0);
ScraperComparedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[scraper-compared]',
        template: __webpack_require__(545)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */]) === "function" && _a || Object])
], ScraperComparedComponent);

var _a;
//# sourceMappingURL=scraper-compared.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FailListItemComponent = (function () {
    function FailListItemComponent(_scrap, _cdRef) {
        this._scrap = _scrap;
        this._cdRef = _cdRef;
        this.failItem = null;
        this.failReasons = [];
        this.loadingReasons = true;
        this.reasonsFetchedUp = false;
    }
    FailListItemComponent.prototype.ngOnInit = function () {
    };
    FailListItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $("#" + this.failItem.kind + "-" + this.slug).on('show.bs.collapse', function () {
            if (!_this.reasonsFetchedUp) {
                _this.getReasons();
            }
        });
    };
    FailListItemComponent.prototype.getReasons = function () {
        var _this = this;
        this._scrap.getFailReasonsByKind(this.scraperVersion, this.failItem.kind).subscribe(function (res) {
            console.log(res);
            _this.failReasons = res.reasons;
            _this.reasonsFetchedUp = true;
        }, function (err) { }, function () {
            _this.loadingReasons = false;
            _this._cdRef.detectChanges();
        });
    };
    return FailListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], FailListItemComponent.prototype, "failItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], FailListItemComponent.prototype, "scraperVersion", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], FailListItemComponent.prototype, "slug", void 0);
FailListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[fail-list-item]',
        template: __webpack_require__(546)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ChangeDetectorRef */]) === "function" && _b || Object])
], FailListItemComponent);

var _a, _b;
//# sourceMappingURL=fail-list-item.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperFailRateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScraperFailRateComponent = (function () {
    function ScraperFailRateComponent() {
    }
    return ScraperFailRateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__["Scraper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__["Scraper"]) === "function" && _a || Object)
], ScraperFailRateComponent.prototype, "scraper", void 0);
ScraperFailRateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[scraper-fail-rate]',
        template: __webpack_require__(548)
    })
], ScraperFailRateComponent);

var _a;
//# sourceMappingURL=scraper-fail-rate.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperSuccessRateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScraperSuccessRateComponent = (function () {
    function ScraperSuccessRateComponent() {
    }
    return ScraperSuccessRateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__["Scraper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__["Scraper"]) === "function" && _a || Object)
], ScraperSuccessRateComponent.prototype, "scraper", void 0);
ScraperSuccessRateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[scraper-success-rate]',
        template: __webpack_require__(550)
    })
], ScraperSuccessRateComponent);

var _a;
//# sourceMappingURL=scraper-success-rate.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_site__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_site___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_site__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScraperTargetsTableRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScraperTargetsTableRowComponent = (function () {
    function ScraperTargetsTableRowComponent() {
    }
    ScraperTargetsTableRowComponent.prototype.ngOnInit = function () {
    };
    return ScraperTargetsTableRowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_site__["Site"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_site__["Site"]) === "function" && _a || Object)
], ScraperTargetsTableRowComponent.prototype, "site", void 0);
ScraperTargetsTableRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[scraper-targets-table-row]',
        template: __webpack_require__(551)
    }),
    __metadata("design:paramtypes", [])
], ScraperTargetsTableRowComponent);

var _a;
//# sourceMappingURL=scraper-targets-table-row.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_component__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrapersTableRowComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScrapersTableRowComponent = (function (_super) {
    __extends(ScrapersTableRowComponent, _super);
    function ScrapersTableRowComponent(_scrap) {
        var _this = _super.call(this) || this;
        _this._scrap = _scrap;
        _this.isChecked = false;
        return _this;
    }
    /**
     * Subscribe to selected items array
     */
    ScrapersTableRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrap.selectedForComparison.takeWhile(function () { return _this.isAlive; }).subscribe(function (res) {
            _this.isChecked = res.indexOf(_this.scraper.version) > -1;
        });
    };
    /**
     * Toggle selection
     */
    ScrapersTableRowComponent.prototype.toggleChecked = function () {
        this.isChecked ? this._scrap.removeSelected(this.scraper.version) : this._scrap.addSelected(this.scraper.version);
    };
    return ScrapersTableRowComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__["Scraper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_scraper__["Scraper"]) === "function" && _a || Object)
], ScrapersTableRowComponent.prototype, "scraper", void 0);
ScrapersTableRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[scrapers-table-row]',
        template: __webpack_require__(553)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_scraper_scraper_service__["a" /* ScraperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scraper_scraper_service__["a" /* ScraperService */]) === "function" && _b || Object])
], ScrapersTableRowComponent);

var _a, _b;
//# sourceMappingURL=scrapers-table-row.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarMenuItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarMenuItemComponent = (function () {
    function SidebarMenuItemComponent() {
    }
    SidebarMenuItemComponent.prototype.ngOnInit = function () {
    };
    return SidebarMenuItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], SidebarMenuItemComponent.prototype, "menuItem", void 0);
SidebarMenuItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[sidebar-menu-item]',
        template: __webpack_require__(556)
    }),
    __metadata("design:paramtypes", [])
], SidebarMenuItemComponent);

//# sourceMappingURL=sidebar-menu-item.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.menuItems = [
            { title: 'Dashboard', url: 'dashboard', icon: '#ic-dashboard' },
            { title: 'Scrapers', url: 'scrapers', icon: '#ic-scrapers' },
            { title: 'Businesses', url: 'businesses', icon: '#ic-businesses' },
            { title: 'Queue', url: 'queue', icon: '#ic-queue' },
            { title: 'Mailing', url: 'mailing', icon: '#ic-mailing' },
            { title: 'Users', url: 'users', icon: '#ic-users' },
            { title: 'Settings', url: 'settings', icon: '#ic-settings' }
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[sidebar]',
        template: __webpack_require__(557)
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetFailReasonFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetFailReasonFilterComponent = (function () {
    function AssetFailReasonFilterComponent() {
        this.index = null;
        this.value = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this._assetType = '';
        this._assetFailReason = '';
    }
    Object.defineProperty(AssetFailReasonFilterComponent.prototype, "assetType", {
        /**
         * assetType getter
         * @returns {string}
         */
        get: function () {
            return this._assetType;
        },
        /**
         * assetType setter
         * Emit falsy value
         * @param value
         */
        set: function (value) {
            this._assetType = value;
            this.emitFalsy();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetFailReasonFilterComponent.prototype, "assetFailReason", {
        /**
         * assetFailReason getter
         * @returns {string}
         */
        get: function () {
            return this._assetFailReason;
        },
        /**
         * assetFailReason setter
         * @param value
         */
        set: function (value) {
            this._assetFailReason = value;
            this.assetFailReason ? this.emitTruthy() : this.emitFalsy();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Emit delete event
     */
    AssetFailReasonFilterComponent.prototype.removeThisPicker = function () {
        this.remove.emit();
    };
    /**
     * Emit currently set value
     */
    AssetFailReasonFilterComponent.prototype.emitTruthy = function () {
        this.value.emit({
            assetType: this.assetType,
            assetFailReason: this.assetFailReason
        });
    };
    /**
     * Emit empty value
     */
    AssetFailReasonFilterComponent.prototype.emitFalsy = function () {
        this.value.emit({
            assetType: '',
            assetFailReason: ''
        });
    };
    return AssetFailReasonFilterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], AssetFailReasonFilterComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], AssetFailReasonFilterComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], AssetFailReasonFilterComponent.prototype, "remove", void 0);
AssetFailReasonFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[asset-fail-reason-filter]',
        template: __webpack_require__(559)
    })
], AssetFailReasonFilterComponent);

var _a, _b;
//# sourceMappingURL=asset-fail-reason-filter.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_custom_select_custom_select_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFailedAssetReasonComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectFailedAssetReasonComponent = (function (_super) {
    __extends(SelectFailedAssetReasonComponent, _super);
    function SelectFailedAssetReasonComponent(_site) {
        var _this = _super.call(this) || this;
        _this._site = _site;
        _this.assetType = '';
        _this.options = [
            { label: 'Fail Reason', value: '' }
        ];
        return _this;
    }
    /**
     * Update options when asset type is changed
     * @param changes
     */
    SelectFailedAssetReasonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.assetType && !changes.assetType.firstChange) {
            this.updateOptions();
        }
    };
    /**
     * Update options based on asset type value
     */
    SelectFailedAssetReasonComponent.prototype.updateOptions = function () {
        var _this = this;
        if (this.assetType) {
            this._site.getReasonsByAssetType(this.assetType).subscribe(function (res) {
                var reasons = res[_this.assetType].map(function (reason) { return { label: reason, value: reason }; });
                _this.options = [{ label: 'Fail Reason', value: '' }].concat(reasons);
            });
        }
        else {
            this.options = [{ label: 'Fail Reason', value: '' }];
        }
        this.value = '';
    };
    return SelectFailedAssetReasonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__components_custom_select_custom_select_component__["a" /* CustomSelectComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], SelectFailedAssetReasonComponent.prototype, "assetType", void 0);
SelectFailedAssetReasonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[select-failed-asset-reason]',
        template: __webpack_require__(560)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__["a" /* SiteService */]) === "function" && _a || Object])
], SelectFailedAssetReasonComponent);

var _a;
//# sourceMappingURL=select-failed-asset-reason.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_custom_select_custom_select_component__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFailedAssetComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectFailedAssetComponent = (function (_super) {
    __extends(SelectFailedAssetComponent, _super);
    function SelectFailedAssetComponent() {
        var _this = _super.call(this) || this;
        _this.options = [
            { label: 'Failed Asset', value: '' },
            { label: 'Company Name', value: 'name' },
            { label: 'Slogan', value: 'slogan' },
            { label: 'Phone', value: 'phone' },
            { label: 'Colors', value: 'colors' },
            { label: 'Font', value: 'font' },
            { label: 'Logo', value: 'logo' },
            { label: 'Images', value: 'backgrounds' }
        ];
        return _this;
    }
    return SelectFailedAssetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__components_custom_select_custom_select_component__["a" /* CustomSelectComponent */]));
SelectFailedAssetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[select-failed-asset]',
        template: __webpack_require__(561)
    }),
    __metadata("design:paramtypes", [])
], SelectFailedAssetComponent);

//# sourceMappingURL=select-failed-asset.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetFeedbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AssetFeedbackComponent = (function () {
    function AssetFeedbackComponent() {
    }
    return AssetFeedbackComponent;
}());
AssetFeedbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[asset-feedback]',
        template: __webpack_require__(562)
    })
], AssetFeedbackComponent);

//# sourceMappingURL=asset-feedback.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetWrapperComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssetWrapperComponent = (function () {
    function AssetWrapperComponent(_modal) {
        this._modal = _modal;
        this.assetFeedback = null;
    }
    /**
     * Open asset fail reason popup
     */
    AssetWrapperComponent.prototype.postReason = function () {
        this._modal.openAssetFailReason(this.siteId, this.assetType, this.assetFeedback || null);
    };
    return AssetWrapperComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], AssetWrapperComponent.prototype, "siteId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], AssetWrapperComponent.prototype, "assetType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], AssetWrapperComponent.prototype, "asset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], AssetWrapperComponent.prototype, "assetFeedback", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], AssetWrapperComponent.prototype, "enlarged", void 0);
AssetWrapperComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[asset-wrapper]',
        template: __webpack_require__(563)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], AssetWrapperComponent);

var _a;
//# sourceMappingURL=asset-wrapper.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_completer__ = __webpack_require__(281);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoCompleteComponent = (function () {
    function AutoCompleteComponent(_compl) {
        this._compl = _compl;
        this.isOpened = false;
        this.elemWidth = '250px';
        this.placeholder = 'Select or start typing';
        this.captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett'];
    }
    AutoCompleteComponent.prototype.ngOnInit = function () {
    };
    AutoCompleteComponent.prototype.setOpened = function (status) {
        this.isOpened = status;
    };
    return AutoCompleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('class.dropdown-shown'),
    __metadata("design:type", Boolean)
], AutoCompleteComponent.prototype, "isOpened", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('style.width'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], AutoCompleteComponent.prototype, "elemWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], AutoCompleteComponent.prototype, "placeholder", void 0);
AutoCompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'auto-complete',
        template: __webpack_require__(564)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_completer__["b" /* CompleterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_completer__["b" /* CompleterService */]) === "function" && _a || Object])
], AutoCompleteComponent);

var _a;
//# sourceMappingURL=auto-complete.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxWrapperComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxWrapperComponent = (function () {
    function CheckboxWrapperComponent(_modal) {
        this._modal = _modal;
        this.isChecked = true;
    }
    CheckboxWrapperComponent.prototype.ngOnInit = function () {
    };
    CheckboxWrapperComponent.prototype.toggleChecked = function () {
        this._modal.modal.next({ type: 'reason' });
        this.isChecked = !this.isChecked;
    };
    return CheckboxWrapperComponent;
}());
CheckboxWrapperComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[checkbox-wrapper]',
        template: __webpack_require__(566)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], CheckboxWrapperComponent);

var _a;
//# sourceMappingURL=checkbox-wrapper.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_select_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAddAssetFailReasonComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectAddAssetFailReasonComponent = (function (_super) {
    __extends(SelectAddAssetFailReasonComponent, _super);
    function SelectAddAssetFailReasonComponent(_site) {
        var _this = _super.call(this) || this;
        _this._site = _site;
        _this.assetType = null;
        _this.feedback = null;
        return _this;
    }
    /**
     * Pull asset fail reasons and update options
     */
    SelectAddAssetFailReasonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._site.getReasonsByAssetType(this.assetType).subscribe(function (res) {
            var reasons = res[_this.assetType].map(function (reason) {
                return { label: reason, value: reason };
            });
            _this.options = [{ label: 'No Reason', value: '' }].concat(reasons);
        });
    };
    return SelectAddAssetFailReasonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__custom_select_component__["a" /* CustomSelectComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], SelectAddAssetFailReasonComponent.prototype, "assetType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], SelectAddAssetFailReasonComponent.prototype, "feedback", void 0);
SelectAddAssetFailReasonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[select-add-asset-fail-reason]',
        template: __webpack_require__(568)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_site_site_service__["a" /* SiteService */]) === "function" && _a || Object])
], SelectAddAssetFailReasonComponent);

var _a;
//# sourceMappingURL=select-add-asset-fail-reason.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_select_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataset_dataset_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDataSetComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectDataSetComponent = (function (_super) {
    __extends(SelectDataSetComponent, _super);
    function SelectDataSetComponent(_dset) {
        var _this = _super.call(this) || this;
        _this._dset = _dset;
        _this.options = [];
        return _this;
    }
    /**
     * Get data sets options
     */
    SelectDataSetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dset.getDatasets().subscribe(function (res) {
            var datasetOptions = res.datasets.map(function (dataset) {
                return { value: dataset.id, label: dataset.title };
            });
            _this.options = [{ value: 0, label: 'All Data Sets' }].concat(datasetOptions);
        });
    };
    return SelectDataSetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__custom_select_component__["a" /* CustomSelectComponent */]));
SelectDataSetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[select-data-set]',
        template: __webpack_require__(569)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_dataset_dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dataset_dataset_service__["a" /* DatasetService */]) === "function" && _a || Object])
], SelectDataSetComponent);

var _a;
//# sourceMappingURL=select-data-set.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_select_component__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectMissingAssetComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectMissingAssetComponent = (function (_super) {
    __extends(SelectMissingAssetComponent, _super);
    function SelectMissingAssetComponent() {
        var _this = _super.call(this) || this;
        _this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        _this.options = [
            { label: 'Missing Asset', value: '' },
            { label: 'Company Name', value: 'name' },
            { label: 'Slogan', value: 'slogan' },
            { label: 'Phone', value: 'phone' },
            { label: 'Colors', value: 'colors' },
            { label: 'Font', value: 'font' },
            { label: 'Logo', value: 'logo' },
            { label: 'Images', value: 'backgrounds' }
        ];
        return _this;
    }
    /**
     * Emit remove picker event
     */
    SelectMissingAssetComponent.prototype.removeThisPicker = function () {
        this.remove.emit();
    };
    return SelectMissingAssetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__custom_select_component__["a" /* CustomSelectComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], SelectMissingAssetComponent.prototype, "remove", void 0);
SelectMissingAssetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[select-missing-asset]',
        template: __webpack_require__(570)
    }),
    __metadata("design:paramtypes", [])
], SelectMissingAssetComponent);

var _a;
//# sourceMappingURL=select-missing-asset.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_select_component__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPerPageComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectPerPageComponent = (function (_super) {
    __extends(SelectPerPageComponent, _super);
    function SelectPerPageComponent() {
        var _this = _super.call(this) || this;
        _this.options = [
            { label: '10 on page', value: 10 },
            { label: '25 on page', value: 25 },
            { label: '50 on page', value: 50 }
        ];
        return _this;
    }
    return SelectPerPageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__custom_select_component__["a" /* CustomSelectComponent */]));
SelectPerPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[select-per-page]',
        template: __webpack_require__(571)
    }),
    __metadata("design:paramtypes", [])
], SelectPerPageComponent);

//# sourceMappingURL=select-per-page.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_select_component__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectScraperVersionComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectScraperVersionComponent = (function (_super) {
    __extends(SelectScraperVersionComponent, _super);
    function SelectScraperVersionComponent(_scrap) {
        var _this = _super.call(this) || this;
        _this._scrap = _scrap;
        _this.options = [];
        return _this;
    }
    /**
     * Get available scraper versions
     * and setup picker
     */
    SelectScraperVersionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrap.getScrapers().subscribe(function (res) {
            var versions = res.scrapers
                .map(function (scraper) { return scraper.version; })
                .filter(function (version) { return version !== _this.value; });
            _this.options = [{ value: _this.value, label: _this.value }]
                .concat(versions.map(function (version) { return { value: version, label: version }; }));
        });
    };
    return SelectScraperVersionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__custom_select_component__["a" /* CustomSelectComponent */]));
SelectScraperVersionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[select-scraper-version]',
        template: __webpack_require__(572)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scraper_scraper_service__["a" /* ScraperService */]) === "function" && _a || Object])
], SelectScraperVersionComponent);

var _a;
//# sourceMappingURL=select-scraper-version.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.date = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.options = {
            dateFormat: 'mmm dd yyyy',
            showTodayBtn: false,
            showSelectorArrow: false,
            selectorHeight: '270px',
            monthSelector: false,
            yearSelector: false
        };
    }
    /**
     * Set initial picker value
     */
    DatepickerComponent.prototype.ngOnInit = function () {
        if (!this.initDate || !__WEBPACK_IMPORTED_MODULE_1_moment__(new Date(this.initDate)).isValid()) {
            var today = new Date();
            this.initDate = {
                date: {
                    year: today.getFullYear(),
                    month: today.getMonth() + 1,
                    day: today.getDate()
                }
            };
        }
        else {
            var date = new Date(this.initDate);
            this.initDate = {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            };
        }
    };
    /**
     * Output chosen value
     * @param date
     */
    DatepickerComponent.prototype.onDateChanged = function (date) {
        this.date.emit(date);
    };
    return DatepickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], DatepickerComponent.prototype, "initDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], DatepickerComponent.prototype, "date", void 0);
DatepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[datepicker]',
        template: __webpack_require__(573)
    }),
    __metadata("design:paramtypes", [])
], DatepickerComponent);

var _a;
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaterangepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DaterangepickerComponent = (function () {
    function DaterangepickerComponent() {
        this.pickerOptions = {
            dateFormat: 'mmm dd yyyy',
            showClearDateRangeBtn: false,
            showClearBtn: false,
            showApplyBtn: false,
            showSelectDateText: false,
            monthSelector: false,
            yearSelector: false,
            selectorWidth: '250px',
            selectorHeight: '270px',
            height: '40px',
            width: '225px',
            selectionTxtFontSize: '15px',
            editableDateRangeField: false,
            showSelectorArrow: false,
            openSelectorOnInputClick: true
        };
        this.dateRange = {
            beginDate: { year: 2018, month: 10, day: 9 },
            endDate: { year: 2018, month: 10, day: 19 }
        };
    }
    DaterangepickerComponent.prototype.ngOnInit = function () {
    };
    DaterangepickerComponent.prototype.dateRangeChanged = function (event) {
        console.log('onDateRangeChanged(): Begin date: ', event.beginDate, ' End date: ', event.endDate);
        console.log('onDateRangeChanged(): Formatted: ', event.formatted);
        console.log('onDateRangeChanged(): BeginEpoc timestamp: ', event.beginEpoc, ' - endEpoc timestamp: ', event.endEpoc);
    };
    return DaterangepickerComponent;
}());
DaterangepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[daterangepicker]',
        template: __webpack_require__(574)
    }),
    __metadata("design:paramtypes", [])
], DaterangepickerComponent);

//# sourceMappingURL=daterangepicker.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicSearchComponent = (function () {
    function DynamicSearchComponent() {
        this.placeholder = 'Search';
        this.searchQuery = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.searchQueryControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]();
    }
    /**
     * Subscribe to search input changes and output value
     */
    DynamicSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchQueryControl.valueChanges.debounceTime(1000).subscribe(function (res) {
            _this.emitQueryValue(res);
        });
    };
    /**
     * Output search query value
     * @param query
     */
    DynamicSearchComponent.prototype.emitQueryValue = function (query) {
        this.searchQuery.emit(query);
    };
    return DynamicSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], DynamicSearchComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], DynamicSearchComponent.prototype, "searchQuery", void 0);
DynamicSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[dynamic-search]',
        template: __webpack_require__(575)
    })
], DynamicSearchComponent);

var _a;
//# sourceMappingURL=dynamic-search.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncrementDecrementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncrementDecrementComponent = (function () {
    function IncrementDecrementComponent() {
        this._value = 0;
        this.placeholder = '';
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Object.defineProperty(IncrementDecrementComponent.prototype, "value", {
        /**
         * Value getter
         * @returns {number}
         */
        get: function () {
            return this._value;
        },
        /**
         * Value setter
         * @param value
         */
        set: function (value) {
            this._value = value;
            this.valueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Increment value
     */
    IncrementDecrementComponent.prototype.increment = function () {
        this.value++;
    };
    /**
     * Decrement value
     */
    IncrementDecrementComponent.prototype.decrement = function () {
        if (this.value > 0) {
            this.value--;
        }
    };
    return IncrementDecrementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], IncrementDecrementComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], IncrementDecrementComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])('value'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], IncrementDecrementComponent.prototype, "value", null);
IncrementDecrementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[increment-decrement]',
        template: __webpack_require__(576)
    })
], IncrementDecrementComponent);

var _a;
//# sourceMappingURL=increment-decrement.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderAdminComponent = (function () {
    function LoaderAdminComponent(_loader) {
        this._loader = _loader;
        this.showLoader = false;
    }
    LoaderAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loader.loaderAdmin.subscribe(function (res) {
            _this.showLoader = res;
        });
    };
    return LoaderAdminComponent;
}());
LoaderAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'loader-admin',
        template: __webpack_require__(577)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__["a" /* LoaderService */]) === "function" && _a || Object])
], LoaderAdminComponent);

var _a;
//# sourceMappingURL=loader-admin.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderGlobalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderGlobalComponent = (function () {
    function LoaderGlobalComponent(_loader) {
        this._loader = _loader;
        this.showLoader = false;
    }
    LoaderGlobalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loader.loaderGlobal.subscribe(function (res) {
            _this.showLoader = res;
        });
    };
    return LoaderGlobalComponent;
}());
LoaderGlobalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'loader-global',
        template: __webpack_require__(578)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__["a" /* LoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_loader_loader_service__["a" /* LoaderService */]) === "function" && _a || Object])
], LoaderGlobalComponent);

var _a;
//# sourceMappingURL=loader-global.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalErrorComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalErrorComponent = (function (_super) {
    __extends(ModalErrorComponent, _super);
    function ModalErrorComponent(_modal) {
        var _this = _super.call(this, _modal) || this;
        _this._modal = _modal;
        return _this;
    }
    return ModalErrorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__modal_component__["a" /* ModalComponent */]));
ModalErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[modal-error]',
        template: __webpack_require__(579)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], ModalErrorComponent);

var _a;
//# sourceMappingURL=modal-error.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_site_site_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_log_log_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFailReasonComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalFailReasonComponent = (function (_super) {
    __extends(ModalFailReasonComponent, _super);
    function ModalFailReasonComponent(_modal, _site, _log) {
        var _this = _super.call(this, _modal) || this;
        _this._modal = _modal;
        _this._site = _site;
        _this._log = _log;
        _this.failReason = '';
        return _this;
    }
    /**
     * Set current fail reason value
     */
    ModalFailReasonComponent.prototype.ngOnInit = function () {
        this.failReason = this.modal.feedbackText || '';
    };
    /**
     * Post fail reason
     */
    ModalFailReasonComponent.prototype.postReason = function () {
        var _this = this;
        if (this.failReason) {
            this._site.postAssetFailReason(this.modal.siteId, this.modal.assetType, this.failReason).subscribe(function (res) {
                _this._log.logSuccess('Fail reason added');
                _this._site.shoutFeedback();
            });
        }
    };
    return ModalFailReasonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__modal_component__["a" /* ModalComponent */]));
ModalFailReasonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[modal-fail-reason]',
        template: __webpack_require__(580)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_site_site_service__["a" /* SiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_site_site_service__["a" /* SiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_log_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_log_log_service__["a" /* LogService */]) === "function" && _c || Object])
], ModalFailReasonComponent);

var _a, _b, _c;
//# sourceMappingURL=modal-fail-reason.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSuccessComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalSuccessComponent = (function (_super) {
    __extends(ModalSuccessComponent, _super);
    function ModalSuccessComponent(_modal) {
        var _this = _super.call(this, _modal) || this;
        _this._modal = _modal;
        return _this;
    }
    return ModalSuccessComponent;
}(__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]));
ModalSuccessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[modal-success]',
        template: __webpack_require__(581)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], ModalSuccessComponent);

var _a;
//# sourceMappingURL=modal-success.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dataset_dataset_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalUploadDatasetComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalUploadDatasetComponent = (function (_super) {
    __extends(ModalUploadDatasetComponent, _super);
    function ModalUploadDatasetComponent(_modal, _dset) {
        var _this = _super.call(this, _modal) || this;
        _this._modal = _modal;
        _this._dset = _dset;
        _this.file = null;
        _this.fileFeedback = null;
        _this.allowedFileTypes = [
            'text/csv',
            'application/vnd.ms-excel'
        ];
        _this.uploadingFile = false;
        _this.draggingOver = false;
        return _this;
    }
    /**
     * Check if client can use HTML5 FileReader
     * to read files
     * @returns {boolean}
     */
    ModalUploadDatasetComponent.prototype.checkCanReadFiles = function () {
        return !!(File && FileReader && FileList && Blob);
    };
    /**
     * Handle file adding event
     * @param event
     */
    ModalUploadDatasetComponent.prototype.fileAdded = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file && this.checkCanReadFiles()) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (_this.allowedFileTypes.indexOf(file.type) < 0) {
                    _this.fileFeedback = 'Wrong file format';
                    return;
                }
                _this.file = file;
                _this.fileFeedback = file.name;
            };
            reader.readAsText(file);
        }
        else {
            this.fileFeedback = 'Failed to load file';
        }
    };
    /**
     * Submit uploaded file to the server
     */
    ModalUploadDatasetComponent.prototype.submitFile = function () {
        var _this = this;
        this.uploadingFile = true;
        var data = new FormData();
        data.append('source', this.file);
        this._dset.uploadDataset(data).subscribe(function (res) {
            _this.file = null;
            _this.fileFeedback = 'Data set uploaded!';
        }, function (err) { }, function () {
            setTimeout(function () {
                _this.uploadingFile = false;
            }, 1000);
        });
    };
    /**
     * Show drop zone drag over styling
     */
    ModalUploadDatasetComponent.prototype.showDragOver = function () {
        this.draggingOver = true;
    };
    /**
     * Hide drop zone drag over styling
     */
    ModalUploadDatasetComponent.prototype.hideDragOver = function () {
        this.draggingOver = false;
    };
    return ModalUploadDatasetComponent;
}(__WEBPACK_IMPORTED_MODULE_1__modal_component__["a" /* ModalComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('datasetFile'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], ModalUploadDatasetComponent.prototype, "datasetFile", void 0);
ModalUploadDatasetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[modal-upload-dataset]',
        template: __webpack_require__(582)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_modal_modal_service__["a" /* ModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dataset_dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dataset_dataset_service__["a" /* DatasetService */]) === "function" && _c || Object])
], ModalUploadDatasetComponent);

var _a, _b, _c;
//# sourceMappingURL=modal-upload-dataset.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.newPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    PaginationComponent.prototype.goToPage = function (page) {
        this.newPage.emit(page);
    };
    return PaginationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "currPage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "totalPages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], PaginationComponent.prototype, "newPage", void 0);
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[pagination]',
        template: __webpack_require__(584)
    })
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchToggleComponent = (function () {
    function SwitchToggleComponent() {
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    SwitchToggleComponent.prototype.ngOnInit = function () {
    };
    SwitchToggleComponent.prototype.switchState = function () {
        this.stateChange.emit(!this.state);
    };
    return SwitchToggleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], SwitchToggleComponent.prototype, "state", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], SwitchToggleComponent.prototype, "stateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SwitchToggleComponent.prototype, "switchState", null);
SwitchToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[switch-toggle]',
        template: __webpack_require__(586)
    }),
    __metadata("design:paramtypes", [])
], SwitchToggleComponent);

var _a;
//# sourceMappingURL=switch-toggle.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TinyLoaderComponent = (function () {
    function TinyLoaderComponent() {
    }
    return TinyLoaderComponent;
}());
TinyLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[tiny-loader]',
        template: __webpack_require__(587)
    })
], TinyLoaderComponent);

//# sourceMappingURL=tiny-loader.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSortingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleSortingComponent = (function () {
    function ToggleSortingComponent() {
        this.currSortingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    /**
     * Watch sorting params changes and update binding
     */
    ToggleSortingComponent.prototype.ngOnChanges = function () {
        this.activeDesc = this.currSorting === '-' + this.sortingSlug;
        this.activeAsc = this.currSorting === this.sortingSlug;
    };
    /**
     * Watch click event to set sorting
     */
    ToggleSortingComponent.prototype.setSorting = function () {
        if (this.activeDesc) {
            this.currSortingChange.emit(this.sortingSlug);
        }
        else {
            this.currSortingChange.emit('-' + this.sortingSlug);
        }
    };
    return ToggleSortingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ToggleSortingComponent.prototype, "sortingSlug", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ToggleSortingComponent.prototype, "currSorting", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], ToggleSortingComponent.prototype, "currSortingChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToggleSortingComponent.prototype, "setSorting", null);
ToggleSortingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: '[toggle-sorting]',
        template: __webpack_require__(588)
    })
], ToggleSortingComponent);

var _a;
//# sourceMappingURL=toggle-sorting.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputNumberDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputNumberDirective = (function () {
    function InputNumberDirective() {
    }
    InputNumberDirective.prototype.sanitizeValue = function (event) {
        return event.charCode >= 48 && event.charCode < 58;
    };
    return InputNumberDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], InputNumberDirective.prototype, "sanitizeValue", null);
InputNumberDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[inputNumber]'
    })
], InputNumberDirective);

//# sourceMappingURL=input-number.directive.js.map

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

//# sourceMappingURL=business.js.map

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

//# sourceMappingURL=site.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateTimePipe = (function () {
    function DateTimePipe() {
    }
    DateTimePipe.prototype.transform = function (value) {
        var date = new Date(value);
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).format('MMM D YYYY, h:mm A');
    };
    return DateTimePipe;
}());
DateTimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'dateTime'
    })
], DateTimePipe);

//# sourceMappingURL=date-time.pipe.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercentRatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PercentRatePipe = (function () {
    function PercentRatePipe() {
    }
    PercentRatePipe.prototype.transform = function (value) {
        if (value % 1 !== 0) {
            return value.toFixed(2) + '%';
        }
        return value + '%';
    };
    return PercentRatePipe;
}());
PercentRatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'percentRate'
    })
], PercentRatePipe);

//# sourceMappingURL=percent-rate.pipe.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = (function () {
    function SafeUrlPipe(_sanit) {
        this._sanit = _sanit;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this._sanit.bypassSecurityTrustResourceUrl(url);
    };
    return SafeUrlPipe;
}());
SafeUrlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'safeUrl'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafeUrlPipe);

var _a;
//# sourceMappingURL=safe-url.pipe.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteUrlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SiteUrlPipe = (function () {
    function SiteUrlPipe() {
    }
    SiteUrlPipe.prototype.transform = function (value) {
        if (value.indexOf('://') > -1) {
            return value.substring(value.indexOf('://') + 3);
        }
        return value;
    };
    return SiteUrlPipe;
}());
SiteUrlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'siteUrl'
    })
], SiteUrlPipe);

//# sourceMappingURL=site-url.pipe.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_log_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_error_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiService = (function () {
    function ApiService(_http, _log, _err) {
        this._http = _http;
        this._log = _log;
        this._err = _err;
    }
    /**
     * GET request to API
     * @param url
     * @returns {Observable<R>}
     */
    ApiService.prototype.get = function (url) {
        return this.request(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get);
    };
    /**
     * POST request to API
     * @param url
     * @param body
     * @returns {Observable<R>}
     */
    ApiService.prototype.post = function (url, body) {
        return this.request(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, body);
    };
    /**
     * PUT request to API
     * @param url
     * @returns {Observable<R|T>}
     */
    ApiService.prototype.put = function (url, body) {
        return this.request(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Put, body);
    };
    /**
     * Upload request to API
     * @param url
     * @param data
     * @returns {Observable<R>}
     */
    ApiService.prototype.upload = function (url, data) {
        return this.request(url, __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, data, true);
    };
    /**
     * HTTP request template
     * @param url
     * @param method
     * @param body
     * @param upload
     * @returns {Observable<R|T>}
     */
    ApiService.prototype.request = function (url, method, body, upload) {
        var _this = this;
        if (upload === void 0) { upload = false; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        if (!upload) {
            headers.append('Content-Type', 'application/json');
        }
        headers.append('Auth-Token', localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].AUTH_TOKEN_STORAGE_KEY));
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            url: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_URL + "/" + url,
            method: method,
            headers: headers
        });
        if (body) {
            requestOptions.body = body;
        }
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Request */](requestOptions);
        return this._http.request(request).map(function (res) { return res.json(); })
            .catch(function (err) {
            var errText = _this._err.humanize(err);
            _this._log.logError(errText);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(err);
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__log_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__log_log_service__["a" /* LogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__error_error_service__["a" /* ErrorService */]) === "function" && _c || Object])
], ApiService);

var _a, _b, _c;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteService = (function () {
    function SiteService(_api) {
        this._api = _api;
        this.currentSitesSet = [];
        this.feedbackAdded = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    /**
     * Get sites by scraper version
     * @param args
     * @returns {Observable<R>}
     */
    SiteService.prototype.getSitesByScraper = function (args) {
        var reqUrl = 'sites?version=' + args.version +
            '&page=' + args.currPage +
            '&per_page=' + args.perPage +
            (args.dataset && args.dataset !== '0' ? '&dataset_id=' + args.dataset : '') +
            (args.search ? '&q=' + args.search : '') +
            (args.successScraped ? '&successfully_scraped=true' : '') +
            (args.withMissed ? '&with_missed_assets=true' : '') +
            (args.withErrors ? '&with_errors==true' : '');
        if (args.byMissingAsset) {
            reqUrl += '&with_certain_missed_assets=' + args.byMissingAsset.toString();
        }
        return this._api.get(reqUrl);
    };
    /**
     * Get site by id
     * @param id
     * @returns {Observable<R>}
     */
    SiteService.prototype.getSiteById = function (id) {
        return this._api.get("sites/" + id);
    };
    /**
     * Let subscribers know asset feedback is added
     */
    SiteService.prototype.shoutFeedback = function () {
        this.feedbackAdded.next(true);
    };
    /**
     * Get asset fail reasons by type
     * @param assetType
     * @returns {Observable<R>}
     */
    SiteService.prototype.getReasonsByAssetType = function (assetType) {
        return this._api.get("reasons?asset_type=" + assetType);
    };
    /**
     * Post asset fail reason
     * @param siteId
     * @param assetType
     * @param failReason
     * @returns {Observable<R>}
     */
    SiteService.prototype.postAssetFailReason = function (siteId, assetType, failReason) {
        var reqBody = {};
        reqBody[assetType] = failReason;
        return this._api.post("sites/" + siteId + "/feedback", reqBody);
    };
    /**
     * Update site status
     * @param siteId
     * @param status
     * @returns {Observable<R|T>}
     */
    SiteService.prototype.updateSiteStatus = function (siteId, status) {
        return this._api.put("/sites/" + siteId, { status: status });
    };
    return SiteService;
}());
SiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], SiteService);

var _a;
//# sourceMappingURL=site.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_modal__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = (function () {
    function ModalComponent(_modal) {
        this._modal = _modal;
        this.modal = null;
    }
    ModalComponent.prototype.closeModal = function () {
        this._modal.closeModal();
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_modal__["Modal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces_modal__["Modal"]) === "function" && _a || Object)
], ModalComponent.prototype, "modal", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'modal',
        template: __webpack_require__(583)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_modal_modal_service__["a" /* ModalService */]) === "function" && _b || Object])
], ModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_api_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_error_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(_api, _router, _err) {
        var _this = this;
        this._api = _api;
        this._router = _router;
        this._err = _err;
        this.storageKey = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].AUTH_TOKEN_STORAGE_KEY;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this._err.shoutSignOut.subscribe(function (res) {
            _this.signOut();
        });
        if (this.isSignedIn()) {
            this.verifyCurrentUser();
        }
    }
    /**
     * Check if user is signed in
     * @returns {boolean}
     */
    AuthService.prototype.isSignedIn = function () {
        return this.getToken() !== null;
    };
    /**
     * Authorize user with provided credentials
     * @param email
     * @param password
     */
    AuthService.prototype.authorize = function (email, password) {
        var _this = this;
        this._api.post('access', { email: email, password: password }).subscribe(function (res) {
            _this.setToken(res.auth_token);
            _this.currentUser.next(email);
            _this._router.navigate(['']);
        });
    };
    /**
     * Set auth token to local storage
     * @param token
     */
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem(this.storageKey, token);
    };
    /**
     * Get auth token from local storage
     * @returns {string|null}
     */
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(this.storageKey);
    };
    /**
     * Verify current user
     */
    AuthService.prototype.verifyCurrentUser = function () {
        var _this = this;
        this._api.get('access/current_admin').subscribe(function (res) {
            _this.currentUser.next(res.current_admin.email);
        }, function (err) {
            _this.signOut();
        });
    };
    /**
     * Sign out current user
     */
    AuthService.prototype.signOut = function () {
        localStorage.removeItem(this.storageKey);
        this.currentUser.next(null);
        this._router.navigate(['sign-in']);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__error_error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__error_error_service__["a" /* ErrorService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessService = (function () {
    function BusinessService(_api) {
        this._api = _api;
        this.currentScrapUnderReview = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.selectedForScraping = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    /**
     * Get all businesses
     * @returns {Observable<R>}
     */
    BusinessService.prototype.getBusinesses = function (args) {
        var reqUrl = 'firms?dataset_id=' + (args.dataset && args.dataset !== '0' ? args.dataset : '') +
            '&page=' + args.currPage +
            '&per_page=' + args.perPage +
            '&q=' + args.search;
        return this._api.get(reqUrl);
    };
    /**
     * Get last scraper result for business
     * @param id
     * @returns {Observable<R>}
     */
    BusinessService.prototype.getLastBusinessScrap = function (id) {
        return this._api.get("firms/" + id + "/sites/last");
    };
    /**
     * Set currently reviewed business scraping result
     * @param site
     */
    BusinessService.prototype.setCurrentScrapUnderReview = function (site) {
        this.currentScrapUnderReview.next(site);
    };
    /**
     * * Clear currently reviewed business scraping result
     */
    BusinessService.prototype.clearCurrentScrapUnderReview = function () {
        this.currentScrapUnderReview.next(null);
    };
    /**
     * Get businesses selected for scraping
     * @returns {Array<any>}
     */
    BusinessService.prototype.getSelected = function () {
        return this.selectedForScraping.getValue();
    };
    /**
     * Add selected business to selected list
     * @param version
     */
    BusinessService.prototype.addSelected = function (id) {
        this.selectedForScraping.next(this.getSelected().concat(id));
    };
    /**
     * Remove selected scraper from selected list
     * @param version
     */
    BusinessService.prototype.removeSelected = function (id) {
        var selected = this.getSelected();
        var index = selected.indexOf(id);
        if (index > -1) {
            selected.splice(index, 1);
            this.selectedForScraping.next(selected);
        }
    };
    /**
     * Scrap selected items // TODO: temp
     */
    BusinessService.prototype.scrapSelected = function () {
        console.log(this.getSelected());
    };
    /**
     * Clear selected scrapers info
     */
    BusinessService.prototype.clearSelection = function () {
        this.selectedForScraping.next([]);
    };
    return BusinessService;
}());
BusinessService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], BusinessService);

var _a;
//# sourceMappingURL=business.service.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 157,
	"./af.js": 157,
	"./ar": 164,
	"./ar-dz": 158,
	"./ar-dz.js": 158,
	"./ar-kw": 159,
	"./ar-kw.js": 159,
	"./ar-ly": 160,
	"./ar-ly.js": 160,
	"./ar-ma": 161,
	"./ar-ma.js": 161,
	"./ar-sa": 162,
	"./ar-sa.js": 162,
	"./ar-tn": 163,
	"./ar-tn.js": 163,
	"./ar.js": 164,
	"./az": 165,
	"./az.js": 165,
	"./be": 166,
	"./be.js": 166,
	"./bg": 167,
	"./bg.js": 167,
	"./bm": 168,
	"./bm.js": 168,
	"./bn": 169,
	"./bn.js": 169,
	"./bo": 170,
	"./bo.js": 170,
	"./br": 171,
	"./br.js": 171,
	"./bs": 172,
	"./bs.js": 172,
	"./ca": 173,
	"./ca.js": 173,
	"./cs": 174,
	"./cs.js": 174,
	"./cv": 175,
	"./cv.js": 175,
	"./cy": 176,
	"./cy.js": 176,
	"./da": 177,
	"./da.js": 177,
	"./de": 180,
	"./de-at": 178,
	"./de-at.js": 178,
	"./de-ch": 179,
	"./de-ch.js": 179,
	"./de.js": 180,
	"./dv": 181,
	"./dv.js": 181,
	"./el": 182,
	"./el.js": 182,
	"./en-au": 183,
	"./en-au.js": 183,
	"./en-ca": 184,
	"./en-ca.js": 184,
	"./en-gb": 185,
	"./en-gb.js": 185,
	"./en-ie": 186,
	"./en-ie.js": 186,
	"./en-nz": 187,
	"./en-nz.js": 187,
	"./eo": 188,
	"./eo.js": 188,
	"./es": 191,
	"./es-do": 189,
	"./es-do.js": 189,
	"./es-us": 190,
	"./es-us.js": 190,
	"./es.js": 191,
	"./et": 192,
	"./et.js": 192,
	"./eu": 193,
	"./eu.js": 193,
	"./fa": 194,
	"./fa.js": 194,
	"./fi": 195,
	"./fi.js": 195,
	"./fo": 196,
	"./fo.js": 196,
	"./fr": 199,
	"./fr-ca": 197,
	"./fr-ca.js": 197,
	"./fr-ch": 198,
	"./fr-ch.js": 198,
	"./fr.js": 199,
	"./fy": 200,
	"./fy.js": 200,
	"./gd": 201,
	"./gd.js": 201,
	"./gl": 202,
	"./gl.js": 202,
	"./gom-latn": 203,
	"./gom-latn.js": 203,
	"./gu": 204,
	"./gu.js": 204,
	"./he": 205,
	"./he.js": 205,
	"./hi": 206,
	"./hi.js": 206,
	"./hr": 207,
	"./hr.js": 207,
	"./hu": 208,
	"./hu.js": 208,
	"./hy-am": 209,
	"./hy-am.js": 209,
	"./id": 210,
	"./id.js": 210,
	"./is": 211,
	"./is.js": 211,
	"./it": 212,
	"./it.js": 212,
	"./ja": 213,
	"./ja.js": 213,
	"./jv": 214,
	"./jv.js": 214,
	"./ka": 215,
	"./ka.js": 215,
	"./kk": 216,
	"./kk.js": 216,
	"./km": 217,
	"./km.js": 217,
	"./kn": 218,
	"./kn.js": 218,
	"./ko": 219,
	"./ko.js": 219,
	"./ky": 220,
	"./ky.js": 220,
	"./lb": 221,
	"./lb.js": 221,
	"./lo": 222,
	"./lo.js": 222,
	"./lt": 223,
	"./lt.js": 223,
	"./lv": 224,
	"./lv.js": 224,
	"./me": 225,
	"./me.js": 225,
	"./mi": 226,
	"./mi.js": 226,
	"./mk": 227,
	"./mk.js": 227,
	"./ml": 228,
	"./ml.js": 228,
	"./mr": 229,
	"./mr.js": 229,
	"./ms": 231,
	"./ms-my": 230,
	"./ms-my.js": 230,
	"./ms.js": 231,
	"./my": 232,
	"./my.js": 232,
	"./nb": 233,
	"./nb.js": 233,
	"./ne": 234,
	"./ne.js": 234,
	"./nl": 236,
	"./nl-be": 235,
	"./nl-be.js": 235,
	"./nl.js": 236,
	"./nn": 237,
	"./nn.js": 237,
	"./pa-in": 238,
	"./pa-in.js": 238,
	"./pl": 239,
	"./pl.js": 239,
	"./pt": 241,
	"./pt-br": 240,
	"./pt-br.js": 240,
	"./pt.js": 241,
	"./ro": 242,
	"./ro.js": 242,
	"./ru": 243,
	"./ru.js": 243,
	"./sd": 244,
	"./sd.js": 244,
	"./se": 245,
	"./se.js": 245,
	"./si": 246,
	"./si.js": 246,
	"./sk": 247,
	"./sk.js": 247,
	"./sl": 248,
	"./sl.js": 248,
	"./sq": 249,
	"./sq.js": 249,
	"./sr": 251,
	"./sr-cyrl": 250,
	"./sr-cyrl.js": 250,
	"./sr.js": 251,
	"./ss": 252,
	"./ss.js": 252,
	"./sv": 253,
	"./sv.js": 253,
	"./sw": 254,
	"./sw.js": 254,
	"./ta": 255,
	"./ta.js": 255,
	"./te": 256,
	"./te.js": 256,
	"./tet": 257,
	"./tet.js": 257,
	"./th": 258,
	"./th.js": 258,
	"./tl-ph": 259,
	"./tl-ph.js": 259,
	"./tlh": 260,
	"./tlh.js": 260,
	"./tr": 261,
	"./tr.js": 261,
	"./tzl": 262,
	"./tzl.js": 262,
	"./tzm": 264,
	"./tzm-latn": 263,
	"./tzm-latn.js": 263,
	"./tzm.js": 264,
	"./uk": 265,
	"./uk.js": 265,
	"./ur": 266,
	"./ur.js": 266,
	"./uz": 268,
	"./uz-latn": 267,
	"./uz-latn.js": 267,
	"./uz.js": 268,
	"./vi": 269,
	"./vi.js": 269,
	"./x-pseudo": 270,
	"./x-pseudo.js": 270,
	"./yo": 271,
	"./yo.js": 271,
	"./zh-cn": 272,
	"./zh-cn.js": 272,
	"./zh-hk": 273,
	"./zh-hk.js": 273,
	"./zh-tw": 274,
	"./zh-tw.js": 274
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 492;


/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<modal *ngIf=\"modal\" [modal]=\"modal\"></modal>\n<loader-global></loader-global>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<nav navbar></nav>\n<div class=\"admin-flex-wrapper\">\n    <div sidebar class=\"admin-sidebar\"></div>\n    <div class=\"admin-content\">\n        <loader-admin></loader-admin>\n        <div class=\"admin-content-container\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<td [ngClass]=\"{'checked': isChecked}\" class=\"contains-icon-button checked-status\" width=\"80px\">\n    <button class=\"button-icon\" (click)=\"toggleChecked()\">\n        <svg width=\"22px\" height=\"22px\">\n            <use class=\"ic-unchecked\" xlink:href=\"#ic-unchecked\" x=\"0\" y=\"0\" />\n            <use class=\"ic-checked\" xlink:href=\"#ic-checked\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n</td>\n<td width=\"100px\">{{business.id}}</td>\n<td>{{business.hostname}}</td>\n<td>\n    <a [routerLink]=\"['/admin/businesses', business.id]\">{{business.name}}</a>\n</td>\n<td>{{business.dataset ? business.dataset.title : ''}}</td>\n<td>100%</td>\n<td>{{business.designs}}</td>\n<td>{{business.mails}}</td>\n<td>Oct 23 2017</td>\n<td>none</td>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section has-subtitle clearfix\">\n    <h1>Businesses</h1>\n    <div class=\"input-block\">\n        <button class=\"button-accent\" (click)=\"uploadDataset()\">Upload Data Set</button>\n    </div>\n    <div class=\"input-block\">\n        <div select-per-page id=\"items-per-page\" [(value)]=\"itemsPerPage\"></div>\n    </div>\n    <div class=\"input-block\">\n        <div select-data-set id=\"current-data-set\" [(value)]=\"currentDataset\"></div>\n    </div>\n    <div class=\"input-block\">\n        <button [ngClass]=\"{'active': showFilters}\" class=\"button-shadowed button-rounded\" (click)=\"toggleFilters()\">\n            <svg width=\"24px\" height=\"24px\">\n                <use class=\"ic-button\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n                <use class=\"ic-button ic-button-active\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n            </svg>\n        </button>\n    </div>\n    <div class=\"input-block\">\n        <div dynamic-search placeholder=\"Name\" (searchQuery)=\"setSearchQuery($event)\"></div>\n    </div>\n    <div *ngIf=\"showFilters\" class=\"filters-block\">\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <label>Sites Scraped</label>\n                <input class=\"input-shadowed\" type=\"number\" min=\"0\" placeholder=\"Min\">\n                <input class=\"input-shadowed\" type=\"number\" min=\"0\" placeholder=\"Max\">\n            </div>\n            <div class=\"input-block\">\n                <label>Find Version</label>\n                <input class=\"input-shadowed\" type=\"text\" placeholder=\"x.x.x\">\n            </div>\n            <div class=\"input-block\">\n                <div datepicker initDate=\"Mon Oct 27 2017 19:12:36 GMT+0300 (EEST)\"></div>\n            </div>\n            <div class=\"input-block\">\n                <div increment-decrement [(value)]=\"someValue\" placeholder=\"Min\"></div>\n            </div>\n        </div>\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <button class=\"button-shadowed\">Reset</button>\n                <button class=\"button-accent\">Apply</button>\n            </div>\n        </div>\n    </div>\n</section>\n<ng-template #tableLoader>\n    <section class=\"table-loader\">\n        <div tiny-loader></div>\n    </section>\n</ng-template>\n<section *ngIf=\"businesses && businesses.length; else: tableLoader\">\n\n    <br><br>\n    <div>\n        <auto-complete></auto-complete>\n    </div>\n    <br><br>\n\n    <table>\n        <thead>\n        <tr>\n            <th></th>\n            <th>ID</th>\n            <th>URL</th>\n            <th>Name</th>\n            <th>Data Set</th>\n            <th>Success Rate</th>\n            <th>Designs Ready</th>\n            <th>Mails Sent</th>\n            <th>Last Date</th>\n            <th>Response</th>\n        </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let business of businesses\" businesses-table-row [business]=\"business\"></tr>\n        </tbody>\n    </table>\n    <div class=\"table-footer clearfix\">\n        <div class=\"table-footer-services\">\n            <button [disabled]=\"selectedForScraping.length < 1\" class=\"button-icon\" (click)=\"clearSelected()\">\n                <svg width=\"22px\" height=\"22px\">\n                    <use class=\"ic-deselect\" xlink:href=\"#ic-deselect\" x=\"0\" y=\"0\" />\n                </svg>\n            </button>\n            <button [disabled]=\"selectedForScraping.length < 1\" class=\"button-subtle\" (click)=\"scrapSelected()\">Scrap Selected</button>\n        </div>\n        <div pagination *ngIf=\"totalPages && totalPages > 1\" [currPage]=\"currentPage\" [totalPages]=\"totalPages\" (newPage)=\"goToPage($event)\"></div>\n    </div>\n</section>\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<a class=\"clearfix\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#designs-accordion\" [attr.href]=\"'#design-' + design.id\">\n    <span class=\"count\">{{design.id}}</span>\n    <span class=\"meta\">\n    <span class=\"status\">pending</span>\n    <span class=\"date\">Oct 23 2017</span>\n</span>\n</a>\n<div [attr.id]=\"'design-' + design.id\" class=\"design-collapse collapse\" role=\"tabpanel\">\n    <div class=\"bootstrap-accordeon-fix\"></div>\n    <div>Some design</div>\n    <div class=\"design-actions\">\n        <button class=\"button-shadowed button-decline\">Decline</button>\n        <button class=\"button-shadowed button-approve\">Approve</button>\n    </div>\n    <div class=\"bootstrap-accordeon-fix\"></div>\n</div>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"designs && designs.length\">\n    <div id=\"designs-accordion\" class=\"business-designs\" role=\"tablist\">\n        <div class=\"panel\" business-designs-item *ngFor=\"let design of designs\" [design]=\"design\"></div>\n    </div>\n</section>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"site; else: loadingLast\">\n    <section class=\"heading-section-subtitle\">\n        <div class=\"details-item\">\n            <strong>URL</strong>{{site.url | siteUrl}}\n        </div>\n        <div class=\"details-item\">\n            <strong>Data Set</strong>sep-12-2017 (56)\n        </div>\n        <div class=\"details-item\">\n            <strong>Email</strong>info@sofi.com\n        </div>\n        <div class=\"details-item\">\n            <strong>Mailing</strong>Somewhere str. 12, Somewhereswille, CA, 90200\n        </div>\n    </section>\n    <section>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"content-block business-assets\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-4 col-md-3 col-lg-2\">\n                            <strong>Logo</strong>\n                        </div>\n                        <div class=\"col-xs-8 col-md-9 col-lg-10\">\n                            <div *ngIf=\"site.logo\" class=\"asset-item-wrapper asset-image-wrapper\">\n                                <img [attr.src]=\"site.logo.url\" [attr.alt]=\"site.name + ' Logo'\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4 col-md-3 col-lg-2\">\n                            <strong>Images</strong>\n                        </div>\n                        <div class=\"col-xs-8 col-md-9 col-lg-10\">\n                            <div *ngFor=\"let img of site.backgrounds\" class=\"asset-item-wrapper asset-image-wrapper\">\n                                <a target=\"_blank\" [attr.href]=\"img.url\">\n                                    <img src=\"{{img.thumb_large}}\" alt=\"Site Image\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4 col-md-3 col-lg-2\">\n                            <strong>Colors</strong>\n                        </div>\n                        <div class=\"col-xs-8 col-md-9 col-lg-10\">\n                            <div *ngFor=\"let color of site.colors\" class=\"asset-item-wrapper\">\n                                <span class=\"color-ball\" [ngStyle]=\"{'background-color': color}\"></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4 col-md-3 col-lg-2\">\n                            <strong>Fonts</strong>\n                        </div>\n                        <div class=\"col-xs-8 col-md-9 col-lg-10\">\n                            <span *ngIf=\"site.font\">{{site.font}}</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4 col-md-3 col-lg-2\">\n                            <strong>Site Name</strong>\n                        </div>\n                        <div class=\"col-xs-8 col-md-9 col-lg-10\">\n                            <span *ngIf=\"site.name\">{{site.name}}</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4 col-md-3 col-lg-2\">\n                            <strong>Phone</strong>\n                        </div>\n                        <div class=\"col-xs-8 col-md-9 col-lg-10\">\n                            <span *ngIf=\"site.phone\">{{site.phone}}</span>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4 col-md-3 col-lg-2\">\n                            <strong>Slogan</strong>\n                        </div>\n                        <div class=\"col-xs-8 col-md-9 col-lg-10\">\n                            <span *ngIf=\"site.slogan\">{{site.slogan}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<ng-template #loadingLast>\n    <section class=\"table-loader\">\n        <div tiny-loader></div>\n    </section>\n</ng-template>\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<section>\n    <h3>Scrapers & Design</h3>\n    <table>\n        <tr>\n            <td width=\"60\">1</td>\n            <td class=\"align-left\">Site URL added</td>\n            <td width=\"175\">Simon Grey</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n        <tr>\n            <td width=\"60\">2</td>\n            <td class=\"align-left\">Scraper runs</td>\n            <td width=\"175\">0.2.1</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n        <tr>\n            <td width=\"60\">3</td>\n            <td class=\"align-left\">Scraper results reviewed</td>\n            <td width=\"175\">Simon Grey</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n        <tr>\n            <td width=\"60\">4</td>\n            <td class=\"align-left\">Editing details</td>\n            <td width=\"175\">Simon Grey</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n        <tr>\n            <td width=\"60\">5</td>\n            <td class=\"align-left\">Generated designs</td>\n            <td width=\"175\">DE 0.1.1</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n        <tr>\n            <td width=\"60\">6</td>\n            <td class=\"align-left\">Validate designs</td>\n            <td width=\"175\">Simon Grey</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n    </table>\n</section>\n<section>\n    <h3>Sent</h3>\n    <table>\n        <tr>\n            <td width=\"60\">1</td>\n            <td class=\"align-left\">design #1</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n    </table>\n</section>\n<section>\n    <h3>Response</h3>\n    none\n</section>\n<section>\n    <h3>In Queue</h3>\n    <table>\n        <tr>\n            <td width=\"60\">1</td>\n            <td class=\"align-left\">design #2</td>\n            <td width=\"175\">sep 23 2017</td>\n        </tr>\n        <tr>\n            <td width=\"60\">2</td>\n            <td class=\"align-left\">design #3</td>\n            <td width=\"175\">nov 23 2017</td>\n        </tr>\n        <tr>\n            <td width=\"60\">3</td>\n            <td class=\"align-left\">design #4</td>\n            <td width=\"175\">dec 23 2017</td>\n        </tr>\n    </table>\n</section>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section has-subtitle clearfix\">\n    <div class=\"flex-wrapper\">\n        <h1>\n            <a routerLink=\"/admin/businesses\">Businesses</a>\n            <span class=\"chevron-icon\"></span>\n            {{lastScraped?.name}}\n        </h1>\n    </div>\n    <div class=\"flex-wrapper text-center\">\n        <ul class=\"tab-selector\">\n            <li class=\"router-link\">\n                <a [routerLink]=\"['designs']\" routerLinkActive=\"active\">Designs</a>\n            </li>\n            <li class=\"router-link\">\n                <a [routerLink]=\"['details']\" routerLinkActive=\"active\">Details</a>\n            </li>\n            <li class=\"router-link\">\n                <a [routerLink]=\"['interactions']\" routerLinkActive=\"active\">Interactions</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"flex-wrapper text-right\">\n        <a [attr.href]=\"lastScraped ? lastScraped.url : ''\" class=\"button button-shadowed\">View Site</a>\n    </div>\n</section>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section clearfix\">\n    <h1>Timeframe</h1>\n\n    <div class=\"input-block pull-left\">\n        <ul class=\"tab-selector\">\n            <li class=\"active\">Daily</li>\n            <li>Weekly</li>\n            <li>Monthly</li>\n            <li>Yearly</li>\n        </ul>\n        <div daterangepicker></div>\n    </div>\n\n    <div class=\"input-block\">\n        <button class=\"button-subtle pull-right\">Export to PDF</button>\n    </div>\n</section>\n<section>\n    <h3>System Performance</h3>\n    <div class=\"row performance-data\">\n        <div class=\"col-xs-20pct\">\n            <div class=\"content-block\">\n                <h4>Businesses Scraped</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data\">32,456</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-20pct\">\n            <div class=\"content-block\">\n                <h4>Scraper Success</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data\">74.54%</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-20pct\">\n            <div class=\"content-block\">\n                <h4>Initial Outreaches</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data\">23,868</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-20pct\">\n            <div class=\"content-block\">\n                <h4>Second Proposal</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data\">10,465</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-20pct\">\n            <div class=\"content-block\">\n                <h4>Misc</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data\">10,465</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <div class=\"content-block gradient-blue\">\n                <div class=\"row\">\n                    <div class=\"col-xs-5\">\n                        <p class=\"numeric-data\">23,000</p>\n                        <p>Converted Customers</p>\n                    </div>\n                    <div class=\"col-xs-5 col-xs-offset-2\">\n                        <p class=\"numeric-data\">1</p>\n                        <p>up 3% since yesterday</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"content-block gradient-green\">\n                <div class=\"row\">\n                    <div class=\"col-xs-5\">\n                        <p class=\"numeric-data\">$64,234</p>\n                        <p>Revenue</p>\n                    </div>\n                    <div class=\"col-xs-5 col-xs-offset-2\">\n                        <p class=\"numeric-data\">1</p>\n                        <p>up 11% since yesterday</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section>\n    <h3>Responses</h3>\n    <div class=\"row\">\n        <div class=\"col-xs-4\">\n            <div class=\"content-block chart-container\">\n                <h4>Businesses Scraped</h4>\n                <div class=\"content-block-body\">\n                    <canvas id=\"businesses-pie-chart\"></canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-8\">\n            <div class=\"content-block chart-container\">\n                <h4>Email Response Tracked</h4>\n                <div class=\"content-block-body\">\n                    <canvas id=\"response-bar-chart\"></canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section>\n    <h3>Channel Efficiency</h3>\n    <div class=\"row\">\n        <div class=\"col-xs-4\">\n            <div class=\"content-block efficiency\">\n                <h4>Email Performance</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data\">10.3%</p>\n                    <p>34,344 emails sent</p>\n                    <p>3,344 leads generated</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-4\">\n            <div class=\"content-block efficiency\">\n                <h4>DM Performance</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data accent-blue\">12.3%</p>\n                    <p>34,344 DM sent</p>\n                    <p>3,344 leads generated</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-4\">\n            <div class=\"content-block efficiency\">\n                <h4>Social Performance</h4>\n                <div class=\"content-block-body\">\n                    <p class=\"numeric-data\">10.3%</p>\n                    <p>34,344 emails sent</p>\n                    <p>3,344 leads generated</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<p>\n  mailing works!\n</p>\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-logo\">\n    <a href=\"#\">\n        <img src=\"/assets/images/navbar-logo.png\" alt=\"WRAP Project Logo\">\n    </a>\n</div>\n<div class=\"navbar-content\">\n    <svg width=\"24px\" height=\"24px\" class=\"navbar-icon\">\n        <use class=\"ic-search\" xlink:href=\"#ic-search\" x=\"0\" y=\"0\" />\n    </svg>\n    <input type=\"text\" class=\"global-search\" placeholder=\"Global Search\">\n    <p class=\"user-status pull-right\">\n        Welcome {{currentUser}}\n        <button class=\"button-icon\" (click)=\"signOut()\">\n            <svg width=\"24px\" height=\"24px\" class=\"navbar-icon\">\n                <use class=\"ic-logout\" xlink:href=\"#ic-logout\" x=\"0\" y=\"0\" />\n            </svg>\n        </button>\n    </p>\n</div>\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<td>1</td>\n<td>http://www.somesite.com</td>\n<td>sep-27-2017 (89)</td>\n<td>1</td>\n<td>in progress</td>\n<td>\n    <button class=\"button-icon\">x</button>\n    <button class=\"button-icon\">y</button>\n</td>\n<td>\n    <button class=\"button-icon\">x</button>\n</td>\n"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section has-subtitle clearfix\">\n    <h1>Queue</h1>\n    <ul class=\"tab-selector\">\n        <li class=\"active\">Scraping</li>\n        <li>Validation</li>\n        <li>Sending</li>\n        <li>Error list</li>\n    </ul>\n    <div class=\"layout-stabiliser\">*****</div>\n</section>\n<section class=\"heading-section-subtitle clearfix\">\n    <div dynamic-search placeholder=\"URL\" (searchQuery)=\"setSearchQuery($event)\"></div>\n    <div class=\"input-block\">\n        <button class=\"button-accent\">Start</button>\n    </div>\n    <div class=\"input-block\">\n        <button class=\"button-shadowed\">Refresh</button>\n    </div>\n    <div class=\"input-block\">\n        <div select-per-page id=\"items-per-page\" [(value)]=\"itemsPerPage\"></div>\n    </div>\n    <div class=\"input-block\">\n        <button [ngClass]=\"{'active': showFilters}\" class=\"button-shadowed button-rounded\" (click)=\"toggleFilters()\">\n            <svg width=\"24px\" height=\"24px\">\n                <use class=\"ic-button\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n                <use class=\"ic-button ic-button-active\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n            </svg>\n        </button>\n    </div>\n    <div *ngIf=\"showFilters\" class=\"filters-block\">\n        queue filters\n    </div>\n</section>\n<ng-template #tableLoader>\n    <section class=\"table-loader\">\n        <div tiny-loader></div>\n    </section>\n</ng-template>\n<section *ngIf=\"emails && emails.length; else: tableLoader\">\n    <table>\n        <thead>\n            <tr>\n                <th class=\"text-center\">Number</th>\n                <th>URL</th>\n                <th>Data set</th>\n                <th>Attempt</th>\n                <th>Start time</th>\n                <th></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr queue-table-row *ngFor=\"let email of emails\"></tr>\n        </tbody>\n    </table>\n    <div class=\"table-footer clearfix\">\n        <div pagination *ngIf=\"totalPages && totalPages > 1\" [currPage]=\"currentPage\" [totalPages]=\"totalPages\" (newPage)=\"goToPage($event)\"></div>\n    </div>\n</section>\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section clearfix\">\n    <h1>\n        <a routerLink=\"/admin/scrapers\">Scrapers</a>\n        <span class=\"chevron-icon\"></span>\n        {{scrapVersionLeft}} & {{scrapVersionRight}} Comparison\n    </h1>\n    <div class=\"input-block\">\n        <div select-data-set id=\"current-data-set\" [(value)]=\"currentDataset\"></div>\n    </div>\n</section>\n<section>\n    <div class=\"row\">\n        <div class=\"col-xs-6\">\n            <div class=\"version-selector\">\n                <div select-scraper-version id=\"scraper-version-left\" elemWidth=\"125px\" [(value)]=\"scrapVersionLeft\"></div>\n            </div>\n            <div scraper-compared class=\"content-block\" [scraperVersion]=\"scrapVersionLeft\" [currDataset]=\"currentDataset\" slug=\"scrap-compared-left\"></div>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"version-selector\">\n                <div select-scraper-version id=\"scraper-version-right\" elemWidth=\"125px\" [(value)]=\"scrapVersionRight\"></div>\n            </div>\n            <div scraper-compared class=\"content-block\" [scraperVersion]=\"scrapVersionRight\" [currDataset]=\"currentDataset\" slug=\"scrap-compared-right\"></div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"scraper\">\n    <h3 class=\"clearfix\">\n        <span class=\"property color-light-blue\">Success Rate</span>\n        <span class=\"value color-blue\">{{scraper.success_rate | percentRate}}</span>\n    </h3>\n    <p class=\"subtitle\">7,328 Sites</p>\n    <ul class=\"stat-indicators-list\">\n        <li *ngFor=\"let stat of scraper.statistics\" class=\"clearfix\">\n            <span class=\"property\">{{stat.title}}</span>\n            <span class=\"value\">{{stat.success_rate | percentRate}}</span>\n        </li>\n    </ul>\n    <h3 class=\"clearfix offset-top\">\n        <span class=\"property color-orange\">Fail Rate</span>\n        <span class=\"value color-rose\">{{scraper.fail_rate | percentRate}}</span>\n    </h3>\n    <p class=\"subtitle\">7,328 Sites</p>\n    <ul class=\"stat-indicators-list collapsible-items\">\n        <li fail-list-item *ngFor=\"let stat of scraper.statistics\" [failItem]=\"stat\" [scraperVersion]=\"scraper.version\" slug=\"{{slug}}\"></li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<a class=\"clearfix collapsed\" href=\"#{{failItem.kind}}-{{slug}}\" data-toggle=\"collapse\" aria-expanded=\"false\">\n    <span class=\"chevron-icon\"></span>\n    <span class=\"property\">{{failItem.title}}</span>\n    <span class=\"value\">{{failItem.fail_rate | percentRate}}</span>\n</a>\n<ul id=\"{{failItem.kind}}-{{slug}}\" class=\"collapsed-items collapse\">\n    <li *ngIf=\"loadingReasons\" class=\"collapsed-items-loading\">\n        <div tiny-loader></div>\n    </li>\n    <li *ngIf=\"reasonsFetchedUp && failReasons.length === 0\" class=\"clearfix\">\n        <span class=\"property\">No info available</span>\n    </li>\n    <li *ngFor=\"let reason of failReasons\" class=\"clearfix\">\n        <span class=\"property\">{{reason.text}}</span>\n        <span class=\"value\">{{reason.percentage | percentRate}} (98)</span>\n    </li>\n</ul>\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"site\">\n    <nav>\n        <div class=\"navbar-logo clearfix\">\n            <a class=\"back-button\" [routerLink]=\"['/admin/scrapers/targets', site.version]\">\n                <span class=\"chevron-icon\"></span>\n            </a>\n            <span class=\"site-name\">{{site.name}}</span>\n        </div>\n        <div class=\"navbar-content\">\n            <button [routerLink]=\"['/site-preview', prevSite ? prevSite.id : null]\" [disabled]=\"!prevSite\" class=\"button-shadowed prev\">Previous</button>\n            <ul class=\"tab-selector\">\n                <li class=\"router-link\">\n                    <a href=\"#\">Screenshot</a>\n                </li>\n                <li class=\"active\">{{site.url | siteUrl}}</li>\n            </ul>\n            <button [routerLink]=\"['/site-preview', nextSite ? nextSite.id : null]\" [disabled]=\"!nextSite\" class=\"button-shadowed next\">Next</button>\n        </div>\n    </nav>\n    <div class=\"admin-flex-wrapper\">\n        <div class=\"admin-sidebar\">\n            <ul class=\"admin-sidebar-blocks\">\n                <li>\n                    <h4>Scraping Details</h4>\n                    <p class=\"meta\">{{site.created_at | dateTime}}</p>\n                    <p class=\"meta\">{{site.success_rate | percentRate}} Success Rate</p>\n                </li>\n                <li>\n                    <h4>Logo</h4>\n                    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.logo\" assetType=\"logo\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.logo : null\"></div>\n                </li>\n                <li>\n                    <h4>Images</h4>\n                    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.backgrounds\" assetType=\"backgrounds\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.backgrounds : null\" [enlarged]=\"true\"></div>\n                </li>\n                <li>\n                    <h4>Colors</h4>\n                    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.colors\" assetType=\"colors\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.colors : null\"></div>\n                </li>\n                <li>\n                    <h4>Fonts</h4>\n                    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.font\" assetType=\"font\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.font : null\"></div>\n                </li>\n                <li>\n                    <h4>Site name</h4>\n                    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.name\" assetType=\"name\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.name : null\"></div>\n                </li>\n                <li>\n                    <h4>Slogan</h4>\n                    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.slogan\" assetType=\"slogan\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.slogan : null\"></div>\n                </li>\n                <li>\n                    <h4>Phone</h4>\n                    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.phone\" assetType=\"phone\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.phone : null\"></div>\n                </li>\n                <li>\n                    <h4>Status</h4>\n                    <div class=\"site-status\" [ngClass]=\"{'current-status': site.status === 'available'}\">\n                        <button class=\"button-icon\" (click)=\"setStatus('available')\" [disabled]=\"site.status === 'available'\">\n                            <svg width=\"36px\" height=\"36px\">\n                                <use class=\"ic-available-unchecked\" xlink:href=\"#ic-checked\" x=\"0\" y=\"0\" />\n                                <use class=\"ic-available\" xlink:href=\"#ic-checked\" x=\"0\" y=\"0\" />\n                            </svg>\n                        </button>\n                        <span>Available</span>\n                    </div>\n                    <div class=\"site-status\" [ngClass]=\"{'current-status': site.status === 'unavailable'}\">\n                        <button class=\"button-icon\" (click)=\"setStatus('unavailable')\" [disabled]=\"site.status === 'unavailable'\">\n                            <svg width=\"36px\" height=\"36px\">\n                                <use class=\"ic-unavailable-unchecked\" xlink:href=\"#ic-deselect\" x=\"0\" y=\"0\" />\n                                <use class=\"ic-unavailable\" xlink:href=\"#ic-deselect\" x=\"0\" y=\"0\" />\n                            </svg>\n                        </button>\n                        <span>Unavailable</span>\n                    </div>\n                    <div class=\"site-status\" [ngClass]=\"{'current-status': site.status === 'scraper_crashed'}\">\n                        <button class=\"button-icon\" (click)=\"setStatus('scraper_crashed')\" [disabled]=\"site.status === 'scraper_crashed'\">\n                            <svg width=\"36px\" height=\"36px\">\n                                <use class=\"ic-warning-unchecked\" xlink:href=\"#ic-warning\" x=\"0\" y=\"0\" />\n                                <use class=\"ic-warning-error\" xlink:href=\"#ic-warning\" x=\"0\" y=\"0\" />\n                            </svg>\n                        </button>\n                        <span>Scraper Crashed</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"admin-content\">\n            <div class=\"admin-content-container\">\n                <iframe [src]=\"site.url | safeUrl\" frameborder=\"0\"></iframe>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"clearfix\">\n    <span class=\"property color-orange\">Fail Rate</span>\n    <span class=\"value color-rose\">{{scraper.fail_rate | percentRate}}</span>\n</h3>\n<p class=\"subtitle\">1,328 Sites</p>\n<ul class=\"stat-indicators-list collapsible-items\">\n    <li fail-list-item *ngFor=\"let statItem of scraper.statistics\" [failItem]=\"statItem\" [scraperVersion]=\"scraper.version\" slug=\"scraper-fail-rate\"></li>\n</ul>\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section has-subtitle clearfix\">\n    <div class=\"flex-wrapper\">\n        <h1>\n            <a routerLink=\"/admin/scrapers\">Scrapers</a>\n            <span class=\"chevron-icon\"></span>\n            {{scraper?.version}}\n        </h1>\n    </div>\n    <div class=\"flex-wrapper text-center\">\n        <ul class=\"tab-selector\">\n            <li class=\"active\">Statistic</li>\n            <li class=\"router-link\">\n                <a routerLink=\"/admin/scrapers/targets/{{scraper?.version}}\">Targets</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"flex-wrapper text-right\">\n        <div select-data-set id=\"current-data-set\" [(value)]=\"currentDataset\"></div>\n    </div>\n</section>\n<div *ngIf=\"scraper\">\n    <section class=\"heading-section-subtitle\">\n        <h2>Total Sites Scraped: {{scraper.count}}</h2>\n    </section>\n    <section>\n        <div class=\"row\">\n            <div class=\"col-xs-6\">\n                <div scraper-success-rate class=\"content-block\" [scraper]=\"scraper\"></div>\n            </div>\n            <div class=\"col-xs-6\">\n                <div scraper-fail-rate class=\"content-block\" [scraper]=\"scraper\"></div>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"clearfix\">\n    <span class=\"property color-light-blue\">Success Rate</span>\n    <span class=\"value color-blue\">{{scraper.success_rate | percentRate}}</span>\n</h3>\n<p class=\"subtitle\">7,328 Sites</p>\n<ul class=\"stat-indicators-list\">\n    <li *ngFor=\"let stat of scraper.statistics\" class=\"clearfix\">\n        <span class=\"property\">{{stat.title}}</span>\n        <span class=\"value\">{{stat.success_rate | percentRate}}</span>\n    </li>\n</ul>\n"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<td class=\"text-center\">\n    <span class=\"asset-item-wrapper\">{{site.id}}</span>\n</td>\n<td width=\"10%\">\n    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.logo\" assetType=\"logo\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.logo : null\"></div>\n</td>\n<td>\n    <span class=\"asset-item-wrapper\">\n        <a [routerLink]=\"['/site-preview', site.id]\">{{site.url | siteUrl}}</a>\n    </span>\n    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.name\" assetType=\"name\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.name : null\"></div>\n    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.slogan\" assetType=\"slogan\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.slogan : null\"></div>\n</td>\n<td>\n    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.phone\" assetType=\"phone\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.phone : null\"></div>\n</td>\n<td width=\"15%\">\n    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.colors\" assetType=\"colors\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.colors : null\"></div>\n</td>\n<td>\n    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.font\" assetType=\"font\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.font : null\"></div>\n</td>\n<td width=\"15%\">\n    <div asset-wrapper [siteId]=\"site.id\" [asset]=\"site.backgrounds\" assetType=\"backgrounds\" [assetFeedback]=\"site.assets_feedback ? site.assets_feedback.backgrounds : null\"></div>\n</td>\n<td>\n    <span *ngIf=\"site.status === 'available'\" class=\"asset-item-wrapper color-green\">available</span>\n    <span *ngIf=\"site.status === 'unavailable'\" class=\"asset-item-wrapper color-orange\">unavailable</span>\n    <span *ngIf=\"site.status === 'scraper_crashed'\" class=\"asset-item-wrapper color-rose\">scraper crashed</span>\n</td>\n<td class=\"text-center\">\n    <span class=\"asset-item-wrapper\">{{site.success_rate | percentRate}}</span>\n</td>\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section has-subtitle clearfix\">\n    <div class=\"flex-wrapper\">\n        <h1>\n            <a routerLink=\"/admin/scrapers\">Scrapers</a>\n            <span class=\"chevron-icon\"></span>\n            {{scraperVersion}}\n        </h1>\n    </div>\n    <div class=\"flex-wrapper text-center\">\n        <ul class=\"tab-selector\">\n            <li class=\"router-link\">\n                <a routerLink=\"/admin/scrapers/statistic/{{scraperVersion}}\">Statistic</a></li>\n            <li class=\"active\">Targets</li>\n        </ul>\n    </div>\n    <div class=\"flex-wrapper text-right\">\n        <div select-data-set id=\"current-data-set\" [(value)]=\"currentDataset\"></div>\n    </div>\n</section>\n<section class=\"heading-section-subtitle clearfix\">\n    <h2>Total Sites Scraped: {{totalSites}}</h2>\n    <div class=\"input-block\">\n        <div select-per-page id=\"items-per-page\" [(value)]=\"itemsPerPage\"></div>\n    </div>\n    <div class=\"input-block\">\n        <div dynamic-search (searchQuery)=\"setSearchQuery($event)\"></div>\n    </div>\n    <div class=\"input-block\">\n        <button [ngClass]=\"{'active': showFilters}\" class=\"button-shadowed button-rounded\" (click)=\"toggleFilters()\">\n            <svg width=\"24px\" height=\"24px\">\n                <use class=\"ic-button\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n                <use class=\"ic-button ic-button-active\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n            </svg>\n        </button>\n    </div>\n    <div class=\"filters-block expandable\" [ngClass]=\"{'expanded': showFilters}\">\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <label>successfully scraped</label>\n                <button switch-toggle [(state)]=\"successfullyScraped\"></button>\n            </div>\n            <div class=\"input-block\">\n                <label>with missed assets</label>\n                <button switch-toggle [(state)]=\"withMissedAssets\"></button>\n            </div>\n            <div class=\"input-block\">\n                <label>with errors</label>\n                <button switch-toggle [(state)]=\"withErrors\"></button>\n            </div>\n        </div>\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <label *ngIf=\"!missingAssetPickers?.length\">add filter by missing asset</label>\n                <button class=\"button-shadowed button-rounded\" (click)=\"addMissingAssetFilter()\">\n                    <svg width=\"24px\" height=\"24px\">\n                        <use class=\"ic-add\" xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n                    </svg>\n                </button>\n            </div>\n            <div *ngFor=\"let picker of missingAssetPickers\" class=\"input-block\">\n                <div select-missing-asset id=\"missing-asset-{{picker.id}}\" elemWidth=\"200px\" (valueChange)=\"setMissingAssetItem(picker.id, $event)\" (remove)=\"removeMissingAssetFilter(picker.id)\"></div>\n            </div>\n        </div>\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <label *ngIf=\"!assetFailReasonPickers?.length\">add filter by asset fail reason</label>\n                <button class=\"button-shadowed button-rounded\" (click)=\"addAssetFailReasonFilter()\">\n                    <svg width=\"24px\" height=\"24px\">\n                        <use class=\"ic-add\" xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n                    </svg>\n                </button>\n            </div>\n            <div *ngFor=\"let picker of assetFailReasonPickers\" class=\"input-block\">\n                <div asset-fail-reason-filter [index]=\"picker.id\" (value)=\"setFailReasonItem(picker.id, $event)\" (remove)=\"removeAssetFailReasonFilter(picker.id)\"></div>\n            </div>\n        </div>\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <button class=\"button-shadowed\" (click)=\"resetFilters()\">Reset</button>\n                <button class=\"button-accent\" (click)=\"applyFilters()\">Apply</button>\n            </div>\n        </div>\n    </div>\n</section>\n<ng-template #tableLoader>\n    <section class=\"table-loader\">\n        <div tiny-loader></div>\n    </section>\n</ng-template>\n<section *ngIf=\"sites && sites.length; else: tableLoader\">\n    <table>\n        <thead>\n            <tr>\n                <th class=\"text-center\">ID</th>\n                <th>Logo</th>\n                <th>Site (URL/Title/Slogan)</th>\n                <th>Phone</th>\n                <th>Colors</th>\n                <th>Fonts</th>\n                <th>Images</th>\n                <th>Status</th>\n                <th class=\"text-center\">Success Rate</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr scraper-targets-table-row *ngFor=\"let site of sites\" [site]=\"site\"></tr>\n        </tbody>\n    </table>\n    <div class=\"table-footer clearfix\">\n        <div pagination *ngIf=\"totalPages && totalPages > 1\" [currPage]=\"currentPage\" [totalPages]=\"totalPages\" (newPage)=\"goToPage($event)\"></div>\n    </div>\n</section>\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<td [ngClass]=\"{'checked': isChecked}\" class=\"contains-icon-button checked-status\" width=\"80px\">\n    <button class=\"button-icon\" (click)=\"toggleChecked()\">\n        <svg width=\"22px\" height=\"22px\">\n            <use class=\"ic-unchecked\" xlink:href=\"#ic-unchecked\" x=\"0\" y=\"0\" />\n            <use class=\"ic-checked\" xlink:href=\"#ic-checked\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n</td>\n<td><a routerLink=\"statistic/{{scraper.version}}\">{{scraper.version}}</a></td>\n<td width=\"150\">{{scraper.count}}</td>\n<td width=\"150\">{{scraper.success_rate | percentRate}}</td>\n"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<section class=\"heading-section clearfix\">\n    <h1>Scrapers</h1>\n    <div class=\"input-block\">\n        <div select-data-set id=\"current-data-set\" [(value)]=\"currentDataset\"></div>\n    </div>\n    <div class=\"input-block\">\n        <button [ngClass]=\"{'active': showFilters}\" class=\"button-shadowed button-rounded\" (click)=\"toggleFilters()\">\n            <svg width=\"24px\" height=\"24px\">\n                <use class=\"ic-button\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n                <use class=\"ic-button ic-button-active\" xlink:href=\"#ic-filters\" x=\"0\" y=\"0\" />\n            </svg>\n        </button>\n    </div>\n    <div *ngIf=\"showFilters\" class=\"filters-block\">\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <label>Success Rate</label>\n                <input class=\"input-shadowed\" type=\"number\" min=\"0\" placeholder=\"Min\">\n                <input class=\"input-shadowed\" type=\"number\" min=\"0\" placeholder=\"Max\">\n            </div>\n            <div class=\"input-block\">\n                <label>Sites Scraped</label>\n                <input class=\"input-shadowed\" type=\"number\" min=\"0\" placeholder=\"Min\">\n                <input class=\"input-shadowed\" type=\"number\" min=\"0\" placeholder=\"Max\">\n            </div>\n            <div class=\"input-block\">\n                <label>Find Version</label>\n                <input class=\"input-shadowed\" type=\"text\" placeholder=\"x.x.x\">\n            </div>\n        </div>\n        <div class=\"filters-block-row clearfix\">\n            <div class=\"input-block\">\n                <button class=\"button-shadowed\">Reset</button>\n                <button class=\"button-accent\">Apply</button>\n            </div>\n        </div>\n    </div>\n</section>\n<ng-template #tableLoader>\n    <section class=\"table-loader\">\n        <div tiny-loader></div>\n    </section>\n</ng-template>\n<section *ngIf=\"scrapers && scrapers.length; else: tableLoader\">\n    <table>\n        <thead>\n            <tr>\n                <th></th>\n                <th>\n                    <span toggle-sorting [(currSorting)]=\"sorting\" sortingSlug=\"version\">Scraper</span>\n                </th>\n                <th>\n                    <span toggle-sorting [(currSorting)]=\"sorting\" sortingSlug=\"sites_count\">Sites Scraped</span>\n                </th>\n                <th>\n                    <span toggle-sorting [(currSorting)]=\"sorting\" sortingSlug=\"success_rate\">Success rate</span>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr scrapers-table-row *ngFor=\"let scraper of scrapers\" [scraper]=\"scraper\"></tr>\n        </tbody>\n    </table>\n    <div class=\"table-footer clearfix\">\n        <div class=\"table-footer-services\">\n            <button [disabled]=\"selectedForComparison.length === 0\" class=\"button-icon\" (click)=\"clearSelected()\">\n                <svg width=\"22px\" height=\"22px\">\n                    <use class=\"ic-deselect\" xlink:href=\"#ic-deselect\" x=\"0\" y=\"0\" />\n                </svg>\n            </button>\n            <button [disabled]=\"selectedForComparison.length !== 2\" [routerLink]=\"['compare', selectedForComparison[0], selectedForComparison[1]]\" class=\"button-subtle\">Compare Selected</button>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"{{menuItem.url}}\" routerLinkActive=\"active\">\n    <svg width=\"24px\" height=\"24px\">\n        <use class=\"ic\" [attr.xlink:href]=\"menuItem.icon\" x=\"0\" y=\"0\" xlink:href=\"\"/>\n        <use class=\"ic ic-active\" [attr.xlink:href]=\"menuItem.icon\" x=\"0\" y=\"0\" xlink:href=\"\"/>\n    </svg>\n    <span>{{menuItem.title}}</span>\n</a>\n"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"menuItems.length\" class=\"admin-sidebar-nav\">\n    <li sidebar-menu-item *ngFor=\"let item of menuItems\" [menuItem]=\"item\"></li>\n</ul>\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<button class=\"button-icon remove-filter\" (click)=\"removeThisPicker()\">\n    <svg width=\"24px\" height=\"24px\" class=\"navbar-icon\">\n        <use class=\"ic-cross\" xlink:href=\"#ic-cross\" x=\"0\" y=\"0\" />\n    </svg>\n</button>\n<div select-failed-asset [id]=\"'failed-asset-' + index\" elemWidth=\"200px\" [(value)]=\"assetType\"></div>\n<div select-failed-asset-reason [id]=\"'failed-asset-reason-' + index\" [assetType]=\"assetType\" elemWidth=\"150px\" [(value)]=\"assetFailReason\"></div>\n"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<svg width=\"12px\" height=\"12px\">\n    <use class=\"ic-warning-error\" xlink:href=\"#ic-warning\" x=\"0\" y=\"0\" />\n</svg>\n<span>\n    <ng-content></ng-content>\n</span>\n"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<button class=\"button-icon asset-report-trigger\" (click)=\"postReason()\">\n    <svg width=\"12px\" height=\"12px\">\n        <use class=\"ic-checked\" xlink:href=\"#ic-checked\" x=\"0\" y=\"0\" />\n    </svg>\n</button>\n<div *ngIf=\"asset && assetType === 'logo'\">\n    <span class=\"asset-item-wrapper asset-image-wrapper\">\n        <img src=\"{{asset.url}}\" alt=\"Logo\">\n    </span>\n</div>\n<div *ngIf=\"asset && asset.length && assetType === 'colors'\">\n    <span *ngFor=\"let color of asset\" class=\"asset-item-wrapper asset-image-wrapper\">\n        <span class=\"color-ball\" [ngStyle]=\"{'background-color': color}\"></span>\n    </span>\n</div>\n<div *ngIf=\"asset && asset.length && assetType === 'backgrounds'\">\n    <span *ngFor=\"let bg of asset\" class=\"asset-item-wrapper asset-image-wrapper asset-thumbnail-wrapper\" [ngClass]=\"{'full-width': enlarged}\">\n        <a target=\"_blank\" href=\"{{bg.url}}\">\n            <img src=\"{{enlarged ? bg.thumb_large : bg.thumb_small}}\" alt=\"Background\">\n        </a>\n    </span>\n</div>\n<div *ngIf=\"asset && assetType === 'phone'\">\n    <span class=\"asset-item-wrapper asset-string-nowrap\">{{asset}}</span>\n</div>\n<div *ngIf=\"asset && (assetType === 'font' || assetType === 'name' || assetType === 'slogan')\">\n    <span class=\"asset-item-wrapper\">{{asset}}</span>\n</div>\n\n<div asset-feedback *ngIf=\"(!asset || asset && asset.length === 0) && (!assetFeedback || assetFeedback === 'no reason')\">no {{assetType}}</div>\n\n<div asset-feedback *ngIf=\"assetFeedback && assetFeedback !== 'no reason'\" >{{assetFeedback}}</div>\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<ng2-completer [(ngModel)]=\"captain\"\n               [datasource]=\"captains\"\n               [minSearchLength]=\"0\"\n               [openOnFocus]=\"true\"\n               [placeholder]=\"placeholder\"\n               (opened)=\"setOpened($event)\">\n</ng2-completer>\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"{'checked': isChecked}\" class=\"button-icon checkbox\" (click)=\"toggleChecked()\">\n    <svg width=\"12px\" height=\"12px\">\n        <use class=\"ic-unchecked\" xlink:href=\"#ic-unchecked\" x=\"0\" y=\"0\" />\n        <use class=\"ic-checked\" xlink:href=\"#ic-checked\" x=\"0\" y=\"0\" />\n    </svg>\n</button>\n<ng-content></ng-content>\n"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button class=\"button-icon remove-filter\" (click)=\"removeThisPicker()\">\n        <svg width=\"24px\" height=\"24px\" class=\"navbar-icon\">\n            <use class=\"ic-cross\" xlink:href=\"#ic-cross\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"options && options.length; else: loadingOptions\">\n    <button *ngIf=\"addOptions && !showInput\" class=\"button-icon\" (click)=\"toggleInput()\">\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <button *ngIf=\"addOptions && showInput\" class=\"button-icon\" disabled>\n        <svg width=\"16px\" height=\"16px\">\n            <use xlink:href=\"#ic-add\" x=\"0\" y=\"0\" />\n        </svg>\n    </button>\n    <div  class=\"select\" tabIndex=\"1\" #select>\n        <input *ngIf=\"showInput\" type=\"text\" #input (keydown)=\"postOption($event)\" (blur)=\"hideInput()\">\n        <ng-container *ngFor=\"let option of options; let i = index\">\n            <input [attr.id]=\"id + '-' + i\" [attr.name]=\"'option-' + id\" type=\"radio\" [value]=\"option.value\" (change)=\"outputValue(option.value)\" [checked]=\"option.value === value\">\n            <label [attr.for]=\"id + '-' + i\">{{option.label}}</label>\n        </ng-container>\n    </div>\n</div>\n<ng-template #loadingOptions>\n    <div class=\"loading-options\">\n        <div tiny-loader></div>\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<input ngx-mydatepicker type=\"text\" placeholder=\"Select a date\" [(ngModel)]=\"initDate\" [options]=\"options\" #dp=\"ngx-mydatepicker\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\" readonly />\n<svg class=\"calendar-icon\" width=\"20px\" height=\"20px\">\n    <use xlink:href=\"#ic-calendar\" x=\"0\" y=\"0\" />\n</svg>\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<my-date-range-picker [(ngModel)]=\"dateRange\" [options]=\"pickerOptions\" (dateRangeChanged)=\"dateRangeChanged($event)\" required></my-date-range-picker>\n"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<svg class=\"search-icon\" width=\"20px\" height=\"20px\">\n    <use class=\"ic-search\" xlink:href=\"#ic-search\" x=\"0\" y=\"0\" />\n</svg>\n<input [formControl]=\"searchQueryControl\" type=\"text\" class=\"input-shadowed\" [attr.placeholder]=\"placeholder\">\n"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<button class=\"button-icon button-minus\" (click)=\"decrement()\">\n    <svg width=\"20px\" height=\"20px\">\n        <use class=\"ic-minus\" xlink:href=\"#ic-minus\" x=\"0\" y=\"0\" />\n    </svg>\n</button>\n<input inputNumber [(ngModel)]=\"value\" type=\"number\" class=\"input-shadowed\" min=\"0\" step=\"1\" [attr.placeholder]=\"placeholder\">\n<button class=\"button-icon button-plus\" (click)=\"increment()\">\n    <svg width=\"20px\" height=\"20px\">\n        <use class=\"ic-plus\" xlink:href=\"#ic-plus\" x=\"0\" y=\"0\" />\n    </svg>\n</button>\n"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoader\" class=\"loader-overlay loader-admin\">\n    <svg width=\"150px\" height=\"150px\">\n        <use class=\"loader-ball\" xlink:href=\"#loader-animation\" x=\"0\" y=\"0\" />\n    </svg>\n</div>\n"

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoader\" class=\"loader-overlay loader-global\">\n    <svg width=\"150px\" height=\"150px\">\n        <use class=\"loader-ball\" xlink:href=\"#loader-animation\" x=\"0\" y=\"0\" />\n    </svg>\n</div>\n"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<h3>Error</h3>\n<p>{{modal.message}}</p>\n<button class=\"button-shadowed modal-submit pull-right\" (click)=\"closeModal()\">OK</button>\n"

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<h3>Reason</h3>\n<div class=\"modal-select-wrapper\">\n    <div select-add-asset-fail-reason id=\"asset-fail-reason\" [addOptions]=\"true\" [assetType]=\"modal.assetType\" [feedback]=\"modal.feedbackText\" [(value)]=\"failReason\" elemWidth=\"100%\"></div>\n</div>\n<button class=\"button-shadowed modal-cancel pull-left\" (click)=\"closeModal()\">Cancel</button>\n<button class=\"button-shadowed modal-submit pull-right\" (click)=\"postReason()\" [disabled]=\"failReason && failReason === modal.feedbackText\">Submit</button>\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<h3>Success</h3>\n<p>{{modal.message}}</p>\n<button class=\"button-shadowed modal-submit pull-right\" (click)=\"closeModal()\">OK</button>\n"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<h3>Upload Data Set</h3>\n<div *ngIf=\"checkCanReadFiles(); else: cannotRead\">\n    <div class=\"modal-dropzone\" [ngClass]=\"{'drag-over': draggingOver}\">\n        <label for=\"upload-dataset\">\n            <span *ngIf=\"!uploadingFile; else: loader\">{{fileFeedback || 'Drop .csv file or click to pick one'}}</span>\n            <ng-template #loader>\n                <span tiny-loader></span>\n            </ng-template>\n        </label>\n        <input *ngIf=\"!uploadingFile\" id=\"upload-dataset\" type=\"file\" (change)=\"fileAdded($event)\" (dragenter)=\"showDragOver()\" (dragleave)=\"hideDragOver()\" (drop)=\"hideDragOver()\" #datasetFile>\n    </div>\n</div>\n<ng-template #cannotRead>\n    <p>Please, update your browser to proceed with this action</p>\n</ng-template>\n<button class=\"button-shadowed modal-cancel pull-left\" (click)=\"closeModal()\">Cancel</button>\n<button *ngIf=\"checkCanReadFiles()\" class=\"button-shadowed modal-submit pull-right\" (click)=\"submitFile()\" [disabled]=\"!file || uploadingFile\">Submit</button>\n"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"modal\" class=\"modal-overlay\">\n\n    <div modal-error *ngIf=\"modal.type === 'error'\" [modal]=\"modal\"></div>\n\n    <div modal-success *ngIf=\"modal.type === 'success'\" [modal]=\"modal\"></div>\n\n    <div modal-fail-reason *ngIf=\"modal.type === 'asset-fail-reason'\" [modal]=\"modal\"></div>\n\n    <div modal-upload-dataset *ngIf=\"modal.type === 'upload-dataset'\" [modal]=\"modal\"></div>\n\n</div>\n"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"currPage != 1\" class=\"button-shadowed prev\" (click)=\"goToPage(currPage - 1)\">Previous</button>\n<button *ngIf=\"(currPage > 2)\" class=\"button-subtle\" (click)=\"goToPage(1)\">1</button>\n<button *ngIf=\"(currPage === 4)\" class=\"button-subtle\" (click)=\"goToPage(2)\">2</button>\n<span *ngIf=\"(currPage > 4)\">...</span>\n\n<button *ngIf=\"currPage !== 1\" class=\"button-subtle\" (click)=\"goToPage(currPage - 1)\">{{currPage - 1}}</button>\n<span class=\"current-page\">{{currPage}}</span>\n<button *ngIf=\"currPage != totalPages\" class=\"button-subtle\" (click)=\"goToPage(currPage + 1)\">{{currPage + 1}}</button>\n\n<span *ngIf=\"(totalPages - currPage > 3)\">...</span>\n<button *ngIf=\"(totalPages - currPage === 3)\" class=\"button-subtle\" (click)=\"goToPage(totalPages - 1)\">{{totalPages - 1}}</button>\n<button *ngIf=\"(totalPages - currPage > 1)\" class=\"button-subtle\" (click)=\"goToPage(totalPages)\">{{totalPages}}</button>\n<button *ngIf=\"currPage != totalPages\" class=\"button-shadowed next\" (click)=\"goToPage(currPage + 1)\">Next</button>\n"

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <img src=\"/assets/images/navbar-logo.png\" alt=\"WRAP\">\n    <form (submit)=\"onSubmit()\" class=\"clearfix\">\n        <input type=\"text\" class=\"input-shadowed\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\">\n        <input type=\"password\" class=\"input-shadowed\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n        <button type=\"submit\" class=\"button-accent pull-right\">Login</button>\n    </form>\n</div>\n"

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<span [ngClass]=\"{'switch-on': state, 'switch-off': !state}\" class=\"switch-ball\"></span>\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<svg width=\"40px\" height=\"15px\">\n    <use xlink:href=\"#loader-mini\" x=\"0\" y=\"0\" />\n</svg>\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<svg *ngIf=\"activeDesc\" class=\"toggle-sorting-icon\" width=\"24px\" height=\"24px\">\n    <use class=\"ic-arrow-down\" xlink:href=\"#ic-arrow-down\" x=\"0\" y=\"0\" />\n</svg>\n<svg *ngIf=\"activeAsc\" class=\"toggle-sorting-icon\" width=\"24px\" height=\"24px\">\n    <use class=\"ic-arrow-up\" xlink:href=\"#ic-arrow-up\" x=\"0\" y=\"0\" />\n</svg>\n"

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

//# sourceMappingURL=scraper.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetService = (function () {
    function DatasetService(_api) {
        this._api = _api;
    }
    /**
     * Get all datasets
     * @returns {Observable<R>}
     */
    DatasetService.prototype.getDatasets = function () {
        return this._api.get('datasets');
    };
    /**
     * Upload data set
     * @param data
     * @returns {Observable<R>}
     */
    DatasetService.prototype.uploadDataset = function (data) {
        return this._api.upload('/datasets?title=dataset-' + Date.now(), data);
    };
    return DatasetService;
}());
DatasetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], DatasetService);

var _a;
//# sourceMappingURL=dataset.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorService = (function () {
    function ErrorService() {
        this.shoutSignOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    /**
     * Transform error text to more readable,
     * emit sign out event if needed
     * @param err
     * @returns {any}
     */
    ErrorService.prototype.humanize = function (err) {
        var errText;
        switch (err.status) {
            case 401:
            case 403:
                errText = 'Access denied. Please sign in with correct credentials';
                this.shoutSignOut.emit();
                break;
            case 404:
                errText = 'Such content is not found on the server';
                break;
            case 500:
                errText = 'Server error';
                break;
            default:
                errText = 'Something went wrong';
        }
        return errText;
    };
    return ErrorService;
}());
ErrorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ErrorService);

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(333);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = (function () {
    function LoaderService() {
        this.loaderGlobal = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.loaderAdmin = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    /**
     * Show global loader
     */
    LoaderService.prototype.showGlobal = function () {
        this.loaderGlobal.next(true);
    };
    /**
     * Hide global loader
     */
    LoaderService.prototype.hideGlobal = function () {
        this.loaderGlobal.next(false);
    };
    /**
     * Show admin loader
     */
    LoaderService.prototype.showAdmin = function () {
        this.loaderAdmin.next(true);
    };
    /**
     * Hide admin loader
     */
    LoaderService.prototype.hideAdmin = function () {
        this.loaderAdmin.next(false);
    };
    return LoaderService;
}());
LoaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LoaderService);

//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogService = (function () {
    function LogService(_modal) {
        this._modal = _modal;
    }
    /**
     * Log success message
     * @param success
     */
    LogService.prototype.logSuccess = function (success) {
        this._modal.showSuccess(success);
    };
    /**
     * Log error message
     * @param error
     */
    LogService.prototype.logError = function (error) {
        this._modal.showError(error);
    };
    return LogService;
}());
LogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], LogService);

var _a;
//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    AUTH_TOKEN_STORAGE_KEY: 'wrap-auth-token',
    API_URL: 'http://13.56.172.125:3003/api'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[856]);
//# sourceMappingURL=main.bundle.js.map