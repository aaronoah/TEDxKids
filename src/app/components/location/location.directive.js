var location = (function($){
    try{
        if(!$ || BMap == 'undefined') return;
    }catch(e){
        console.log(e);
    }
    var coordinates = []; //user supplied x-y coordis
    var address; //user supplied address
    var detailImage; //user supplied detailed address map (small scale)
    var locationNode; //user specified location node
    
    return {
        setCoordinates: function(coordis){
            coordinates = coordis;
        },
        setAddress: function(addr){
            address = addr;
        },
        setDetailImage: function(detail){
            detailImage = detail;
        },
        setNode: function(node){
            locationNode = node;
        },
        setPopover: function(){
            if(locationNode == 'undefined') return;
            $(locationNode).popover({ // map popover settings
                title: "活动地址",
                placement: "top",
                animation: true,
                template: "<div class='popover' role='tooltip'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content' id='map-content'></div></div>",
                trigger: 'click',
                //viewport: '#map-content',
            });
            $(locationNode).on('shown.bs.popover', function(){ //load the map immediately after the 'show' event is fired
                if (document.getElementById("map-content")) {
                //using Baidu map apis
                var map = new BMap.Map("map-content");
                var point = new BMap.Point(coordinates.indexOf(0), coordinates.indexOf(1));
                map.centerAndZoom(point,17);
                map.addControl(new BMap.NavigationControl());
                map.addControl(new BMap.ScaleControl());
                map.addControl(new BMap.OverviewMapControl());
                map.enableScrollWheelZoom(true); // mouse scroll wheel control
                //map.addControl(new BMap.MapTypeControl());
                var marker = new BMap.Marker(point);
                marker.disableDragging();
                map.addOverlay(marker);
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                var sContent =
	'<h4 style="margin:0 0 5px 0;padding:0.2em 0">3ESPACE</h4>' +
	'<a href="#"><img style="float:right;margin:4px" id="navImage" src="app/images/nav-image.png" width="139" height="104" title="3ESAPCE"/></a>' +
	'<p style="margin:0;line-height:1.5;font-size:13px;text-indent:2em">地址：' + address + '</p>' +
	'</div>';
	            var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
	            if(detailImage){
                    marker.addEventListener("click", function(){
		            this.openInfoWindow(infoWindow) //开启信息窗口
                    //strip settings
                    $("#navImage").click(function(e){
                        e.preventDefault();
                        if(typeof window.Strip == 'undefined'){
                            throw new Error('Strip plugin is not loaded');
                        }else {
                            Strip.show({
                                url: '/app/images/nav-image.png',
                                caption: '3ESPACE 地址',
                                options:{
                                    side: 'right'
                                }
                            });
                        }
                    });
	                }); //end event listener
                }
                } //end if statement
            });
            $(locationNode).on('hide.bs.popover', function(){
                //clear the map cache
                //console.log("hide!!");
            });
        }
    }
})(jQuery);