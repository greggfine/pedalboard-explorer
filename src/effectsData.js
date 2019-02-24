const initialState  = {
    effects: [
        {    
        "category": "distortion",
        "brands": [
            {
                name: 'Fulltone OCD',
                imgURL: './images/ocd.png'            },
            {
                name: 'Boss DS-1',
                imgURL: 'https://www.malmomusikaffar.com/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/7/6/765811580584.jpg',
            },
            {
                name: 'Ibanez TS9',
                imgURL: 'http://files.effectsdatabase.com/gear/pics/proco_rat-1st_001.jpg',
            },
            {
                name: 'EHX Big Muff',
                imgURL: 'https://media.sweetwater.com/api/i/q-82__ha-f5408f34fbe4882f__hmac-b36ebd19db9ead8b6f01bd0424bd9d1b7a89f763/images/items/750/JB2-large.jpg',
            },
            {
                name: 'Way Huge Saucy',
                imgURL: 'https://images-na.ssl-images-amazon.com/images/I/71uOgGQP8mL._SL1200_.jpg',
            },
            {
                name: 'Boss SD-1',
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlidkJhVfvQV8A-SI_TOvbGwW1ud1FB97QWoy5C4022L2H4vqI',
            },
            {
                name: 'ProCo Rat2',
                imgURL: 'https://images.reverb.com/image/upload/s--29Pl1gqt--/t_card-square/v1548719183/w5k9m7fmjosnivv1jsmh.jpg',
            },
            {
                name: 'EHX Soul Food',
                imgURL: 'https://thehub.musiciansfriend.com/images/pedals/boss-ch-1-super-chorus-pedal-454x800.jpg',
            },
            {
                name: 'JHS Bonsai',
                imgURL: 'https://static1.squarespace.com/static/52897f06e4b0b40559be4067/59164538f7e0ab8d4783de80/591645386a496322aaa1483d/1494631779660/boss+ds1.jpg?format=500w',
            },
            {
                name: 'MXR M75',
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1isL0mCixwZLY-i8Qkt2r-1OZ00fG2hTz51IzgCYQN1KHYE7oQ',
            }
            ],
        },
        {    
            "category": "reverb",
            "brands": [
                {
                    name: 'TC Electronic Skysurfer',
                    imgURL: './images/ocd.png'            },
                {
                    name: 'EXH Canyon',
                    imgURL: 'https://www.malmomusikaffar.com/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/7/6/765811580584.jpg',
                },
                {
                    name: 'MXR M169',
                    imgURL: 'http://files.effectsdatabase.com/gear/pics/proco_rat-1st_001.jpg',
                },
                {
                    name: 'Boss RV-6',
                    imgURL: 'https://media.sweetwater.com/api/i/q-82__ha-f5408f34fbe4882f__hmac-b36ebd19db9ead8b6f01bd0424bd9d1b7a89f763/images/items/750/JB2-large.jpg',
                },
                {
                    name: 'Keeley Caverns V2',
                    imgURL: 'https://images-na.ssl-images-amazon.com/images/I/71uOgGQP8mL._SL1200_.jpg',
                },
                {
                    name: 'DigiTech Polara',
                    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlidkJhVfvQV8A-SI_TOvbGwW1ud1FB97QWoy5C4022L2H4vqI',
                },
                {
                    name: 'EHX Holy Grail',
                    imgURL: 'https://images.reverb.com/image/upload/s--29Pl1gqt--/t_card-square/v1548719183/w5k9m7fmjosnivv1jsmh.jpg',
                },
                {
                    name: 'Fender Marine',
                    imgURL: 'https://thehub.musiciansfriend.com/images/pedals/boss-ch-1-super-chorus-pedal-454x800.jpg',
                },
                {
                    name: 'TC Electronic Gauss',
                    imgURL: 'https://static1.squarespace.com/static/52897f06e4b0b40559be4067/59164538f7e0ab8d4783de80/591645386a496322aaa1483d/1494631779660/boss+ds1.jpg?format=500w',
                },
                {
                    name: 'TC Electronic Flourescence',
                    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1isL0mCixwZLY-i8Qkt2r-1OZ00fG2hTz51IzgCYQN1KHYE7oQ',
                }
                ],
            },
        // {
        // "category": "reverb",
        // "brands": [
        //         "digitech", "oleo", "smith", "wesson", "spam",
        //         "butter", "salt", "pepper", "loco", "dam"
        //         ]
        // },
        // {    
        // "category": "modulation",
        // "brands": [
        //     "rat", "boss", "bigMuff", "roland", "dodd",
        //     "yamaha", "harmon", "exh", "pump", "jhs"
        //     ],
        // },
        // {
        // "category": "eq",
        // "brands": [
        //         "digitech", "oleo", "smith", "wesson", "spam",
        //         "butter", "salt", "pepper", "loco", "dam"
        //         ]
        // },
        // {    
        // "category": "fuzz",
        // "brands": [
        //     "rat", "boss", "bigMuff", "roland", "dodd",
        //     "yamaha", "harmon", "exh", "pump", "jhs"
        //     ],
        // },
        // {
        // "category": "delay",
        // "brands": [
        //         "digitech", "oleo", "smith", "wesson", "spam",
        //         "butter", "salt", "pepper", "loco", "dam"
        //         ]
        // },
        // {    
        // "category": "volume",
        // "brands": [
        //     "rat", "boss", "bigMuff", "roland", "dodd",
        //     "yamaha", "harmon", "exh", "pump", "jhs"
        //     ],
        // },
        // {
        // "category": "wah",
        // "brands": [
        //         "digitech", "oleo", "smith", "wesson", "spam",
        //         "butter", "salt", "pepper", "loco", "dam"
        //         ]
        // },
        // {    
        // "category": "compressor",
        // "brands": [
        //     "rat", "boss", "bigMuff", "roland", "dodd",
        //     "yamaha", "harmon", "exh", "pump", "jhs"
        //     ],
        // },
        // {
        // "category": "utility",
        // "brands": [
        //         "digitech", "oleo", "smith", "wesson", "spam",
        //         "butter", "salt", "pepper", "loco", "dam"
        //         ]
        // }
        ],
        selectedEffect: []
    }
    // ],
    // effectBrands: [{brands:[]}],
    // effectName: 'distortion',
    // selectedSlot: 1,
    // pickedPedals: []
// }


export default initialState;


