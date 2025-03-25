document.addEventListener("DOMContentLoaded", function () {
    const lampuIds = ["rK1", "rK2", "rK3"];
    const toggleIds = ["toggle-rk1", "toggle-rk2", "toggle-rk3"];
    const tombolNyalakan = document.getElementById("nyalakanSemua");
    const tombolMatikan = document.getElementById("matikanSemua");

    function saklar() {
        toggleIds.forEach((id, index) => {
            let toggle = document.getElementById(id);
            let lampu = document.getElementById(lampuIds[index]);

            lampu.src = toggle.checked ? "assets/images/on.gif" : "assets/images/off.gif";
        });
    }

    // Event listener buat tombol "NYALAKAN SEMUA"
    tombolNyalakan.addEventListener("click", function () {
        toggleIds.forEach(id => document.getElementById(id).checked = true);
        saklar();
    });

    // Event listener buat tombol "MATIKAN SEMUA"
    tombolMatikan.addEventListener("click", function () {
        toggleIds.forEach(id => document.getElementById(id).checked = false);
        saklar();
    });

    // Supaya toggle bisa diklik satuan & lampunya langsung berubah
    toggleIds.forEach(id => {
        document.getElementById(id).addEventListener("change", saklar);
    });

    // // Geser ke kiri (Backward)
    // tombolBackward.addEventListener("click", function () {
    //     let firstState = document.getElementById(toggleIds[0]).checked; // Simpan kondisi lampu pertama
    //     for (let i = 0; i < 3; i++) {
    //         document.getElementById(toggleIds[i]).checked = document.getElementById(toggleIds[i + 1]).checked;
    //     }
    //     document.getElementById(toggleIds[3]).checked = firstState; // Putar ke akhir
    //     saklar();
    // });
});
