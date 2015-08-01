/**
 * Created by wizdev on 7/26/2015.
 */
defaultController = function(router, mongoose) {
    var fundModel = require('../../models/default/default.model')(mongoose);

    router.get('/funds/:name', function(req, res) {
      var _reqName = req.params.name;
            var _snapShot = [
             {"scheme":"Axis Midcap Fund - Growth","yearReturn":34.97,"category":"Equity - Diversified","subCategory":"Domestic Equity - Mid Cap","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Long Term Equity Fund - Growth","yearReturn":30.76,"category":"Equity - Diversified","subCategory":"ELSS","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Focused 25 Fund - Growth","yearReturn":23.54,"category":"Equity - Diversified","subCategory":"Domestic Equity - Large Cap","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Equity Fund - Growth","yearReturn":15.58,"category":"Equity - Diversified","subCategory":"Domestic Equity - Large Cap","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Income Fund - Growth","yearReturn":10.75,"category":"Debt","subCategory":"Debt - General","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Dynamic Bond Fund - Growth","yearReturn":10.52,"category":"Debt","subCategory":"Debt - General","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Constant Maturity 10 Year Fund - Growth","yearReturn":10.26,"category":"Debt","subCategory":"Debt - General","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Short Term Fund - Retail - Growth","yearReturn":9.15,"category":"Debt","subCategory":"Debt - Short Term","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Short Term Fund - Institutional Plan - Growth","yearReturn":9.11,"category":"Debt","subCategory":"Debt - Short Term","planType":"Institutional","type":"Open Ended"},
            {"scheme":"Axis Banking Debt Fund - Growth","yearReturn":9,"category":"Debt","subCategory":"Debt - General","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Triple Advantage Fund - Growth","yearReturn":8.98,"category":"Hybrid","subCategory":"Hybrid - Multi Asset","planType":"Regular Retail","type":"Open Ended"},
            {"scheme":"Axis Liquid Fund - Institutional Plan - Growth","yearReturn":8.8,"category":"Debt","subCategory":"Debt - Liquid","planType":"Institutional","type":"Open Ended"},
            {"scheme":"Axis Treasury Advantage Fund - Institutional Plan - Growth","yearReturn":8.6,"category":"Debt","subCategory":"Debt - Short Term","planType":"Institutional","type":"Open Ended"},
            {"scheme":"Axis Liquid Fund - Retail - Growth","yearReturn":8.25,"category":"Debt","subCategory":"Debt - Liquid","planType":"Regular Retail","type":"Open Ended"}
         ];
            var _shortTerm = [
            {"Scheme":"Axis Midcap Fund - Growth","weakReturn":0.4,"weakRank":"12/302","monthReturn":6.5,"monthRank":"10/302","month3Return":10.31,"monthRank":"8/299","monthReturn":7.01,"monthRank":"21/293"},
            {"Scheme":"Axis Long Term Equity Fund - Growth","weakReturn":-1.39,"weakRank":"268/302","monthReturn":2.16,"monthRank":"215/302","month3Return":4.44,"monthRank":"179/299","monthReturn":2.76,"monthRank":"97/293"},
            {"Scheme":"Axis Focused 25 Fund - Growth","weakReturn":-0.75,"weakRank":"130/302","monthReturn":2.44,"monthRank":"199/302","month3Return":8.86,"monthRank":"19/299","monthReturn":3.13,"monthRank":"86/293"},
            {"Scheme":"Axis Equity Fund - Growth","weakReturn":-0.5,"weakRank":"91/302","monthReturn":3.05,"monthRank":"157/302","month3Return":5.4,"monthRank":"129/299","monthReturn":-1.92,"monthRank":"220/293"},
            {"Scheme":"Axis Income Fund - Growth","weakReturn":0.16,"weakRank":"167/369","monthReturn":0.34,"monthRank":"343/371","month3Return":0.38,"monthRank":"284/369","monthReturn":1.16,"monthRank":"291/370"},
            {"Scheme":"Axis Dynamic Bond Fund - Growth","weakReturn":0.17,"weakRank":"87/369","monthReturn":0.36,"monthRank":"334/371","month3Return":0.5,"monthRank":"278/369","monthReturn":1.49,"monthRank":"273/370"},
            {"Scheme":"Axis Constant Maturity 10 Year Fund - Growth","weakReturn":0.1,"weakRank":"351/369","monthReturn":0.32,"monthRank":"347/371","month3Return":-0.27,"monthRank":"321/369","monthReturn":0.67,"monthRank":"308/370"},
            {"Scheme":"Axis Short Term Fund - Retail - Growth","weakReturn":0.15,"weakRank":"208/369","monthReturn":0.69,"monthRank":"117/371","month3Return":1.7,"monthRank":"203/369","monthReturn":3.59,"monthRank":"194/370"},
            {"Scheme":"Axis Short Term Fund - Institutional Plan - Growth","weakReturn":0.15,"weakRank":"48/97","monthReturn":0.69,"monthRank":"31/98","month3Return":1.7,"monthRank":"74/98","monthReturn":3.59,"monthRank":"75/104"},
            {"Scheme":"Axis Banking Debt Fund - Growth","weakReturn":0.17,"weakRank":"118/369","monthReturn":0.72,"monthRank":"83/371","month3Return":2.15,"monthRank":"44/369","monthReturn":4.46,"monthRank":"25/370"},
            {"Scheme":"Axis Triple Advantage Fund - Growth","weakReturn":-0.92,"weakRank":"96/106","monthReturn":0.45,"monthRank":"94/106","month3Return":1.12,"monthRank":"79/106","monthReturn":-1.54,"monthRank":"96/104"},
            {"Scheme":"Axis Liquid Fund - Institutional Plan - Growth","weakReturn":0.15,"weakRank":"55/97","monthReturn":0.65,"monthRank":"46/98","month3Return":2.05,"monthRank":"29/98","monthReturn":4.26,"monthRank":"32/104"},
            {"Scheme":"Axis Treasury Advantage Fund - Institutional Plan - Growth","weakReturn":0.16,"weakRank":"32/97","monthReturn":0.71,"monthRank":"24/98","month3Return":2.13,"monthRank":"16/98","monthReturn":4.3,"monthRank":"21/104"},
            {"Scheme":"Axis Liquid Fund - Retail - Growth","weakReturn":0.14,"weakRank":"277/369","monthReturn":-3.03,"monthRank":"367/371","month3Return":1.91,"monthRank":"144/369","monthReturn":3.99,"monthRank":"126/370"},
            {"Scheme":"Axis Treasury Advantage Fund - Retail - Growth","weakReturn":0.15,"weakRank":"217/369","monthReturn":0.65,"monthRank":"160/371","month3Return":1.97,"monthRank":"124/369","monthReturn":3.98,"monthRank":"129/370"},
            {"Scheme":"Axis Gold Fund - Growth","weakReturn":-1.72,"weakRank":"11-Apr","monthReturn":-2.92,"monthRank":"11-Feb","month3Return":-5.26,"monthRank":"11-May","monthReturn":-10.13,"monthRank":"11-Jun"},
            {"Scheme":"Axis Enhanced Arbitrage Fund - Regular Plan - Growth","weakReturn":0.05,"weakRank":"16/19","monthReturn":0.36,"monthRank":"15/19","month3Return":1.75,"monthRank":"13/19","monthReturn":3.99,"monthRank":"13/19"}
        ];
            var _longTerm = [
            {"Scheme":"Axis Midcap Fund - Growth","year1_return":34.97,"year1_rank":"28/281","year3_return":37.11,"year1_rank":"12/255","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Long Term Equity Fund - Growth","year1_return":30.76,"year1_rank":"50/281","year3_return":35.21,"year1_rank":"19/255","year5_return":"21.89","year5_rank":"7/228"},
            {"Scheme":"Axis Focused 25 Fund - Growth","year1_return":23.54,"year1_rank":"100/281","year3_return":23.03,"year1_rank":"133/255","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Equity Fund - Growth","year1_return":15.58,"year1_rank":"184/281","year3_return":24.58,"year1_rank":"101/255","year5_return":"12.66","year5_rank":"111/228"},
            {"Scheme":"Axis Income Fund - Growth","year1_return":10.75,"year1_rank":"66/363","year3_return":9,"year1_rank":"127/319","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Dynamic Bond Fund - Growth","year1_return":10.52,"year1_rank":"82/363","year3_return":8.87,"year1_rank":"147/319","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Constant Maturity 10 Year Fund - Growth","year1_return":10.26,"year1_rank":"94/363","year3_return":6.45,"year1_rank":"308/319","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Short Term Fund - Retail - Growth","year1_return":9.15,"year1_rank":"187/363","year3_return":8.67,"year1_rank":"185/319","year5_return":"8.39","year5_rank":"166/281"},
            {"Scheme":"Axis Short Term Fund - Institutional Plan - Growth","year1_return":9.11,"year1_rank":"35/104","year3_return":8.74,"year1_rank":"71/103","year5_return":"8.58","year5_rank":"74/97"},
            {"Scheme":"Axis Banking Debt Fund - Growth","year1_return":9,"year1_rank":"203/363","year3_return":8.99,"year1_rank":"130/319","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Triple Advantage Fund - Growth","year1_return":8.98,"year1_rank":"77/101","year3_return":9.89,"year1_rank":"73/94","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Liquid Fund - Institutional Plan - Growth","year1_return":8.8,"year1_rank":"54/104","year3_return":9.04,"year1_rank":"44/103","year5_return":"8.95","year5_rank":"37/97"},
            {"Scheme":"Axis Treasury Advantage Fund - Institutional Plan - Growth","year1_return":8.6,"year1_rank":"77/104","year3_return":8.99,"year1_rank":"51/103","year5_return":"8.96","year5_rank":"36/97"},
            {"Scheme":"Axis Liquid Fund - Retail - Growth","year1_return":8.25,"year1_rank":"291/363","year3_return":8.51,"year1_rank":"202/319","year5_return":"8.5","year5_rank":"150/281"},
            {"Scheme":"Axis Treasury Advantage Fund - Retail - Growth","year1_return":7.94,"year1_rank":"310/363","year3_return":8.16,"year1_rank":"246/319","year5_return":"8.26","year5_rank":"189/281"},
            {"Scheme":"Axis Gold Fund - Growth","year1_return":-10.84,"year1_rank":"11-Jul","year3_return":-7.26,"year1_rank":"10-Sep","year5_return":"--","year5_rank":"--"},
            {"Scheme":"Axis Enhanced Arbitrage Fund - Regular Plan - Growth","year1_return":'',"year1_rank":"--","year3_return":'',"year1_rank":"--","year5_return":"--","year5_rank":""}
        ];
            var _sipReturn = [
            {"scheme":"Axis Midcap Fund - Growth","quarterlyReturn":7.78,"monthly_return":6.5,"year1_return":15.55,"year3_return":78.53,"year5_return":"--"},
            {"scheme":"Axis Long Term Equity Fund - Growth","quarterlyReturn":2.38,"monthly_return":2.16,"year1_return":11.05,"year3_return":71.64,"year5_return":"105.62"},
            {"scheme":"Axis Focused 25 Fund - Growth","quarterlyReturn":5.12,"monthly_return":2.44,"year1_return":10.44,"year3_return":42.52,"year5_return":"--"},
            {"scheme":"Axis Equity Fund - Growth","quarterlyReturn":3.78,"monthly_return":3.05,"year1_return":5.72,"year3_return":40.07,"year5_return":"59.7"},
            {"scheme":"Axis Income Fund - Growth","quarterlyReturn":0.3,"monthly_return":0.34,"year1_return":4.3,"year3_return":15.17,"year5_return":"--"},
            {"scheme":"Axis Dynamic Bond Fund - Growth","quarterlyReturn":0.39,"monthly_return":0.36,"year1_return":4.36,"year3_return":14.52,"year5_return":"--"},
            {"scheme":"Axis Constant Maturity 10 Year Fund - Growth","quarterlyReturn":0,"monthly_return":0.32,"year1_return":3.86,"year3_return":12.03,"year5_return":"--"},
            {"scheme":"Axis Short Term Fund - Retail - Growth","quarterlyReturn":1.23,"monthly_return":0.69,"year1_return":4.61,"year3_return":14.25,"year5_return":"24.85"},
            {"scheme":"Axis Short Term Fund - Institutional Plan - Growth","quarterlyReturn":1.23,"monthly_return":0.69,"year1_return":4.6,"year3_return":14.25,"year5_return":"25.15"},
            {"scheme":"Axis Banking Debt Fund - Growth","quarterlyReturn":1.47,"monthly_return":0.72,"year1_return":4.83,"year3_return":14.71,"year5_return":"--"},
            {"scheme":"Axis Triple Advantage Fund - Growth","quarterlyReturn":0.37,"monthly_return":0.45,"year1_return":3.11,"year3_return":15.7,"year5_return":"26.43"},
            {"scheme":"Axis Liquid Fund - Institutional Plan - Growth","quarterlyReturn":1.35,"monthly_return":0.65,"year1_return":4.66,"year3_return":14.53,"year5_return":"25.79"},
            {"scheme":"Axis Treasury Advantage Fund - Institutional Plan - Growth","quarterlyReturn":1.44,"monthly_return":0.71,"year1_return":4.68,"year3_return":14.39,"year5_return":"25.71"},
            {"scheme":"Axis Liquid Fund - Retail - Growth","quarterlyReturn":0.05,"monthly_return":-3.03,"year1_return":4.06,"year3_return":13.51,"year5_return":"24.13"},
            {"scheme":"Axis Treasury Advantage Fund - Retail - Growth","quarterlyReturn":1.33,"monthly_return":0.65,"year1_return":4.33,"year3_return":13.11,"year5_return":"23.3"},
            {"scheme":"Axis Gold Fund - Growth","quarterlyReturn":-4.79,"monthly_return":-2.92,"year1_return":-6.75,"year3_return":-14.52,"year5_return":"--"},
            {"scheme":"Axis Enhanced Arbitrage Fund - Regular Plan - Growth","quarterlyReturn":1.05,"monthly_return":0.36,"year1_return":3.95,"year3_return":'',"year5_return":"--"}
        ];
            var _nav_dividend = [
            {"scheme":"Axis Midcap Fund - Growth","nav":27.17,"nav_as_on":"24/07/2015","previous_nav":27.28,"previous_nav_date":"23/07/2015","previous_nav_change":-0.4032,"weeks52_high":27.28,"high_as_on":"23/07/2015","weeks52_low":19.66,"lowas_on":"8/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Long Term Equity Fund - Growth","nav":31.3216,"nav_as_on":"24/07/2015","previous_nav":31.3344,"previous_nav_date":"23/07/2015","previous_nav_change":-0.0408,"weeks52_high":32.3494,"high_as_on":"13/04/2015","weeks52_low":23.4484,"lowas_on":"8/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Focused 25 Fund - Growth","nav":18.42,"nav_as_on":"24/07/2015","previous_nav":18.54,"previous_nav_date":"23/07/2015","previous_nav_change":-0.6472,"weeks52_high":18.79,"high_as_on":"3/3/2015","weeks52_low":14.43,"lowas_on":"8/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Equity Fund - Growth","nav":19.88,"nav_as_on":"24/07/2015","previous_nav":20,"previous_nav_date":"23/07/2015","previous_nav_change":-0.6,"weeks52_high":20.46,"high_as_on":"27/01/2015","weeks52_low":16.57,"lowas_on":"8/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Income Fund - Growth","nav":13.3883,"nav_as_on":"24/07/2015","previous_nav":13.3959,"previous_nav_date":"23/07/2015","previous_nav_change":-0.0567,"weeks52_high":13.4008,"high_as_on":"1/6/2015","weeks52_low":11.9824,"lowas_on":"6/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Dynamic Bond Fund - Growth","nav":14.3458,"nav_as_on":"24/07/2015","previous_nav":14.3515,"previous_nav_date":"23/07/2015","previous_nav_change":-0.0397,"weeks52_high":14.3557,"high_as_on":"6/7/2015","weeks52_low":12.8662,"lowas_on":"8/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Constant Maturity 10 Year Fund - Growth","nav":12.4608,"nav_as_on":"24/07/2015","previous_nav":12.4725,"previous_nav_date":"23/07/2015","previous_nav_change":-0.0938,"weeks52_high":12.5203,"high_as_on":"28/04/2015","weeks52_low":11.1701,"lowas_on":"6/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Short Term Fund - Retail - Growth","nav":15.2633,"nav_as_on":"24/07/2015","previous_nav":15.2624,"previous_nav_date":"23/07/2015","previous_nav_change":0.0059,"weeks52_high":15.2633,"high_as_on":"24/07/2015","weeks52_low":13.9856,"lowas_on":"25/07/2014","dividend_paid":"--"},
            {"scheme":"Axis Short Term Fund - Institutional Plan - Growth","nav":15.4375,"nav_as_on":"24/07/2015","previous_nav":15.4366,"previous_nav_date":"23/07/2015","previous_nav_change":0.0058,"weeks52_high":15.4375,"high_as_on":"24/07/2015","weeks52_low":14.15,"lowas_on":"25/07/2014","dividend_paid":"--"},
            {"scheme":"Axis Banking Debt Fund - Growth","nav":1311.5445,"nav_as_on":"24/07/2015","previous_nav":1311.2544,"previous_nav_date":"23/07/2015","previous_nav_change":0.0221,"weeks52_high":1311.5445,"high_as_on":"24/07/2015","weeks52_low":1203.5434,"lowas_on":"25/07/2014","dividend_paid":"--"},
            {"scheme":"Axis Triple Advantage Fund - Growth","nav":15.2246,"nav_as_on":"24/07/2015","previous_nav":15.238,"previous_nav_date":"23/07/2015","previous_nav_change":-0.0879,"weeks52_high":15.5426,"high_as_on":"28/01/2015","weeks52_low":13.8118,"lowas_on":"1/8/2014","dividend_paid":"--"},
            {"scheme":"Axis Liquid Fund - Institutional Plan - Growth","nav":1589.5678,"nav_as_on":"24/07/2015","previous_nav":1589.2294,"previous_nav_date":"23/07/2015","previous_nav_change":0.0213,"weeks52_high":1589.5678,"high_as_on":"24/07/2015","weeks52_low":1461.2793,"lowas_on":"25/07/2014","dividend_paid":"--"},
            {"scheme":"Axis Treasury Advantage Fund - Institutional Plan - Growth","nav":1593.2948,"nav_as_on":"24/07/2015","previous_nav":1592.883,"previous_nav_date":"23/07/2015","previous_nav_change":0.0259,"weeks52_high":1593.2948,"high_as_on":"24/07/2015","weeks52_low":1467.3611,"lowas_on":"25/07/2014","dividend_paid":"--"},
            {"scheme":"Axis Liquid Fund - Retail - Growth","nav":1531.2519,"nav_as_on":"24/07/2015","previous_nav":1530.9486,"previous_nav_date":"23/07/2015","previous_nav_change":0.0198,"weeks52_high":1584.7466,"high_as_on":"10/7/2015","weeks52_low":1414.8127,"lowas_on":"25/07/2014","dividend_paid":"--"},
            {"scheme":"Axis Treasury Advantage Fund - Retail - Growth","nav":1514.2699,"nav_as_on":"24/07/2015","previous_nav":1513.9069,"previous_nav_date":"23/07/2015","previous_nav_change":0.024,"weeks52_high":1514.2699,"high_as_on":"24/07/2015","weeks52_low":1403.027,"lowas_on":"25/07/2014","dividend_paid":"--"},
            {"scheme":"Axis Gold Fund - Growth","nav":8.7828,"nav_as_on":"24/07/2015","previous_nav":8.751,"previous_nav_date":"23/07/2015","previous_nav_change":0.3634,"weeks52_high":10.1146,"high_as_on":"8/8/2014","weeks52_low":8.751,"lowas_on":"23/07/2015","dividend_paid":"--"},
            {"scheme":"Axis Enhanced Arbitrage Fund - Regular Plan - Growth","nav":10.7591,"nav_as_on":"24/07/2015","previous_nav":10.7586,"previous_nav_date":"23/07/2015","previous_nav_change":0.0046,"weeks52_high":10.7591,"high_as_on":"24/07/2015","weeks52_low":10.02,"lowas_on":"21/08/2014","dividend_paid":"--"}
        ];

        var _fundOptions = {
            snapshot:{data:_snapShot},
            shortTerm:{data:_shortTerm},
            longTerm:{data:_longTerm},
            sipReturn:{data:_sipReturn},
            navDividend:{data:_nav_dividend}
        };

        fundModel.find({}, function (err, data) {
            var _activeFundOption = _fundOptions[_reqName];
            res.send((_activeFundOption)?_activeFundOption.data: req.params.name +'Request Options is Not correct');
        });
    });

    router.get('/nfos', function(req, res) {
        var _nfos = [{"fund":"Axis Equity Saver Fund","openDate":"27/07/2015","closeDate":"10/8/2015","duration":"--","min_Investment":5000,"amc":"Axis Asset Management","category":"Equity - Diversified","type":"Open Ended"}];
        fundModel.find({}, function (err, data) {
            res.send(_nfos);
        });
    });

    router.get('/dividends', function(req, res) {
        var _dividends = [
            {"scheme":"Axis Banking Debt Fund - Daily Dividend","date":"17/07/2015","dividend":0.1939,"amc":"Axis Asset Management","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Insta Cash Plus Fund - Regular Plan - Daily Dividend","date":"17/07/2015","dividend":0.0012,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Insta Cash Plus Fund - Super Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.0157,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Cash Opportunities Fund - Weekly Dividend","date":"17/07/2015","dividend":0.013,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"Reliance Liquid Fund - Cash Plan - Weekly Dividend","date":"17/07/2015","dividend":1.0801,"amc":"Reliance Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Ultra Short Term Fund - Regular Plan - Daily Dividend","date":"17/07/2015","dividend":0.0014,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Ultra Short Term Fund - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.0002,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"UTI Floating Rate Fund - STP - Daily Dividend","date":"17/07/2015","dividend":0.2089,"amc":"UTI Asset Management","category":"Debt","type":"Open Ended"},
            {"scheme":"Baroda Pioneer Liquid Fund - Regular - Daily Dividend","date":"17/07/2015","dividend":0.1348,"amc":"Baroda Pioneer","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Money Plus Fund - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.002,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"Axis Treasury Advantage Fund - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.1722,"amc":"Axis Asset Management","category":"Debt","type":"Open Ended"},
            {"scheme":"Baroda Pioneer Treasury Advantage Fund - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.1079,"amc":"Baroda Pioneer","category":"Debt","type":"Open Ended"},
            {"scheme":"Canara Robeco Treasury Advantage Fund - Retail Plan - Daily Dividend","date":"17/07/2015","dividend":0.2608,"amc":"Canara Robeco Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Treasury Fund - Cash Plan - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.0114,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Banking & PSU Debt Fund - Weekly Dividend","date":"17/07/2015","dividend":0.0126,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"Axis Liquid Fund - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.1573,"amc":"Axis Asset Management","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Insta Cash Plus Fund - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.0012,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Insta Cash Plus Fund - Regular Plan - Weekly Dividend","date":"17/07/2015","dividend":0.0082,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Insta Cash Plus Fund - Super Institutional Plan - Weekly Dividend","date":"17/07/2015","dividend":0.1109,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Cash Opportunities Fund - Institutional Plan - Daily Dividend","date":"17/07/2015","dividend":0.0014,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Cash Opportunities Fund - Institutional Plan - Weekly Dividend","date":"17/07/2015","dividend":0.0111,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Cash Opportunities Fund - Daily Dividend","date":"17/07/2015","dividend":0.0017,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Cash Opportunities Fund - Fortnightly Dividend","date":"17/07/2015","dividend":0.028,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Ultra Short Term Fund - Institutional Plan - Weekly Dividend","date":"17/07/2015","dividend":0.0117,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"},
            {"scheme":"DWS Ultra Short Term Fund - Regular Plan - Weekly Dividend","date":"17/07/2015","dividend":0.0093,"amc":"Deutsche Mutual Fund","category":"Debt","type":"Open Ended"}
        ];

        fundModel.find({}, function (err, data) {
            res.send(_dividends);
        });
    });

    router.get('/indices', function(req, res) {
        var _indices = [
            {"indices":"CNX IT","year1_return":58.63,"latest_value":9488.25,"date":"22/12/2013"},
            {"indices":"Nifty Midcap 50","year1_return":49.88,"latest_value":3225.3,"date":"30/10/2014"},
            {"indices":"BSE-HC","year1_return":41.42,"latest_value":16844.67,"date":"21/07/2015"},
            {"indices":"BSE IT","year1_return":36.46,"latest_value":11615.55,"date":"9/4/2015"},
            {"indices":"BSE CD","year1_return":28.7,"latest_value":11051.8,"date":"21/07/2015"},
            {"indices":"CNX Midcap","year1_return":25.24,"latest_value":13687,"date":"23/07/2015"},
            {"indices":"CNX Nifty Junior","year1_return":25.2,"latest_value":20556.55,"date":"21/07/2015"},
            {"indices":"BSE Bankex","year1_return":20.78,"latest_value":21477.64,"date":"21/07/2015"},
            {"indices":"BSE MID CAP","year1_return":20.69,"latest_value":11216.19,"date":"23/07/2015"},
            {"indices":"BSE AUTO","year1_return":19.36,"latest_value":18867.79,"date":"21/07/2015"},
            {"indices":"BSE CG","year1_return":18.76,"latest_value":18736.9,"date":"21/07/2015"},
            {"indices":"CNX CONSUMPTION","year1_return":16.53,"latest_value":2559.2,"date":"22/03/2014"},
            {"indices":"BSE Tech","year1_return":14.55,"latest_value":6318.95,"date":"21/07/2015"},
            {"indices":"BSE SMALL CAP","year1_return":13.17,"latest_value":11576.82,"date":"21/07/2015"},
            {"indices":"S&P CNX 500","year1_return":12.6,"latest_value":7070.3,"date":"21/07/2015"},
            {"indices":"BSE 200","year1_return":12.32,"latest_value":3576.31,"date":"21/07/2015"},
            {"indices":"BSE 500","year1_return":12.17,"latest_value":11172.44,"date":"21/07/2015"},
            {"indices":"BSE GREENEX","year1_return":12.09,"latest_value":2387.8,"date":"21/07/2015"},
            {"indices":"CNX IT","year1_return":12.07,"latest_value":11655.45,"date":"21/07/2015"},
            {"indices":"CNX Service Sector*","year1_return":10.98,"latest_value":7831.8,"date":"22/03/2014"},
            {"indices":"BSE 100","year1_return":10.18,"latest_value":8709.5,"date":"23/07/2015"},
            {"indices":"BSE FMCG","year1_return":10.08,"latest_value":7822.47,"date":"21/07/2015"},
            {"indices":"S&P CNX Nifty","year1_return":9.7,"latest_value":8589.8,"date":"23/07/2015"},
            {"indices":"BSE Carbonex","year1_return":9.52,"latest_value":1402.16,"date":"21/07/2015"},
            {"indices":"BSE SHARIAH 50","year1_return":8.97,"latest_value":1248.62,"date":"7/6/2013"},
            {"indices":"NIFTY DIVIDEND","year1_return":7.49,"latest_value":94.42,"date":"22/03/2014"},
            {"indices":"BSE SENSEX","year1_return":7.01,"latest_value":28112.31,"date":"24/07/2015"},
            {"indices":"BSE DOLLEX-200","year1_return":6.98,"latest_value":944.27,"date":"21/07/2015"},
            {"indices":"CNX FINANCE","year1_return":5.44,"latest_value":5008,"date":"22/03/2014"},
            {"indices":"NSE INDIA VIX","year1_return":5.37,"latest_value":16.18,"date":"22/03/2014"},
            {"indices":"CNX Nifty Junior","year1_return":4.38,"latest_value":12678.2,"date":"22/12/2013"},
            {"indices":"BSE DOLLEX-100","year1_return":4.08,"latest_value":1417.03,"date":"21/07/2015"},
            {"indices":"S&P CNX 500","year1_return":3.73,"latest_value":4861.65,"date":"22/12/2013"},
            {"indices":"CNX COMMODITIES","year1_return":2.65,"latest_value":2247.75,"date":"22/03/2014"},
            {"indices":"BSE DOLLEX-30","year1_return":2,"latest_value":3662.78,"date":"21/07/2015"},
            {"indices":"CNX DIVIDEND OPPT","year1_return":1.15,"latest_value":1606,"date":"22/03/2014"},
            {"indices":"NSE CNX DEFTY","year1_return":-1.22,"latest_value":3624.45,"date":"22/12/2013"},
            {"indices":"BSE IPO","year1_return":-1.98,"latest_value":868.5,"date":"21/07/2015"},
            {"indices":"BSE Power Index","year1_return":-3.54,"latest_value":2118.18,"date":"21/07/2015"},
            {"indices":"BSE PSU","year1_return":-5.58,"latest_value":7785.62,"date":"21/07/2015"},
            {"indices":"CNX Midcap","year1_return":-5.94,"latest_value":7838.95,"date":"22/12/2013"},
            {"indices":"BSE Oil & Gas","year1_return":-9.61,"latest_value":9958.42,"date":"21/07/2015"},
            {"indices":"CNX PSU BANK","year1_return":-21.12,"latest_value":2433.15,"date":"22/03/2014"},
            {"indices":"CNX Realty","year1_return":-25.46,"latest_value":175.95,"date":"22/03/2014"},
            {"indices":"BSE Realty","year1_return":-30.3,"latest_value":1378.65,"date":"21/07/2015"},
            {"indices":"BSE METAL","year1_return":-34.53,"latest_value":8847.79,"date":"21/07/2015"},
            {"indices":"CNX 100","year1_return": null,"latest_value":8463.6,"date":"22/04/2015"},
            {"indices":"CNX Bank Nifty","year1_return": null,"latest_value":18723.4,"date":"21/07/2015"},
            {"indices":"CNX FMCG*","year1_return": null,"latest_value":20232.9,"date":"21/07/2015"},
            {"indices":"CNX Infrastructure Index","year1_return": null,"latest_value":3426.35,"date":"21/07/2015"},
            {"indices":"CNX MNC Index*","year1_return": null,"latest_value":10166.2,"date":"21/07/2015"},
            {"indices":"CNX PSE*","year1_return": null,"latest_value":3591.05,"date":"21/07/2015"},
            {"indices":"Brandex","year1_return": null,"latest_value":1760.09,"date":"19/10/2012"},
            {"indices":"CCIL Mibor*","year1_return": null,"latest_value":0.16,"date":"19/10/2012"},
            {"indices":"S&P CNX Nifty Shariah Index","year1_return": null,"latest_value":610.82,"date":"19/10/2012"},
            {"indices":"S&P CNX Pharmaceuticals*","year1_return": null,"latest_value":12379.45,"date":"21/07/2015"},
            {"indices":"S&P CNX 500 Shariah Index","year1_return": null,"latest_value":589.13,"date":"19/10/2012"},
            {"indices":"BSE India Infrastructure","year1_return":null ,"latest_value":178.92,"date":"23/12/2014"},
            {"indices":"BSE CPSE","year1_return":null ,"latest_value":1475.18,"date":"21/07/2015"},
            {"indices":"CPSE","year1_return":null ,"latest_value":1817.5,"date":"22/03/2014"},
            {"indices":"BSE SME IPO","year1_return":null ,"latest_value":300.51,"date":"15/07/2013"},
            {"indices":"LIX 15","year1_return": null,"latest_value":2652,"date":"22/03/2014"},
            {"indices":"NSE CNX DEFTY","year1_return": null,"latest_value":3624.45,"date":"17/04/2014"},
            {"indices":"HangSeng","year1_return": null,"latest_value":12298.56,"date":"19/10/2012"},
            {"indices":"BSE REALVOL-1MTH","year1_return": null,"latest_value":27.88,"date":"21/07/2015"},
            {"indices":"BSE REALVOL-2MTH","year1_return": null,"latest_value":26.86,"date":"21/07/2015"},
            {"indices":"BSE REALVOL-3MTH","year1_return": null,"latest_value":26.86,"date":"21/07/2015"},
            {"indices":"NSE CNX SMALLCAP","year1_return": null,"latest_value":5695.35,"date":"21/07/2015"},
            {"indices":"NSE CNX 200","year1_return": null,"latest_value":4500.85,"date":"21/07/2015"},
            {"indices":"NSE CNX AUTO","year1_return": null,"latest_value":8498.55,"date":"21/07/2015"},
            {"indices":"NSE CNX ENERGY","year1_return": null,"latest_value":8895.8,"date":"21/07/2015"},
            {"indices":"NSE CNX METAL","year1_return": null,"latest_value":2184.8,"date":"21/07/2015"},
            {"indices":"Brazil 10/40","year1_return": null,"latest_value":4,"date":"19/10/2012"},
            {"indices":"S&P CNX Media and Entertainment Index*","year1_return": null,"latest_value":2396.9,"date":"21/07/2015"},
            {"indices":"BSE BASIC INDUSTRIES INDEX","year1_return": null,"latest_value":9,"date":"19/10/2012"},
            {"indices":"India Power Index*","year1_return": null,"latest_value":1823.92,"date":"21/02/2013"},
            {"indices":"Lifex*","year1_return": null,"latest_value":3022.79,"date":"19/10/2012"},
            {"indices":"Mibor Overnight","year1_return": null,"latest_value":0.18,"date":"19/10/2012"}
        ];

        fundModel.find({}, function (err, data) {
            res.send(_indices);
        });
    });

    router.get('/gainer', function(req, res) {
        var _gainer = [{"scheme":"Birla Sun Life MNC Fund-Plan B (Growth)","year1_return":57.37,"latest_Nav":603.61,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"Birla Sun Life Mutual Fund"},
            {"scheme":"Sundaram Select Micro Cap - Series III - Regular Plan - Growth","year1_return":55.49,"latest_Nav":26.0062,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Sundaram Mutual Fund"},
            {"scheme":"SBI Small and Midcap Fund - Growth","year1_return":53.63,"latest_Nav":32.4148,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"SBI Funds Management"},
            {"scheme":"SBI Magnum Sector Funds Umbrella - Pharma - Growth","year1_return":50.59,"latest_Nav":142.2863,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"SBI Funds Management"},
            {"scheme":"Motilal Oswal MOSt Focused Multicap 35 Fund - Regular Plan - Growth","year1_return":49.67,"latest_Nav":18.3023,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Motilal Oswal Mutual Fund"},
            {"scheme":"DSP BlackRock Micro Cap Fund - Regular - Growth","year1_return":48.42,"latest_Nav":41.885,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"DSP BlackRock Mutual Fund"},
            {"scheme":"Motilal Oswal MOSt Focused Midcap 30 Fund - Regular Plan - Growth","year1_return":48.4,"latest_Nav":21.0253,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Motilal Oswal Mutual Fund"},
            {"scheme":"UTI MNC Fund - Growth","year1_return":48.34,"latest_Nav":156.634,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"UTI Asset Management"},
            {"scheme":"Sundaram SMILE Fund - Institutional Plan - Growth","year1_return":43.86,"latest_Nav":75.2596,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"Sundaram Mutual Fund"},
            {"scheme":"Sundaram SMILE Fund - Regular Plan - Growth","year1_return":43.01,"latest_Nav":72.7581,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Sundaram Mutual Fund"},
            {"scheme":"SBI Magnum Midcap Fund - Growth","year1_return":42.45,"latest_Nav":61.2977,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"SBI Funds Management"},
            {"scheme":"Franklin Build India Fund - Growth","year1_return":41.98,"latest_Nav":30.0046,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"Franklin Templeton Mutual Fund"},
            {"scheme":"Mirae Asset Emerging Bluechip Fund - Growth","year1_return":41.75,"latest_Nav":31.337,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Mirae Asset Mutual Fund"},
            {"scheme":"Kotak Emerging Equity Scheme - Growth","year1_return":41.33,"latest_Nav":26.809,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Kotak Mahindra Mutual Fund"},
            {"scheme":"IDBI Equity Advantage Fund - Regular Plan - Growth","year1_return":40.59,"latest_Nav":21.06,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"IDBI Mutual Fund"},
            {"scheme":"Escorts High Yield Equity Plan - Growth","year1_return":40.39,"latest_Nav":26.1921,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Escorts Mutual Fund"},
            {"scheme":"JPMorgan India Smaller Companies Fund - Growth","year1_return":40.09,"latest_Nav":20.027,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"JPMorgan Mutual Fund"},
            {"scheme":"Tata Mid Cap Growth Fund - Growth","year1_return":39.56,"latest_Nav":105.6646,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Tata Asset Management"},
            {"scheme":"Canara Robeco Emerging Equities - Growth","year1_return":39.53,"latest_Nav":62.16,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Canara Robeco Mutual Fund"},
            {"scheme":"Birla Sun Life Buy India Fund - Growth","year1_return":39.36,"latest_Nav":95.88,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Birla Sun Life Mutual Fund"},
            {"scheme":"Principal Emerging Bluechip Fund - Growth","year1_return":39.33,"latest_Nav":70.99,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"PRINCIPAL PNB Mutual Fund"},
            {"scheme":"Reliance Pharma Fund - Growth","year1_return":39.31,"latest_Nav":137.855,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"Reliance Mutual Fund"},
            {"scheme":"UTI Mid Cap Fund - Growth","year1_return":38.85,"latest_Nav":82.1545,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"UTI Asset Management"},
            {"scheme":"UTI Transportation and Logistics Fund - Growth","year1_return":38.46,"latest_Nav":88.218,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"UTI Asset Management"},
            {"scheme":"BNP Paribas Mid Cap Fund - Growth","year1_return":38.34,"latest_Nav":26.042,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"BNP Paribas Mutual Fund"}];

        fundModel.find({}, function (err, data) {
            res.send(_gainer);
        });
    });

    router.get('/looser', function(req, res) {
        var _looser = [{"scheme":"IIFL India Growth Fund - Regular Plan - Growth","year1_return":-98.64,"latest_Nav":11.0201,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"India Infoline Asset Management"},
            {"scheme":"IIFL India Growth Fund - Regular Plan - Growth","year1_return":-98.64,"latest_Nav":11.0201,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"India Infoline Asset Management"},
            {"scheme":"Kotak World Gold Fund - Standard Plan - Growth","year1_return":-45.45,"latest_Nav":5.949,"as_on":"23/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"Kotak Mahindra Mutual Fund"},
            {"scheme":"HSBC Brazil Fund - Growth","year1_return":-42.8,"latest_Nav":5.5463,"as_on":"24/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"HSBC Mutual Fund"},
            {"scheme":"DSP BlackRock World Mining Fund - Regular - Growth","year1_return":-42.07,"latest_Nav":5.5586,"as_on":"24/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"DSP BlackRock Mutual Fund"},
            {"scheme":"DSP BlackRock World Gold Fund - Regular - Growth","year1_return":-37.67,"latest_Nav":7.7344,"as_on":"24/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"DSP BlackRock Mutual Fund"},
            {"scheme":"Motilal Oswal MOSt Shares M50 ETF","year1_return":-27.24,"latest_Nav":81.8482,"as_on":"24/07/2015","category":"Equity - Diversified","schemeType":"Open Ended","amc":"Motilal Oswal Mutual Fund"},
            {"scheme":"Birla Sun Life Global Commodities Fund - Regular Plan - Growth","year1_return":-26.83,"latest_Nav":10.9188,"as_on":"23/07/2015","category":"Alternative Asset Class","schemeType":"Open Ended","amc":"Birla Sun Life Mutual Fund"},
            {"scheme":"Birla Sun Life Latin America Equity Fund - Regular Plan - Growth","year1_return":-26.5,"latest_Nav":8.18,"as_on":"23/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"Birla Sun Life Mutual Fund"},
            {"scheme":"Mirae Asset Global Commodity Stocks Fund - Growth","year1_return":-26.39,"latest_Nav":10.149,"as_on":"24/07/2015","category":"Equity - Sectoral","schemeType":"Open Ended","amc":"Mirae Asset Mutual Fund"},
            {"scheme":"DSP BlackRock World Energy Fund - Regular - Growth","year1_return":-22.75,"latest_Nav":12.1004,"as_on":"24/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"DSP BlackRock Mutual Fund"},
            {"scheme":"Sundaram Global Advantage Fund - Regular - Growth","year1_return":-13.51,"latest_Nav":13.6679,"as_on":"22/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"Sundaram Mutual Fund"},
            {"scheme":"IDBI Gold Fund - Growth","year1_return":-12.78,"latest_Nav":7.7242,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"IDBI Mutual Fund"},
            {"scheme":"Kotak Gold Fund - Growth","year1_return":-12.52,"latest_Nav":10.9029,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"Kotak Mahindra Mutual Fund"},
            {"scheme":"Religare Invesco Gold Fund - Growth","year1_return":-11.52,"latest_Nav":8.2592,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"Religare Invesco"},
            {"scheme":"HSBC Emerging Markets Fund - Growth","year1_return":-11.47,"latest_Nav":10.736,"as_on":"24/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"HSBC Mutual Fund"},
            {"scheme":"Quantum Gold Savings Fund - Growth","year1_return":-11.24,"latest_Nav":10.7569,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"Quantum Mutual Fund"},
            {"scheme":"Axis Gold Fund - Growth","year1_return":-10.84,"latest_Nav":8.7828,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"Axis Asset Management"},
            {"scheme":"Canara Robeco Gold Savings Fund - Growth","year1_return":-10.76,"latest_Nav":7.9254,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"Canara Robeco Mutual Fund"},
            {"scheme":"Reliance Gold Savings Fund - Growth","year1_return":-10.75,"latest_Nav":11.2302,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"Reliance Mutual Fund"},
            {"scheme":"Birla Sun Life Gold Fund - Growth","year1_return":-10.4,"latest_Nav":8.5526,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"Birla Sun Life Mutual Fund"},
            {"scheme":"L&T Global Real Assets Fund-Growth Option","year1_return":-9.96,"latest_Nav":17.829,"as_on":"24/07/2015","category":"Equity - International","schemeType":"Open Ended","amc":"L&T Mutual Fund"},
            {"scheme":"HDFC Gold Fund - Growth","year1_return":-9.63,"latest_Nav":8.731,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"HDFC Mutual Fund"},
            {"scheme":"SBI Gold Fund - Growth","year1_return":-9.61,"latest_Nav":8.5045,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"SBI Funds Management"},
            {"scheme":"ICICI Prudential Regular Gold Savings Fund - Growth","year1_return":-8.01,"latest_Nav":9.1621,"as_on":"24/07/2015","category":"Gold","schemeType":"Open Ended","amc":"ICICI Prudential Mutual Fund"}];

        fundModel.find({}, function (err, data) {
            res.send(_looser);
        });
    });
}

module.exports = defaultController;