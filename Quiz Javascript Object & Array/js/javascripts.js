let users = [];
users[0] = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    isHavePet: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019
        },
        {
            name: "SMA 03",
            city: "Tangerang"
        }
    ],
    favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
};

users[1] = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: ["Blue", "Black", "Grey"],
    isHavePet: "No",
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: 2016
        },
        {
            name: "Universitas Maju",
            city: "Tangerang"
        }
    ],
    favoriteRestaurant: ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]
};

console.log("Nama : " + users[1].name);
console.log("SMA : " + users[1].education[2].name);
console.log("Kota : " + users[1].education[2].city);
console.log("Makanan Favorit : " + users[1].favoriteRestaurant[5]);

let nama_users = document.getElementById('nama');
let sekolah = document.getElementById('sma');
let kota = document.getElementById('kota');
let mknFav = document.getElementById('makanan');

nama_users.innerHTML = users[1].name;
sekolah.innerHTML = users[1].education[2].name;
kota.innerHTML = users[1].education[2].city;
mknFav.innerHTML = users[1].favoriteRestaurant[5];