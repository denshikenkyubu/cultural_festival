if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            document.getElementById("location").textContent =
                `緯度: ${lat}\n経度: ${lon}`;
        },
        function(error) {
            document.getElementById("location").textContent =
                "位置情報を取得できませんでした。";
        }
    );
} else {
    document.getElementById("location").textContent =
        "このブラウザは位置情報に対応していません。";
}
