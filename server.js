const express = require("express")
const app = express();

app.get("/",(req, res)=>{
    res.send([
        {
            job: "Mechanic",
            country : "Europe",
            salary : `700 euros`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
                "Good conduct"
            ],
            benefits:[
                "Free medical cover",
                "Free transport",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "Bike Riders",
            country : "Europe",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "maid",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "guards",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "guards",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "guards",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        }
        ,
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "guards",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "guards",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        }
        ,
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "guards",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "guards",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
        {
            job: "loaders",
            country : "dubai",
            salary : `40,000`,
            agencyFee : `120,000`,
            requirements:[
                "Curricullum Vitae(C.V)",
                "Passport",
            ],
            benefits:[
                "Free medical cover",
                "Free accommodation",
                "Free food"
            ]
        },
    ])
})

app.get("/rada", (req, res)=>{
    res.send("Hello")
})

app.listen((3000), ()=>{
    console.log("server is on")
})