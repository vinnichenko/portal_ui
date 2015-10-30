mapInitialize();
function mapInitialize() {
    var styles = [
        {
            stylers: [
                { saturation: -100 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    var myLatlng = new google.maps.LatLng(24.63247, 46.7221);
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        center: myLatlng,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        streetViewControl: false,
        panControl: false,
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var markerImage = 'data:image/png;base64,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';
    var marker = new MarkerWithLabel({
        position: myLatlng,
        map: map,
        icon: markerImage
    });
    map.setOptions({styles: styles});
}