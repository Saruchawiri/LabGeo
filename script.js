let map;

function initMap() {
    const defaultLocation = { lat: 13.7563, lng: 100.5018 }; // Bangkok

    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 6,
    });

    // หาตำแหน่งผู้ใช้
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "You are here",
                    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                });

                map.setCenter(userLocation);
                map.setZoom(10);
            },
            function () {
                alert("ไม่สามารถหาตำแหน่งผู้ใช้ได้");
            }
        );
    }

    // รายชื่อสถานที่ POI
    const poiList = [
        {
            name: "อนุสาวรีย์ประชาธิปไตย",
            lat: 13.7566,
            lng: 100.5010,
            description: "สถานที่สำคัญทางประวัติศาสตร์ใจกลางกรุงเทพฯ",
            url: "https://th.wikipedia.org/wiki/อนุสาวรีย์ประชาธิปไตย"
        },
        {
            name: "วัดอรุณราชวรารามราชวรมหาวิหาร",
            lat: 13.7436,
            lng: 100.4889,
            description: "วัดริมแม่น้ำเจ้าพระยาที่มีสถาปัตยกรรมโดดเด่น",
            url: "https://www.watarun.net"
        },
        {
            name: "พระพุทธมิ่งมงคลเอกนาคคีรี",
            lat: 7.8276,
            lng: 98.3031,
            description: "พระพุทธรูปองค์ใหญ่ตั้งอยู่บนยอดเขาที่ภูเก็ต",
            url: "https://th.wikipedia.org/wiki/พระพุทธมิ่งมงคลเอกนาคคีรี"
        },
        {
            name: "พระบรมมหาราชวัง",
            lat: 13.7500,
            lng: 100.4913,
            description: "พระราชวังหลวงอันวิจิตรงดงามของไทย",
            url: "https://www.royalgrandpalace.th"
        },
        {
            name: "วัดพระธาตุดอยสุเทพราชวรวิหาร",
            lat: 18.8049,
            lng: 98.9215,
            description: "วัดที่ตั้งอยู่บนยอดดอยสุเทพ จังหวัดเชียงใหม่",
            url: "https://www.watphrathatdoisuthep.com"
        }
    ];

    // วนลูปสร้าง marker และ info window
    poiList.forEach(poi => {
        const marker = new google.maps.Marker({
            position: { lat: poi.lat, lng: poi.lng },
            map: map,
            title: poi.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div>
                    <h3>${poi.name}</h3>
                    <p>${poi.description}</p>
                    <a href="${poi.url}" target="_blank">ดูเพิ่มเติม</a>
                </div>
            `
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}
