var map;

function initMap() {
  // กำหนดจุดเริ่มต้นของแผนที่ (กรุงเทพฯ)
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 13.7563, lng: 100.5018 },  // กำหนดที่ตั้งของแผนที่เริ่มต้น
    zoom: 12
  });

  // สถานที่ POI
  var poiLocations = [
    { 
      name: "อนุสาวรีย์ประชาธิปไตย", 
      lat: 13.7613, 
      lng: 100.5018, 
      description: "อนุสาวรีย์ประชาธิปไตย เป็นสัญลักษณ์ของการต่อสู้เพื่อประชาธิปไตยในประเทศไทย", 
      url: "https://th.wikipedia.org/wiki/อนุสาวรีย์ประชาธิปไตย" 
    },
    { 
      name: "วัดอรุณราชวรารามราชวรมหาวิหาร", 
      lat: 13.7437, 
      lng: 100.4880, 
      description: "วัดอรุณราชวราราม เป็นหนึ่งในวัดที่มีชื่อเสียงของประเทศไทย", 
      url: "https://th.wikipedia.org/wiki/วัดอรุณราชวราราม" 
    },
    { 
      name: "พระพุทธมิ่งมงคลเอกนาคคีรี", 
      lat: 13.8295, 
      lng: 100.4772, 
      description: "พระพุทธมิ่งมงคลเอกนาคคีรี เป็นพระพุทธรูปประจำจังหวัดปทุมธานี", 
      url: "https://th.wikipedia.org/wiki/พระพุทธมิ่งมงคลเอกนาคคีรี" 
    },
    { 
      name: "พระบรมมหาราชวัง", 
      lat: 13.7515, 
      lng: 100.4922, 
      description: "พระบรมมหาราชวัง เป็นศูนย์กลางของการปกครองและวัฒนธรรมของไทย", 
      url: "https://th.wikipedia.org/wiki/พระบรมมหาราชวัง" 
    },
    { 
      name: "วัดพระธาตุดอยสุเทพราชวรวิหาร", 
      lat: 18.7880, 
      lng: 98.9790, 
      description: "วัดพระธาตุดอยสุเทพ เป็นวัดสำคัญและสถานที่ท่องเที่ยวที่ได้รับความนิยม", 
      url: "https://th.wikipedia.org/wiki/วัดพระธาตุดอยสุเทพ" 
    }
  ];

  // การสร้าง Marker และ InfoWindow สำหรับแต่ละ POI
  poiLocations.forEach(function(poi) {
    var marker = new google.maps.Marker({
      position: {lat: poi.lat, lng: poi.lng},
      map: map,
      title: poi.name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: "<h3>" + poi.name + "</h3><p>" + poi.description + "</p><a href='" + poi.url + "' target='_blank'>เพิ่มเติม</a>"
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  });
}
