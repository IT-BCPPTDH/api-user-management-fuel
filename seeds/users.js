/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert(
        [
            {
              "JDE": 120020,
              "fullname": "Aan Solihin",
              "position": "Fuel Foreman",
              "division": "Warehouse"
            },
            {
              "JDE": 120022,
              "fullname": "Jon Moki BP",
              "position": "Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120023,
              "fullname": "Abdul Azis",
              "position": "Operator DT",
              "division": "MOD"
            },
            {
              "JDE": 120025,
              "fullname": "Abd. Hafid",
              "position": "Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120029,
              "fullname": "Abdul Rahman Kamarudin",
              "position": "Danru",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 120031,
              "fullname": "Abdul Wahab",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120039,
              "fullname": "Agus Arsyad",
              "position": "Tyre Supervisor",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120047,
              "fullname": "Agus Setyoharto",
              "position": "Trainer",
              "division": ""
            },
            {
              "JDE": 120048,
              "fullname": "Agus Supramono",
              "position": "Road Maint & Proj",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 120051,
              "fullname": "Agustinus Tangke",
              "position": "HD1500-7",
              "division": "MOD"
            },
            {
              "JDE": 120052,
              "fullname": "Ahmad Andi Pabanne",
              "position": "Foreman",
              "division": "MOD"
            },
            {
              "JDE": 120054,
              "fullname": "Akhmad Rusdi",
              "position": "Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120062,
              "fullname": "Alirman",
              "position": "Fuel Foreman",
              "division": ""
            },
            {
              "JDE": 120066,
              "fullname": "Amir",
              "position": "Serviceman Ii",
              "division": ""
            },
            {
              "JDE": 120075,
              "fullname": "Anas Laima",
              "position": "",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120076,
              "fullname": "Andarias Simon",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120079,
              "fullname": "Andi Jamaluddin",
              "position": "Pit Control",
              "division": "Dewatering Team Leader"
            },
            {
              "JDE": 120081,
              "fullname": "Andreas Safang",
              "position": "Foreman",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120083,
              "fullname": "Andris B Kumambong",
              "position": "Mechanich-2 Edt",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120086,
              "fullname": "Ansyari Bainudin",
              "position": "Operator Water Tank",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120088,
              "fullname": "Antoni Sianturi",
              "position": "Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120089,
              "fullname": "Antonius",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120091,
              "fullname": "Anyeq Sangku",
              "position": "",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 120095,
              "fullname": "Arbain Nansyah",
              "position": "Fuel Truck Driver",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120097,
              "fullname": "Ardany",
              "position": "Mechanic Ii",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120107,
              "fullname": "Aryadin",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120109,
              "fullname": "Asfar Abubakar",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 120110,
              "fullname": "Asmuni Ariyanto",
              "position": "Operator",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 120111,
              "fullname": "Asnan",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {"JDE": 120119, "fullname": "Bahrian", "position": "", "division": ""},
            {
              "JDE": 120122,
              "fullname": "Bahyudin",
              "position": "Security",
              "division": "Support-Security"
            },
            {
              "JDE": 120123,
              "fullname": "Bambang Baskoro",
              "position": "Grader Cat 24M",
              "division": ""
            },
            {
              "JDE": 120125,
              "fullname": "Bambang Kusindratno",
              "position": "Mining Analyst",
              "division": ""
            },
            {
              "JDE": 120131,
              "fullname": "Beddu Sama",
              "position": "Operator Gt",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120140,
              "fullname": "Budiansyah",
              "position": "",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 120142,
              "fullname": "Budiono Slamet",
              "position": "Operator Gt",
              "division": ""
            },
            {
              "JDE": 120143,
              "fullname": "Bullah",
              "position": "Operator",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 120144,
              "fullname": "Cecep Mukti Soleh",
              "position": "",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 120150,
              "fullname": "Darwis",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 120157,
              "fullname": "Dendi Supriadi",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120159,
              "fullname": "Depal",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120160,
              "fullname": "Deris Parintak",
              "position": "Pit South Sp Supervisor",
              "division": ""
            },
            {
              "JDE": 120165,
              "fullname": "Doel Basir",
              "position": "Foreman",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 120166,
              "fullname": "Duwi Yansyah",
              "position": "Managerial Training Admin",
              "division": ""
            },
            {
              "JDE": 120171,
              "fullname": "Edi Hari Sulistiono / RAMBO",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120174,
              "fullname": "Edi Wiyono",
              "position": "Edt Breakdown Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120177,
              "fullname": "Edison",
              "position": "Plant Admin",
              "division": "Support-Training"
            },
            {
              "JDE": 120179,
              "fullname": "Edy Sutrisno",
              "position": "Welder I",
              "division": ""
            },
            {
              "JDE": 120181,
              "fullname": "Efrain Junjung Rante",
              "position": "",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120186,
              "fullname": "Ely Yuliana",
              "position": "Bcp Ga Officer",
              "division": "PLM-General"
            },
            {
              "JDE": 120189,
              "fullname": "Erwin",
              "position": "Mechanic Iii",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120190,
              "fullname": "Evendry Girsang",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120196,
              "fullname": "Fahruddin Jen",
              "position": "Mechanic",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 120198,
              "fullname": "Pajri",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120199,
              "fullname": "Farman",
              "position": "Surveyor",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120200,
              "fullname": "Fathurrahman",
              "position": "Training Aid Dev Officer",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120201,
              "fullname": "Fazriansyah, Fajri oscar 2",
              "position": "Mine Service",
              "division": "PLM-MDT"
            },
            {
              "JDE": 120208,
              "fullname": "Fitriansyah",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {"JDE": 120212, "fullname": "Gatot Harsono", "position": "", "division": ""},
            {
              "JDE": 120216,
              "fullname": "Guntur S. Pingak",
              "position": "Storeman",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120220,
              "fullname": "Hairul",
              "position": "Serviceman I",
              "division": "Support-Training"
            },
            {
              "JDE": 120223,
              "fullname": "Hamli",
              "position": "Danru",
              "division": "Operation-Mining"
            },
            {
              "JDE": 120225,
              "fullname": "Hamsyah Ibat",
              "position": "Bcp Driver",
              "division": ""
            },
            {
              "JDE": 120228,
              "fullname": "Hardiyanto",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120230,
              "fullname": "Haris Khairullah",
              "position": "Operator",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 120231,
              "fullname": "Harisman",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120234,
              "fullname": "Hariyanto Arisno",
              "position": "Mechanic He Iii",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120235,
              "fullname": "Hariyanto Tajang",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 120237,
              "fullname": "Hartono Hamid",
              "position": "Recsue",
              "division": "Support-Security"
            },
            {
              "JDE": 120240,
              "fullname": "Hariadi",
              "position": "Mdt Superintendent",
              "division": "Support-Security"
            },
            {
              "JDE": 120243,
              "fullname": "Hasbi",
              "position": "Bcp Driver",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120244,
              "fullname": "Hasbullah",
              "position": "Plant Admin",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120246,
              "fullname": "Hasurungan Samosir",
              "position": "Foreman",
              "division": "UCOK"
            },
            {
              "JDE": 120249,
              "fullname": "Helmi",
              "position": "Surveyor",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 120257,
              "fullname": "Heriyanto",
              "position": "Bcp Ga Officer",
              "division": ""
            },
            {
              "JDE": 124671,
              "fullname": "Yohanis Pulo Pakulingan",
              "position": "Foreman",
              "division": "MOD"
            },
            {
              "JDE": 120263,
              "fullname": "Herry",
              "position": "Assistant Survey",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120265,
              "fullname": "Hery Trimanto",
              "position": "L/H Mechanic",
              "division": "PLM-MDT"
            },
            {
              "JDE": 120266,
              "fullname": "Hidayat",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 120274,
              "fullname": "Idham",
              "position": "Security",
              "division": "Support-Security"
            },
            {
              "JDE": 120276,
              "fullname": "Idris Pasongli",
              "position": "Operator",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 120277,
              "fullname": "Ilham",
              "position": "Survey Data Processing",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120279,
              "fullname": "Imam Syafi'I",
              "position": "Bcp Driver",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120281,
              "fullname": "Imran Jn",
              "position": "Welder I",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 120282,
              "fullname": "Indar Dewan",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120285,
              "fullname": "Indra Saputra (ACO)",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 120288,
              "fullname": "Irhan",
              "position": "Security",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120291,
              "fullname": "Iskandar",
              "position": "Operator",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 120293,
              "fullname": "Ismail",
              "position": "Fuel Truck Driver",
              "division": ""
            },
            {
              "JDE": 120305,
              "fullname": "Jon Moki BP",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120307,
              "fullname": "Jose Rizal Silalahi",
              "position": "Security",
              "division": "Support-Security"
            },
            {
              "JDE": 120312,
              "fullname": "Jumansyah Sahminan",
              "position": "Danru",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120317,
              "fullname": "Kahar",
              "position": "Operator",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120320,
              "fullname": "Khairil Anwar",
              "position": "Bcp Driver",
              "division": "Support-Security"
            },
            {
              "JDE": 120321,
              "fullname": "Kholik",
              "position": "Surveyor",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120322,
              "fullname": "Kokoh Agus Setyawan",
              "position": "Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120323,
              "fullname": "Kokon Kusniadi",
              "position": "Mechanic 2, Auxilary",
              "division": ""
            },
            {
              "JDE": 120326,
              "fullname": "Kristoforus Logho",
              "position": "Chainman",
              "division": "Support-Security"
            },
            {
              "JDE": 120336,
              "fullname": "Laurens Pangala",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120338,
              "fullname": "Lida",
              "position": "Supporting Foreman",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 120339,
              "fullname": "Lilien H Yudianto",
              "position": "Assistant To Hop",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 120341,
              "fullname": "Linda P Zaragoza",
              "position": "",
              "division": ""
            },
            {
              "JDE": 120343,
              "fullname": "Lobe Taufik",
              "position": "Operator",
              "division": "Support-Security"
            },
            {
              "JDE": 120344,
              "fullname": "Louke Kaunang",
              "position": "Operator",
              "division": "Support-Security"
            },
            {
              "JDE": 120348,
              "fullname": "M. Juhaeni Setiya",
              "position": "L/H Mechanic",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120351,
              "fullname": "M. Machrus",
              "position": "L/H Mechanic",
              "division": "Support-Security"
            },
            {
              "JDE": 120354,
              "fullname": "M. Nurung",
              "position": "Foreman",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120359,
              "fullname": "Mahmud",
              "position": "Mining Analyst Data",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 120363,
              "fullname": "Ma'Nur",
              "position": "Operator Gt",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 120365,
              "fullname": "Marganda Hutabarat",
              "position": "Grader Cat 24M",
              "division": ""
            },
            {
              "JDE": 120366,
              "fullname": "Mariono",
              "position": "Fuel Foreman",
              "division": "Warehouse"
            },
            {
              "JDE": 120367,
              "fullname": "Mariunus Minna",
              "position": "",
              "division": ""
            },
            {
              "JDE": 120368,
              "fullname": "Markus Mathen",
              "position": "Excavator Shutdown",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 120375,
              "fullname": "Martius Bin Indar",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120377,
              "fullname": "Masrul. A",
              "position": "Foreman",
              "division": "MSD"
            },
            {
              "JDE": 120378,
              "fullname": "Matius",
              "position": "Operation Trainer",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120382,
              "fullname": "Melky Ampow",
              "position": "Auxilliary Team Leader",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120386,
              "fullname": "Moch. Jarkasi",
              "position": "Fuel Truck Driver",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120392,
              "fullname": "M. Ahyar",
              "position": "Act Head Of Planning & Dev",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120394,
              "fullname": "Muchlis",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 120402,
              "fullname": "Muslan Bin Tinau",
              "position": "Auxilliary Sche Maint Frm",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 120405,
              "fullname": "Muslimin Wl",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120407,
              "fullname": "Mustafa Lainding",
              "position": "Fabrication Foreman",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 120409,
              "fullname": "Mustar",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120410,
              "fullname": "NAIBAHO, Eduardo Tahan",
              "position": "Act Long Term Plan Supt",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120413,
              "fullname": "Nanang Ardiansyah",
              "position": "Foreman",
              "division": "MOD"
            },
            {
              "JDE": 120418,
              "fullname": "Noftizar (Ujang)",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120424,
              "fullname": "Supandi",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120431,
              "fullname": "Pranto Sagala",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120432,
              "fullname": "Presdi Silalahi",
              "position": "Fluida Foreman",
              "division": "Support-Training"
            },
            {
              "JDE": 120439,
              "fullname": "Rahmadi",
              "position": "Hd730",
              "division": "MOD"
            },
            {
              "JDE": 120441,
              "fullname": "Rahmat",
              "position": "Mechanich-1 Edt",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 120443,
              "fullname": "Ramijo",
              "position": "Foreman",
              "division": "Enviro"
            },
            {
              "JDE": 120444,
              "fullname": "Ramlan",
              "position": "Security",
              "division": "PLM-General"
            },
            {
              "JDE": 120454,
              "fullname": "Risman",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120455,
              "fullname": "Robertus B Mbete",
              "position": "Excavator Breakdown",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 120462,
              "fullname": "Ruben Tinau",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 120464,
              "fullname": "Rudiansyah",
              "position": "Tyreman I",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120465,
              "fullname": "Rurun Rudianto",
              "position": "Mine Equipment Support",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120466,
              "fullname": "Rusdi B",
              "position": "Dozer Kom D375 / 10Rt",
              "division": "MOD"
            },
            {
              "JDE": 120467,
              "fullname": "Ruslan",
              "position": "Foreman",
              "division": "MSD"
            },
            {
              "JDE": 120469,
              "fullname": "Rusli. L",
              "position": "Mechanich-2 Edt",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120471,
              "fullname": "Rusman Nuriyah",
              "position": "Fuelman Dispatcher",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120476,
              "fullname": "Sahmil Salim B. VJ",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120477,
              "fullname": "Said Kabirullah",
              "position": "Danru",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120480,
              "fullname": "Sakdi",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120484,
              "fullname": "Sandi Saputra",
              "position": "Top Soil, Rehab & Project",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 120487,
              "fullname": "Sapril",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 120488,
              "fullname": "Sardi",
              "position": "Assistant Survey",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 120489,
              "fullname": "Sariadi",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120490,
              "fullname": "Sariansyah",
              "position": "Bcp Driver",
              "division": ""
            },
            {"JDE": 120491, "fullname": "Sarjono", "position": "Hrd", "division": "HRD"},
            {
              "JDE": 120493,
              "fullname": "Sarwo Edy",
              "position": "Edt Shutdown Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120496,
              "fullname": "Selvianus Rubak Pataru",
              "position": "Foreman",
              "division": "MOD"
            },
            {
              "JDE": 120497,
              "fullname": "Semuel Timang",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120499,
              "fullname": "Silas Alwi",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120503,
              "fullname": "Slamet Batiri",
              "position": "Fabrication Foreman",
              "division": ""
            },
            {
              "JDE": 120506,
              "fullname": "Sofyan E",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120512,
              "fullname": "Soni Patabang",
              "position": "Electrician I",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 120517,
              "fullname": "Subagyo",
              "position": "",
              "division": "PLM-MDT"
            },
            {
              "JDE": 120518,
              "fullname": "Subandi",
              "position": "Tyre Leading Hand",
              "division": ""
            },
            {
              "JDE": 120519,
              "fullname": "Sudirman Gaga",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 120522,
              "fullname": "Sugeng Riyadi",
              "position": "Processing Foreman",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 120525,
              "fullname": "Sugiman",
              "position": "Operator Gt (Manhaul)",
              "division": "MOD"
            },
            {
              "JDE": 120526,
              "fullname": "Sugiono",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120527,
              "fullname": "Sugito",
              "position": "Pit South Sp Supervisor",
              "division": "Support-Security"
            },
            {
              "JDE": 120528,
              "fullname": "Suhardi",
              "position": "Operator",
              "division": "MOD"
            },
            {
              "JDE": 120529,
              "fullname": "Sukadi Sp",
              "position": "Bcp Driver",
              "division": "Operation-Mining"
            },
            {
              "JDE": 120530,
              "fullname": "Sukamto",
              "position": "Draftman",
              "division": ""
            },
            {
              "JDE": 120532,
              "fullname": "Sukasto Bin Maidi",
              "position": "Operator",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120533,
              "fullname": "Sukaya",
              "position": "Leading Hand It Loader",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120535,
              "fullname": "Sukirman Sincan",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120537,
              "fullname": "Sulaeman Al Bugisi",
              "position": "Fuel Helper",
              "division": "Support-Security"
            },
            {
              "JDE": 120539,
              "fullname": "Sulaiman Abd Rasyid",
              "position": "Serviceman 3",
              "division": "Support-Training"
            },
            {
              "JDE": 120545,
              "fullname": "Sumarlin",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120546,
              "fullname": "Sumartono",
              "position": "Exc Shovel 5500 / Ex3600",
              "division": ""
            },
            {
              "JDE": 120558,
              "fullname": "Suraji",
              "position": "Mdt Kom Hd 1500-7",
              "division": "MOD"
            },
            {
              "JDE": 120564,
              "fullname": "Susianto",
              "position": "L/H Mechanic",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120565,
              "fullname": "Sutar M.diarto",
              "position": "Tyre Leading Hand",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120571,
              "fullname": "Suwondo",
              "position": "Hse Training",
              "division": ""
            },
            {
              "JDE": 120572,
              "fullname": "Syafruddin Syarif",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 120573,
              "fullname": "Syahmin Pawiro",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120574,
              "fullname": "Syahrani H. Asnan Ao",
              "position": "Mechanic H2-",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120575,
              "fullname": "Syahrani Maudi",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120582,
              "fullname": "Tanan Manne",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120583,
              "fullname": "Tangnga",
              "position": "Operator",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120587,
              "fullname": "Tiku Liling Pabutung",
              "position": "Auxilliary Unsche Maint",
              "division": ""
            },
            {
              "JDE": 120592,
              "fullname": "Trisno Suntha",
              "position": "Bcp Driver",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 120594,
              "fullname": "Turkan",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120598,
              "fullname": "Udin Mt",
              "position": "Edt Breakdown Supervisor",
              "division": "Support-Security"
            },
            {
              "JDE": 120600,
              "fullname": "Umar",
              "position": "Welder I",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120602,
              "fullname": "Unik",
              "position": "Security",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 120606,
              "fullname": "Untung Tipa",
              "position": "Hse Commissioner",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 120608,
              "fullname": "Valentino Saalino",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120609,
              "fullname": "Wahyu Edy Santoso",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 120610,
              "fullname": "Wahyu Utomo",
              "position": "Top Soil, Rehab & Project",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120612,
              "fullname": "Wahyudi Sadimin",
              "position": "Service Truck Driver",
              "division": "Support-Security"
            },
            {
              "JDE": 120616,
              "fullname": "Warsito",
              "position": "Fluida Supervisor",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120619,
              "fullname": "Wiwiana",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120624,
              "fullname": "Yanto",
              "position": "Welder I",
              "division": "PLM-General"
            },
            {
              "JDE": 120629,
              "fullname": "Yogi Hariono",
              "position": "Mechanic H2-",
              "division": ""
            },
            {
              "JDE": 120630,
              "fullname": "Yohanis Pangarungan",
              "position": "",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 120632,
              "fullname": "Yosep",
              "position": "Pit North Sp Supervisor",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 120637,
              "fullname": "Yulius Sonda",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120638,
              "fullname": "Yunriansyah",
              "position": "Mechanich-2 Edt",
              "division": ""
            },
            {
              "JDE": 120639,
              "fullname": "Yunus Jacop Sattu",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120650,
              "fullname": "Zulkifli",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120654,
              "fullname": "Romeo L Tobing",
              "position": "Fuel Truck Driver",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120655,
              "fullname": "Achmad Sarno",
              "position": "Operator",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 120656,
              "fullname": "Abdul Mutholib",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120657,
              "fullname": "Abdul Rahman Bin Abu Malla",
              "position": "Foreman",
              "division": "Support-Training"
            },
            {
              "JDE": 120658,
              "fullname": "Amirudin Bin Nurdin",
              "position": "Mechanic He1-",
              "division": "Support-Security"
            },
            {
              "JDE": 120662,
              "fullname": "Budiansyah Bin Zakaria",
              "position": "Mechanic",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 120665,
              "fullname": "Hariyanto Bin Sariman",
              "position": "Operator",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 120672,
              "fullname": "Juston Gultom",
              "position": "Supporting Foreman",
              "division": ""
            },
            {
              "JDE": 120673,
              "fullname": "Kusran Bin Sairun",
              "position": "Processing Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120677,
              "fullname": "Said Bin Sansuwito",
              "position": "Operator",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 120683,
              "fullname": "Thomas Tandi Bongga",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 120684,
              "fullname": "Yan Sampe",
              "position": "Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120693,
              "fullname": "Ahmad Indra Raya",
              "position": "Rescue",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 120694,
              "fullname": "Mendila- Makun",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120695,
              "fullname": "Muchsin Bin Coleng",
              "position": "Operator",
              "division": "Support-Security"
            },
            {
              "JDE": 120697,
              "fullname": "M. Syaiful A Bin Achmad Badawi",
              "position": "Chainman",
              "division": ""
            },
            {
              "JDE": 120703,
              "fullname": "Daud Ratulangi Malute",
              "position": "Operator",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120704,
              "fullname": "Markus Malino",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 120708,
              "fullname": "Rustam Efendi",
              "position": "Grader Cat 24M",
              "division": ""
            },
            {
              "JDE": 120710,
              "fullname": "Achmadi",
              "position": "Grader Cat 24M",
              "division": ""
            },
            {
              "JDE": 120711,
              "fullname": "Etmundus Teke",
              "position": "Grader Cat 24M",
              "division": ""
            },
            {
              "JDE": 120717,
              "fullname": "Bambang Sungkowo",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": "WOWO"
            },
            {
              "JDE": 120723,
              "fullname": "Selamat Berkati",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120727,
              "fullname": "Hermayanti",
              "position": "Issuing Data Entry",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120728,
              "fullname": "Makhani",
              "position": "Hse System & Training",
              "division": "Support-Security"
            },
            {
              "JDE": 120730,
              "fullname": "Thomas Pulle",
              "position": "Top Soil, Rehab & Project",
              "division": "Support-HSE"
            },
            {
              "JDE": 120733,
              "fullname": "Markus Arung",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120734,
              "fullname": "Topan",
              "position": "Dozer Kom D375 / D155/Exca",
              "division": ""
            },
            {
              "JDE": 120736,
              "fullname": "Slamet Riyadi",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120744,
              "fullname": "Irwan Zainuddin St",
              "position": "",
              "division": ""
            },
            {
              "JDE": 120751,
              "fullname": "Dina Marisa",
              "position": "Fluida Analyst",
              "division": "Operation-Mining"
            },
            {
              "JDE": 120752,
              "fullname": "Leberina Suitelan",
              "position": "Fluida Analyst",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 120757,
              "fullname": "Mursinin Samsuddin",
              "position": "Fuel Truck Driver",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 120759,
              "fullname": "Aslam Abidin",
              "position": "Mining Analyst Data Entry",
              "division": ""
            },
            {
              "JDE": 120760,
              "fullname": "Jamaluddin Ahmade",
              "position": "Pit Control",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120762,
              "fullname": "Masitah Binti H Sabran",
              "position": "Managerial Training Admin",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120763,
              "fullname": "Trisno Wibowo",
              "position": "Drill Supervisor",
              "division": ""
            },
            {
              "JDE": 120764,
              "fullname": "Agus Sastra",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120773,
              "fullname": "Anwar - Japar",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120774,
              "fullname": "Maxi Robert Tangkilisan",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120775,
              "fullname": "Nanna Ramba",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120780,
              "fullname": "Budi Hartono Ompusungu",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120782,
              "fullname": "Junarto Aritonang Ompusungu",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120783,
              "fullname": "Marthen AY.",
              "position": "Edt Kom Haulpak 730",
              "division": "HM EX5033 31598.8"
            },
            {
              "JDE": 120789,
              "fullname": "Agus Dian",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 120796,
              "fullname": "Januardi L Tobing",
              "position": "Foremen",
              "division": "Foremen"
            },
            {
              "JDE": 120797,
              "fullname": "Jumarli Bin Hasanuddin",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 120798,
              "fullname": "Jupri Siahaan",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120807,
              "fullname": "Aminudin Bin M.las",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120809,
              "fullname": "Hasrim Bin H Kiba",
              "position": "",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 120813,
              "fullname": "M. Sonalia",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120814,
              "fullname": "Sabinus Opemor WR",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120817,
              "fullname": "Supriyono Bin Adam Prayitno",
              "position": "Pit South Helper",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120841,
              "fullname": "Ali Pangala",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 120843,
              "fullname": "Helmiansyah",
              "position": "Foreman",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 120850,
              "fullname": "Burhanudin",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120853,
              "fullname": "Rustam Ramli",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120854,
              "fullname": "Jaya Sukramat",
              "position": "Operator",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 120855,
              "fullname": "Lois Paeraong",
              "position": "Foreman",
              "division": "PLM-EDT"
            },
            {
              "JDE": 120859,
              "fullname": "Syarifuddin AK",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 120861,
              "fullname": "Rudi Hartono Bin Zainal",
              "position": "Security",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120862,
              "fullname": "Syarifudin Bin Ishak Muchdar",
              "position": "Operator",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 120863,
              "fullname": "Johanan Bin Burhanan",
              "position": "",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 120864,
              "fullname": "Aca' Arsad Bin Lahama",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120865,
              "fullname": "Irwan Bin Abdul Rahman",
              "position": "Danru",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120872,
              "fullname": "Kamaruddin",
              "position": "Exc Hitachi 3600",
              "division": ""
            },
            {
              "JDE": 120876,
              "fullname": "Abdul Rasyid Bin Umar Y",
              "position": "Operator Gt",
              "division": ""
            },
            {
              "JDE": 120878,
              "fullname": "Mega Parisman Manurung",
              "position": "Mechanic He1-",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120880,
              "fullname": "Yusuf Kalang",
              "position": "Mechanic He1-",
              "division": ""
            },
            {
              "JDE": 120890,
              "fullname": "Purfordeso S N Titan Panjaitan",
              "position": "Managerial Training & Adm",
              "division": ""
            },
            {
              "JDE": 120897,
              "fullname": "Ali Usman",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120898,
              "fullname": "Anwar Bin Nari",
              "position": "Dump Truck Team Leader",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120901,
              "fullname": "Agus Wahyudi Matroji",
              "position": "Foreman",
              "division": "Eng-Technical"
            },
            {
              "JDE": 120908,
              "fullname": "Harijanto Bin Atmosuwito Surip",
              "position": "Welder I",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120913,
              "fullname": "Jerry Standly DEWA",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120917,
              "fullname": "Manal Situmorang",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120919,
              "fullname": "Arul - Much.Fachruddin",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120921,
              "fullname": "Mulyanto",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120922,
              "fullname": "Mulyono M Bin M.karom",
              "position": "Mechanic",
              "division": ""
            },
            {
              "JDE": 120932,
              "fullname": "Urbanus Patattan",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120959,
              "fullname": "Juhrany My",
              "position": "Fuel Truck Driver",
              "division": ""
            },
            {
              "JDE": 120970,
              "fullname": "Eri Marantika",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 120972,
              "fullname": "Indra Gunawan",
              "position": "Operator",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 120974,
              "fullname": "Rianto Pongrangga",
              "position": "Mechanic I",
              "division": "Support-Training"
            },
            {
              "JDE": 120976,
              "fullname": "Sigit Kurniawan",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 120980,
              "fullname": "Munaji Bin Kartiman",
              "position": "Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 120989,
              "fullname": "Murhan",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121001,
              "fullname": "Suroso Bin Martodomo",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121004,
              "fullname": "Walmer Saragi",
              "position": "Grader Cat 24M",
              "division": ""
            },
            {
              "JDE": 121005,
              "fullname": "Abrar Bin Lakkase",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121008,
              "fullname": "Jali Firmansyah",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 121009,
              "fullname": "M. Tarmizi",
              "position": "Foreman",
              "division": "DRILL BLAST"
            },
            {
              "JDE": 121010,
              "fullname": "Agus Setiawan",
              "position": "Foreman",
              "division": "PLM-General"
            },
            {
              "JDE": 121012,
              "fullname": "Ahmad Wahyudi",
              "position": "Foreman",
              "division": "PLM-General"
            },
            {
              "JDE": 121015,
              "fullname": "Moran Bin Betong",
              "position": "Bcp Helper",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121019,
              "fullname": "Budiyanto Bin Syarifuddin",
              "position": "Fuel Truck Driver",
              "division": "FIRDAUS"
            },
            {
              "JDE": 121026,
              "fullname": "M. Harpenas",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121029,
              "fullname": "Asthur Hutabarat",
              "position": "Foreman",
              "division": "Eng-Technical"
            },
            {
              "JDE": 121030,
              "fullname": "David Tanjung",
              "position": "Operator",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121043,
              "fullname": "Syamsuddin M Bin Made Amin",
              "position": "",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121050,
              "fullname": "Marlan Pasaribu",
              "position": "Exc Hitachi 3600",
              "division": ""
            },
            {"JDE": 121051, "fullname": "Joko Triwanto", "position": "", "division": ""},
            {
              "JDE": 121057,
              "fullname": "Abd. Hadi",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121059,
              "fullname": "Daniel N Patinggi",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121060,
              "fullname": "Luther Tandilodang",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121061,
              "fullname": "Hironimus Bai",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121063,
              "fullname": "Sahir Bin Segon",
              "position": "",
              "division": ""
            },
            {
              "JDE": 121064,
              "fullname": "Sebastian Delu",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121065,
              "fullname": "Yateman Nainggolan",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121066,
              "fullname": "Amaluddin Bin Catombong",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121070,
              "fullname": "Stepanus - Siampa'Lea",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121071,
              "fullname": "Sugeng Rianto",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121073,
              "fullname": "Zainuddin - H. Haleng",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121075,
              "fullname": "Ahmad M. Bin Manila",
              "position": "Operator",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121076,
              "fullname": "Andi Bin Ladalle",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121078,
              "fullname": "Haryanto - Warnosukarto",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121079,
              "fullname": "Herlianes Todingallo",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121082,
              "fullname": "Markus Loli Bandangan",
              "position": "Electrician I",
              "division": ""
            },
            {
              "JDE": 121083,
              "fullname": "Marthen Esa",
              "position": "Exc Shovel 5500 / Ex3600",
              "division": "ESA"
            },
            {
              "JDE": 121085,
              "fullname": "Mus Muliadi Bin Ami T",
              "position": "",
              "division": ""
            },
            {
              "JDE": 121087,
              "fullname": "Rafael Romeo",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121090,
              "fullname": "Samuel Kadang",
              "position": "Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121091,
              "fullname": "Sukirno Bin Sariwan",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121096,
              "fullname": "Arfian (Budu)",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121097,
              "fullname": "Baso M.sin",
              "position": "Mechanic He1-",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121098,
              "fullname": "Eka Purnawirawan",
              "position": "Service Truck Driver",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121099,
              "fullname": "Hendra - P. Wetto B",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121100,
              "fullname": "Irwansyah Bin Arbain",
              "position": "Mechanic Helper",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121102,
              "fullname": "Padli Bin Congek",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121103,
              "fullname": "Sumarno Bin Sungud",
              "position": "Welder I",
              "division": ""
            },
            {
              "JDE": 121108,
              "fullname": "Madianto Sossong Sambo",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121110,
              "fullname": "Tamrin Amir P",
              "position": "Emergency Service Officer",
              "division": ""
            },
            {
              "JDE": 121111,
              "fullname": "Juandi Bin Ciknang",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121123,
              "fullname": "Dailan Suwider",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121124,
              "fullname": "Denis Lamaindy",
              "position": "Operator",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121126,
              "fullname": "Ericcon Panggabean",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121130,
              "fullname": "Jenriyanto Patiku",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 121131,
              "fullname": "Johnson Rm Silitonga",
              "position": "Tyre Foreman",
              "division": ""
            },
            {
              "JDE": 121132,
              "fullname": "Linus Suli",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121133,
              "fullname": "Maghfur",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121134,
              "fullname": "Marthen Payung",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121136,
              "fullname": "Natsir Tau",
              "position": "Bcp Driver",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121137,
              "fullname": "Rahman - H Sabran",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121140,
              "fullname": "Supriyadi Congek",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121142,
              "fullname": "Taufik",
              "position": "Hse Emergency Services",
              "division": "Support-Security"
            },
            {
              "JDE": 121144,
              "fullname": "Yon Budi Prasetyo W",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121151,
              "fullname": "Julianto Bin Sodiq",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121156,
              "fullname": "Majid Dolo",
              "position": "Operator",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121159,
              "fullname": "Mustolih Sadimin",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121164,
              "fullname": "Yousev Suryaji",
              "position": "Electric Hv Fac Lead",
              "division": ""
            },
            {
              "JDE": 121170,
              "fullname": "M. Ali H. Salam",
              "position": "",
              "division": "Support-Security"
            },
            {
              "JDE": 121171,
              "fullname": "Warjani",
              "position": "Exc Hitachi 3600",
              "division": ""
            },
            {
              "JDE": 121172,
              "fullname": "Zaini Rm Rustam M",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 121173,
              "fullname": "Heru Chandra",
              "position": "Mis Superintendent",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121184,
              "fullname": "Anwar Rival Bin Ab Saka",
              "position": "Welder I",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121188,
              "fullname": "Daniel Bin Amir Yacob JUNIOR",
              "position": "Operator",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121191,
              "fullname": "Sarman Bin Dulsaleh",
              "position": "Operator",
              "division": "Support-Training"
            },
            {
              "JDE": 121207,
              "fullname": "Benyamin Otto",
              "position": "Welder",
              "division": ""
            },
            {
              "JDE": 121208,
              "fullname": "Gerardus Silambi",
              "position": "Mechanic He1-Mechanical",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121209,
              "fullname": "Inawan Bin Wito Hadi",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121212,
              "fullname": "Triyono Bin Kushadi",
              "position": "",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121214,
              "fullname": "Ilham Bin M. Idi",
              "position": "Operator Gt",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121215,
              "fullname": "M. Hatta Bin Sukri R",
              "position": "Operator Gt",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121218,
              "fullname": "Yudhi Feri Kurniawan",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121220,
              "fullname": "Abi Miruddin Bin M. Rifai",
              "position": "Mechanich-2 Edt",
              "division": ""
            },
            {
              "JDE": 121224,
              "fullname": "Gawat S. Pendi",
              "position": "Opr Drill",
              "division": ""
            },
            {
              "JDE": 121225,
              "fullname": "Jamaluddin Bin Sainuddin",
              "position": "Mechanic He1-",
              "division": ""
            },
            {
              "JDE": 121226,
              "fullname": "Kasrani Bin H. Russeng",
              "position": "",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121231,
              "fullname": "Sugeng Bin Ali Pawiro",
              "position": "Mechanic I",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121234,
              "fullname": "Joko Prastyo Wibowo",
              "position": "Tyreman Ii",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121241,
              "fullname": "Dian Widyanto",
              "position": "",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121248,
              "fullname": "Jumail",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121253,
              "fullname": "Kornelius Sm Bin Yacob Sumbung",
              "position": "Building Supervisor",
              "division": ""
            },
            {
              "JDE": 121254,
              "fullname": "Nirwandi Marinir",
              "position": "Exc Kom Pc 1250/Hitachi 1200",
              "division": ""
            },
            {
              "JDE": 121255,
              "fullname": "Ahmad Sukran Bin Abdul Shomad",
              "position": "Fuel Mgt Admin",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121257,
              "fullname": "Firdaus Prima Bin Mhd Ridwan",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121259,
              "fullname": "Hanafi Bin Rusli K",
              "position": "Operator Gt",
              "division": ""
            },
            {
              "JDE": 121261,
              "fullname": "Kamilin Bin Ngadugi",
              "position": "Tool Keeper",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121263,
              "fullname": "Marthen Salu Bin Gb Siman",
              "position": "Operator - Formen Crew A",
              "division": ""
            },
            {
              "JDE": 121267,
              "fullname": "Sumarno Bin Sallu",
              "position": "Ac Technician",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121268,
              "fullname": "Supriadi Bin Kamaruddin",
              "position": "Tool Keeper",
              "division": "PLM-MDT"
            },
            {
              "JDE": 121269,
              "fullname": "Surian Sukeri",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121274,
              "fullname": "Juliadi Bin Busoni",
              "position": "Fuel Helper",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121275,
              "fullname": "Masjidin Bin Hemo",
              "position": "",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121276,
              "fullname": "Massang Matasak",
              "position": "Mechanic I",
              "division": "Operation-PIT B"
            },
            {
              "JDE": 121278,
              "fullname": "Suyono Bin Murji",
              "position": "Operator",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121281,
              "fullname": "Alim Bahri Bin A. Hafid Punagi",
              "position": "Operator Gt",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121282,
              "fullname": "Andarias Roteng Ramba (Blue)",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121283,
              "fullname": "Antonius Ruru",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 121284,
              "fullname": "Aris Surya",
              "position": "Edt Kom Haulpak 730/Grader",
              "division": ""
            },
            {
              "JDE": 121285,
              "fullname": "Muksin Y Bin M. Yatim",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121287,
              "fullname": "Suprayetno",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121288,
              "fullname": "Victor Herman Ama. Tm",
              "position": "Plant Admin",
              "division": "Operation-PIT B"
            },
            {
              "JDE": 121291,
              "fullname": "M.Basir Bin Lababa",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121295,
              "fullname": "Harul Sn Bin Sanudin",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121296,
              "fullname": "Syopi'In Bin Basoni",
              "position": "Fuel Helper",
              "division": ""
            },
            {
              "JDE": 121298,
              "fullname": "Sharuddin Husain",
              "position": "Foreman Ms",
              "division": ""
            },
            {
              "JDE": 121299,
              "fullname": "Abdurachman Bin Yusup",
              "position": "Dump Truck Team Leader",
              "division": ""
            },
            {
              "JDE": 121303,
              "fullname": "Arisandi",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121304,
              "fullname": "Daud Prirunan Bin Tunduk",
              "position": "Exc Hitachi 2600",
              "division": ""
            },
            {
              "JDE": 121305,
              "fullname": "Iwan Gunawan Harahap Bin",
              "position": "Operator",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121307,
              "fullname": "Prasetyo Dhani (Bangkok)",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121308,
              "fullname": "Rahmad Abidin Bin Usman",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121314,
              "fullname": "Harun Hendarso Bin Sameja",
              "position": "",
              "division": ""
            },
            {
              "JDE": 121316,
              "fullname": "Suratman Bin Madgusaeri",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121317,
              "fullname": "Yamat",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121320,
              "fullname": "Herbin Sianturi",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121322,
              "fullname": "Agus Tuo Bin Tuo",
              "position": "Serviceman Ii",
              "division": ""
            },
            {
              "JDE": 121323,
              "fullname": "Anselmus Sapa Bin Gregorius",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 121324,
              "fullname": "Baharuddin Maisa",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121326,
              "fullname": "Daud bin Syahrir",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121327,
              "fullname": "Dian Jaya Bin Biding",
              "position": "Tool Keeper",
              "division": ""
            },
            {
              "JDE": 121328,
              "fullname": "Hadli Bin Ahmad C",
              "position": "Fuel Dispatcher",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121329,
              "fullname": "Ispianur Bin Jahri",
              "position": "Chainman",
              "division": ""
            },
            {
              "JDE": 121330,
              "fullname": "Marten Taruk Bua",
              "position": "Mechanich-1 Edt",
              "division": ""
            },
            {
              "JDE": 121331,
              "fullname": "M. Fathur",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121333,
              "fullname": "M.. Jufri Maddi Bin Maddi",
              "position": "Operator Gt",
              "division": ""
            },
            {
              "JDE": 121335,
              "fullname": "Zulyan Feri Adib",
              "position": "Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121338,
              "fullname": "Abd.Rajab Ali Bin Ali Rejab",
              "position": "Service Truck",
              "division": ""
            },
            {
              "JDE": 121339,
              "fullname": "Ardiansyah Bin Ambo Ati",
              "position": "Opt. It Loader",
              "division": ""
            },
            {
              "JDE": 121340,
              "fullname": "Arifin Laboni Bin Kundia",
              "position": "Fuel Helper",
              "division": ""
            },
            {
              "JDE": 121341,
              "fullname": "Arliandi Bin Bahri",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 121343,
              "fullname": "Imransyah Bin Alexander Salap",
              "position": "Operator",
              "division": "PLM-MDT"
            },
            {
              "JDE": 121344,
              "fullname": "Ramlan Sitinjak Bin Jaisar Sitinjak",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 121349,
              "fullname": "Syarifuddin Abidin (Coy)",
              "position": "Mdt Kom Hd 1500-7",
              "division": "MOD"
            },
            {
              "JDE": 121354,
              "fullname": "Edwin Reynald Tumiwa",
              "position": "",
              "division": ""
            },
            {
              "JDE": 121355,
              "fullname": "Windra Wahyudi",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121359,
              "fullname": "Muginantoro Bin Lasiman",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121363,
              "fullname": "Sayadi bin Laima",
              "position": "Exc Shovel 5500 /Ex 3600",
              "division": ""
            },
            {
              "JDE": 121364,
              "fullname": "Yanny Kojongian",
              "position": "Deputy Head Of P & M Div.",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121366,
              "fullname": "Irwan Bin Beddu",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121369,
              "fullname": "Fredrik Busso P S.Kom",
              "position": "Storeman",
              "division": "Support-Training"
            },
            {
              "JDE": 121373,
              "fullname": "Damiadi",
              "position": "Exc Shovel 5500 /Ex 3600",
              "division": ""
            },
            {
              "JDE": 121375,
              "fullname": "Josua Siburian",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121379,
              "fullname": "John Rudi S Bin Paulus R",
              "position": "Tyreman Ii",
              "division": "PLM-MDT"
            },
            {
              "JDE": 121386,
              "fullname": "Irwan Niwan Nasution",
              "position": "",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 121390,
              "fullname": "Herry Sutoyo Bin Kaderi",
              "position": "Deputy Head Of P & M Dep.",
              "division": ""
            },
            {
              "JDE": 121394,
              "fullname": "Sunarso Bin Tawar Saryadi",
              "position": "Mechanic 2, Auxilary",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121395,
              "fullname": "Arsyad Bin Barhaman Dg Ngempo",
              "position": "Building Foreman",
              "division": ""
            },
            {
              "JDE": 121403,
              "fullname": "Fredrik Moningka",
              "position": "Tyreman I",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121407,
              "fullname": "Sunardi Sujangi",
              "position": "Maint Training",
              "division": ""
            },
            {
              "JDE": 121408,
              "fullname": "Jumaidi",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121417,
              "fullname": "Sukeni Bin Sukarno",
              "position": "Service Man 1",
              "division": "Support-HSE"
            },
            {
              "JDE": 121419,
              "fullname": "Sugiyarto Bin Wagiman",
              "position": "Mechanic Iii",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121423,
              "fullname": "Dadang Sufriadi",
              "position": "Foreman",
              "division": "DRILL BLAST"
            },
            {
              "JDE": 121424,
              "fullname": "Aris Tandialo",
              "position": "Mechanic 2, Auxilary",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 121425,
              "fullname": "Juma",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121436,
              "fullname": "Helmi Bin Husain",
              "position": "Tyreman I",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121440,
              "fullname": "Benny Hariyanto",
              "position": "Design & Drafting Officer",
              "division": ""
            },
            {
              "JDE": 121442,
              "fullname": "Ridhi Wahyono",
              "position": "Pit Control",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 121443,
              "fullname": "Choirul Asyamsi",
              "position": "Exc Kom Pc 2000 / Pc1250",
              "division": ""
            },
            {
              "JDE": 121453,
              "fullname": "Benny Sm Naibaho",
              "position": "Electrical Support Supt",
              "division": ""
            },
            {
              "JDE": 121466,
              "fullname": "M.. Zaenal Masrukin",
              "position": "Welder Ii",
              "division": ""
            },
            {
              "JDE": 121467,
              "fullname": "Ngadino Bin M Satibi",
              "position": "Bcp Driver",
              "division": ""
            },
            {
              "JDE": 121468,
              "fullname": "Armansyah Bin Kamarudin",
              "position": "Fuel Truck Driver",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121469,
              "fullname": "Sudirman Asma",
              "position": "Operator",
              "division": "Support-Security"
            },
            {
              "JDE": 121476,
              "fullname": "Abraham Bin Titus Tampang",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121477,
              "fullname": "Parlin Tobing",
              "position": "Exc Shovel 5500 /Ex 3600",
              "division": ""
            },
            {
              "JDE": 121480,
              "fullname": "Ursula Ubung",
              "position": "Ohs Admin",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121483,
              "fullname": "Hery Purnomo",
              "position": "Hse Coordinator",
              "division": "Support-HSE"
            },
            {
              "JDE": 121487,
              "fullname": "Efnedi Rustam",
              "position": "Hse Coordinator",
              "division": ""
            },
            {
              "JDE": 121490,
              "fullname": "Manerak Lt",
              "position": "Delivery Man",
              "division": ""
            },
            {
              "JDE": 121494,
              "fullname": "Suherman",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121501,
              "fullname": "Misranuddin",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121502,
              "fullname": "Suratno Bin Suliming",
              "position": "Dozer Unit Supervisor",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 121506,
              "fullname": "Mujiono",
              "position": "Claim & Benefit Officer",
              "division": ""
            },
            {"JDE": 121507, "fullname": "Tukadi", "position": "Foreman", "division": ""},
            {
              "JDE": 121517,
              "fullname": "Andarias Banna",
              "position": "Operator",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121524,
              "fullname": "Verawati Sinaga",
              "position": "Coal Mining & Hauling",
              "division": "Support-MIS"
            },
            {
              "JDE": 121537,
              "fullname": "Yohan Pasolon",
              "position": "Stock Related Supervisor",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121557,
              "fullname": "Yanri Masarrang",
              "position": "Mechanic Iii",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121560,
              "fullname": "Anjas Pratama",
              "position": "Auto Electrician Ii",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121563,
              "fullname": "Arif Chandra",
              "position": "Electrician Iii",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121565,
              "fullname": "M. Bin Muir",
              "position": "Electrician Ii",
              "division": "PLM-MDT"
            },
            {
              "JDE": 121582,
              "fullname": "Daniel Palayukan",
              "position": "Serviceman 3",
              "division": ""
            },
            {
              "JDE": 121586,
              "fullname": "M. Zaini",
              "position": "Mechanic 2, Auxilary",
              "division": ""
            },
            {
              "JDE": 121592,
              "fullname": "Lambertus Parintak",
              "position": "Auto Electrician Ii",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121593,
              "fullname": "Wahyu Abdi",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121596,
              "fullname": "Novi Ikhitiarullah",
              "position": "System Support Supervisor",
              "division": ""
            },
            {
              "JDE": 121601,
              "fullname": "Adi Wahyudin",
              "position": "Storeman",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121607,
              "fullname": "Wasito",
              "position": "Mechanical 2 + Dump",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121608,
              "fullname": "Syamsul Alam",
              "position": "Mechanich-2 Edt",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121609,
              "fullname": "Marten Allo Lembang",
              "position": "Auto Electrician Iii",
              "division": ""
            },
            {
              "JDE": 121610,
              "fullname": "Wahyuli",
              "position": "",
              "division": "PLM-General"
            },
            {
              "JDE": 121614,
              "fullname": "Marten Allo Lembang",
              "position": "Mining Analyst Data Entry",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 121615,
              "fullname": "Adriansyah",
              "position": "Pit Control",
              "division": ""
            },
            {"JDE": 121628, "fullname": "Rudi", "position": "Operator", "division": ""},
            {
              "JDE": 121639,
              "fullname": "Redison",
              "position": "Foreman",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121640,
              "fullname": "Amon Ruru",
              "position": "Grader Cat 24M",
              "division": "ERICC"
            },
            {
              "JDE": 121652,
              "fullname": "Teofilus Paborong",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121654,
              "fullname": "Galih Tri Prabowo",
              "position": "Ac Technician",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121655,
              "fullname": "Mudakhir Ashari",
              "position": "Ac Foreman",
              "division": ""
            },
            {
              "JDE": 121656,
              "fullname": "Hadi Subroto",
              "position": "Ac Foreman",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121660,
              "fullname": "Armansyah Bin Syahrin",
              "position": "Bcp Broadcaster",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121662,
              "fullname": "Hary Irmawan",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121668,
              "fullname": "Gregorius Ade Setiawan",
              "position": "",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121673,
              "fullname": "Ana Harun Dana",
              "position": "Pit Control",
              "division": "PLM-General"
            },
            {
              "JDE": 121675,
              "fullname": "Sumardi Bin Mandik",
              "position": "Ac Technician",
              "division": ""
            },
            {
              "JDE": 121679,
              "fullname": "Wahyudi Bin Lahuda",
              "position": "Mechanical 2 + Dump",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121687,
              "fullname": "Husain",
              "position": "Mechanic 2, Electrik Dt",
              "division": ""
            },
            {
              "JDE": 121691,
              "fullname": "Melki Madodahi",
              "position": "Forman",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 121692,
              "fullname": "Piter La'bi",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121693,
              "fullname": "Hadi Purnomo",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121701,
              "fullname": "Rappa Patiung",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121703,
              "fullname": "Weldis",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121705,
              "fullname": "Moh Fahrurozi",
              "position": "",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121709,
              "fullname": "Eddy Sofyan",
              "position": "Edt Breakdown Supervisor",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121723,
              "fullname": "M. Mochtar",
              "position": "Receiving Supervisor",
              "division": ""
            },
            {
              "JDE": 121726,
              "fullname": "Abdul Karim",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121727,
              "fullname": "Aris Sugiyanto",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121728,
              "fullname": "Ating Memey",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121729,
              "fullname": "Buddy Kristyanto",
              "position": "Security",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121731,
              "fullname": "Dudi Rohman",
              "position": "Security",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121732,
              "fullname": "Hendra Sudrajat",
              "position": "Security",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121733,
              "fullname": "Kadarusman",
              "position": "Security",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121734,
              "fullname": "Munawar Bin Ahmad Baedowi",
              "position": "Security",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121735,
              "fullname": "Moch. Hendri Mauludin",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121736,
              "fullname": "Rohman Bin Mulyana",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121737,
              "fullname": "Wawan Setiawan",
              "position": "Security",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121738,
              "fullname": "Yoga Bin Undang Harobat",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121739,
              "fullname": "Tri Sakti Sentot Nugraha",
              "position": "Security",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121741,
              "fullname": "Amud Saepulloh",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121745,
              "fullname": "Oktafianus Cons",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121746,
              "fullname": "Nelson Nogi",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121747,
              "fullname": "Sumedi",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121748,
              "fullname": "Kusaid",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121751,
              "fullname": "Paulus Sampe Patandianan",
              "position": "Operator",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121752,
              "fullname": "Didik Hariyanto",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121754,
              "fullname": "Juanda Manullang",
              "position": "Mechanic2, Mechanical",
              "division": ""
            },
            {
              "JDE": 121758,
              "fullname": "Herman Bin Marthen M",
              "position": "Mechanic2, Mechanical",
              "division": ""
            },
            {
              "JDE": 121759,
              "fullname": "Alexsander",
              "position": "Mechanic I",
              "division": "PLM-General"
            },
            {
              "JDE": 121774,
              "fullname": "Hendar Suhendar",
              "position": "Security",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121775,
              "fullname": "Umang Susandi",
              "position": "Security",
              "division": "Eng-Technical"
            },
            {
              "JDE": 121776,
              "fullname": "Indra Ardia S",
              "position": "Security",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121777,
              "fullname": "Ari Sofian",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 121790,
              "fullname": "Yulius Kira Pb",
              "position": "Support And Lv",
              "division": "Operation-Mining"
            },
            {
              "JDE": 121797,
              "fullname": "Irwan Pasongli",
              "position": "Hse Coordinator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121800,
              "fullname": "Andy Furqonul Abror",
              "position": "B/O-W/O Related",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 121804,
              "fullname": "Youbert K",
              "position": "Exc Kom Pc 2000",
              "division": ""
            },
            {
              "JDE": 121806,
              "fullname": "Suryadi Baco",
              "position": "Exc Kom Pc 1250/Hitachi 1200",
              "division": ""
            },
            {
              "JDE": 121807,
              "fullname": "Freddy",
              "position": "Cost Control Officer",
              "division": "PLM-General"
            },
            {
              "JDE": 121808,
              "fullname": "Syaifudin Bin Ach Jasin",
              "position": "Mechanic 2, Electrik Dt",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121810,
              "fullname": "Paian Silaen",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 121812,
              "fullname": "Sinyo Lumenta",
              "position": "Exc Shovel 5500 / Ex3600",
              "division": ""
            },
            {
              "JDE": 121813,
              "fullname": "Hendrik Bunga Simak",
              "position": "Operator",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121814,
              "fullname": "Benyamin Russa",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 121816,
              "fullname": "Mulya Slamet",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 121818,
              "fullname": "Hamja Manurung",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 121819,
              "fullname": "Alimuddin Bin Abbas",
              "position": "Foreman Top Soil",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 121820,
              "fullname": "Kadri",
              "position": "Exc Kom Pc 2000",
              "division": ""
            },
            {
              "JDE": 121821,
              "fullname": "Haryanto Marewa",
              "position": "Foreman",
              "division": "Operation-PIT BC"
            },
            {"JDE": 121822, "fullname": "Ventje Wowor", "position": "", "division": ""},
            {
              "JDE": 121823,
              "fullname": "Kamaruddin Bin Samad",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 121824,
              "fullname": "Fatahuddin",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121826,
              "fullname": "Denny Kandioh",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121828,
              "fullname": "Maryono Bin Subani",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121829,
              "fullname": "Syukur Bin M. Tahir",
              "position": "Exc Kom Pc 400",
              "division": ""
            },
            {
              "JDE": 121830,
              "fullname": "Rusli Bin H. Bakri",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 121831,
              "fullname": "Abdul Hamid Bin M. Maskoen",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 121833,
              "fullname": "Chandra Susanto",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121834,
              "fullname": "Wensius Wende",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 121836,
              "fullname": "Rudi Bin Jiing",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 121838,
              "fullname": "Mohkamto Kulleh",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 121839,
              "fullname": "Rommel Simatupang",
              "position": "Foreman",
              "division": "MSD"
            },
            {
              "JDE": 121842,
              "fullname": "Maryanto",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 121846,
              "fullname": "Bangsawan",
              "position": "Mechanic Iii",
              "division": "PLM-General"
            },
            {
              "JDE": 121847,
              "fullname": "Tri Handoko",
              "position": "Mechanic Lighting",
              "division": ""
            },
            {
              "JDE": 121848,
              "fullname": "Handrianus Bin Pali",
              "position": "Mechanic Iii",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 121851,
              "fullname": "Sugianto",
              "position": "Mechanic Lighting",
              "division": ""
            },
            {
              "JDE": 121853,
              "fullname": "Nuryanto",
              "position": "Operator",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121854,
              "fullname": "Rasudi",
              "position": "Mechanic Ii Excavator",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 121861,
              "fullname": "Sujarwo",
              "position": "Mechanic",
              "division": ""
            },
            {
              "JDE": 121863,
              "fullname": "Roman Wibisono",
              "position": "Mechanic Ii Excavator",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 121869,
              "fullname": "Kamsari",
              "position": "Warehouse Superintendent",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 121871,
              "fullname": "Jannes Harianja",
              "position": "Operator",
              "division": "Support-Construction"
            },
            {
              "JDE": 121872,
              "fullname": "Abdul",
              "position": "Operator",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 121873,
              "fullname": "Jhon Sambolayuk",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121874,
              "fullname": "Rachmad Hidayat",
              "position": "Electrician I",
              "division": "Support-Training"
            },
            {
              "JDE": 121879,
              "fullname": "Zulfikar Has Ritonga",
              "position": "",
              "division": ""
            },
            {
              "JDE": 121880,
              "fullname": "Wahyudin",
              "position": "Operator",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 121882,
              "fullname": "Otniel L",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121889,
              "fullname": "Lasiman Susilo",
              "position": "Operation Trainer",
              "division": "PLM-EDT"
            },
            {
              "JDE": 121894,
              "fullname": "Dedi Susanto",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 121898,
              "fullname": "Efik Arianto",
              "position": "Mechanic He Ii Plus",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 121903,
              "fullname": "Ferry Hermawan",
              "position": "Mechanic He-2,Mechanical",
              "division": ""
            },
            {
              "JDE": 121908,
              "fullname": "Dayat Bin Ala",
              "position": "Operator",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 121909,
              "fullname": "Panny Tampubolon",
              "position": "Operator",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 121910,
              "fullname": "Hendra Michael",
              "position": "Operator",
              "division": "Eng-Technical"
            },
            {
              "JDE": 121911,
              "fullname": "Donni Galingging",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121913,
              "fullname": "Andi Jamaluddin",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121914,
              "fullname": "Eko Juri Setyono",
              "position": "",
              "division": "PLM-MDT"
            },
            {
              "JDE": 121920,
              "fullname": "Safar Bin Ali",
              "position": "",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 121923,
              "fullname": "Agus Kamaluddin",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 121924,
              "fullname": "Jefri Maki",
              "position": "Operator",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 121926,
              "fullname": "Andi Syamsualam",
              "position": "Operator",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 121927,
              "fullname": "Abdul Rachman Manta",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {
              "JDE": 121931,
              "fullname": "Yumiarto Bin Sujito",
              "position": "",
              "division": "Support-Construction"
            },
            {
              "JDE": 121935,
              "fullname": "Asri Bin Ladalle",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121936,
              "fullname": "Wahyu Suntoko",
              "position": "Mechanic Ii",
              "division": "Support-Construction"
            },
            {
              "JDE": 121938,
              "fullname": "Daniel Enos Mangopo",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121953,
              "fullname": "Anwar Bin Baharuddin (Dadu)",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 121954,
              "fullname": "Sapri Saleh",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 121960,
              "fullname": "Hotman Harianja",
              "position": "Welder I",
              "division": ""
            },
            {
              "JDE": 121962,
              "fullname": "Kusrin Bin Supani",
              "position": "Welder",
              "division": "Support-HSE"
            },
            {
              "JDE": 121964,
              "fullname": "Thomas Ray",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 121969,
              "fullname": "Usrani Bin Sahar",
              "position": "Operator",
              "division": "Support-HSE"
            },
            {
              "JDE": 121972,
              "fullname": "Uriansi",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 121973,
              "fullname": "Rekmon Ruindungan",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 121980,
              "fullname": "Muhammad Tang",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121981,
              "fullname": "Sudarman Bin Taberang",
              "position": "Operator",
              "division": "Support-HSE"
            },
            {
              "JDE": 121986,
              "fullname": "Piter Katik",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 121988,
              "fullname": "Marten Buntu",
              "position": "Mechanical Truck",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 121993,
              "fullname": "Kadek Arya",
              "position": "Act Head Of He",
              "division": ""
            },
            {
              "JDE": 122001,
              "fullname": "Maman Rahman",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 122002,
              "fullname": "M.lis Jelling",
              "position": "Operator",
              "division": "Support-Construction"
            },
            {
              "JDE": 122003,
              "fullname": "M. Gengkeng",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 122013,
              "fullname": "Abas Rambe Payung",
              "position": "Mechanic 2, Auxilary",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 122014,
              "fullname": "Henri Bin Kurnie",
              "position": "Mechanical 2 + Dump",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 122017,
              "fullname": "Yosep Sampe Palopok",
              "position": "Mechanic 2, Auxilary",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122018,
              "fullname": "Chusdy Tanggu",
              "position": "Auto Electrician Ii",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122019,
              "fullname": "Akbar Bimantoro",
              "position": "Design & Drafting Officer",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122020,
              "fullname": "Ruslan Bin La Ribu",
              "position": "Environmental Lab Leading",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 122021,
              "fullname": "Hasri Hasan",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 122022,
              "fullname": "Rissan Gultom",
              "position": "Helper",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122023,
              "fullname": "Hamdani",
              "position": "Helper",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122024,
              "fullname": "Wahyu Widodo",
              "position": "Helper",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122025,
              "fullname": "Rusli",
              "position": "Helper",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122026,
              "fullname": "Masri",
              "position": "Helper",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122027,
              "fullname": "Saparuddin Taslim",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122028,
              "fullname": "Kasnariadi Bin Hasbulah",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 122032,
              "fullname": "Rudi Silalahi",
              "position": "Mechanic 2, Auxilary",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 122035,
              "fullname": "Marthen Rurik",
              "position": "Operator",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 122036,
              "fullname": "Kornelius Barambang",
              "position": "Mdt Kom Hd 465-7/785",
              "division": ""
            },
            {
              "JDE": 122038,
              "fullname": "Daniel Tangdan",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122039,
              "fullname": "Yudi Anluki",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122042,
              "fullname": "Pujiono Mashudi",
              "position": "",
              "division": "Support-MIS"
            },
            {
              "JDE": 122043,
              "fullname": "Suwarno Bin Ratiyo",
              "position": "Mechanic 2, Auxilary",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 122044,
              "fullname": "Gus Sukendar",
              "position": "Mechanic 2, Auxilary",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122045,
              "fullname": "M. Effendy",
              "position": "Mechanic Ii Excavator",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122055,
              "fullname": "Charly Tanggulungan",
              "position": "Mechanic 2, Auxilary",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122057,
              "fullname": "Herman Ramba Tangkedatu",
              "position": "Planner",
              "division": ""
            },
            {
              "JDE": 122063,
              "fullname": "Herman Ramba Tangkedatu",
              "position": "",
              "division": "Eng-Technical"
            },
            {
              "JDE": 122064,
              "fullname": "Moh. Asrianto",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122067,
              "fullname": "Ilyas Santoso",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122068,
              "fullname": "Jamaluddin Bin Hadaeni",
              "position": "Operator",
              "division": "Eng-Technical"
            },
            {
              "JDE": 122070,
              "fullname": "Suhandi",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122071,
              "fullname": "Ronny Petrus Mian",
              "position": "Exc Hitachi 2600 / Pc1250",
              "division": ""
            },
            {
              "JDE": 122072,
              "fullname": "Ansarullah Bin Pallompo",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122073,
              "fullname": "Sunanto Bin Syafii",
              "position": "Grader Cat 24M",
              "division": ""
            },
            {
              "JDE": 122075,
              "fullname": "Rusdi Achmad",
              "position": "Edt Kom Haulpak 730",
              "division": "LAHONG"
            },
            {
              "JDE": 122079,
              "fullname": "Ramli Siregar",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122080,
              "fullname": "Malino Patoban",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122081,
              "fullname": "Ruyanto Pangarungan",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 122082,
              "fullname": "Teddy Tri Isma Ibrawanto",
              "position": "Operator",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122087,
              "fullname": "Jaiz Fuadi Jamin",
              "position": "Mechanic Ii Excavator",
              "division": ""
            },
            {
              "JDE": 122090,
              "fullname": "Teguh Wicaksono Prasetio",
              "position": "Mechanic",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122098,
              "fullname": "Didit Kusdiyanto",
              "position": "Mechanic Ii Excavator",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122100,
              "fullname": "Setiyo Haryanto",
              "position": "Security Supervisor",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122101,
              "fullname": "Endang Astuti",
              "position": "Mining Analyst Data Entry",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 122103,
              "fullname": "Dominggus Bangga",
              "position": "Operator",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 122107,
              "fullname": "Barnabas",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 122108,
              "fullname": "Fitriansyah Bin M. Saini",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122109,
              "fullname": "Yudi Haryanto",
              "position": "Exc Hitachi 3600",
              "division": ""
            },
            {
              "JDE": 122112,
              "fullname": "Amingsyah Bin Ismael",
              "position": "Bcp Driver",
              "division": ""
            },
            {
              "JDE": 122113,
              "fullname": "Maryono Bin Maryana",
              "position": "Bcp Driver",
              "division": "Eng-Technical"
            },
            {
              "JDE": 122114,
              "fullname": "M. Faisal",
              "position": "Bcp Driver",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122117,
              "fullname": "Rido Antoni Hutahean",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122118,
              "fullname": "Nasri Bin H. M.. Nasrudin",
              "position": "Delivery Man",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122119,
              "fullname": "Andarias Rangu",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 122121,
              "fullname": "Pattola Arfa Bin Saing",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122122,
              "fullname": "Mh Junaidi Bin H.Fatah",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122126,
              "fullname": "Sutejo Saputra",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122127,
              "fullname": "Ali Ihwan Bin Ahnan",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 122128,
              "fullname": "Wilson Kambuno",
              "position": "Acting Foreman",
              "division": ""
            },
            {
              "JDE": 122129,
              "fullname": "Zaenal Nur",
              "position": "Mine Analyst Engineer",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122132,
              "fullname": "Suriyanto (PACI)",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122133,
              "fullname": "Suardi Bin Anwar",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122135,
              "fullname": "Saharuddin Bin Laharu",
              "position": "Operator",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122136,
              "fullname": "Bambang Sudarsono",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 122139,
              "fullname": "Rochmat Ibnu Sina",
              "position": "Pit Control",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 122144,
              "fullname": "David Yan Salong",
              "position": "",
              "division": "Support-Security"
            },
            {
              "JDE": 122145,
              "fullname": "Chadijah",
              "position": "Hr Admin Officer",
              "division": "Support-Security"
            },
            {
              "JDE": 122146,
              "fullname": "Arlang Arman",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122149,
              "fullname": "Yusri Bin Umri",
              "position": "Electrician Ii",
              "division": "Support-Security"
            },
            {
              "JDE": 122153,
              "fullname": "Novi Lontoh",
              "position": "Operator",
              "division": "Support-Security"
            },
            {
              "JDE": 122160,
              "fullname": "Anton Nandeng",
              "position": "",
              "division": "Support-Security"
            },
            {
              "JDE": 122161,
              "fullname": "Agus Roihan",
              "position": "Foreman",
              "division": "Support-Security"
            },
            {
              "JDE": 122162,
              "fullname": "Marsudi Nugroho",
              "position": "Mechanic 2, Electrik Dt",
              "division": "Support-Security"
            },
            {
              "JDE": 122166,
              "fullname": "Sofian Nur",
              "position": "Storeman",
              "division": "Support-Security"
            },
            {
              "JDE": 122167,
              "fullname": "Almen Saragih",
              "position": "Receiver",
              "division": "Support-Security"
            },
            {
              "JDE": 122168,
              "fullname": "Impi Leto",
              "position": "Managerial Training Admin",
              "division": "Support-Security"
            },
            {
              "JDE": 122170,
              "fullname": "Tamrin",
              "position": "Safety Officer",
              "division": "Support-Security"
            },
            {
              "JDE": 122171,
              "fullname": "Yehezkiel Ralki Sajoangin",
              "position": "Storeman",
              "division": "Support-Security"
            },
            {
              "JDE": 122172,
              "fullname": "Wagito Bin Slamet",
              "position": "",
              "division": "Support-Security"
            },
            {
              "JDE": 122175,
              "fullname": "Dedi Bin Ahmad",
              "position": "Condition Mon Data Entry",
              "division": "Support-Security"
            },
            {
              "JDE": 122176,
              "fullname": "Tejo Prihantoro",
              "position": "",
              "division": ""
            },
            {
              "JDE": 122181,
              "fullname": "Yulius Tiku",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 122182,
              "fullname": "Yuniakarti Alis",
              "position": "Inventory Data Entry",
              "division": ""
            },
            {
              "JDE": 122183,
              "fullname": "Amin Sonda",
              "position": "Mechanic I",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122185,
              "fullname": "Djuliawan",
              "position": "Mechanic",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122190,
              "fullname": "Galang Eka Prasetya",
              "position": "Hse System Specialist",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122192,
              "fullname": "Yusa Ba Ar Ruridanang",
              "position": "Mining Analyst Data",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122193,
              "fullname": "Budi Kurniawan",
              "position": "Tyre Scheduler",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122199,
              "fullname": "Aris Sana Randing",
              "position": "Foremen Ts",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122200,
              "fullname": "Nurul Hakim",
              "position": "Operator",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122203,
              "fullname": "Yunus Rante",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 122205,
              "fullname": "Yusuf Bin Lamsari",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 122206,
              "fullname": "Hambali Harahap",
              "position": "Operator",
              "division": "Support-Security"
            },
            {
              "JDE": 122215,
              "fullname": "Basuki Wibyatmoko",
              "position": "Maintenance Trainer",
              "division": "Support-Security"
            },
            {
              "JDE": 122219,
              "fullname": "Ita Listiany",
              "position": "Mining Service Admin",
              "division": "Support-Security"
            },
            {
              "JDE": 122223,
              "fullname": "Sri Fortiani",
              "position": "Mining Analyst Data",
              "division": "Support-Security"
            },
            {
              "JDE": 122224,
              "fullname": "Surya Darma",
              "position": "Rehabilitation Engineer",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 122226,
              "fullname": "Effendi Mamesah",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 122227,
              "fullname": "M. Yusuf",
              "position": "Mechanic 2 Support Lt",
              "division": "Support-HSE"
            },
            {
              "JDE": 122228,
              "fullname": "Abdul Rahim",
              "position": "Mechanic Ii Excavator",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 122231,
              "fullname": "Abdi Sholihin",
              "position": "Bcp Driver",
              "division": ""
            },
            {
              "JDE": 122232,
              "fullname": "Tumijo Bin Atmotayib",
              "position": "Mechanic He-2,Mechanical",
              "division": ""
            },
            {
              "JDE": 122233,
              "fullname": "Sapto Budyanto",
              "position": "Service Truck",
              "division": "Support-Finance"
            },
            {
              "JDE": 122234,
              "fullname": "Amsal Palulun",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 122235,
              "fullname": "Muliyadi Bin Jamhur",
              "position": "Service Truck",
              "division": "PLM-EDT"
            },
            {
              "JDE": 122236,
              "fullname": "Nahor Sumandak",
              "position": "Service Truck",
              "division": ""
            },
            {
              "JDE": 122237,
              "fullname": "Rama Aditya Wijaya",
              "position": "Programmer Analyst",
              "division": ""
            },
            {
              "JDE": 122249,
              "fullname": "Donatus Sega",
              "position": "Operator",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122250,
              "fullname": "Alex Sandra Sembiring",
              "position": "Application Supervisor",
              "division": ""
            },
            {
              "JDE": 122253,
              "fullname": "Bardianto Bin Dalle",
              "position": "Service Truck",
              "division": ""
            },
            {
              "JDE": 122254,
              "fullname": "Sigit Murjiat",
              "position": "Service Truck",
              "division": ""
            },
            {
              "JDE": 122255,
              "fullname": "Slamet",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 122259,
              "fullname": "Hasan Ismail",
              "position": "Electrical Electrician",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122261,
              "fullname": "Heddy Siregar",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122263,
              "fullname": "Rahmat Bin Yamin Saat",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122266,
              "fullname": "Faruk Fauzi",
              "position": "Mine Operation Manager",
              "division": ""
            },
            {
              "JDE": 122267,
              "fullname": "Ahpas Setiawan",
              "position": "Operator",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122268,
              "fullname": "Suparyono",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122269,
              "fullname": "Purnomo",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122270,
              "fullname": "Taufik Kustiadi",
              "position": "Mechanic 2 Support Lt",
              "division": ""
            },
            {
              "JDE": 122275,
              "fullname": "Mustafa",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122279,
              "fullname": "Amin Nur",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122281,
              "fullname": "Samian B",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122282,
              "fullname": "M Syamsul",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122283,
              "fullname": "Pely Parrangan",
              "position": "Electrician Ii",
              "division": ""
            },
            {
              "JDE": 122284,
              "fullname": "Hery Yuga",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122285,
              "fullname": "Ismail Marsuki",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122293,
              "fullname": "Mahtum",
              "position": "Auto Electrician Ii",
              "division": ""
            },
            {
              "JDE": 122295,
              "fullname": "Yermia Ballo",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122298,
              "fullname": "Dias Anggriani",
              "position": "Cost Control",
              "division": ""
            },
            {
              "JDE": 122311,
              "fullname": "Samijrah",
              "position": "Mechanic 2 Support Lt",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122312,
              "fullname": "Samsir Samad",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122313,
              "fullname": "Surianto Akil",
              "position": "Mechanic 2 Lv",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122320,
              "fullname": "Kadarisman",
              "position": "Mechanic2, Mechanical",
              "division": ""
            },
            {
              "JDE": 122321,
              "fullname": "Syahrir",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122323,
              "fullname": "Syaiful",
              "position": "Electrical Building Foreman",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 122324,
              "fullname": "Misbahuddin Yahya",
              "position": "Electrical Building",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 122325,
              "fullname": "Thamrin Mahmud",
              "position": "Electrical Building Foreman",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 122336,
              "fullname": "M. Fadli",
              "position": "Ac Technician",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 122339,
              "fullname": "M. Arifin",
              "position": "Mechanic I",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122344,
              "fullname": "Imanuel Dermawan A, St",
              "position": "Team Leader",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122347,
              "fullname": "Imanuel Dermawan A, St",
              "position": "Team Leader",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122348,
              "fullname": "Ridahamsyah",
              "position": "Mechanic 2 Support Lt",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122349,
              "fullname": "Markus Pangala",
              "position": "Operator",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 122350,
              "fullname": "Semuel Lukas Lumenta",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122365,
              "fullname": "Abner Yusuf Pole",
              "position": "Facility Foreman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122368,
              "fullname": "Khayat",
              "position": "Mechanic 2 Lv",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122369,
              "fullname": "Affan Khairul",
              "position": "Pit Control",
              "division": ""
            },
            {
              "JDE": 122375,
              "fullname": "Darwanto",
              "position": "Operator",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 122378,
              "fullname": "Andika Abdul H",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122383,
              "fullname": "Indra Kusmana",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122386,
              "fullname": "Irwanto",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122393,
              "fullname": "Yulius MK",
              "position": "Edt Kom Haulpak 730",
              "division": ""
            },
            {
              "JDE": 122403,
              "fullname": "Eddy Zuhrie",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 122411,
              "fullname": "Herlina B.",
              "position": "Mining Service Admin",
              "division": "Support-Training"
            },
            {
              "JDE": 122412,
              "fullname": "Jetro L. Gaol",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 122413,
              "fullname": "Sigarlaki Rompis",
              "position": "Exc Kom Pc 2000 / Pc1250",
              "division": ""
            },
            {
              "JDE": 122416,
              "fullname": "Yosep Timba",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 122417,
              "fullname": "Bernadus Palumpun",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 122418,
              "fullname": "Herman",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122420,
              "fullname": "Isran",
              "position": "Operator",
              "division": "PLM-Aux Wheel"
            },
            {
              "JDE": 122421,
              "fullname": "Kamaruddin P",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 122422,
              "fullname": "Pither Mangaluk",
              "position": "Dozer Kom D375 / D155/Hd465",
              "division": ""
            },
            {
              "JDE": 122423,
              "fullname": "Tomas Batti Mangallo",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 122424,
              "fullname": "Akhyat Torsandy",
              "position": "Operator",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122430,
              "fullname": "Youke Hontong",
              "position": "Bcp Ga Supervisor",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122431,
              "fullname": "Andi Yus Hendra",
              "position": "Auto Electrician Ii",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122434,
              "fullname": "Mawardias",
              "position": "Dozer Kom D375 / D155/Gr825 / Gr705",
              "division": ""
            },
            {
              "JDE": 122445,
              "fullname": "Imam Rofi'I",
              "position": "Mechanic He1-",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122458,
              "fullname": "Heriyatno",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122459,
              "fullname": "Agung Satria P",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 122460,
              "fullname": "Heru Purwanto",
              "position": "Auto Electrician Ii",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122461,
              "fullname": "Arjuni Paseru",
              "position": "Mechanic 2 Lv",
              "division": ""
            },
            {
              "JDE": 122462,
              "fullname": "Armin Putra",
              "position": "Foreman Top Soil",
              "division": ""
            },
            {
              "JDE": 122466,
              "fullname": "Rustan",
              "position": "Gltpc & Welding Machine",
              "division": ""
            },
            {
              "JDE": 122469,
              "fullname": "Eko Panji Nugroho",
              "position": "Ac Technician",
              "division": ""
            },
            {
              "JDE": 122470,
              "fullname": "Sutojo",
              "position": "Ac Technician",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122477,
              "fullname": "Poniyoto (Pung)",
              "position": "Dozer Kom D375 / 10Rt",
              "division": "PUNG"
            },
            {
              "JDE": 122481,
              "fullname": "Jackson M. Tangkere",
              "position": "Storeman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122482,
              "fullname": "Tusiman",
              "position": "Storeman",
              "division": ""
            },
            {
              "JDE": 122484,
              "fullname": "Enos Patinggi",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122485,
              "fullname": "Marthen Saleppa",
              "position": "Storeman",
              "division": ""
            },
            {
              "JDE": 122486,
              "fullname": "Yunita Theresia Gena",
              "position": "Pit Geologist",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122488,
              "fullname": "Kukuh Arie Handayani",
              "position": "Building Supervisor",
              "division": ""
            },
            {
              "JDE": 122491,
              "fullname": "Refdiyanto Nasution",
              "position": "Coal Hauling Sp Supervisor",
              "division": ""
            },
            {
              "JDE": 122492,
              "fullname": "Hendro Wahyono",
              "position": "Mechanic 2 Lv",
              "division": ""
            },
            {
              "JDE": 122494,
              "fullname": "Brahim",
              "position": "Tyreman",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122495,
              "fullname": "Bakir Riyanto",
              "position": "Tyreman",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122496,
              "fullname": "Erianto L. Tobing",
              "position": "Storeman",
              "division": ""
            },
            {
              "JDE": 122498,
              "fullname": "Purwanto Bin Bari",
              "position": "Ac Technician",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122504,
              "fullname": "Meyran Amos",
              "position": "Pit Control",
              "division": ""
            },
            {
              "JDE": 122514,
              "fullname": "Relic Suzanthia Rachman",
              "position": "Surveyor",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122517,
              "fullname": "Budi Ismael Nainggolan",
              "position": "Fuel Supervisor",
              "division": ""
            },
            {
              "JDE": 122532,
              "fullname": "Dadang Suhanda",
              "position": "Surveyor",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122537,
              "fullname": "Endang Karnadipura",
              "position": "Construction Supervisor",
              "division": ""
            },
            {
              "JDE": 122546,
              "fullname": "Atis Sutisna",
              "position": "Storeman",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122547,
              "fullname": "Alfin Asngari",
              "position": "Storeman",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 122548,
              "fullname": "Ahmad Zailani",
              "position": "Storeman",
              "division": ""
            },
            {
              "JDE": 122549,
              "fullname": "Elton Tamaka",
              "position": "Storeman",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122553,
              "fullname": "Erik Haryanto",
              "position": "Mechanic He1-Mechanical",
              "division": ""
            },
            {
              "JDE": 122555,
              "fullname": "Vega Perdana",
              "position": "Mine Service",
              "division": "PLM-Aux Wheel"
            },
            {
              "JDE": 122560,
              "fullname": "Holong Simarmata",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 122569,
              "fullname": "Gendut Suprapto",
              "position": "Mechanic He1-Excavator",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 122586,
              "fullname": "Hadi Priyono",
              "position": "Foreman",
              "division": "DRILL"
            },
            {
              "JDE": 122589,
              "fullname": "Basuki Istu PAS",
              "position": "Security Crew",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122590,
              "fullname": "Martinus Rama",
              "position": "Security Crew",
              "division": "Support-HSE"
            },
            {
              "JDE": 122591,
              "fullname": "Herudin",
              "position": "Security Crew",
              "division": ""
            },
            {
              "JDE": 122592,
              "fullname": "Takbir Siregar",
              "position": "Security - Investigator",
              "division": "Support-HSE"
            },
            {
              "JDE": 122593,
              "fullname": "Kamaria",
              "position": "Admint Clerk",
              "division": "Support-HSE"
            },
            {
              "JDE": 122595,
              "fullname": "David Sumarlin",
              "position": "Operator",
              "division": "Support-HSE"
            },
            {
              "JDE": 122606,
              "fullname": "Yusep",
              "position": "Security",
              "division": "Support-HSE"
            },
            {
              "JDE": 122607,
              "fullname": "Edi Rohaedi",
              "position": "Security",
              "division": "Support-HSE"
            },
            {
              "JDE": 122610,
              "fullname": "Jupri",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 122612,
              "fullname": "Bertus Stevanus Lee Tabe",
              "position": "Tyreman",
              "division": ""
            },
            {"JDE": 122613, "fullname": "Hamzah", "position": "Tyreman", "division": ""},
            {
              "JDE": 122614,
              "fullname": "Avilarus Dala Melisiunto",
              "position": "Tyreman",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 122615,
              "fullname": "M. Zainal",
              "position": "Tyreman",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122616,
              "fullname": "Suagumon Pangribuan",
              "position": "Tyreman",
              "division": ""
            },
            {
              "JDE": 122621,
              "fullname": "Hariyanto Bin Rebo",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122626,
              "fullname": "Muhibuddin Firdaus",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122630,
              "fullname": "Muhammad Kautsar",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122632,
              "fullname": "Dominggus Padang",
              "position": "Exc Kom Pc 2000 / Pc1250",
              "division": ""
            },
            {"JDE": 122635, "fullname": "Wahyudianto", "position": "", "division": ""},
            {
              "JDE": 122637,
              "fullname": "Delon CH Kaunang",
              "position": "Storeman",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122641,
              "fullname": "M.. Syahril",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122643,
              "fullname": "Martialis Nong Prancis",
              "position": "Exc Hitachi 3600",
              "division": ""
            },
            {
              "JDE": 122650,
              "fullname": "Ali Impron",
              "position": "System Support Officer",
              "division": "PLM-General"
            },
            {
              "JDE": 122651,
              "fullname": "Mulki",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122652,
              "fullname": "Asgar Haruna",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122654,
              "fullname": "Lapu Tandiallo",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 122659,
              "fullname": "Hermansyah",
              "position": "Operator",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 122660,
              "fullname": "Mika Tonapa",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122661,
              "fullname": "Kadri Matiro",
              "position": "Dozer Kom D375 / 10Rt",
              "division": ""
            },
            {
              "JDE": 122664,
              "fullname": "Marthen Patodo",
              "position": "Operator",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122665,
              "fullname": "Andarias Palimbong",
              "position": "Exc Kom Pc 2000/1250/Hitachi 1200",
              "division": ""
            },
            {
              "JDE": 122667,
              "fullname": "Kart",
              "position": "Operator",
              "division": "PLM-Aux Wheel"
            },
            {
              "JDE": 122669,
              "fullname": "Marcelino Suade",
              "position": "Exc Shovel 5500 /Ex 3600",
              "division": ""
            },
            {
              "JDE": 122670,
              "fullname": "Ruslan",
              "position": "Edt Kom Haulpak 730",
              "division": "Face"
            },
            {
              "JDE": 122672,
              "fullname": "Gufron Nugraha",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122676,
              "fullname": "Hamiruddin",
              "position": "Operator",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122680,
              "fullname": "M. Yusuf",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122681,
              "fullname": "Duma",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122686,
              "fullname": "Hariadi",
              "position": "Exc Hitachi 3600",
              "division": ""
            },
            {
              "JDE": 122687,
              "fullname": "Ricky K. Wardana",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122688,
              "fullname": "Faisal Ramang",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122689,
              "fullname": "Pangihutan Manurung",
              "position": "Warehouse Manager",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122690,
              "fullname": "Jules L Simanjuntak",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 122692,
              "fullname": "Janwardi Pasaribu",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122693,
              "fullname": "Zainuddin",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122694,
              "fullname": "Agus Kurniawan",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122695,
              "fullname": "Jumasri",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122698,
              "fullname": "Ervian Ala'",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 122699,
              "fullname": "Kalvin T Limbong",
              "position": "Exc Pc 1250 / Hitachi 1200",
              "division": ""
            },
            {
              "JDE": 122701,
              "fullname": "Eliezer Luther",
              "position": "Electrician I",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122703,
              "fullname": "Rahmat",
              "position": "Mdt Kom Hd 1500-7",
              "division": "Juragan Lombok"
            },
            {
              "JDE": 122706,
              "fullname": "Endro Suyono",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 122710,
              "fullname": "Fery Wijayanto",
              "position": "Maintenance Trainer",
              "division": ""
            },
            {
              "JDE": 122712,
              "fullname": "Ayub Marrung",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122713,
              "fullname": "Liliek Priyo Sudarmo",
              "position": "Maintenance Trainer",
              "division": ""
            },
            {
              "JDE": 122722,
              "fullname": "Suko Wiyono",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 122731,
              "fullname": "Ali Arham",
              "position": "Exc Hitachi 2600",
              "division": ""
            },
            {
              "JDE": 122734,
              "fullname": "Ottopianus",
              "position": "Exc Kom Pc 2000 / Pc1250",
              "division": ""
            },
            {
              "JDE": 122738,
              "fullname": "M. Ilyas Bin M. Rusli",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 122762,
              "fullname": "Oloan Sihol Operasindo",
              "position": "",
              "division": ""
            },
            {"JDE": 122763, "fullname": "Susanto", "position": "Hos", "division": ""},
            {
              "JDE": 122766,
              "fullname": "Ricky Simanjuntak",
              "position": "Cdrp Engineer",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122768,
              "fullname": "Sahat Japipin Marpaung",
              "position": "Drill & Blast Engineer",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122769,
              "fullname": "Julius Heryanto",
              "position": "Cost Control Officer",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122777,
              "fullname": "Yasrie Nevtriady",
              "position": "Head Of Hr Department",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 122787,
              "fullname": "Eko Suciratmadi Wiranto",
              "position": "Long Term Plan Engineer",
              "division": "Support-Security"
            },
            {
              "JDE": 122788,
              "fullname": "Hidayat Purwoko",
              "position": "Mine Planning",
              "division": "Eng-Technical"
            },
            {
              "JDE": 122808,
              "fullname": "Fitria Dewi",
              "position": "Water Mon & Comp",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122809,
              "fullname": "Arman Armin Sikamban",
              "position": "Mechanich-2 Edt",
              "division": ""
            },
            {
              "JDE": 122810,
              "fullname": "Gunawan Wibisono",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122811,
              "fullname": "Eko Hermanto",
              "position": "Foreman Ob",
              "division": ""
            },
            {
              "JDE": 122812,
              "fullname": "Warman",
              "position": "Operator",
              "division": "Support-Security"
            },
            {
              "JDE": 122813,
              "fullname": "Ali Ridha Lapatau",
              "position": "Pit South Admin",
              "division": "Support-Security"
            },
            {
              "JDE": 122815,
              "fullname": "Mujiyo",
              "position": "Mechanic I",
              "division": "Support-Security"
            },
            {
              "JDE": 122830,
              "fullname": "Surianti, L. ST",
              "position": "Plant Admin",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122840,
              "fullname": "Wulandari",
              "position": "Plant Admin",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 122853,
              "fullname": "Thomas Octavianus Carlo",
              "position": "Head Of Procurement",
              "division": ""
            },
            {
              "JDE": 122856,
              "fullname": "Barkah Budiman",
              "position": "Mechanic Ii",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 122857,
              "fullname": "Vendy Kurniawan",
              "position": "Mechanic Ii",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122858,
              "fullname": "Deddy Hermawan",
              "position": "Adm.Plant&Maintenance",
              "division": ""
            },
            {
              "JDE": 122859,
              "fullname": "Zainal Arifin",
              "position": "Mechanic Ii",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122860,
              "fullname": "Dadang Suganda",
              "position": "Mechanic Iii",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 122865,
              "fullname": "Miftakhul Huda",
              "position": "Mechanical 2 + Dump",
              "division": "Eng-Technical"
            },
            {
              "JDE": 122866,
              "fullname": "Obeet Nego Tandi Pakila",
              "position": "Welder",
              "division": ""
            },
            {
              "JDE": 122867,
              "fullname": "Suriyandi",
              "position": "Mechanic Ii",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122876,
              "fullname": "Sumantri",
              "position": "Mechanic Ii",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122877,
              "fullname": "Hasriani",
              "position": "Data Entry",
              "division": ""
            },
            {
              "JDE": 122889,
              "fullname": "Dennies Kristianto",
              "position": "Mechanic Iii",
              "division": "Eng-Technical"
            },
            {"JDE": 122909, "fullname": "Suardi", "position": "Welder", "division": ""},
            {
              "JDE": 122911,
              "fullname": "Rusmadi",
              "position": "Planner",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 122912,
              "fullname": "Laurensius Iwan Sasono",
              "position": "Planner",
              "division": ""
            },
            {
              "JDE": 122918,
              "fullname": "Andriano Dasri",
              "position": "",
              "division": "PLM-MDT"
            },
            {
              "JDE": 122919,
              "fullname": "Irvan Eka Putra",
              "position": "Planner",
              "division": "Operation-Mining"
            },
            {
              "JDE": 122920,
              "fullname": "Heny Setiawan",
              "position": "Mechanic Ii",
              "division": ""
            },
            {
              "JDE": 122923,
              "fullname": "Anton Dody Rushendra",
              "position": "Mechanic Ii",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 122924,
              "fullname": "Rolly Yunastra",
              "position": "Mechanic Ii",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 123027,
              "fullname": "Arpin",
              "position": "",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 123032,
              "fullname": "Marsinah",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123050,
              "fullname": "Mulyadi Kadir HAJI",
              "position": "",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 123051,
              "fullname": "Juriansyah (Ramli)",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123057,
              "fullname": "Fatkur Rohman",
              "position": "",
              "division": "Support-Training"
            },
            {
              "JDE": 123076,
              "fullname": "I Wayan S",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 123079,
              "fullname": "Sappe Syamsuddin",
              "position": "",
              "division": "Support-HSE"
            },
            {
              "JDE": 123082,
              "fullname": "Mu Hamdani",
              "position": "",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 123087,
              "fullname": "Rusman",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 123094,
              "fullname": "Halidin",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123095,
              "fullname": "Jon Hendri Lumban Tobing",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {"JDE": 123106, "fullname": "Dian Adhitama", "position": "", "division": ""},
            {
              "JDE": 123112,
              "fullname": "Evhan",
              "position": "",
              "division": "PLM-General"
            },
            {
              "JDE": 123116,
              "fullname": "Firman Wahyudi",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 123117,
              "fullname": "M. Amir",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 123118,
              "fullname": "Suyamto",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123135,
              "fullname": "Marthen Luther",
              "position": "Dozer Kom D65P / D85Ss / D155",
              "division": "PERDAU"
            },
            {
              "JDE": 123140,
              "fullname": "Dwi Sulistiyanto",
              "position": "",
              "division": ""
            },
            {
              "JDE": 123141,
              "fullname": "Senianto Paintu",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123148,
              "fullname": "Ronal Pademme",
              "position": "Dozer Kom D65P / D85Ss / D155",
              "division": ""
            },
            {"JDE": 123149, "fullname": "Ruslan", "position": "", "division": ""},
            {"JDE": 123151, "fullname": "Agung Nugroho", "position": "", "division": ""},
            {
              "JDE": 123156,
              "fullname": "Jufri S",
              "position": "Dozer Kom D155A/Hd465",
              "division": ""
            },
            {
              "JDE": 123157,
              "fullname": "Bunyamin",
              "position": "",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 123158,
              "fullname": "Kaswan",
              "position": "Dozer D155/ D85Ss /D65P",
              "division": ""
            },
            {
              "JDE": 123159,
              "fullname": "Fachrul Rozi",
              "position": "Exc Sh 3600/ Ex 3600",
              "division": ""
            },
            {
              "JDE": 123168,
              "fullname": "Mardiansyah",
              "position": "",
              "division": "PLM-Aux Wheel"
            },
            {
              "JDE": 123171,
              "fullname": "Muhammad Taupiq",
              "position": "",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 123173,
              "fullname": "Darsons",
              "position": "Dozer Kom D375 / D155",
              "division": ""
            },
            {
              "JDE": 123174,
              "fullname": "Wati elle",
              "position": "Dozer Kom D65P / D85Ss/Hd465",
              "division": ""
            },
            {
              "JDE": 123176,
              "fullname": "Thamrin K.",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123177,
              "fullname": "Fadli",
              "position": "",
              "division": "Support-HSE"
            },
            {
              "JDE": 123178,
              "fullname": "Muji Wiyono",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123180,
              "fullname": "Fahrudin yusuf (tibo)",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123182,
              "fullname": "LA ENRE S. (AMBO)",
              "position": "",
              "division": "Eng-Technical"
            },
            {
              "JDE": 123183,
              "fullname": "Nasri",
              "position": "Dewatering",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 123184,
              "fullname": "Roni",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 123185,
              "fullname": "Subair",
              "position": "Dewatering",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123196,
              "fullname": "Semuel Paledan",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123198,
              "fullname": "Abdul Rahman bin Bassong",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123203,
              "fullname": "Rizal Leppa Tangdialla",
              "position": "",
              "division": ""
            },
            {"JDE": 123204, "fullname": "Luter Pasang", "position": "", "division": ""},
            {
              "JDE": 123207,
              "fullname": "Yohanis Tappi",
              "position": "",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 123208,
              "fullname": "Sirajuddin",
              "position": "Exc Kom Pc 400 / Pc 200",
              "division": ""
            },
            {
              "JDE": 123210,
              "fullname": "Yulius Tangke Parung",
              "position": "",
              "division": "Support-Training"
            },
            {
              "JDE": 123211,
              "fullname": "Brian pasande",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123219,
              "fullname": "Ery yulizar",
              "position": "Dozer D155/ D85Ss /D65P",
              "division": ""
            },
            {
              "JDE": 123226,
              "fullname": "M. Rois",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123233,
              "fullname": "Asrul",
              "position": "",
              "division": "Eng-Technical"
            },
            {
              "JDE": 123237,
              "fullname": "Ronnie meldie kula",
              "position": "Dozer D155/ D85Ss /D65P",
              "division": ""
            },
            {
              "JDE": 123240,
              "fullname": "Agustinus Boro Alu",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123241,
              "fullname": "Muhammad Ilyas",
              "position": "Mdt Kom Hd 785-7 / Mdt Cat 777 / Hd 465",
              "division": ""
            },
            {
              "JDE": 123242,
              "fullname": "Khairil Anwar",
              "position": "",
              "division": "Support-HSE"
            },
            {"JDE": 123243, "fullname": "Yuli Samaa", "position": "", "division": ""},
            {
              "JDE": 123245,
              "fullname": "Fitria Fajar Suci",
              "position": "",
              "division": "PLM-Aux Wheel"
            },
            {
              "JDE": 123247,
              "fullname": "HERI PURWANTO",
              "position": "",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 123248,
              "fullname": "Masmur",
              "position": "Mdt Kom Hd 465-7",
              "division": "JAMBUL"
            },
            {
              "JDE": 123250,
              "fullname": "Harisman",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123251,
              "fullname": "Maha andri subayak",
              "position": "Dozer D155/ D85Ss /D65P",
              "division": ""
            },
            {
              "JDE": 123252,
              "fullname": "Andreansyah",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123256,
              "fullname": "Lukas Tomi Bandaso",
              "position": "",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 123258,
              "fullname": "Jery Makmur",
              "position": "",
              "division": "PLM-MDT"
            },
            {
              "JDE": 123260,
              "fullname": "Bahrum",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123262,
              "fullname": "Natan Bara",
              "position": "Exc Kom Pc 400 / Pc 200",
              "division": ""
            },
            {
              "JDE": 123265,
              "fullname": "Andi Wirawan",
              "position": "",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 123271,
              "fullname": "Muhtasar",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123272,
              "fullname": "Sangka",
              "position": "Dozer D155/ D85Ss /D65P",
              "division": ""
            },
            {"JDE": 123275, "fullname": "Abdul Jalal", "position": "", "division": ""},
            {
              "JDE": 123277,
              "fullname": "Chaerul Buhera",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123278,
              "fullname": "Ashar PELANGI",
              "position": "",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 123279,
              "fullname": "Heri Wahyudi",
              "position": "",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 123281,
              "fullname": "Petrus Pairi",
              "position": "",
              "division": "Support-MIS"
            },
            {
              "JDE": 123287,
              "fullname": "Afandi",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123289,
              "fullname": "Syamsu Rijal",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 123290,
              "fullname": "Fikri Yadi",
              "position": "",
              "division": "Support-MIS"
            },
            {
              "JDE": 123299,
              "fullname": "Iriansyah",
              "position": "",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 123301,
              "fullname": "Maldi Fitrah",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123302,
              "fullname": "Yody Frederik Rande Kalalo",
              "position": "",
              "division": "PLM-Fluida"
            },
            {
              "JDE": 123303,
              "fullname": "Samsul",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123305,
              "fullname": "Sudir",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {"JDE": 123306, "fullname": "Wahyudi", "position": "", "division": ""},
            {
              "JDE": 123307,
              "fullname": "Hadi Supriono (Paman)",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123309,
              "fullname": "Heru Indiarto",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123311,
              "fullname": "Yuddin",
              "position": "",
              "division": "Support-Construction"
            },
            {
              "JDE": 123312,
              "fullname": "Arifin Sukur B.",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123313,
              "fullname": "Ishak Ismail",
              "position": "",
              "division": "Operation-Mining"
            },
            {
              "JDE": 123314,
              "fullname": "Risal",
              "position": "Mdt Kom Hd 1500-7",
              "division": "WT"
            },
            {
              "JDE": 123315,
              "fullname": "Usman",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123319,
              "fullname": "Agus Memed",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123320,
              "fullname": "Roby Arung Allo",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123322,
              "fullname": "Yan Sulo Bua",
              "position": "Exc Kom Pc 1250/Hitachi 1200",
              "division": ""
            },
            {
              "JDE": 123327,
              "fullname": "Arnoldus Marak Lewar",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123328,
              "fullname": "Pahruji",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123332,
              "fullname": "Abdul Latif",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123340,
              "fullname": "Agus Lois",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 123341,
              "fullname": "Hamsir",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123342,
              "fullname": "Harmaji",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123346,
              "fullname": "Rahmatullah",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123349,
              "fullname": "Rully Noldy Onsu",
              "position": "",
              "division": "Operation-Mining"
            },
            {"JDE": 123350, "fullname": "Chaerul", "position": "", "division": ""},
            {
              "JDE": 123357,
              "fullname": "Yoldianto Hendri",
              "position": "",
              "division": "PLM-Aux Wheel"
            },
            {
              "JDE": 123358,
              "fullname": "Elias Sangganna",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {"JDE": 123362, "fullname": "Lulus Murtaji", "position": "", "division": ""},
            {"JDE": 123363, "fullname": "Salpi Tanga", "position": "", "division": ""},
            {
              "JDE": 123364,
              "fullname": "Syamsul Anwar",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 123366,
              "fullname": "Petrus Una",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123374,
              "fullname": "Fatkhul Mu'in",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 123375,
              "fullname": "Lalu Miftah Farid",
              "position": "",
              "division": ""
            },
            {
              "JDE": 123376,
              "fullname": "Markus Ubang",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 123377,
              "fullname": "Iwan",
              "position": "",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 123394,
              "fullname": "Yohanes Kapuangan",
              "position": "Dozer Kom D155A",
              "division": ""
            },
            {
              "JDE": 123404,
              "fullname": "Yahya Padu'",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123405,
              "fullname": "Yusuf Rorrong",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123407,
              "fullname": "Perdi Sanda",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 123408,
              "fullname": "Markus Pagewang",
              "position": "",
              "division": "PLM-MDT"
            },
            {
              "JDE": 123419,
              "fullname": "Leonardus Patinggi",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123420,
              "fullname": "Abu Bakar Mangiriang",
              "position": "",
              "division": "Support-Finance"
            },
            {
              "JDE": 123421,
              "fullname": "Sainul",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123422,
              "fullname": "Amirullah",
              "position": "",
              "division": "PLM-MDT"
            },
            {"JDE": 123423, "fullname": "Imam Musbit", "position": "", "division": ""},
            {
              "JDE": 123425,
              "fullname": "Asitua Silalahi",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123426,
              "fullname": "Mus Mulyadi",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123427,
              "fullname": "Ahmad Bastami",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 123428,
              "fullname": "Baharuddin",
              "position": "",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 123429,
              "fullname": "Yusak Rantepata Sampebua",
              "position": "",
              "division": "PLM-MDT"
            },
            {
              "JDE": 123449,
              "fullname": "Yudi Wijatno",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 123451,
              "fullname": "Sanging",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123454,
              "fullname": "Sapuan",
              "position": "",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 123459,
              "fullname": "Donar Singki",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 123466,
              "fullname": "Reihart Rika Ramang",
              "position": "",
              "division": "Support-Construction"
            },
            {
              "JDE": 123468,
              "fullname": "Andri Oktaviana",
              "position": "Security",
              "division": "Support-Construction"
            },
            {
              "JDE": 123469,
              "fullname": "Yohanis P",
              "position": "Dozer Kom D155A",
              "division": ""
            },
            {
              "JDE": 123476,
              "fullname": "Agus Paledan",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123477,
              "fullname": "Sarman",
              "position": "",
              "division": "Support-Construction"
            },
            {
              "JDE": 123479,
              "fullname": "Ganti Patale'",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123488,
              "fullname": "Marlundu Hutabalian",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123489,
              "fullname": "Jupri Anan",
              "position": "",
              "division": "PLM-EDT"
            },
            {
              "JDE": 123491,
              "fullname": "Petpemul Tombo Toding",
              "position": "Dozer D155/ D85Ss /D65P",
              "division": ""
            },
            {
              "JDE": 123492,
              "fullname": "Ronal Minggu",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 123496,
              "fullname": "Nelson Situmorang",
              "position": "",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 123497,
              "fullname": "James Sirat",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 123501,
              "fullname": "Massda",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 123513,
              "fullname": "Delfi Ade",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123516,
              "fullname": "Kaharuddin",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123527,
              "fullname": "Jamaluddin bin H. Aras",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123528,
              "fullname": "Yan Wariono",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123530,
              "fullname": "Yohanis Lading",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 123534,
              "fullname": "Rialang Patakdungan",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123537,
              "fullname": "Maisal Ratu",
              "position": "Mdt Kom Hd 465-7 / Eh 1100-3",
              "division": ""
            },
            {
              "JDE": 123538,
              "fullname": "Bonaventura Raba Ali",
              "position": "",
              "division": "PLM-Aux Wheel"
            },
            {
              "JDE": 123539,
              "fullname": "Domistianis",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 123540,
              "fullname": "Deny Rahmadinata",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 123541,
              "fullname": "Novel Siagian",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123542,
              "fullname": "Teddy Karundeng",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123543,
              "fullname": "Agustinus Sabang",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123545,
              "fullname": "Dwi Santoso",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123546,
              "fullname": "Jepri Tandi Bua",
              "position": "",
              "division": ""
            },
            {
              "JDE": 123564,
              "fullname": "Nai Tandianan",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 123565,
              "fullname": "Marthen Roni",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123568,
              "fullname": "Aslan",
              "position": "",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 123572,
              "fullname": "Heriyyansyah",
              "position": "",
              "division": "PLM-LV & LT"
            },
            {
              "JDE": 123573,
              "fullname": "Weli Frana Butar-butar",
              "position": "Exc Kom Pc 2000 / Pc1250",
              "division": ""
            },
            {
              "JDE": 123575,
              "fullname": "Topan yanto",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123576,
              "fullname": "Martogang Samosir",
              "position": "",
              "division": "Eng-Technical"
            },
            {
              "JDE": 123577,
              "fullname": "David Duma",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 123583,
              "fullname": "Marthen Eden",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123584,
              "fullname": "Betlamajanempa Tammu",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 123585,
              "fullname": "Martinus Rinu",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123595,
              "fullname": "saiful anwar",
              "position": "Team Leader Dewtering",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 123602,
              "fullname": "Hamdi",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 123603,
              "fullname": "Sulistianto",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123604,
              "fullname": "Sudirman",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123614,
              "fullname": "Agus Purwanto",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 123615,
              "fullname": "Haryanto",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 123616,
              "fullname": "Riki",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 123626,
              "fullname": "Hermanur",
              "position": "Mdt Kom Hd 465-7 / Drill",
              "division": ""
            },
            {
              "JDE": 123633,
              "fullname": "Tappi",
              "position": "",
              "division": "Operation-Pit South"
            },
            {"JDE": 123634, "fullname": "Ridwan", "position": "", "division": ""},
            {"JDE": 123643, "fullname": "Abdul Rasyid", "position": "", "division": ""},
            {
              "JDE": 123647,
              "fullname": "Alisman",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123649,
              "fullname": "Slamet Adi Waluyo",
              "position": "",
              "division": "PLM-General"
            },
            {
              "JDE": 123650,
              "fullname": "Titus Mono",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123651,
              "fullname": "Abdul Jabar",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123652,
              "fullname": "Alexander Bunga",
              "position": "",
              "division": ""
            },
            {
              "JDE": 123653,
              "fullname": "Herman Sendong",
              "position": "",
              "division": ""
            },
            {
              "JDE": 123654,
              "fullname": "Linus Rundungan",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123656,
              "fullname": "Yunus Pare",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123658,
              "fullname": "Torry Rusbianto",
              "position": "Supt. Mod",
              "division": ""
            },
            {
              "JDE": 123660,
              "fullname": "Oktafianus Cons Lepa (Opa)",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123661,
              "fullname": "Charles Ronald Palenewen",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123665,
              "fullname": "Rendy Aryadinata TAMBALU",
              "position": "",
              "division": ""
            },
            {
              "JDE": 123667,
              "fullname": "Semuel Musi",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123668,
              "fullname": "Heriyanto (Eli Boy)",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123671,
              "fullname": "Dimas Indrayanto",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123675,
              "fullname": "Abd. Hadi",
              "position": "",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 123679,
              "fullname": "Bernad",
              "position": "Grader Kom 825",
              "division": ""
            },
            {
              "JDE": 123696,
              "fullname": "Irsyam H",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {"JDE": 123701, "fullname": "Lukman", "position": "", "division": ""},
            {
              "JDE": 123716,
              "fullname": "Ronal Manurung",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 123728,
              "fullname": "Bara Tangke Layuk",
              "position": "Exc Pc 1250 / Hitachi 1200",
              "division": ""
            },
            {"JDE": 123731, "fullname": "Haris", "position": "", "division": ""},
            {
              "JDE": 123749,
              "fullname": "Petrus Tandung",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {"JDE": 123763, "fullname": "Victor C Widi", "position": "", "division": ""},
            {
              "JDE": 123780,
              "fullname": "Hendra",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": "WT"
            },
            {
              "JDE": 123787,
              "fullname": "Fauzi Satria Nugraha",
              "position": "",
              "division": ""
            },
            {
              "JDE": 123805,
              "fullname": "Evafroditus Pagiling",
              "position": "Manager",
              "division": "MOD"
            },
            {
              "JDE": 123807,
              "fullname": "Rosihan Anwar",
              "position": "",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 123824,
              "fullname": "Muhammad Yusro Efendi",
              "position": "",
              "division": "Support-HR & GA"
            },
            {"JDE": 123825, "fullname": "Yahya", "position": "", "division": ""},
            {"JDE": 123904, "fullname": "Wisnu Anggoro", "position": "", "division": ""},
            {
              "JDE": 124000,
              "fullname": "Rosmini",
              "position": "",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 124002,
              "fullname": "Deasy Anggraini",
              "position": "",
              "division": ""
            },
            {
              "JDE": 124003,
              "fullname": "Juliani",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 124198,
              "fullname": "Sacares Dony Pradana",
              "position": "",
              "division": ""
            },
            {
              "JDE": 124203,
              "fullname": "I Gede Raka Wira Dharma",
              "position": "Operator",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 124428,
              "fullname": "Surya Putra B",
              "position": "Dispatch",
              "division": ""
            },
            {"JDE": 124699, "fullname": "Andani", "position": "", "division": ""},
            {
              "JDE": 210003,
              "fullname": "Hendriansyah",
              "position": "Bcp Comrel Officer",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 210011,
              "fullname": "Feronika Pabita",
              "position": "Planning & Development",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210018,
              "fullname": "Antonius",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 210030,
              "fullname": "Amaruddin Bin Abdulah",
              "position": "",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 210048,
              "fullname": "Hasrak Ahmad",
              "position": "",
              "division": "PLM-EDT"
            },
            {
              "JDE": 210050,
              "fullname": "Achmad Tarif Nur",
              "position": "Hd 1500",
              "division": ""
            },
            {
              "JDE": 210063,
              "fullname": "Muliadi",
              "position": "Plant Admin",
              "division": "PLM-EDT"
            },
            {
              "JDE": 210067,
              "fullname": "Dhany Surya Kumara",
              "position": "",
              "division": ""
            },
            {
              "JDE": 210069,
              "fullname": "Asditia Prama Putra",
              "position": "Buyer Supervisor",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210076,
              "fullname": "Dedy Wijaya",
              "position": "Mechanic Iii",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210078,
              "fullname": "M. Rizal",
              "position": "Mechanic Iii",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210079,
              "fullname": "Mukhlis Bin Kuneh",
              "position": "Mechanic Iii",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210082,
              "fullname": "Rusdianto Bin Sudirman",
              "position": "Mechanic Iii",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210084,
              "fullname": "Adie Hendra Setyawan",
              "position": "Plan Admin",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210087,
              "fullname": "Mujianto",
              "position": "Operator",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 210091,
              "fullname": "Achmad Sujarwo",
              "position": "Operator",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 210094,
              "fullname": "I Wayan Sudarsana",
              "position": "Mechanic Iii",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 210096,
              "fullname": "Budiono",
              "position": "Mechanic Iii",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 210097,
              "fullname": "Rahmad Hidayat",
              "position": "Mechanic Iii",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210098,
              "fullname": "Budi Indrianto",
              "position": "Mechanic Iii",
              "division": "Support-Construction"
            },
            {
              "JDE": 210099,
              "fullname": "Eri Sugiono",
              "position": "Mechanic Iii",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210100,
              "fullname": "Setiawan",
              "position": "Mechanic Iii",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210101,
              "fullname": "Jono Saputro",
              "position": "Mechanic Iii",
              "division": "Eng-Fuel Management"
            },
            {
              "JDE": 210103,
              "fullname": "Lahari",
              "position": "Mechanic Iii",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210104,
              "fullname": "Ikral",
              "position": "Mechanic Iii",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210105,
              "fullname": "M. Syaiful Anam",
              "position": "Mechanic Iii",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210106,
              "fullname": "Nasrullah",
              "position": "Plant Admin",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210107,
              "fullname": "Lukas Dhanur W Gunawan",
              "position": "Plant Admin",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210110,
              "fullname": "Ruslan",
              "position": "Mechanic Iii",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210111,
              "fullname": "Suherman",
              "position": "Mechanic Iii",
              "division": "PLM-MDT"
            },
            {
              "JDE": 210113,
              "fullname": "Lukman",
              "position": "Mechanic Iii",
              "division": "Support-Construction"
            },
            {
              "JDE": 210116,
              "fullname": "Debi Parintak",
              "position": "Mechanic Iii",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 210117,
              "fullname": "Joni Padaunan",
              "position": "Mechanic Iii",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 210118,
              "fullname": "Luksi Pato S",
              "position": "Mechanic Iii",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 210119,
              "fullname": "Yosep Rande B",
              "position": "Mechanic Iii",
              "division": "Support-Security"
            },
            {
              "JDE": 210120,
              "fullname": "Jek Lengka",
              "position": "Mechanic Iii",
              "division": "Support-Security"
            },
            {
              "JDE": 210122,
              "fullname": "Huala P. Sihombing",
              "position": "Long Term Plan Engineer",
              "division": "Support-Security"
            },
            {
              "JDE": 210135,
              "fullname": "Rachmad Arie Prabowo",
              "position": "Hse System Specialist",
              "division": "Support-Security"
            },
            {
              "JDE": 210144,
              "fullname": "Ambar Purwanto",
              "position": "Mechanic Iii",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 210145,
              "fullname": "Indra Yanto",
              "position": "Mechanic Iii",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 210146,
              "fullname": "Agus Prasetya",
              "position": "Mechanic Iii",
              "division": "Support-Security"
            },
            {
              "JDE": 210147,
              "fullname": "Marthen Sarumbu",
              "position": "Mechanic Iii",
              "division": "Support-Security"
            },
            {
              "JDE": 210148,
              "fullname": "Jupri Tandi L",
              "position": "Mechanic Iii",
              "division": ""
            },
            {
              "JDE": 210149,
              "fullname": "Sandra Panggabean",
              "position": "Mechanic Iii",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 210150,
              "fullname": "Aswan",
              "position": "Mechanic Iii",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 210152,
              "fullname": "Fachrizal Hanavy J",
              "position": "Mechanic Iii",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 210153,
              "fullname": "Jumardi",
              "position": "Mechanic Iii",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 210156,
              "fullname": "Yoel",
              "position": "Mechanic Ii",
              "division": "PLM-Tyre"
            },
            {
              "JDE": 210157,
              "fullname": "Ayub Yan Toding Allo",
              "position": "Mechanic Ii",
              "division": ""
            },
            {
              "JDE": 210158,
              "fullname": "Emil Salim",
              "position": "Mechanic Ii",
              "division": ""
            },
            {
              "JDE": 210160,
              "fullname": "I Wayan Ari Saputra",
              "position": "Mechanic Ii",
              "division": ""
            },
            {
              "JDE": 210162,
              "fullname": "Frans Andriatmoko",
              "position": "Mechanic Ii",
              "division": ""
            },
            {
              "JDE": 210163,
              "fullname": "Azis Arifianto",
              "position": "Mechanic Ii",
              "division": ""
            },
            {
              "JDE": 210177,
              "fullname": "Fadli Admiral",
              "position": "",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210179,
              "fullname": "Edi Rahman",
              "position": "Foreman",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210186,
              "fullname": "Adhie Putro Wiyadi",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210187,
              "fullname": "Agus Triyono",
              "position": "Junior Mechanic",
              "division": "Support-MIS"
            },
            {
              "JDE": 210188,
              "fullname": "Agustinus Eko Cahyo Setyawan",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210190,
              "fullname": "Andi Sunaryo",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210192,
              "fullname": "Dwi Yudho Timur Muji Siswanto",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210194,
              "fullname": "Martanto",
              "position": "Junior Mechanic",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 210195,
              "fullname": "Nugroho Budi Utomo",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210196,
              "fullname": "Priyanto",
              "position": "Base Control Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210197,
              "fullname": "Rira Letri Tampan Suryana",
              "position": "Junior Mechanic",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 210199,
              "fullname": "Sigit Prasetyo",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210201,
              "fullname": "Iwan Yulianto",
              "position": "Junior Mechanic",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 210204,
              "fullname": "Agung Andriyanto",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210205,
              "fullname": "Agus Suwardoyo",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210207,
              "fullname": "Dimas Kusuma Murwindo",
              "position": "",
              "division": ""
            },
            {
              "JDE": 210208,
              "fullname": "Jemi Suryanto",
              "position": "Junior Mechanic",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 210217,
              "fullname": "Taufik Santoso",
              "position": "Junior Mechanic",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 210267,
              "fullname": "Suharmanto",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210268,
              "fullname": "Destian Prasojo",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210343,
              "fullname": "Hery Irmawan",
              "position": "Support And Lv",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210364,
              "fullname": "Henny Victoria ( RIA)",
              "position": "Plant Admin",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210420,
              "fullname": "Budi Widodo",
              "position": "Foreman",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210482,
              "fullname": "Wawan Ediyanto _ GONDRONG CREW A",
              "position": "",
              "division": ""
            },
            {
              "JDE": 210483,
              "fullname": "Suwito",
              "position": "Head Of Security",
              "division": ""
            },
            {
              "JDE": 210496,
              "fullname": "JUNAIDI",
              "position": "Foreman",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 210520,
              "fullname": "Bachtiar Ismail",
              "position": "Operation Trainer",
              "division": "Operation-PIT BC"
            },
            {
              "JDE": 210524,
              "fullname": "Elektron",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 210525,
              "fullname": "Rayawan Amban Janitito",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 210527,
              "fullname": "Rundu Uman S.",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 210530,
              "fullname": "Supryadi",
              "position": "Security",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 210593,
              "fullname": "Mochammad Affandi",
              "position": "Security",
              "division": ""
            },
            {"JDE": 210594, "fullname": "Onen", "position": "Security", "division": ""},
            {
              "JDE": 210595,
              "fullname": "Puan",
              "position": "Security",
              "division": "Support-Training"
            },
            {
              "JDE": 210596,
              "fullname": "Apeng",
              "position": "Security",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 210632,
              "fullname": "Samsul Bahri",
              "position": "Mine Operation Team",
              "division": "Support-Training"
            },
            {
              "JDE": 210633,
              "fullname": "Maulvi Hasan",
              "position": "Mine Operation Team",
              "division": ""
            },
            {
              "JDE": 210667,
              "fullname": "Esron Pangaribuan",
              "position": "Exc Kom Pc 2000 / Pc1250",
              "division": ""
            },
            {"JDE": 210682, "fullname": "Koswara", "position": "", "division": ""},
            {
              "JDE": 210688,
              "fullname": "Suyitno",
              "position": "Exc Kom Pc 1250/Hitachi 1200 + Doser 155",
              "division": ""
            },
            {
              "JDE": 210689,
              "fullname": "Agus Subianto",
              "position": "Civil Engineer",
              "division": ""
            },
            {
              "JDE": 210695,
              "fullname": "David Mowisu",
              "position": "Mechanic H-1, Electric Dt",
              "division": "Operation-Drill & Blast"
            },
            {
              "JDE": 210703,
              "fullname": "Jumadi",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 210704,
              "fullname": "Ridwan",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 210709,
              "fullname": "Ibad Mulyana",
              "position": "Security",
              "division": ""
            },
            {
              "JDE": 210710,
              "fullname": "Robert Ricardo Redah",
              "position": "Security",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210711,
              "fullname": "Mikron",
              "position": "Security",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210712,
              "fullname": "Yusrizal",
              "position": "Security",
              "division": "Support-Finance"
            },
            {
              "JDE": 210713,
              "fullname": "Yusuf Mulyana",
              "position": "Security",
              "division": "Support-HR & GA"
            },
            {
              "JDE": 210723,
              "fullname": "Jumianto Toto",
              "position": "Dozer Kom D375 / D155/Hd465//Gr825 / Gr705",
              "division": ""
            },
            {"JDE": 210724, "fullname": "Rasul", "position": "Foreman", "division": ""},
            {
              "JDE": 210725,
              "fullname": "Andik Setyawan",
              "position": "85,233,344,514",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210735,
              "fullname": "Min Haji",
              "position": "",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210736,
              "fullname": "Yapet Pilemon",
              "position": "Operator",
              "division": "Support-HSE"
            },
            {
              "JDE": 210737,
              "fullname": "Elia Edwin Pasino",
              "position": "Operator",
              "division": "PLM-MDT"
            },
            {
              "JDE": 210738,
              "fullname": "Jusriadi",
              "position": "Mdt Kom Hd 1500-7",
              "division": "KOMENG"
            },
            {
              "JDE": 210739,
              "fullname": "Suwito Adi Margo Utomo",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210740,
              "fullname": "Ruben Patandean",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 210741,
              "fullname": "Amiluddin",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210744,
              "fullname": "Ferdinand Kabangnga",
              "position": "Operator",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 210745,
              "fullname": "Marthen Ruppa",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": ""
            },
            {
              "JDE": 210746,
              "fullname": "Armansyah HT",
              "position": "Operator",
              "division": "Operation-Pit South"
            },
            {
              "JDE": 210747,
              "fullname": "Arsyad (PAMAN)",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 210748,
              "fullname": "Mardiana",
              "position": "Data Entry",
              "division": "PLM-MDT"
            },
            {
              "JDE": 210749,
              "fullname": "Hariyanto",
              "position": "Operator",
              "division": "PLM-General"
            },
            {
              "JDE": 210750,
              "fullname": "M. Hatta Aliah",
              "position": "Supervisor",
              "division": "PLM-General"
            },
            {
              "JDE": 210751,
              "fullname": "Suparlo",
              "position": "Operator",
              "division": "Support-Warehouse"
            },
            {
              "JDE": 210752,
              "fullname": "Yohanis Tinggi",
              "position": "Operator",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 210753,
              "fullname": "Anton Rukka R.",
              "position": "Exc Kom Pc 1250/Hitachi 1200",
              "division": ""
            },
            {
              "JDE": 210754,
              "fullname": "Saparianto",
              "position": "Fuel Supervisor",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 210756,
              "fullname": "Fx. Purwanto",
              "position": "Field Trainer",
              "division": "PLM-General"
            },
            {
              "JDE": 210764,
              "fullname": "Ari Nur Wibowo",
              "position": "",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 210769,
              "fullname": "Suryadi",
              "position": "Welder",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 210770,
              "fullname": "Nasri Effendi (DEWATERING)",
              "position": "Dewatering",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 210771,
              "fullname": "Muhammad Anas",
              "position": "Pit Control",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 210772,
              "fullname": "Aris Patandianan",
              "position": "Dewatering",
              "division": "PLM-Electric Support"
            },
            {
              "JDE": 210789,
              "fullname": "Syamsul Arifin",
              "position": "Mechanical 2 + Dump",
              "division": "PLM-Aux Track"
            },
            {
              "JDE": 210790,
              "fullname": "Purwadi",
              "position": "Mechanic Iii",
              "division": "Eng-Technical"
            },
            {
              "JDE": 210795,
              "fullname": "Pahriah",
              "position": "Operator",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 210796,
              "fullname": "Hady Thoyib Pratama",
              "position": "Junior Mechanic",
              "division": "PLM-Excavator"
            },
            {
              "JDE": 210797,
              "fullname": "Yacob Sonda Rompa",
              "position": "Operator",
              "division": "PLM-General"
            },
            {
              "JDE": 210806,
              "fullname": "Agus Prasetyo",
              "position": "Service Truck Driver",
              "division": "PLM-General"
            },
            {
              "JDE": 210807,
              "fullname": "Ardian Yudha Pratama",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210808,
              "fullname": "Febriawan",
              "position": "Operator",
              "division": "PLM-General"
            },
            {
              "JDE": 210809,
              "fullname": "Nugroho Saputro",
              "position": "Operator",
              "division": "PLM-General"
            },
            {
              "JDE": 210810,
              "fullname": "Octava Saputro",
              "position": "Junior Mechanic",
              "division": "PLM-General"
            },
            {
              "JDE": 210811,
              "fullname": "Sambang Dwi Hartana",
              "position": "Junior Mechanic",
              "division": "PLM-General"
            },
            {
              "JDE": 210812,
              "fullname": "Suyudi",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210813,
              "fullname": "Ridwan Kurniwan Saputro",
              "position": "Junior Mechanic",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 210814,
              "fullname": "Heru Setiyadi",
              "position": "Admint Clerk",
              "division": ""
            },
            {
              "JDE": 210815,
              "fullname": "Rober Limbongan",
              "position": "Dump Truck Team Leader",
              "division": ""
            },
            {
              "JDE": 210816,
              "fullname": "Ahmad Agus Sogol",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210817,
              "fullname": "Nor Akhmet Sunan Ally",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210818,
              "fullname": "Ismail bin Syarkawi",
              "position": "",
              "division": ""
            },
            {"JDE": 210821, "fullname": "Rizal Fajar", "position": "", "division": ""},
            {
              "JDE": 210826,
              "fullname": "Tinus Boro",
              "position": "Plant Admin",
              "division": ""
            },
            {
              "JDE": 210827,
              "fullname": "Abbas",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210828,
              "fullname": "Muliansyah",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210837,
              "fullname": "Untung Ariyanto",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210840,
              "fullname": "Yonatan Patiung",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210841,
              "fullname": "Bihramsyah",
              "position": "Electrician Ii",
              "division": ""
            },
            {
              "JDE": 210842,
              "fullname": "Bambang Sangga L",
              "position": "Grader Kom 825",
              "division": "MOD"
            },
            {
              "JDE": 210843,
              "fullname": "Muhammad Yusuf (Ucup)",
              "position": "Exc Kom Pc 2000/1250/Hitachi 1200",
              "division": "MOD"
            },
            {
              "JDE": 210844,
              "fullname": "Andi Nur Cahyo",
              "position": "Bcp Driver",
              "division": ""
            },
            {
              "JDE": 210845,
              "fullname": "Thamrin S.",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210846,
              "fullname": "Laurens Nari",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210848,
              "fullname": "Palipangan",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": "MOD"
            },
            {
              "JDE": 210849,
              "fullname": "Abner Tandilino",
              "position": "Foreman",
              "division": "MOD"
            },
            {
              "JDE": 210850,
              "fullname": "Linus Agian",
              "position": "Junior Mechanic",
              "division": ""
            },
            {
              "JDE": 210851,
              "fullname": "Paulus Makkalo",
              "position": "Exc Kom Pc 1250/Pc400",
              "division": "MOD"
            },
            {
              "JDE": 210852,
              "fullname": "Haryono",
              "position": "Mechanic I",
              "division": ""
            },
            {
              "JDE": 210854,
              "fullname": "Haryono",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210896,
              "fullname": "Abd. Wahab",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210897,
              "fullname": "Budi Sunaryo",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210910,
              "fullname": "Deddy Swandy Simamora",
              "position": "",
              "division": ""
            },
            {"JDE": 210911, "fullname": "Rusanto", "position": "", "division": ""},
            {
              "JDE": 210912,
              "fullname": "Embun Purba",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 210913,
              "fullname": "Zulfi Indra",
              "position": "Operator",
              "division": ""
            },
            {
              "JDE": 210914,
              "fullname": "Sunarko",
              "position": "Mechanic Ii",
              "division": ""
            },
            {
              "JDE": 210915,
              "fullname": "Suherman",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": "MOD"
            },
            {
              "JDE": 210916,
              "fullname": "Mulyadi",
              "position": "Mdt Kom Hd 465-7 / Eh 1100-3",
              "division": "MOD"
            },
            {
              "JDE": 210918,
              "fullname": "Gregorius Laka",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210919,
              "fullname": "Iwan Tangdi Seru",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {"JDE": 210920, "fullname": "Rudolf", "position": "", "division": ""},
            {
              "JDE": 210934,
              "fullname": "Maryono",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210943,
              "fullname": "Syarifuddin",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210944,
              "fullname": "Tirsa Turang",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210945,
              "fullname": "Firdaus",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210946,
              "fullname": "Muh. Tauhid",
              "position": "Mdt Kom Hd 1500-7",
              "division": "MOD"
            },
            {"JDE": 210948, "fullname": "Endra Cipta", "position": "", "division": ""},
            {
              "JDE": 210950,
              "fullname": "Junhaidi",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210963,
              "fullname": "Jamaluddin Arief",
              "position": "Mdt Kom Hd 465-7",
              "division": "MOD"
            },
            {
              "JDE": 210964,
              "fullname": "M. Hanifah Akbar",
              "position": "Mdt Hd 465 / Adt",
              "division": "MOD"
            },
            {
              "JDE": 210967,
              "fullname": "Udik Zunaedi",
              "position": "Operator",
              "division": "MOD"
            },
            {
              "JDE": 210969,
              "fullname": "Widya Roshady",
              "position": "Operator",
              "division": "MOD"
            },
            {
              "JDE": 210970,
              "fullname": "Yulianus Tangki",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": "MOD"
            },
            {
              "JDE": 210984,
              "fullname": "Gandung Purnomo",
              "position": "",
              "division": "MOD"
            },
            {
              "JDE": 210985,
              "fullname": "Sugianto",
              "position": "Mdt Hd 465 / Adt",
              "division": "MOD"
            },
            {
              "JDE": 211000,
              "fullname": "Muhaidi Hairan Ali",
              "position": "Edt Kom Haulpak 730",
              "division": "MOD"
            },
            {"JDE": 211011, "fullname": "I Gede Surya", "position": "", "division": ""},
            {
              "JDE": 211017,
              "fullname": "Salton Patanduk",
              "position": "",
              "division": ""
            },
            {"JDE": 211030, "fullname": "Abdul Azis", "position": "", "division": ""},
            {"JDE": 211115, "fullname": "Andi Yuliawan", "position": "", "division": ""},
            {
              "JDE": 211120,
              "fullname": "Rokib Bin Abu Sofyan",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211146,
              "fullname": "Faisal Rhajis Khana",
              "position": "",
              "division": ""
            },
            {"JDE": 211148, "fullname": "Deasy", "position": "", "division": ""},
            {"JDE": 211149, "fullname": "Junaidi", "position": "", "division": ""},
            {"JDE": 211151, "fullname": "Juliani", "position": "", "division": ""},
            {"JDE": 211152, "fullname": "Nasrudin", "position": "", "division": ""},
            {"JDE": 211153, "fullname": "Eko Budiono", "position": "", "division": ""},
            {
              "JDE": 211154,
              "fullname": "Nelwan Pratama",
              "position": "",
              "division": ""
            },
            {"JDE": 211155, "fullname": "Arisman", "position": "", "division": ""},
            {
              "JDE": 211156,
              "fullname": "Melkianus Rangga",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211184,
              "fullname": "Rifai bin Sayfudin",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211187,
              "fullname": "H. M. Yusuf Noor",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211206,
              "fullname": "Muhhamad Widatama",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211310,
              "fullname": "Hasanudin Bombing",
              "position": "",
              "division": ""
            },
            {"JDE": 211368, "fullname": "Dwi Riyadi", "position": "", "division": ""},
            {
              "JDE": 211387,
              "fullname": "Tumpal Sitohang",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211388,
              "fullname": "Maidi",
              "position": "Mdt Hd 785 /Cat 777/465",
              "division": ""
            },
            {
              "JDE": 211442,
              "fullname": "Yasmin",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 211452,
              "fullname": "Joko Sutrianto",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 211453,
              "fullname": "Sahrul Ramadhan",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 211456,
              "fullname": "Slamet Wahyu Suryanto",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211457,
              "fullname": "Arie Setianto Samudi",
              "position": "",
              "division": ""
            },
            {"JDE": 211458, "fullname": "Selvianti", "position": "", "division": ""},
            {
              "JDE": 211460,
              "fullname": "M. Abdul Salim",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211461,
              "fullname": "Bambang Wijanarko",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211463,
              "fullname": "Grendy Dewa Sumanto",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211464,
              "fullname": "Hadri Prasetya",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211465,
              "fullname": "Takdir Setiawan",
              "position": "",
              "division": ""
            },
            {"JDE": 211468, "fullname": "Zuhdi Anshari", "position": "", "division": ""},
            {"JDE": 211471, "fullname": "M.ammad Ropii", "position": "", "division": ""},
            {"JDE": 211472, "fullname": "Ahmad Dani", "position": "", "division": ""},
            {
              "JDE": 211515,
              "fullname": "Sudiardi",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 211516,
              "fullname": "Kursani",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 211526,
              "fullname": "Sunarto",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 211559,
              "fullname": "Fernando Alessandro Wangania",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211560,
              "fullname": "Muh. Ichsan Latif",
              "position": "",
              "division": ""
            },
            {"JDE": 211561, "fullname": "Syahran", "position": "", "division": ""},
            {"JDE": 211562, "fullname": "Muji Harianto", "position": "", "division": ""},
            {
              "JDE": 211609,
              "fullname": "Mikhael Ch Lumunder",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211623,
              "fullname": "Herumadi",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 211628,
              "fullname": "Edy Sofyan",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 211631,
              "fullname": "Jhon Tarjo Katimin",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 211654,
              "fullname": "Syahrul Mahesa",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 211658,
              "fullname": "Rudi Nur",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 211660,
              "fullname": "Kusnandi",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 211664,
              "fullname": "Arrahman Nusu",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 211671,
              "fullname": "Timpayung Wanari",
              "position": "",
              "division": ""
            },
            {"JDE": 211672, "fullname": "Suharto", "position": "", "division": ""},
            {
              "JDE": 211673,
              "fullname": "Yance Kambuna",
              "position": "Driver Manhaul",
              "division": ""
            },
            {
              "JDE": 211675,
              "fullname": "Bahruddin",
              "position": "Driver Manhaul",
              "division": ""
            },
            {
              "JDE": 211697,
              "fullname": "Lukman Azis",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 211698,
              "fullname": "Beni Purwo Wibowo",
              "position": "Mandor Dispatch",
              "division": ""
            },
            {"JDE": 211701, "fullname": "Budhi Yulidar", "position": "", "division": ""},
            {
              "JDE": 211730,
              "fullname": "Anas Salehe",
              "position": "Pic Control",
              "division": ""
            },
            {
              "JDE": 211752,
              "fullname": "Erwin Angga S ( OWER )",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211972,
              "fullname": "Slamet Wahyu Suryanto",
              "position": "",
              "division": ""
            },
            {
              "JDE": 211975,
              "fullname": "Hadri Prasetya",
              "position": "",
              "division": ""
            },
            {"JDE": 211976, "fullname": "Nasrudin", "position": "", "division": ""},
            {
              "JDE": 211977,
              "fullname": "Melkianus Rangga",
              "position": "",
              "division": ""
            },
            {"JDE": 211984, "fullname": "Nurul Badri", "position": "", "division": ""},
            {"JDE": 211985, "fullname": "Eric Estrada", "position": "", "division": ""},
            {"JDE": 211987, "fullname": "Rudi Sutikno", "position": "", "division": ""},
            {"JDE": 211991, "fullname": "Eko Budiono", "position": "", "division": ""},
            {
              "JDE": 211992,
              "fullname": "Arisman",
              "position": "Dozer Kom D65P / D85Ss / D155",
              "division": ""
            },
            {
              "JDE": 212007,
              "fullname": "Dadi Suryadi",
              "position": "Dozer Kom D65P / D85Ss / D155",
              "division": ""
            },
            {
              "JDE": 212011,
              "fullname": "Robertus Marwoto",
              "position": "",
              "division": ""
            },
            {"JDE": 212054, "fullname": "Tono", "position": "", "division": ""},
            {
              "JDE": 212118,
              "fullname": "Romulus S Bin Manganar S",
              "position": "",
              "division": "Operation-Coal Mining"
            },
            {
              "JDE": 212163,
              "fullname": "Fitriadi",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212164,
              "fullname": "Nasruddin",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": "COBRA"
            },
            {
              "JDE": 212165,
              "fullname": "Hadri Prasetya",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212166,
              "fullname": "Rudi Sutikno",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 212167,
              "fullname": "Zuhdi Anshari",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {"JDE": 212168, "fullname": "Eko Budiono", "position": "", "division": ""},
            {
              "JDE": 212169,
              "fullname": "Herdi Amir Rowa",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 212170,
              "fullname": "Slamet Wahyu Suryanto",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212173,
              "fullname": "Fajar Syam",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212174,
              "fullname": "Ahmad Afriana (Lato)",
              "position": "Adt Volvo A40E/F / Cat 740/Hd465",
              "division": ""
            },
            {"JDE": 212176, "fullname": "Suparyono", "position": "", "division": ""},
            {
              "JDE": 212177,
              "fullname": "Deni",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": "MBEM"
            },
            {
              "JDE": 212178,
              "fullname": "Danu Wardoyo",
              "position": "Exc Kom Pc 400",
              "division": ""
            },
            {
              "JDE": 212179,
              "fullname": "Mufit Sarifudin",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212180,
              "fullname": "Ahmad Zulfahmi",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212181,
              "fullname": "Arnajil",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 212183,
              "fullname": "Hernanda",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212184,
              "fullname": "Eko Ali Aprianto",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212185,
              "fullname": "Hendrawansyah",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 212186,
              "fullname": "Tanamar Tahir",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212187,
              "fullname": "Tiko Saputra",
              "position": "Adt Volvo A40E/F/Hd465/Hd785/Belazz",
              "division": ""
            },
            {
              "JDE": 212188,
              "fullname": "Kamal KS",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212189,
              "fullname": "Chumaidi",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212194,
              "fullname": "Jusran",
              "position": "Adt Volvo A40E/F / Cat 740",
              "division": ""
            },
            {
              "JDE": 212207,
              "fullname": "Muhammad Hamsyah Sada",
              "position": "",
              "division": ""
            },
            {
              "JDE": 212216,
              "fullname": "Hermanto (RAMBO)",
              "position": "",
              "division": ""
            },
            {
              "JDE": 212222,
              "fullname": "Petrus Bandi",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212225,
              "fullname": "Sukardi",
              "position": "Exc Kom Pc 400 / Pc 200",
              "division": ""
            },
            {"JDE": 212227, "fullname": "Asmuransyah", "position": "", "division": ""},
            {
              "JDE": 212231,
              "fullname": "Doni Wiskian Purba",
              "position": "Exc Kom Pc 400 / Pc 200",
              "division": ""
            },
            {
              "JDE": 212232,
              "fullname": "Richy Sihombing",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212233,
              "fullname": "Parasian Silaen",
              "position": "Exc Kom Pc 400",
              "division": ""
            },
            {
              "JDE": 212237,
              "fullname": "RUDI PIT CONTROLLER",
              "position": "",
              "division": ""
            },
            {
              "JDE": 212245,
              "fullname": "Andri Supiansyah",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212246,
              "fullname": "Galuh Yuntoro Yono",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212247,
              "fullname": "Antolonius Tande",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212248,
              "fullname": "Edi Susilo",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212249,
              "fullname": "M. Arsyad",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212250,
              "fullname": "Nur Mukliansyah",
              "position": "Adt Volvo A40E/F",
              "division": "BADUT"
            },
            {
              "JDE": 212251,
              "fullname": "Husni Mubarak",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212252,
              "fullname": "Sarindi",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212258,
              "fullname": "Abdul Rahman Sidik",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212268,
              "fullname": "Panji Anom Persada",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 212271,
              "fullname": "Agus Hariyadi",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212272,
              "fullname": "Teguh Prasetiawan",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {"JDE": 212274, "fullname": "Annas Paruda", "position": "", "division": ""},
            {
              "JDE": 212277,
              "fullname": "Syamsudin",
              "position": "Exc Kom Pc 400 / Pc 200",
              "division": ""
            },
            {
              "JDE": 212732,
              "fullname": "Muh Ali Sahid",
              "position": "HD465/785",
              "division": ""
            },
            {
              "JDE": 212280,
              "fullname": "Abidin",
              "position": "Operator Exca",
              "division": ""
            },
            {
              "JDE": 212281,
              "fullname": "Daniel Pinda",
              "position": "Exc Kom Pc 400",
              "division": ""
            },
            {"JDE": 212282, "fullname": "Jamaluddin", "position": "", "division": ""},
            {
              "JDE": 212288,
              "fullname": "Ilham Abdullah",
              "position": "Hauling",
              "division": ""
            },
            {
              "JDE": 212328,
              "fullname": "Melky Kombong",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212350,
              "fullname": "Subhan",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212356,
              "fullname": "Nondrong",
              "position": "Exc Kom Pc 400",
              "division": ""
            },
            {
              "JDE": 212361,
              "fullname": "Aman Antonius Nababan",
              "position": "Exc Kom Pc 400 / Pc 200",
              "division": ""
            },
            {
              "JDE": 212406,
              "fullname": "Darmawan",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 212426,
              "fullname": "Seven Suarno",
              "position": "Exc Kom Pc 400",
              "division": ""
            },
            {
              "JDE": 212428,
              "fullname": "Muhammad Abduh",
              "position": "Exc Kom Pc 400 / Pc 200",
              "division": ""
            },
            {
              "JDE": 212430,
              "fullname": "Evin Windarko",
              "position": "Exc Kom Pc 400",
              "division": ""
            },
            {"JDE": 212433, "fullname": "Diana", "position": "", "division": ""},
            {
              "JDE": 212435,
              "fullname": "Jamal",
              "position": "Base Control",
              "division": ""
            },
            {
              "JDE": 212445,
              "fullname": "Bustam",
              "position": "Supv. Drill & Blast",
              "division": ""
            },
            {"JDE": 212480, "fullname": "Sapri Hasan", "position": "", "division": ""},
            {
              "JDE": 212559,
              "fullname": "Kharina Jasmine Pratiwi",
              "position": "Dispacth",
              "division": ""
            },
            {
              "JDE": 212563,
              "fullname": "Yurea L",
              "position": "Dispatch",
              "division": ""
            },
            {
              "JDE": 212596,
              "fullname": "Fedo Wilianto",
              "position": "Fgdp",
              "division": ""
            },
            {
              "JDE": 212701,
              "fullname": "Rian Choirul Anwar",
              "position": "",
              "division": ""
            },
            {"JDE": 212702, "fullname": "Nasruddin", "position": "Gto", "division": ""},
            {
              "JDE": 212703,
              "fullname": "Abri",
              "position": "Adt Volvo A40E/F",
              "division": ""
            },
            {
              "JDE": 212704,
              "fullname": "Sabarduddin",
              "position": "Gto",
              "division": ""
            },
            {
              "JDE": 212705,
              "fullname": "Indra Hidayat",
              "position": "Gto Artic",
              "division": ""
            },
            {"JDE": 212706, "fullname": "Bahroni", "position": "Artic", "division": ""},
            {
              "JDE": 212717,
              "fullname": "Herdiansyah",
              "position": "Adt Artic Hm400",
              "division": ""
            },
            {
              "JDE": 212718,
              "fullname": "Ahmad Syahril",
              "position": "Adt Volvo A40E",
              "division": ""
            },
            {
              "JDE": 212719,
              "fullname": "Al Hadid Rohman",
              "position": "Adt Volvo A40E",
              "division": ""
            },
            {
              "JDE": 212720,
              "fullname": "Ferli",
              "position": "Adt Volvo A40E",
              "division": ""
            },
            {
              "JDE": 212721,
              "fullname": "Santoso",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 212722,
              "fullname": "Alfirdaus",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 212723,
              "fullname": "Dadang Lurend Purnomo",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {"JDE": 212724, "fullname": "Ismail", "position": "465 Hd", "division": ""},
            {
              "JDE": 212725,
              "fullname": "Sapta Nanda Yudha Kusuma",
              "position": "Adt Volvo A40E",
              "division": ""
            },
            {"JDE": 212726, "fullname": "Alamsyah", "position": "", "division": ""},
            {"JDE": 212728, "fullname": "Gregorian", "position": "Gto", "division": ""},
            {
              "JDE": 212729,
              "fullname": "Ricky Kusuma Wardana",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {
              "JDE": 212731,
              "fullname": "Muhammad Ilyas",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 212734,
              "fullname": "Alfian Octa Dwisaputra",
              "position": "",
              "division": ""
            },
            {
              "JDE": 212736,
              "fullname": "Rahmat",
              "position": "Gto -Kartolo",
              "division": ""
            },
            {"JDE": 212738, "fullname": "Annar Kala", "position": "", "division": ""},
            {
              "JDE": 212739,
              "fullname": "Muhammad Kamal",
              "position": "Adt Volvo A40E",
              "division": ""
            },
            {
              "JDE": 212740,
              "fullname": "Syamsumarlin",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 212741,
              "fullname": "Bayu Putra Bagaskara",
              "position": "",
              "division": ""
            },
            {
              "JDE": 212742,
              "fullname": "Rocky Roger Rawis",
              "position": "Mdt Hd 465 / Adt",
              "division": ""
            },
            {"JDE": 212744, "fullname": "Roliansyah", "position": "Gto", "division": ""},
            {
              "JDE": 212746,
              "fullname": "Supriadi",
              "position": "Adt Volvo A40E",
              "division": ""
            },
            {
              "JDE": 212748,
              "fullname": "Abed Nego",
              "position": "Foreman",
              "division": ""
            },
            {
              "JDE": 212755,
              "fullname": "Wahyu Adi Putra",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {
              "JDE": 212757,
              "fullname": "Hendra LBN. Siantar",
              "position": "465 Hd",
              "division": ""
            },
            {
              "JDE": 212759,
              "fullname": "Khozinatul Asror",
              "position": "Gto",
              "division": ""
            },
            {
              "JDE": 212761,
              "fullname": "Elman Juniwanto Manurung",
              "position": "Gto",
              "division": ""
            },
            {
              "JDE": 212763,
              "fullname": "Feri Hermawan",
              "position": "Mdt Kom Hd 465-7",
              "division": ""
            },
            {"JDE": 212764, "fullname": "Junaidi", "position": "", "division": ""},
            {
              "JDE": 212765,
              "fullname": "Ari Sukarsen",
              "position": "Gto",
              "division": ""
            },
            {
              "JDE": 212975,
              "fullname": "Budi Hartanto",
              "position": "Fuel Truck",
              "division": ""
            },
            {
              "JDE": 213001,
              "fullname": "Abdul Rachman RR",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213002,
              "fullname": "Andri Amin Nur",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213003,
              "fullname": "Kukuh Andrianto",
              "position": "Artick",
              "division": ""
            },
            {
              "JDE": 213004,
              "fullname": "Muh. Alyawatalattaf",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213005,
              "fullname": "Alief Peristiwa",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213006,
              "fullname": "Abdul Rahman",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213007,
              "fullname": "Muhammad Tauhid",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213008,
              "fullname": "Evan Aditia",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213009,
              "fullname": "Agung Permadi",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213010,
              "fullname": "Abdul Rozaq Suhaimi",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213011,
              "fullname": "Ivan Nurul Adi",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213012,
              "fullname": "Muhammad Ridwan",
              "position": "Artic",
              "division": ""
            },
            {
              "JDE": 213014,
              "fullname": "Faisal RH Ajis",
              "position": "Dozer 8T",
              "division": ""
            },
            {
              "JDE": 213041,
              "fullname": "Patli Bondang",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213042,
              "fullname": "Herdi Jafar",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213043,
              "fullname": "Yan Luter Sampe",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213044,
              "fullname": "Supriadi",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213048,
              "fullname": "Arif Rahmanto",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213062,
              "fullname": "Suprianto",
              "position": "465/785/Belaz/1500/730",
              "division": "TEN Qu"
            },
            {
              "JDE": 213083,
              "fullname": "Simon Lepong Bulan",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213087,
              "fullname": "Muhammad Hatta",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213088,
              "fullname": "Fransiskus Kota Padung",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213095,
              "fullname": "Fathir Ashary",
              "position": "Pc800",
              "division": ""
            },
            {"JDE": 213098, "fullname": "Takbar", "position": "Belaz", "division": ""},
            {
              "JDE": 213099,
              "fullname": "Jhon Suba",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213100,
              "fullname": "Yopy Tekko",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213112,
              "fullname": "Sigit Dwi Pamungkas",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213115,
              "fullname": "Abdul Kadir",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213117,
              "fullname": "Eki Suwendi",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213118,
              "fullname": "Nicodemos Ambun",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213120,
              "fullname": "Paulus Pedi Pasampe",
              "position": "Ex. Pc 1250",
              "division": ""
            },
            {
              "JDE": 213121,
              "fullname": "Andarias Rande",
              "position": "Exc Kom Pc 200/Pc400",
              "division": ""
            },
            {
              "JDE": 213123,
              "fullname": "Arman Kurniawan",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213129,
              "fullname": "Zainal A",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213130,
              "fullname": "Herman Mulianto",
              "position": "",
              "division": ""
            },
            {
              "JDE": 213132,
              "fullname": "Maryudhawanta",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213133,
              "fullname": "Hamka",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213134,
              "fullname": "Andi Lasmana",
              "position": "Belaz",
              "division": ""
            },
            {"JDE": 213135, "fullname": "Khudori", "position": "Belaz", "division": ""},
            {
              "JDE": 213136,
              "fullname": "Sofyan Syamsul Bahri",
              "position": "Belaz",
              "division": ""
            },
            {"JDE": 213137, "fullname": "Bugar", "position": "", "division": ""},
            {
              "JDE": 213141,
              "fullname": "Abdul Rahman",
              "position": "Pc800",
              "division": ""
            },
            {
              "JDE": 213142,
              "fullname": "Herli Kasiadi",
              "position": "Belaz",
              "division": ""
            },
            {"JDE": 213149, "fullname": "Zainal A", "position": "Wt", "division": ""},
            {
              "JDE": 213157,
              "fullname": "Suriyadi",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213160,
              "fullname": "Edy Jaya",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213162,
              "fullname": "Bhakti Wahiddien P",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213180,
              "fullname": "Singkop Mardungo Pasaribu",
              "position": "Ex. Pc 1250/ Pc2000/2500",
              "division": ""
            },
            {
              "JDE": 213184,
              "fullname": "Irfandi Putra",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213185,
              "fullname": "Yuli Setiawan",
              "position": "Hd 465/785/Belaz",
              "division": ""
            },
            {
              "JDE": 213188,
              "fullname": "Muhammad Afdal",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213190,
              "fullname": "Simon Patopangan",
              "position": "Exca",
              "division": ""
            },
            {
              "JDE": 213191,
              "fullname": "Andi Sumange Rukka",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213192,
              "fullname": "John Leman Kadang",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213193,
              "fullname": "Darius Sorta Paembonan",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213194,
              "fullname": "Marthen Suririk",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213197,
              "fullname": "Rais Muksin",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213199,
              "fullname": "Abdul Salam",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213201,
              "fullname": "Nober Amsal",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213202,
              "fullname": "Mahfud",
              "position": "Belaz /1500",
              "division": ""
            },
            {
              "JDE": 213203,
              "fullname": "Asrul Jasmal",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213204,
              "fullname": "Fahrial Ristanto",
              "position": "Hd 465/785/Belazz",
              "division": ""
            },
            {
              "JDE": 213205,
              "fullname": "Ronal Yohanis Rambun",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213208,
              "fullname": "Bondan Seno Aji",
              "position": "Grader Kom 825",
              "division": ""
            },
            {"JDE": 213209, "fullname": "Suwanto", "position": "Grader", "division": ""},
            {"JDE": 213220, "fullname": "Nurdin", "position": "", "division": ""},
            {
              "JDE": 213221,
              "fullname": "Saulus Pardede",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213227,
              "fullname": "Sofiansyah",
              "position": "Ex. Pc 1250/800",
              "division": ""
            },
            {
              "JDE": 213228,
              "fullname": "Irfan",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213233,
              "fullname": "Erwin Paranduk",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213234,
              "fullname": "Ronal Ute Palobo",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213235,
              "fullname": "Hadri Fidrianto Sakke",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213236,
              "fullname": "Bambang Haryanto Tangdiseru",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213237,
              "fullname": "Erik Estrada",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 213239,
              "fullname": "Zaini Hamna",
              "position": "Belaz",
              "division": ""
            },
            {
              "JDE": 213246,
              "fullname": "Nasrullah",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213247,
              "fullname": "Amsyaruddin",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213257,
              "fullname": "Ronny Faslah",
              "position": "Ex. Pc Pc2000,3600",
              "division": ""
            },
            {
              "JDE": 213258,
              "fullname": "Hamzah",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213259,
              "fullname": "Amiruddin",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213260,
              "fullname": "Pirmanto Saranga",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213263,
              "fullname": "Irwansyah",
              "position": "Ex. Pc 1250/ Pc2000/2500",
              "division": ""
            },
            {
              "JDE": 213264,
              "fullname": "Roni Age Prasetiawan",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213265,
              "fullname": "Edhi Sofyan Saputra",
              "position": "Hd 465/785/Belaz",
              "division": ""
            },
            {
              "JDE": 213266,
              "fullname": "Kristianus Pamasi",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213267,
              "fullname": "Muslimin",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213271,
              "fullname": "Suparyono",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213272,
              "fullname": "Risman",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213273,
              "fullname": "Adrianus",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213274,
              "fullname": "Yohanis Minggu Pamasi",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213275,
              "fullname": "Yohanes Sarira",
              "position": "Ex 3600",
              "division": ""
            },
            {
              "JDE": 213280,
              "fullname": "Ahmad Afandi",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 213281,
              "fullname": "Abd Rahman T",
              "position": "Exc Hitachi 3600",
              "division": ""
            },
            {
              "JDE": 213282,
              "fullname": "Muh David Makkaraka",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213284,
              "fullname": "Dedy Friyanto Thimang",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213285,
              "fullname": "Dominggus Timang",
              "position": "Ex. Pc Pc2000,3600",
              "division": ""
            },
            {
              "JDE": 213286,
              "fullname": "Rafael Baidu'kuan",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213288,
              "fullname": "Irfani Adju",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213289,
              "fullname": "Rahman Sakma",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213290,
              "fullname": "Muhammad Supriyadi",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213291,
              "fullname": "Jeffrey Kunna",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213292,
              "fullname": "Achmad Sapta Dimiyati",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213293,
              "fullname": "Bastomi Ibrahim",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213294,
              "fullname": "Jumhar",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213296,
              "fullname": "Masdar",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213297,
              "fullname": "Suyono",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213298,
              "fullname": "Yeheskel Sampe",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213300,
              "fullname": "Jogi Agregat Santoso",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213301,
              "fullname": "Bahri Septian",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213302,
              "fullname": "Muh Chaikal Saputra",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213303,
              "fullname": "Mashuri",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213305,
              "fullname": "Eka Prasetia",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213306,
              "fullname": "Syahdan",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213308,
              "fullname": "Wiyono",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213310,
              "fullname": "Bartolomius",
              "position": "Pc800",
              "division": ""
            },
            {"JDE": 213313, "fullname": "Wiranto P", "position": "Exca", "division": ""},
            {
              "JDE": 213318,
              "fullname": "Rico Orino",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213319,
              "fullname": "Hendra",
              "position": "Ex. Pc 1250",
              "division": ""
            },
            {
              "JDE": 213322,
              "fullname": "Irwan",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213330,
              "fullname": "Rudi",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213331,
              "fullname": "Deni Nurhadianto",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213332,
              "fullname": "Catur Irawan",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213333,
              "fullname": "Muhammad Rizky",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213334,
              "fullname": "Lukman",
              "position": "Hd 465/785/1500",
              "division": ""
            },
            {
              "JDE": 213335,
              "fullname": "Lexy Andika Putera",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213336,
              "fullname": "Alianor",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213337,
              "fullname": "Abdul Adam Thamrin",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213338,
              "fullname": "Ilmiansyah",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213341,
              "fullname": "Raman Ferdiansyah",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213342,
              "fullname": "Ahmad Zaini",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213343,
              "fullname": "Edi Supriyadi",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213347,
              "fullname": "Samhadinata",
              "position": "Pc800",
              "division": ""
            },
            {
              "JDE": 213351,
              "fullname": "Brelis Bumbungan",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213353,
              "fullname": "Semuel Sampa",
              "position": "Dozer",
              "division": ""
            },
            {"JDE": 213355, "fullname": "Suhardi", "position": "Dozer", "division": ""},
            {
              "JDE": 213356,
              "fullname": "Nanang Setiawan",
              "position": "Hd 465/785",
              "division": ""
            },
            {"JDE": 213357, "fullname": "Syahran", "position": "Dozer", "division": ""},
            {
              "JDE": 213359,
              "fullname": "Yohanes Pasudi",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213360,
              "fullname": "Budi Santoso",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213368,
              "fullname": "Indra Yuliadi",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 213369,
              "fullname": "Hendri",
              "position": "Ex. Pc 1250",
              "division": ""
            },
            {
              "JDE": 213370,
              "fullname": "Abdul Azis",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 213371,
              "fullname": "Nasrullah",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213372,
              "fullname": "Abrianto",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213373,
              "fullname": "Ryan Sagita",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213378,
              "fullname": "Hasdariansyah",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213379,
              "fullname": "Taslim Anandar",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213380,
              "fullname": "Subakir",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213381,
              "fullname": "Diki Teguh Wijaya",
              "position": "Ex. Pc 1250/ Pc2000",
              "division": ""
            },
            {
              "JDE": 213382,
              "fullname": "Suryanto",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213403,
              "fullname": "Yoepiter Permana Setyoko Putra",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213404,
              "fullname": "Angger Saputra",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213406,
              "fullname": "Hamsah Aswandi",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213408,
              "fullname": "Dasturi Amarto Fajar'I",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213414,
              "fullname": "Sidik Pamungkas",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213420,
              "fullname": "Edy Setyawan",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213422,
              "fullname": "Ahmad Nur Ihsan",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213430,
              "fullname": "Sawindra",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213441,
              "fullname": "M. Sakir",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213443,
              "fullname": "Ardhy Trisna Hermawan",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213451,
              "fullname": "Leri Hendri Siagian",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213463,
              "fullname": "Daya Fajar Sary Cipto",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213464,
              "fullname": "Supianto",
              "position": "Hd 465/785",
              "division": ""
            },
            {
              "JDE": 213465,
              "fullname": "Deni Sistiyo Utomo",
              "position": "Hd 465/785",
              "division": ""
            },
            {"JDE": 213470, "fullname": "Hairul", "position": "Grader", "division": ""},
            {
              "JDE": 213483,
              "fullname": "Slamet Handoyo",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213494,
              "fullname": "Adi Ario Pamungkas",
              "position": "Dozer",
              "division": ""
            },
            {"JDE": 213497, "fullname": "Mansur", "position": "Grader", "division": ""},
            {
              "JDE": 213499,
              "fullname": "Nober Londa",
              "position": "Dozer",
              "division": ""
            },
            {"JDE": 213508, "fullname": "Mursalim", "position": "Dozer", "division": ""},
            {
              "JDE": 213509,
              "fullname": "Alfrianus Ritta",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213513,
              "fullname": "Bambang Setiawan",
              "position": "Dozer",
              "division": ""
            },
            {"JDE": 213514, "fullname": "Ramli B", "position": "", "division": ""},
            {
              "JDE": 213515,
              "fullname": "Robert Febrian Ghozabi",
              "position": "Dozer",
              "division": ""
            },
            {"JDE": 213517, "fullname": "Ansar", "position": "Grader", "division": ""},
            {
              "JDE": 213518,
              "fullname": "Agus Putra",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213557,
              "fullname": "Saripuddin",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 213558,
              "fullname": "Cornelius Ganti Lolo Bua'",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213590,
              "fullname": "Agus Yoga Pranoto",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 213633,
              "fullname": "Andrini Puspita Julianti",
              "position": "Base",
              "division": ""
            },
            {
              "JDE": 213636,
              "fullname": "Saldianto",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 420058,
              "fullname": "Usat Apui",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 420059,
              "fullname": "Herman Toding",
              "position": "Ex. Pc 400",
              "division": ""
            },
            {
              "JDE": 420061,
              "fullname": "Hebron Resa",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 420062,
              "fullname": "Ardin Rante Langda",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 420082,
              "fullname": "Amrin",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420084,
              "fullname": "Amon Gundun",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420085,
              "fullname": "Nelwan Pratama",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420087,
              "fullname": "Batri",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420088,
              "fullname": "Suriansyah",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420089,
              "fullname": "Sulaiman Arsyad",
              "position": "Exca",
              "division": ""
            },
            {
              "JDE": 420090,
              "fullname": "Slamet Pryo Sudarpo",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420091,
              "fullname": "Rahmatullah",
              "position": "Exca",
              "division": ""
            },
            {
              "JDE": 420141,
              "fullname": "Suardi",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420161,
              "fullname": "Darmawan",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {"JDE": 420168, "fullname": "Edi", "position": "Grader", "division": ""},
            {"JDE": 420169, "fullname": "Herman", "position": "Exc", "division": ""},
            {
              "JDE": 420171,
              "fullname": "Arif Rahmanto",
              "position": "Grader",
              "division": ""
            },
            {
              "JDE": 420183,
              "fullname": "Muammar",
              "position": "Hd 465/785/Eh4500",
              "division": ""
            },
            {
              "JDE": 420184,
              "fullname": "Mustakim",
              "position": "Mdt Kom Hd 1500-7",
              "division": ""
            },
            {
              "JDE": 420206,
              "fullname": "Ardino (not)",
              "position": "Opr Drill",
              "division": ""
            },
            {
              "JDE": 420207,
              "fullname": "Aruliansyah",
              "position": "Drill",
              "division": ""
            },
            {
              "JDE": 420208,
              "fullname": "Bram Teguh J Latang",
              "position": "Hd465",
              "division": ""
            },
            {
              "JDE": 420209,
              "fullname": "Abd Kahar Kadir",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 420210,
              "fullname": "Gregorius Nusa",
              "position": "Dozer",
              "division": ""
            },
            {
              "JDE": 420215,
              "fullname": "Joko Agus Hariyono",
              "position": "Doser",
              "division": ""
            },
            {
              "JDE": 420219,
              "fullname": "Darman Siburian",
              "position": "Exca",
              "division": ""
            },
            {
              "JDE": 420220,
              "fullname": "Markus Rayo",
              "position": "Ex1316 Sany",
              "division": ""
            },
            {"JDE": 420221, "fullname": "Hamka", "position": "Exca", "division": ""},
            {
              "JDE": 420222,
              "fullname": "Firmansyah",
              "position": "Ex. Pc 800/1250/",
              "division": ""
            },
            {
              "JDE": 420223,
              "fullname": "Jemi Bone Pasak",
              "position": "Doser D155",
              "division": ""
            },
            {
              "JDE": 420225,
              "fullname": "Marlon Saragih",
              "position": "Ex Sany",
              "division": ""
            },
            {"JDE": 420226, "fullname": "Eman", "position": "Dozer", "division": ""},
            {
              "JDE"     : "212453"     ,
              "fullname": "Hadi Nurali",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "212608"  ,
              "fullname": "Herianto",
              "position": "BCP1"    ,
              "division": ""
            },
            {"JDE": "321228", "fullname": "Widayat", "position": "BCP1", "division": ""},
            {
              "JDE"     : "121468"                 ,
              "fullname": "Armansyah Bin Kamarudin",
              "position": "BCP1"                   ,
              "division": ""
            },
            {"JDE": "212437", "fullname": "Faisal", "position": "BCP1", "division": ""},
            {
              "JDE"     : "212438"  ,
              "fullname": "Suprapto",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "212642"             ,
              "fullname": "Herwin Arie Sudibyo",
              "position": "BCP1"               ,
              "division": ""
            },
            {
              "JDE"     : "212691"     ,
              "fullname": "Andi Hermin",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "212961"         ,
              "fullname": "Achmad Mucharom",
              "position": "BCP1"           ,
              "division": ""
            },
            {"JDE": "120258", "fullname": "Herman", "position": "BCP1", "division": ""},
            {
              "JDE"     : "121081"     ,
              "fullname": "Joris Kemur",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "123729"           ,
              "fullname": "Rudolp Rante Salu",
              "position": "BCP1"             ,
              "division": ""
            },
            {
              "JDE"     : "210547"      ,
              "fullname": "Sopyan Lubis",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "210917"        ,
              "fullname": "Nicko Prasetyo",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "212361"               ,
              "fullname": "Aman Antonius Nababan",
              "position": "BCP1"                 ,
              "division": ""
            },
            {
              "JDE"     : "212428"        ,
              "fullname": "Muhammad Abduh",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "212430"       ,
              "fullname": "Evin Windarko",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "123695"     ,
              "fullname": "Dwi Purnomo",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "212035"          ,
              "fullname": "Andri Anton Rayo",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "212395"        ,
              "fullname": "Rizal Fahlibin",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "212442"            ,
              "fullname": "Nicola Frendyanata",
              "position": "BCP1"              ,
              "division": ""
            },
            {"JDE": "212443", "fullname": "MAKMUR", "position": "BCP1", "division": ""},
            {"JDE": "Z06597", "fullname": "Sahrani", "position": "BCP1", "division": ""},
            {"JDE": "Z06600", "fullname": "Mulyadi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z07431"       ,
              "fullname": "Floribertus B",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "Z09069", "fullname": "Selamat", "position": "BCP1", "division": ""},
            {
              "JDE"     : "K01775"    ,
              "fullname": "Tan Malaka",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "K01814"       ,
              "fullname": "Yasser Arafat",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "Z03170", "fullname": "Didik W", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z03218"      ,
              "fullname": "Sonny Roring",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z07301"       ,
              "fullname": "Akter Evander",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "K02321"       ,
              "fullname": "Bambang Eko G",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z07433"      ,
              "fullname": "Hadi Nur Ali",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z05513", "fullname": "Nasril", "position": "BCP1", "division": ""},
            {"JDE": "Z05232", "fullname": "Ahmad", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z06007"     ,
              "fullname": "Abdul Latif",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z06008"       ,
              "fullname": "Bambang Eko G",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "Z06009", "fullname": "Nurdin", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z06010"     ,
              "fullname": "Abu Masudin",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z06012"       ,
              "fullname": "Bartolomius G",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z06034"     ,
              "fullname": "Heri Kusuma",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z06035"       ,
              "fullname": "Rudy Lugianto",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z06036"  ,
              "fullname": "Ridwan M",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z06037"   ,
              "fullname": "Dimas E S",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "Z06038"    ,
              "fullname": "Bachtiar H",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "Z06171"      ,
              "fullname": "Budi Santoso",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z05738", "fullname": "Arman", "position": "BCP1", "division": ""},
            {"JDE": "Z05739", "fullname": "Rahim L", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z05740"     ,
              "fullname": "Fitriansyah",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z05742"       ,
              "fullname": "Wilson Tumbel",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "Z05749", "fullname": "Sarindi", "position": "BCP1", "division": ""},
            {"JDE": "Z09188", "fullname": "Nurdin", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z07794"     ,
              "fullname": "Anwar Sadad",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z07758"  ,
              "fullname": "Chumaidi",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z07767"     ,
              "fullname": "Fathul Muin",
              "position": "BCP1"       ,
              "division": ""
            },
            {"JDE": "Z07686", "fullname": "Sutiyo", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z04372"       ,
              "fullname": "Virgino Mirah",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z04404"     ,
              "fullname": "Isya Ansari",
              "position": "BCP1"       ,
              "division": ""
            },
            {"JDE": "Z04405", "fullname": "Herwan", "position": "BCP1", "division": ""},
            {"JDE": "Z04408", "fullname": "Subhan", "position": "BCP1", "division": ""},
            {"JDE": "Z04409", "fullname": "Nasir P", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z04414"  ,
              "fullname": "Markus S",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z04415"     ,
              "fullname": "Agustinus S",
              "position": "BCP1"       ,
              "division": ""
            },
            {"JDE": "Z04419", "fullname": "Faisal", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z04426"    ,
              "fullname": "Hendrik AW",
              "position": "BCP1"      ,
              "division": ""
            },
            {"JDE": "Z06572", "fullname": "Sahruni", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z02536"     ,
              "fullname": "Nugroho Eko",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z02700"        ,
              "fullname": "M.Yusro Efendi",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "Z07434"    ,
              "fullname": "Muh.Arsyad",
              "position": "BCP1"      ,
              "division": ""
            },
            {"JDE": "Z07474", "fullname": "Yahya", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z07475"     ,
              "fullname": "Syarifuddin",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z07511"           ,
              "fullname": "Agus Suhermansyah",
              "position": "BCP1"             ,
              "division": ""
            },
            {"JDE": "Z09324", "fullname": "SAHRUL", "position": "BCP1", "division": ""},
            {"JDE": "Z09275", "fullname": "Yahya", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z09276"     ,
              "fullname": "Syarifuddin",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z09592"  ,
              "fullname": "Badianor",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z09256"       ,
              "fullname": "Ahmat Husaini",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z09672"              ,
              "fullname": "Yandika Rangga Riano",
              "position": "BCP1"                ,
              "division": ""
            },
            {"JDE": "Z10736", "fullname": "Ahmadi", "position": "BCP1", "division": ""},
            {"JDE": "Z10733", "fullname": "Wahyudi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z10027"          ,
              "fullname": "Rianther Sumombo",
              "position": "BCP1"            ,
              "division": ""
            },
            {"JDE": "Z10026", "fullname": "Abri", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z10025"             ,
              "fullname": "Samson Lian Tingang",
              "position": "BCP1"               ,
              "division": ""
            },
            {
              "JDE"     : "Z10079"     ,
              "fullname": "Andi Hermin",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z10083"      ,
              "fullname": "Syahrifuddin",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z10256"        ,
              "fullname": "Meysak Sambara",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "Z10282"    ,
              "fullname": "Nasir Pala",
              "position": "BCP1"      ,
              "division": ""
            },
            {"JDE": "Z10911", "fullname": "Burhan", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z11384"       ,
              "fullname": "Indra hidayat",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z10725"       ,
              "fullname": "Dedi Asrianto",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z08483"  ,
              "fullname": "Sudirman",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z11446"      ,
              "fullname": "Ibnu Masruki",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z13334", "fullname": "Rusli", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z13335"      ,
              "fullname": "Asso Londa H",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z14212"     ,
              "fullname": "Fitriansyah",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z14474"             ,
              "fullname": "Syahrul Hasma Putra",
              "position": "BCP1"               ,
              "division": ""
            },
            {
              "JDE"     : "Z14476"         ,
              "fullname": "Fadli Kurniawan",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z14495"    ,
              "fullname": "Baharuddin",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "K04067"      ,
              "fullname": "Ali Ramadhan",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z12085", "fullname": "M.Arief", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z12086"     ,
              "fullname": "Sadam Husen",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z10908"  ,
              "fullname": "Herianto",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z10655"   ,
              "fullname": "Bayansyah",
              "position": "BCP1"     ,
              "division": ""
            },
            {"JDE": "Z10647", "fullname": "Sutopo", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z10909"            ,
              "fullname": "Andi Heril Wahyudi",
              "position": "BCP1"              ,
              "division": ""
            },
            {"JDE": "Z14465", "fullname": "Martin", "position": "BCP1", "division": ""},
            {"JDE": "Z14950", "fullname": "Suryadi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z12320"  ,
              "fullname": "Rahmad S",
              "position": "BCP1"    ,
              "division": ""
            },
            {"JDE": "Z14477", "fullname": "Asmawi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z14485"   ,
              "fullname": "Nasruddin",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "Z14488"         ,
              "fullname": "Joni Feriansyah",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "252902"       ,
              "fullname": "Budi Hartanto",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "Z13474", "fullname": "Juiman", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z14968"     ,
              "fullname": "Subliansyah",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "251113"    ,
              "fullname": "Nasir Pala",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "251075"       ,
              "fullname": "Herwin Arie S",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "251076"     ,
              "fullname": "Adi Pranoto",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "251078"    ,
              "fullname": "Jamaluddin",
              "position": "BCP1"      ,
              "division": ""
            },
            {"JDE": "251036", "fullname": "Faisal", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z13848"           ,
              "fullname": "Trisna Rinaldhy H",
              "position": "BCP1"             ,
              "division": ""
            },
            {
              "JDE"     : "Z12684"  ,
              "fullname": "Hermanto",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "251093"      ,
              "fullname": "Ali Mukardis",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z12309"   ,
              "fullname": "Aminuddin",
              "position": "BCP1"     ,
              "division": ""
            },
            {"JDE": "Z12310", "fullname": "Amran", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z12308"   ,
              "fullname": "Taufik AS",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "251095"     ,
              "fullname": "Andi Hermin",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z11760"       ,
              "fullname": "Jumer Silambi",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z15202"      ,
              "fullname": "Abdul Ridwan",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z13517", "fullname": "Medi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z14473"      ,
              "fullname": "Randa Anzany",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z12933", "fullname": "Rahmat", "position": "BCP1", "division": ""},
            {
              "JDE"     : "252477"        ,
              "fullname": "Fitra Hariyadi",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "251051"     ,
              "fullname": "Sadam Husen",
              "position": "BCP1"       ,
              "division": ""
            },
            {"JDE": "251052", "fullname": "Sarindi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "251086"  ,
              "fullname": "Suprapto",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z18271"       ,
              "fullname": "Stepanus Otto",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z18813"    ,
              "fullname": "Muh Fachri",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "Z18091"      ,
              "fullname": "Ismail Saleh",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z18375"      ,
              "fullname": "Wawan Hendri",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z15654"      ,
              "fullname": "Jepri Armada",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z15702", "fullname": "Masran", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z15703"        ,
              "fullname": "Muhammad Tahir",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "K05978"       ,
              "fullname": "Harlan Efendi",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "254853"      ,
              "fullname": "Abdul Kholiq",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z14655", "fullname": "Toni", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z17929"       ,
              "fullname": "Budi Hartanto",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z15657"        ,
              "fullname": "Hendri Susanto",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "K05347"        ,
              "fullname": "Luciano Yoseph",
              "position": "BCP1"          ,
              "division": ""
            },
            {"JDE": "Z17287", "fullname": "Rahmat", "position": "BCP1", "division": ""},
            {
              "JDE"     : "254291"  ,
              "fullname": "Sulaeman",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z15665"          ,
              "fullname": "Muhammad Fajar R",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "Z15155"      ,
              "fullname": "Saddam Husen",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z15168"  ,
              "fullname": "M Asrani",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z17476"            ,
              "fullname": "Gusti Wahidu Putra",
              "position": "BCP1"              ,
              "division": ""
            },
            {
              "JDE"     : "Z17477"      ,
              "fullname": "Ardiansyah A",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z18846"      ,
              "fullname": "Talapanalaba",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z18135"      ,
              "fullname": "Ali Mukardis",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z19177"        ,
              "fullname": "Sigit Ariyanto",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "K07928"     ,
              "fullname": "Indrian Nur",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z17251"       ,
              "fullname": "Saenal Abidin",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z18519"           ,
              "fullname": "Rico Jhon Wesly S",
              "position": "BCP1"             ,
              "division": ""
            },
            {
              "JDE"     : "K06469"       ,
              "fullname": "Aris Setiawan",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "K06470"  ,
              "fullname": "Ardianto",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "K06471"          ,
              "fullname": "Jamil Ansa Rizki",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "K06472"       ,
              "fullname": "Andrias Eka S",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z15839"  ,
              "fullname": "Rudianto",
              "position": "BCP1"    ,
              "division": ""
            },
            {"JDE": "Z15492", "fullname": "Rahmat", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z17203"         ,
              "fullname": "Muhammad Ridoni",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z17341"   ,
              "fullname": "Sugiyanto",
              "position": "BCP1"     ,
              "division": ""
            },
            {"JDE": "Z17342", "fullname": "Mardani", "position": "BCP1", "division": ""},
            {"JDE": "Z18630", "fullname": "Sanwil", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z18173"  ,
              "fullname": "Sulaeman",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z17743"            ,
              "fullname": "Gusti Rabiul Tsani",
              "position": "BCP1"              ,
              "division": ""
            },
            {
              "JDE"     : "Z17744"           ,
              "fullname": "Aljuan Hadrianmas",
              "position": "BCP1"             ,
              "division": ""
            },
            {
              "JDE"     : "Z17745"          ,
              "fullname": "Budi Tri Laksono",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "Z17746"    ,
              "fullname": "Roy Sapati",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "Z17747"              ,
              "fullname": "Muhammad Abdu Rahman",
              "position": "BCP1"                ,
              "division": ""
            },
            {
              "JDE"     : "Z17748"    ,
              "fullname": "Muh Adil S",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "211786"       ,
              "fullname": "Syamsul Rijal",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "211224"                       ,
              "fullname": "Muhammad Muslim bin Jainuddin",
              "position": "BCP1"                         ,
              "division": ""
            },
            {
              "JDE"     : "620594"      ,
              "fullname": "Ahmad Suradi",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "320451", "fullname": "Samsi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "320904"   ,
              "fullname": "Syahrudin",
              "position": "BCP1"     ,
              "division": ""
            },
            {"JDE": "320559", "fullname": "Barto", "position": "BCP1", "division": ""},
            {"JDE": "321712", "fullname": "Yudi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "320829"       ,
              "fullname": "Parlin Gultom",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "620533"              ,
              "fullname": "Parsaoran Simatupang",
              "position": "BCP1"                ,
              "division": ""
            },
            {
              "JDE"     : "620518"        ,
              "fullname": "Hendra Riyanto",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "320058"       ,
              "fullname": "Lukas Limbung",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "320507"       ,
              "fullname": "Jusman Mansur",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "211225"                ,
              "fullname": "Supianor bin Inurdjati",
              "position": "BCP1"                  ,
              "division": ""
            },
            {"JDE": "320694", "fullname": "Suroso", "position": "BCP1", "division": ""},
            {"JDE": "212437", "fullname": "Faisal", "position": "BCP1", "division": ""},
            {
              "JDE"     : "212262"               ,
              "fullname": "Faisal Hasani Syarief",
              "position": "BCP1"                 ,
              "division": ""
            },
            {"JDE": "212156", "fullname": "Mursal", "position": "BCP1", "division": ""},
            {
              "JDE"     : "310070"      ,
              "fullname": "Hari Wardana",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "620638", "fullname": "Madnoor", "position": "BCP1", "division": ""},
            {
              "JDE"     : "320012"        ,
              "fullname": "Heman Pakpahan",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "620596"            ,
              "fullname": "Andri Aji Sutrisno",
              "position": "BCP1"              ,
              "division": ""
            },
            {
              "JDE"     : "321384"              ,
              "fullname": "Muhammad Abdul Faqih",
              "position": "BCP1"                ,
              "division": ""
            },
            {
              "JDE"     : "122609"      ,
              "fullname": "Alfi Mukhtar",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "320209"   ,
              "fullname": "Dodiyanor",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "320264"        ,
              "fullname": "Muhammad Adnan",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "212157"     ,
              "fullname": "Abdul Khair",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "620607"                ,
              "fullname": "Helman Cipta Siallagan",
              "position": "BCP1"                  ,
              "division": ""
            },
            {
              "JDE"     : "211519"   ,
              "fullname": "Supriatin",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "310095"           ,
              "fullname": "Galih Gita Asmara",
              "position": "BCP1"             ,
              "division": ""
            },
            {
              "JDE"     : "212438"  ,
              "fullname": "Suprapto",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "630086"                     ,
              "fullname": "Bambang Aryo Bimo Wicaksono",
              "position": "BCP1"                       ,
              "division": ""
            },
            {
              "JDE"     : "620639"        ,
              "fullname": "Agusthinus Ago",
              "position": "BCP1"          ,
              "division": ""
            },
            {"JDE": "123525", "fullname": "Ihwan", "position": "BCP1", "division": ""},
            {
              "JDE"     : "630063"  ,
              "fullname": "Shafwani",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "212158"   ,
              "fullname": "Jufri Upi",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "620559"       ,
              "fullname": "Irpan Samosir",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "211787", "fullname": "Fadli", "position": "BCP1", "division": ""},
            {
              "JDE"     : "320693"               ,
              "fullname": "Mohamad Choirul Yusin",
              "position": "BCP1"                 ,
              "division": ""
            },
            {
              "JDE"     : "210921"        ,
              "fullname": "Fajar Setiawan",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "620532"       ,
              "fullname": "Erikson Tamba",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "210626"         ,
              "fullname": "Muhammad Rasyid",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "321559"       ,
              "fullname": "Iskandar Muda",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "320734", "fullname": "Mulyadi", "position": "BCP1", "division": ""},
            {"JDE": "211789", "fullname": "Jumhadi", "position": "BCP1", "division": ""},
            {"JDE": "620508", "fullname": "Samsuri", "position": "BCP1", "division": ""},
            {
              "JDE"     : "321621"               ,
              "fullname": "Hendra Robert Sualang",
              "position": "BCP1"                 ,
              "division": ""
            },
            {"JDE": "320830", "fullname": "Rasmijo", "position": "BCP1", "division": ""},
            {"JDE": "211784", "fullname": "Ahmadi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "310024"        ,
              "fullname": "Muhammad Fauzi",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "620595"          ,
              "fullname": "Abdullah Mubarak",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "210627"  ,
              "fullname": "Syarfani",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "630106"             ,
              "fullname": "Evan Prisma Pratama",
              "position": "BCP1"               ,
              "division": ""
            },
            {
              "JDE"     : "321558"         ,
              "fullname": "Muhammad Arifin",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "211785"               ,
              "fullname": "Wintoro Panca Isnanto",
              "position": "BCP1"                 ,
              "division": ""
            },
            {
              "JDE"     : "321702"      ,
              "fullname": "Yohanis Sale",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "121468"                 ,
              "fullname": "Armansyah Bin Kamarudin",
              "position": "BCP1"                   ,
              "division": ""
            },
            {
              "JDE"     : "Z06997"  ,
              "fullname": "Noviandy",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z07186"     ,
              "fullname": "Abdul Kadir",
              "position": "BCP1"       ,
              "division": ""
            },
            {"JDE": "Z07217", "fullname": "Herman", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z07219"      ,
              "fullname": "Agus Susanto",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z07220"     ,
              "fullname": "Busri Bakri",
              "position": "BCP1"       ,
              "division": ""
            },
            {"JDE": "Z07227", "fullname": "Rustam", "position": "BCP1", "division": ""},
            {
              "JDE"     : "720057"          ,
              "fullname": "Renalson Janvaan",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "K01735"   ,
              "fullname": "Muh Yusuf",
              "position": "BCP1"     ,
              "division": ""
            },
            {"JDE": "Z04677", "fullname": "Bahtiar", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z05335"      ,
              "fullname": "Agus Syahrul",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "K02089"  ,
              "fullname": "Yulisman",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z07774"      ,
              "fullname": "Johan Candra",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z07781", "fullname": "Muhajir", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z07673"   ,
              "fullname": "Zainuddin",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "Z07684"    ,
              "fullname": "Juliantoni",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "Z04373"    ,
              "fullname": "Abd. Majid",
              "position": "BCP1"      ,
              "division": ""
            },
            {"JDE": "Z06466", "fullname": "Solong", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z07597"    ,
              "fullname": "Fajrin Ali",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "Z05947"         ,
              "fullname": "Welli Bertus WB",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "250232"     ,
              "fullname": "Yabes Ingan",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "250239"         ,
              "fullname": "Slamet Sampurno",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z09557"          ,
              "fullname": "Bachtiyar Hanafi",
              "position": "BCP1"            ,
              "division": ""
            },
            {"JDE": "Z09558", "fullname": "Faisal", "position": "BCP1", "division": ""},
            {"JDE": "Z09559", "fullname": "Sarindi", "position": "BCP1", "division": ""},
            {
              "JDE"     : "250242"      ,
              "fullname": "Agus syahrul",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z09268", "fullname": "Nasir", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z09291"         ,
              "fullname": "Ferry Chandra S",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z090291"        ,
              "fullname": "Ferry Chandra G",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z10924"  ,
              "fullname": "Yakub MR",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z09271"    ,
              "fullname": "Asriansyah",
              "position": "BCP1"      ,
              "division": ""
            },
            {"JDE": "Z11320", "fullname": "Mustafa", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z10623"      ,
              "fullname": "Supring Adam",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z11995"     ,
              "fullname": "Milke Lallo",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z14631"      ,
              "fullname": "Abdul Rasyid",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "251362"     ,
              "fullname": "Edi Gunawan",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z13168"     ,
              "fullname": "Aan Kunaifi",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "K02620"     ,
              "fullname": "Aminto Hari",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z11683"     ,
              "fullname": "Eka Wahyudi",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "251725"      ,
              "fullname": "Abdul Rasyid",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "252194"                ,
              "fullname": "Guruh Bhimantara Sakti",
              "position": "BCP1"                  ,
              "division": ""
            },
            {
              "JDE"     : "Z11747"   ,
              "fullname": "Nasruddin",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "K01673"        ,
              "fullname": "Abdul Wahab Sy",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "Z123200" ,
              "fullname": "Rahmad S",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "Z12430"         ,
              "fullname": "Triandi Muharam",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "253055"       ,
              "fullname": "Achmad Sayuti",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "253052"        ,
              "fullname": "Guntur Daryono",
              "position": "BCP1"          ,
              "division": ""
            },
            {"JDE": "253601", "fullname": "Solong", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z12275"       ,
              "fullname": "Ismail Nohong",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "251650"            ,
              "fullname": "Abdur Rahman Asofa",
              "position": "BCP1"              ,
              "division": ""
            },
            {"JDE": "252710", "fullname": "Tashar", "position": "BCP1", "division": ""},
            {
              "JDE"     : "253323"      ,
              "fullname": "Agus Susanto",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "253493"          ,
              "fullname": "Andarias Tambing",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "Z12260"         ,
              "fullname": "Jonson Simamora",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z08331"      ,
              "fullname": "Romah Yantoh",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z12318", "fullname": "Robby", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z13015"   ,
              "fullname": "Suprianto",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "Z13023"         ,
              "fullname": "M. Yunus Remonk",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z12003"     ,
              "fullname": "Eko Tarsono",
              "position": "BCP1"       ,
              "division": ""
            },
            {"JDE": "Z17336", "fullname": "Sumino", "position": "BCP1", "division": ""},
            {
              "JDE"     : "K07824"          ,
              "fullname": "M Herdin Gunawan",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "Z18887"      ,
              "fullname": "Rizky Jaya P",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z15710"       ,
              "fullname": "Ade Kurniawan",
              "position": "BCP1"         ,
              "division": ""
            },
            {"JDE": "Z16773", "fullname": "Tashar", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z16779"          ,
              "fullname": "Andarias Tambing",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "K05977"            ,
              "fullname": "Jerry Yoga Saputra",
              "position": "BCP1"              ,
              "division": ""
            },
            {
              "JDE"     : "253749"        ,
              "fullname": "Catur Septiadi",
              "position": "BCP1"          ,
              "division": ""
            },
            {"JDE": "Z17018", "fullname": "Udin", "position": "BCP1", "division": ""},
            {
              "JDE"     : "253834"   ,
              "fullname": "Hariyady ",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "253594"       ,
              "fullname": "Syamsul Bahri",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "253596"     ,
              "fullname": "Jaki Yamani",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "Z16425"        ,
              "fullname": "Guntur Daryono",
              "position": "BCP1"          ,
              "division": ""
            },
            {"JDE": "K06651", "fullname": "Herwin", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z16249"  ,
              "fullname": "Hariyady",
              "position": "BCP1"    ,
              "division": ""
            },
            {"JDE": "Z19192", "fullname": "Darwin", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z16383"      ,
              "fullname": "Abdul Rasyid",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "Z15158", "fullname": "Jaelani", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z17903"      ,
              "fullname": "Heri Susanto",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "K07929"       ,
              "fullname": "Melky Silambi",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "K07333"        ,
              "fullname": "Manaor Siahaan",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "Z19213"          ,
              "fullname": "Yohanis Mardin T",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "K07845"  ,
              "fullname": "Abdillah",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "K06422"         ,
              "fullname": "Muchlis M Amali",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "K06423"        ,
              "fullname": "Dodik Afrianto",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "K06426"               ,
              "fullname": "Arys Zulfikar Yahya A",
              "position": "BCP1"                 ,
              "division": ""
            },
            {
              "JDE"     : "K06419"        ,
              "fullname": "Satria Bagus S",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "Z16532"      ,
              "fullname": "Jaki Yamani ",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "K03749"      ,
              "fullname": "Yudhi Afandi",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "254013"     ,
              "fullname": "Adi Pranoto",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "K07640"        ,
              "fullname": "Hendra Saputra",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "Z17211"        ,
              "fullname": "Muhammad Idris",
              "position": "BCP1"          ,
              "division": ""
            },
            {"JDE": "Z17210", "fullname": "Alan", "position": "BCP1", "division": ""},
            {
              "JDE"     : "Z16473"         ,
              "fullname": "Catur Septiadi ",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "254105"      ,
              "fullname": "Heri Susanto",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "Z17691"         ,
              "fullname": "Muhlis Hartawan",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "K07224"    ,
              "fullname": "Jevi Cevig",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "K07226"              ,
              "fullname": "Rahmad Candra Hanafi",
              "position": "BCP1"                ,
              "division": ""
            },
            {
              "JDE"     : "10171069"   ,
              "fullname": "Sadriansyah",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE": "212412",
              "fullname": "Yosua Madin",
              "position": "BCP1",
              "division": ""
            },
            {
              "JDE"     : "123971"      ,
              "fullname": "Teuku Nazwar",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE": "123699",
              "fullname": "Thomas taruk allo",
              "position": "BCP1",
              "division": ""
            },
            {"JDE": "Test", "fullname": "Testing", "position": "BCP1", "division": ""},
            {
              "JDE"     : "6352903"     ,
              "fullname": "Ismael Saleh",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "181818"     ,
              "fullname": "Sadriansyah",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "6610395"   ,
              "fullname": "Musmulyadi",
              "position": "BCP1"      ,
              "division": ""
            },
            {
              "JDE"     : "6310133"    ,
              "fullname": "Stephanus O",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "7218846"     ,
              "fullname": "Talapanalaba",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "634328"         ,
              "fullname": "Rico Jhon Wesly",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "124593"         ,
              "fullname": "Head of Manager",
              "position": "BCP1"           ,
              "division": ""
            },
            {"JDE": "213179", "fullname": "Andrew", "position": "BCP1", "division": ""},
            {
              "JDE"     : "122301"      ,
              "fullname": "Lusy Finance",
              "position": "BCP1"        ,
              "division": ""
            },
            {
              "JDE"     : "110139"  ,
              "fullname": "Subu BCP",
              "position": "BCP1"    ,
              "division": ""
            },
            {
                "JDE": "110057", 
                "fullname": "HU", 
                "position": "BCP1", 
                "division": ""
            },
            {
              "JDE"     : "212461"       ,
              "fullname": "Fadil IT PTDH",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "420045"   ,
              "fullname": "Nasruddin",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "420044"       ,
              "fullname": "Donny Santoso",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "7219581"     ,
              "fullname": "Reza Pratama",
              "position": "BCP1"        ,
              "division": ""
            },
            {"JDE": "420043", "fullname": "syahrul", "position": "BCP1", "division": ""},
            {
              "JDE"     : "420049"         ,
              "fullname": "Fadli Kurniawan",
              "position": "BCP1"           ,
              "division": ""
            },
            {
              "JDE"     : "Z19321"       ,
              "fullname": "Randi pranata",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "Z19650"          ,
              "fullname": "Yohanes Nasution",
              "position": "BCP1"            ,
              "division": ""
            },
            {
              "JDE"     : "Z19678"        ,
              "fullname": "Rizky Darmawan",
              "position": "BCP1"          ,
              "division": ""
            },
            {
              "JDE"     : "Z19651"           ,
              "fullname": "Hendro Ompusunggu",
              "position": "BCP1"             ,
              "division": ""
            },
            {
              "JDE"     : "Z19155"  ,
              "fullname": "MUSLIMIN",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "214024"                 ,
              "fullname": "Tri Mari hardining Tyas",
              "position": "BCP1"                   ,
              "division": ""
            },
            {
                "JDE": "255118", 
                "fullname": "ISMANTO", 
                "position": "BCP1", 
                "division": ""
            },
            {
                "JDE": "255356", 
                "fullname": "BASIR", 
                "position": "BCP1", 
                "division": ""
            },
            {
                "JDE": "255270", 
                "fullname": "Idris", 
                "position": "BCP1", 
                "division": ""
            },
            {
                "JDE": "256625", 
                "fullname": "Suwarna", 
                "position": "BCP1", 
                "division": ""
            },
            {
              "JDE"     : "255636"  ,
              "fullname": "Khadirin",
              "position": "BCP1"    ,
              "division": ""
            },
            {
              "JDE"     : "255271"  ,
              "fullname": "Agus RPM",
              "position": "BCP1"    ,
              "division": ""
            },
            {
                "JDE": "255323", 
                "fullname": "Daryono", 
                "position": "BCP1", 
                "division": ""
            },
            {
              "JDE"     : "255322"     ,
              "fullname": "Ahmad Sapto",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "255624"   ,
              "fullname": "Wediyanto",
              "position": "BCP1"     ,
              "division": ""
            },
            {
              "JDE"     : "255359"       ,
              "fullname": "Ilham Saputra",
              "position": "BCP1"         ,
              "division": ""
            },
            {
              "JDE"     : "255442"                ,
              "fullname": "Sidik Arnoldus Jehamun",
              "position": "BCP1"                  ,
              "division": ""
            },
            {
              "JDE"     : "255121"               ,
              "fullname": "NADHIRA ANDIANI PUTRA",
              "position": "BCP1"                 ,
              "division": ""
            },
            {
              "JDE"     : "255148"     ,
              "fullname": "RAHMATULLAH",
              "position": "BCP1"       ,
              "division": ""
            },
            {
                "JDE": "255253", 
                "fullname": "M Yunus", 
                "position": "BCP1", 
                "division": ""
            },
            {
              "JDE"     : "255324"     ,
              "fullname": "ADI PRAYOGA",
              "position": "BCP1"       ,
              "division": ""
            },
            {
              "JDE"     : "255524"       ,
              "fullname": "Heri Ristanto",
              "position": "BCP1"         ,
              "division": ""
            }
          ]
          
    );
};
