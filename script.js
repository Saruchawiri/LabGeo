let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 13.7563, lng: 100.5018 },
    zoom: 12
  });

  const poiLocations = [
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

  poiLocations.forEach(function(poi) {
    const marker = new google.maps.Marker({
      position: { lat: poi.lat, lng: poi.lng },
      map: map,
      title: poi.name
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${poi.name}</h3><p>${poi.description}</p><a href="${poi.url}" target="_blank">เพิ่มเติม</a>`
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  });

  // ปักหมุดตำแหน่งของฉัน (ตัวอย่าง: สยามพารากอน)
  const myLocation = { lat: 13.7460, lng: 100.5345 };
  const myMarker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "ตำแหน่งของฉัน",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
  });

  const myInfoWindow = new google.maps.InfoWindow({
    content: "<h3>ตำแหน่งของฉัน</h3><p>นี่คือตำแหน่งปัจจุบันของฉัน (ตัวอย่าง)</p>"
  });

  myMarker.addListener('click', function() {
    myInfoWindow.open(map, myMarker);
  });
}

