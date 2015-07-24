/**
 * Created by wizdev on 7/25/2015.
 */
(function () {
    "use strict";
    define(['enricher'], function (app) {
        app.directive('fundFilters', function() {
            return {
                restrict: 'AE',
                scope:{
                    record:'='
                },
                templateUrl: 'client/js/plugins/fund-filters/fund-filters.html',
                link:function($scope, element, attr){

                },
                controller:function($scope){
                    $scope.fundFilters =
                        [
                            {
                                name : 'AMC',
                                data: [
                                    { id:1 , value: 'Axis Asset Management'},
                                    { id:2 , value: 'Baroda Pioneer'},
                                    { id:3 , value: 'Birla Sun Life Mutual Fund'},
                                    { id:4 , value: 'BNP Paribas Mutual Fund'},
                                    { id:5 , value: 'BOI AXA Mutual Fund'},
                                    { id:6 , value: 'Canara Robeco Mutual Fund'},
                                    { id:7 , value: 'Deutsche Mutual Fund'},
                                    { id:8 , value: 'DSP BlackRock Mutual Fund'},
                                    { id:9 , value: 'Edelweiss Mutual Fund'},
                                    { id:10 , value: 'Escorts Mutual Fund'},
                                    { id:11 , value: 'Franklin Templeton Mutual Fund'},
                                    { id:12 , value: 'Goldman Sachs Mutual Fund'},
                                    { id:13 , value: 'HDFC Mutual Fund'},
                                    { id:14 , value: 'HSBC Mutual Fund'},
                                    { id:15 , value: 'ICICI Prudential Mutual Fund'},
                                    { id:16 , value: 'IDBI Mutual Fund'},
                                    { id:17 , value: 'IDFC Mutual Fund'},
                                    { id:18 , value: 'India Infoline Asset Management'},
                                    { id:19 , value: 'Indiabulls Mutual Fund'},
                                    { id:20 , value: 'JM Financial Mutual Fund'},
                                    { id:21 , value: 'JPMorgan Mutual Fund'},
                                    { id:22 , value: 'Kotak Mahindra Mutual Fund'},
                                    { id:23 , value: 'L&amp;T Mutual Fund'},
                                    { id:24 , value: 'LIC NOMURA Mutual Fund'},
                                    { id:25 , value: 'Mirae Asset Mutual Fund'},
                                    { id:26 , value: 'Motilal Oswal Mutual Fund'},
                                    { id:27 , value: 'Peerless Mutual Fund'},
                                    { id:28 , value: 'Pramerica Mutual Fund'},
                                    { id:29 , value: 'PRINCIPAL PNB Mutual Fund'},
                                    { id:30 , value: 'Quantum Mutual Fund'},
                                    { id:31 , value: 'Reliance Mutual Fund'},
                                    { id:32 , value: 'Religare Invesco'},
                                    { id:21 , value: 'Sahara Mutual'},
                                    { id:22 , value: 'SBI Funds Management'},
                                    { id:23 , value: 'Sundaram Mutual Fund'},
                                    { id:24 , value: 'Tata Asset Management'},
                                    { id:25 , value: 'Taurus Asset'},
                                    { id:26 , value: 'Union KBC Asset'},
                                    { id:27 , value: 'UTI Asset Management'}
                                ],
                                activeOption:'-- Select AMC --'
                            },
                            {
                                name : 'Type',
                                data: [
                                    { id:1 , value: 'Open Ended'},
                                    { id:2 , value: 'Close ended Listed'},
                                    { id:3 , value: 'Interval'},
                                    { id:4 , value: 'Others'},
                                    { id:5 , value: 'Close ended UnListed'},
                                    { id:6 , value: 'ETF'},
                                    { id:7 , value: 'Close Ended'},
                                    { id:8 , value: 'FMP'}
                                ],
                                activeOption:'-- Select Type --'
                            },
                            {
                                name : 'Plan Type',
                                data: [
                                        { id:1 , value: 'Institutional'},
                                        { id:1 , value: 'Others'},
                                        { id:1 , value: 'Regular Retail'}
                                    ],
                                activeOption:'-- Select Plan Type --'
                            },
                            {
                                name : 'Sub Category',
                                data:
                                    [
                                        { id:1 , value: 'Debt - General'},
                                        { id:1 , value: 'Debt - Liquid'},
                                        { id:1 , value: 'Debt - Short Term'},
                                        { id:1 , value: 'Debt-Gilt'},
                                        { id:1 , value: 'Gold'},
                                        { id:1 , value: 'Hybrid - Debt Oriented'},
                                        { id:1 , value: 'Others'}
                                    ],
                                activeOption:'-- Select Sub Category --'
                            }
                        ];
                }
            };
        });
    });
})();