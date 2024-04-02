

// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)
// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

// 4. toLocaleDateString(); ->arashdir

// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)

function colorfulOutput(gün, dəqiqə, saniyə) {
    var colors = ['red', 'green', 'blue','yellow','black'];
    var günColor = colors[Math.floor(Math.random() * colors.length)];
    var dəqiqəColor = colors[Math.floor(Math.random() * colors.length)];
    var saniyəColor = colors[Math.floor(Math.random() * colors.length)];

    console.log(`%c${gün} gün %c${dəqiqə} dəqiqə %c${saniyə} saniyə`, `color: ${günColor}`, `color: ${dəqiqəColor}`, `color: ${saniyəColor}`);
}
colorfulOutput(5, 30, 15);





// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.


let telebeler = [
    {
        id: 4,
        ad: "Gulu",
        soyad: "Bayramzade",
        yas: 19,
        hobbiler: ["kitab oxumaq", "reqs etmek"]
    },
    {
        id: 5,
        ad: "Mehdi",
        soyad: "Mirzeyev",
        yas: 19,
        hobbiler: ["musiqi dinlemek", "seyahet etmek"]
    },
    {
        id: 6,
        ad: "Sara",
        soyad: "Ibrahimova",
        yas: 20,
        hobbiler: ["film izlemek", "musiqi dinlmekmek"]
    }
];

function searchByName(name) {
    for (let student of telebeler) {
        if (student.ad.toLowerCase() === name.toLowerCase()) {
            return student.ad;
        }
    }
    return null;
}

let searchedName = "Mehdi";
let result = searchByName(searchedName);

if (result !== null) {
    console.log("Axtarilan telebenin adi: " + result);
} else {
    console.log("Axtarilan telebenin adi tapilmadi");
}




// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h


let kelime = prompt("Bir kelime girin:");
let uzunluk = kelime.length;

for (let i = 0; i < uzunluk * 2 - 1; i++) {
    let tempKelime = "";
    let count = i < uzunluk ? i : uzunluk * 2 - i - 2;

    for (let j = 0; j <= count; j++) {
        tempKelime += kelime[j];
    }
    console.log(tempKelime);
}