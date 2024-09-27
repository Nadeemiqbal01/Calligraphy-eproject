function getId() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id')
    return id;

}

let trainerData = [{

    // gucci starts
    
        id: 1,
        imgSrc: '../Assets/ProductsImage/Product2.jpg',
        name: "Kiswa Tul Kabaa’",
        details: "100 % Hand painted Arabic calligraphy painting.",
        price: "Price:$950",
    },
    {
        id: 2,
        imgSrc: '../Assets/ProductsImage/Product1.jpg',
        name: "AR-REHMAN",
        details: " Acrylic seascape painting with golden Allah’s name calligraphy.",
        price: " Price:$780",
    },

    {
        id: 3,
        imgSrc: '../Assets/ProductsImage/Product3.jpg',
        name: "Allah name calligraphy",
        details: " Allah name calligraphy.",
        price: " Price:$890",

    },
    {
        id: 4,
        imgSrc: '../Assets/ProductsImage/Product4.jpg',
        name: " Muhammad (SAW) Name calligraphy",
        details: " Muhammad (SAW) Name Arabic calligraphy.",
        price: " Price:$960",
    },
    {
        id: 5,
        imgSrc: '../Assets/ProductsImage/Product5.webp',
        name: "English Calligraphy",
        details: " Brush pen calligraphy in a watercolor splattered drawing sheet. Synthetic wood glass frame. A4 size.",
        price: " Price:$580",
    },
    {
        id: 6,
        imgSrc: '../Assets/ProductsImage/Product6.jpg',
        name: " CUSTOMIZED CALLIGRAPHY",
        details: "Name Calligraphy in English or Urdu OR Arabic verses on frames with beautiful themes.",
        price: " Price:$920",
    },
    {
        id: 7,
        imgSrc: '../Assets/ProductsImage/Product7.jpeg',
        name: " PERSONAL GLASS CALLIGRAPHY",
        details: " Order your personal glass calligraphy.",
        price: " Price:$950",
    },
    {
        id: 8,
        imgSrc: '../Assets/ProductsImage/Product8.webp',
        name: " Personalised Calligraphy Quote",
        details: " Personalised Calligraphy Style Quote Print, Personalised Calligraphy Print, Bespoke Quote Print, Calligraphy print.",
        price: " Price:$820",
    },
    {
        id: 9,
        imgSrc: '../Assets/ProductsImage/Product9.jpg',
        name: " Ancient Chinese Calligraphy",
        details: " Chinese Ancient Calligraphy Printable, Antique Asian Writing Junk Journal, Historic Literature Script Ephemera, Digital Old Dyed Text Paper. ",
        price: " Price:$690",
    },
    {
        id: 10,
        imgSrc: '../Assets/ProductsImage/product10.webp',
        name: " Name in Chinese",
        details: " Name Calligraphy in chine verse on frames with beautiful themes.",
        price: " Price:$980",
    },
    {
        id: 11,
        imgSrc: "../Assets/ProductsImage/product11.webp",
        name: " Japanese Calligraphy",
        details: "Japanese Print | Calligraphy Japanese Chinese Art | Japanese Poster | LOVE Home Decor | Chinese, Kanji | Premium Wooden Framed Poster. ",
        price: " Price:$750",
    },
    {
        id: 12,
        imgSrc: '../Assets/ProductsImage/product12.jpeg',
        name: "Colorful Chines Calligraphy",
        details: "Beautiful handmade colorful calligraphy frame in chinese.",
        price: " Price:$890",
    }
    //products ends

]


getTrainerData();

function getTrainerData() {

    let id = getId();

    if (id == null) {
        id = 1;
    }

    trainerData.map((item) => {
        if (item.id == id) {
            document.getElementById('productImg').src = item.imgSrc;
            document.getElementById('name').innerText = item.name;
            document.getElementById('details').innerText = item.details;
            document.getElementById('price').innerText = item.price;

            // document.getElementById('trainerImg').src = item.imgSrc;
            // document.getElementById('specialties-container').innerText = item.specialize;
        }
    })

}