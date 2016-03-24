var counter = (function() {
    'use strict';
    var timeNow = new Date(); //time now
    var timeEventBegin = new Date();  //time for event begin, e.g. "2016/01/09,14:00:00"
    var timeEventEnd = new Date();  //time for event end, the same
    var counterNode; //the node of which the counting event is fired upon
    
    return {
        setTimeBegin: function(begin_time){
            timeEventBegin.setDate(begin_time);
        },
        setTimeEnd: function(end_time){
            timeEventEnd.setDate(end_time);
        },
        setCounterNode: function(node){
            counterNode = document.getElementById(node);
        },
        start: function(){ //fires up the counting event
            if(timeEventBegin.getHours() == timeEventEnd.getHours()){
                return;
            }else if(counterNode === 'undefined'){
                return;
            }else if(timeEventBegin < timeEventEnd){
                var lefttime = parseInt((timeEventBegin.getTime()-timeNow.getTime())/1000);
                var endtime = parseInt((timeEventEnd.getTime()-timeNow.getTime())/1000);
                if(lefttime >= 0){
                    var d = parseInt(lefttime/(24*60*60));
                    //get hours and mod
                    var h = parseInt(lefttime/(60*60)%24);
                    //换算出分钟,一小时等于60分钟，所以对60取模
                    var m = parseInt(lefttime/60%60);
                    var s = parseInt(lefttime%60);
                    counterNode.innerHTML='距离活动开始还有 '+d+'天'+h+'小时'+m+'分钟'+s+'秒';
                }else if (lefttime < 0 && endtime >= 0) {
                    var h = parseInt(endtime/(60*60)%24);
                    //换算出分钟,一小时等于60分钟，所以对60取模
                    var m = parseInt(endtime/60%60);
                    var s = parseInt(endtime%60);
                    counterNode.innerHTML='距离活动结束还剩 '+h+'小时'+m+'分钟'+s+'秒';
                }else if (endtime < 0) {
                    counterNode.innerHTML='第一次活动结束，感谢您的参与！';
                }
            }
        }
    }
})();