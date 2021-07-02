function initMap() {
  const styledMapType = new google.maps.StyledMapType(
    [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#46bcec",
          },
          {
            visibility: "on",
          },
        ],
      },
    ],
    { name: "Styled Map" }
  );

  const uluru = { lat: 40.409264, lng: 49.867092 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
    disableDefaultUI: true,
  });

  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  const infowindow = new google.maps.InfoWindow();
  let marker;

  var locations = [
    [
      `  <div class="mapWrapper">
    <img src="../img/map.png" />
    <div class="mapWrapperRIght">
    <p>
        Baby Atlas Kids Store, Cetinjska ulica, lamela 5/22, City kvart, 81000 Podgorica
    </p>
    <p>
        <span>Telefon:</span>
        <a href="tel:+382 (0)68 054 444">+382 (0)68 054 444</a>
    </p>
    <p>
        <span>E-mail:</span>
        <a href="mailto:office@babyatlas.me">office@babyatlas.me</a>
    </p>
  </div>
  <a href="#" id="getDirection">
    Get Direction
    <img src="../img/direction.png" />
  </a>
  </div>`,
      40.409264,
      49.867092,
    ],

    [
      `  <div class="mapWrapper">
    <img src="../img/map.png" />
    <div class="mapWrapperRIght">
    <p>
        Baby Atlas Kids Store, Cetinjska ulica, lamela 5/22, City kvart, 81000 Podgorica
    </p>
    <p>
        <span>Telefon:</span>
        <a href="tel:+382 (0)68 054 444">+382 (0)68 054 444</a>
    </p>
    <p>
        <span>E-mail:</span>
        <a href="mailto:office@babyatlas.me">office@babyatlas.me</a>
    </p>
  </div>
  <a href="#" id="getDirection">
    Get Direction
    <img src="../img/direction.png" />
  </a>
  </div>`,
      40.067092,
      49.067092,
    ],
  ];

  console.log(locations);

  var icon = {
    url: "./img/mapPin.png", // url
    scaledSize: new google.maps.Size(30, 40), // scaled size
  };

  let i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: { ...uluru, lat: locations[i][1], lng: locations[i][2] },
      map,
      icon: icon,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );

    infowindow.setContent(locations[i][0]);
    infowindow.open(map, marker);
    infowindow.open(map, marker);
  }
}
