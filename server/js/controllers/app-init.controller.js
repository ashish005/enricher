/**
 * Created by wizdev on 7/10/2015.
 */
appInitController = function(router, mongoose) {
    var apps = require('../models/app-init.model')(mongoose);
    var init = require('../models/init.model')(mongoose);

    router.get('/apps', function(req, res) {
        apps.find({}, function (err, data) {
            res.send(data);
        });
    });

    router.post('/register-app', function (req, res){
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        var _apps = new apps(req.body.model);

        _apps.save(
            function(err, saved) { // Query in MongoDB via Mongo JS Module
                res.send( ( err || !saved ) ? err:saved);
            });
    });

    router.get('/init', function(req, res) {
        console.log('init Request');
        init.find({}, function (err, data) {
            var _resp = {};
            if(data && data.length>0) {
                _resp.menu = data[0].menu;
                _resp.fundInfo = [];
            }else {
                _resp.menu = [];
                _resp.fundInfo = [{"id": 1, "amc_name": "Others", "amc_url": "NULL", "transcation_link": "NULL"},
                    {
                        "id": 10,
                        "amc_name": "DSP BlackRock Mutual Fund",
                        "amc_url": "#/schemeSummary",
                        "transcation_link": "  https://dspbronline.com/iol_purchaserequestwop.aspx?"
                    },
                    {
                        "id": 11,
                        "amc_name": "Escorts Mutual Fund",
                        "amc_url": "#/schemeSummary",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 12,
                        "amc_name": "Fidelity Mutual Fund",
                        "amc_url":  "/schemeSummary",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 13,
                        "amc_name": "Franklin Templeton Mutual Fund",
                        "amc_url":  "/schemeSummary",
                        "transcation_link": "https://online.franklintempletonindia.com/asp_app/Investors/login/inv_login_main.asp"
                    },
                    {
                        "id": 14,
                        "amc_name": "HDFC Mutual Fund",
                        "amc_url": "/schemeSummary",
                        "transcation_link": "https://investor.hdfcfund.com/mfonline/ExistingFolio.aspx"
                    },
                    {
                        "id": 15,
                        "amc_name": "HSBC Mutual Fund",
                        "amc_url":  "/schemeSummary",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 16,
                        "amc_name": "ICICI Prudential Mutual Fund",
                        "amc_url":  "/schemeSummary",
                        "transcation_link": "https://www.icicipruamc.com/InvOnline/app/aspx/Default.aspx"
                    },
                    {"id": 17, "amc_name": "IL & FS Asset", "amc_url": "www.ilfsmf.com", "transcation_link": "NULL"},
                    {"id": 18, "amc_name": "ING Mutual Fund", "amc_url": "www.ingim.co.in", "transcation_link": "NULL"},
                    {
                        "id": 19,
                        "amc_name": "JM Financial Mutual Fund",
                        "amc_url": "www.jmfinancialmf.com",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 2,
                        "amc_name": "BNP Paribas Mutual Fund",
                        "amc_url": "www.bnpparibasmf.in",
                        "transcation_link": "https://www.sundarambnpparibasfs.in/sinvestorservices/"
                    },
                    {
                        "id": 20,
                        "amc_name": "Kotak Mahindra Mutual Fund",
                        "amc_url": "www.kotakmutual.com",
                        "transcation_link": "https://www.kotakmutual.com/AddPur_KAMCWebClient/step1.jsp?"
                    },
                    {
                        "id": 21,
                        "amc_name": "LIC NOMURA Mutual Fund",
                        "amc_url": "www.licnomuramf.com",
                        "transcation_link": "https://online.licnomuramf.com/Login.aspx  "
                    },
                    {
                        "id": 22,
                        "amc_name": "Reliance Mutual Fund",
                        "amc_url": "www.reliancemutual.com",
                        "transcation_link": "https://investeasy.reliancemutual.com/loginonline/Login.aspx"
                    },
                    {
                        "id": 23,
                        "amc_name": "Morgan Stanley Mutual Fund",
                        "amc_url": "www.morganstanley.com",
                        "transcation_link": "https://www.karvymfs.com/karvy/InvestorServices/MSIM_Login.aspx"
                    },
                    {
                        "id": 25,
                        "amc_name": "PRINCIPAL PNB Mutual Fund",
                        "amc_url": "www.principalindia.com",
                        "transcation_link": "https://online.principalindia.com/Default.aspx"
                    },
                    {
                        "id": 26,
                        "amc_name": "Quantum Mutual Fund",
                        "amc_url": "www.quantumamc.com",
                        "transcation_link": "https://invest.quantumamc.com/onlinenew/Default.aspx"
                    },
                    {
                        "id": 28,
                        "amc_name": "Sahara Mutual",
                        "amc_url": "www.saharamutual.com",
                        "transcation_link": "https://invest.saharamutual.com/Default.aspx"
                    },
                    {
                        "id": 29,
                        "amc_name": "SBI Funds Management",
                        "amc_url": "www.sbimf.com",
                        "transcation_link": "https://www.sbimf.com/INVESTORCENTER/ASPX/frmlogin.aspx"
                    },
                    {
                        "id": 3,
                        "amc_name": "Alliance Capital",
                        "amc_url": "www.alliancecapitalindia.com",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 30,
                        "amc_name": "IDFC Mutual Fund",
                        "amc_url": "www.idfcmf.com",
                        "transcation_link": "https://mfonline.idfcmf.com/MFOLogin.aspx"
                    },
                    {
                        "id": 31,
                        "amc_name": "Sundaram Mutual Fund",
                        "amc_url": "http://www.sundarammutual.com/",
                        "transcation_link": "https://www.sundarambnpparibasfs.in/sinvestorservices/ "
                    },
                    {
                        "id": 32,
                        "amc_name": "Tata Asset Management",
                        "amc_url": "www.tatamutualfund.com",
                        "transcation_link": "https://invest.tatamutualfund.com/TTMFWebClient/PANlogin.jsp"
                    },
                    {
                        "id": 33,
                        "amc_name": "Taurus Asset",
                        "amc_url": "www.taurusmutualfund.com",
                        "transcation_link": "https://online.taurusmutualfund.com/Login.aspx"
                    },
                    {
                        "id": 34,
                        "amc_name": "UTI Asset Management",
                        "amc_url": "www.utimf.com",
                        "transcation_link": "https://online.utimf.com/DistributorBrokerCode.aspx  "
                    },
                    {
                        "id": 35,
                        "amc_name": "Mirae Asset Mutual Fund",
                        "amc_url": "www.miraeassetmf.co.in",
                        "transcation_link": "https://transact.miraeassetmf.co.in/online/InvestorLogin.aspx"
                    },
                    {
                        "id": 36,
                        "amc_name": "PineBridge Investments Mutual Fund",
                        "amc_url": "www.aiginvestments.co.in",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 37,
                        "amc_name": "Axis Asset Management",
                        "amc_url": "www.axismf.com",
                        "transcation_link": "https://online.axismf.com/NewInvestor/Login.aspx  "
                    },
                    {
                        "id": 38,
                        "amc_name": "BOI AXA Mutual Fund",
                        "amc_url": "http://www.boiaxa-im.com/",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 39,
                        "amc_name": "Edelweiss Mutual Fund",
                        "amc_url": "www.edelweissmf.com",
                        "transcation_link": "https://www.edelweissmf.com/InvestorLoginNew.aspx"
                    },
                    {"id": 4, "amc_name": "Benchmark", "amc_url": "www.benchmarkfunds.com", "transcation_link": "NULL"},
                    {
                        "id": 40,
                        "amc_name": "IDBI Mutual Fund",
                        "amc_url": "www.idbimutual.co.in",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 41,
                        "amc_name": "JPMorgan Mutual Fund",
                        "amc_url": "www.jpmorganmf.com",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 42,
                        "amc_name": "Peerless Mutual Fund",
                        "amc_url": "www.peerlessmf.co.in",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 43,
                        "amc_name": "Shinsei Mutual",
                        "amc_url": "www.daiwafunds.in",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 5,
                        "amc_name": "Birla Sun Life Mutual Fund",
                        "amc_url": "http://mutualfund.birlasunlife.com",
                        "transcation_link": "https://mutualfund.birlasunlife.com/Pages/Secured/Individual/UserNameLogin.aspx    "
                    },
                    {
                        "id": 51,
                        "amc_name": "Pramerica Mutual Fund",
                        "amc_url": "www.pramericamf.com",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 52,
                        "amc_name": "Daiwa Asset",
                        "amc_url": "http://www.daiwafunds.in/",
                        "transcation_link": "https://invest.daiwafunds.in/investorlogin.aspx"
                    },
                    {
                        "id": 53,
                        "amc_name": "Motilal Oswal Mutual Fund",
                        "amc_url": "www.motilaloswal.com/assetmanagement",
                        "transcation_link": "https://online.mostshares.com/investor/LoginwithPIN.aspx"
                    },
                    {
                        "id": 54,
                        "amc_name": "Religare Invesco",
                        "amc_url": "http://www.religaremf.com",
                        "transcation_link": "https://invest.religareinvesco.com/Default.aspx"
                    },
                    {
                        "id": 55,
                        "amc_name": "Union KBC Asset",
                        "amc_url": "http://www.unionkbc.com",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 56,
                        "amc_name": "Goldman Sachs Mutual Fund",
                        "amc_url": "www.gsam.in",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 57,
                        "amc_name": "India Infoline Asset Management",
                        "amc_url": "http://www.iiflmf.com/",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 58,
                        "amc_name": "Indiabulls Mutual Fund",
                        "amc_url": "http://www.indiabullsmf.com/",
                        "transcation_link": "https://online.indiabullsmf.com/General/Login.aspx"
                    },
                    {"id": 59, "amc_name": "Union KBC", "amc_url": "NULL", "transcation_link": "NULL"},
                    {
                        "id": 6,
                        "amc_name": "Baroda Pioneer",
                        "amc_url": "http://www.barodapioneer.in/",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 60,
                        "amc_name": "PPFAS Mutual Fund",
                        "amc_url": "http://amc.ppfas.com",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 61,
                        "amc_name": "Shriram Mutual Fund",
                        "amc_url": "http://www.shriramamc.com",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 62,
                        "amc_name": "IL&FS Mutual Fund",
                        "amc_url": "http://www.ilfsinfrafund.com/",
                        "transcation_link": "NULL"
                    },
                    {
                        "id": 7,
                        "amc_name": "Canara Robeco Mutual Fund",
                        "amc_url": "www.canararobeco.com",
                        "transcation_link": "https://online.canararobeco.com/login.aspx"
                    },
                    {
                        "id": 8,
                        "amc_name": "L&T Mutual Fund",
                        "amc_url": "www.lntmf.com",
                        "transcation_link": "https://www.lntmf.com/LNTONLINE/MFO_Login.aspx"
                    },
                    {
                        "id": 9,
                        "amc_name": "Deutsche Mutual Fund",
                        "amc_url": "www.dws-india.com",
                        "transcation_link": "https://online.dws-india.com/investor/General/Login.aspx"
                    }
                ];
            }
            res.send(_resp);
        });
    });

    router.post('/initInfo', function (req, res){
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");

        var data = {
            viewType:'default',
            host:'http://localhost:3000',
            menu:[
                {
                    key: 'home',
                    text: 'Home',
                    iconClass: 'fa-th-large',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    key: 'fp',
                    text: 'Fund Performers',
                    iconClass: 'fa-th-large',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: [
                        {text: 'Top Gainers', key: 'tg'},
                        {text: 'Top Loosers', key: 'tl'}
                    ]
                },
                {
                    text: 'NFOs',
                    iconClass: 'fa-diamond',
                    key: 'nfo',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    text: 'Dividends',
                    iconClass: 'fa-bar-chart-o',
                    key: 'dvdnts',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    text: 'Indices',
                    iconClass: 'fa-bar-chart-o',
                    key: 'indecs',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    text: 'Tools',
                    iconClass: 'fa-bar-chart-o',
                    key: 'tools',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: [
                        {text: 'Fund Search', key: 'fs'},
                        {text: 'MF Tools', key: 'mft'}
                    ]
                }
            ],
            isActive:true
        };
        var _init = new init(data);
        _init.save(
            function(err, saved) { // Query in MongoDB via Mongo JS Module
                res.send( ( err || !saved ) ? err:saved);
            });
    });
}

module.exports = appInitController;