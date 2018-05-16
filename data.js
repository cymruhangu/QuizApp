'use strict';

const STORE = {
    selectedDifficulty:'1', // set on quiz initiation. Default is 1. 
    currentSet: '', 
    slideNum: '1',
    questionIndex: '0',
    currentScore: '0', 
    questionSets: {
	   level1: [
          {question: "What name is given to all baby marsupials?",
            answer: "b", 
            options: { a: "Calf", 
                       b: "Joey", 
                       c: "Cub", 
                       d: "Pup"},
                       img: "https://images.unsplash.com/photo-1504442276731-baa31279af90?ixlib=rb-0.3.5&ixid=\
                       eyJhcHBfaWQiOjEyMDd9&s=7597d1df5aef97c0bafe71b3a76a86e5&auto=format&fit=crop&w=1950&q=80"
                     },
           {question: "Which of the following bones is not in the leg?",
              answer: "d", 
              options:{ a:"Patella", 
                        b: "Tibia", 
                        c: "Fibula", 
                        d: "Radius"},
                        img: "https://images.unsplash.com/photo-1503301346056-7681a7bcd413?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=208c3cdb185037dcd31fbdd5efa20a1d&auto=format&fit=crop&w=2850&q=80"
                      },
           {question: "What is the largest animal currently on Earth?",
              answer: "b",
              options:{ a: "Orca", 
                        b: "Blue Whale", 
                        c: "Colossal Squid", 
                        d: "Giraffe"},
                        img: "https://images.unsplash.com/photo-1517034650551-b0998bff43cd?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=2523f2479e6f5f801197badd3549e301&auto=format&fit=crop&w=1950&q=80"
                      },
           {question:"Rhinoplasty is a surgical procedure on what part of the human body?",
              answer: "a",
              options:{ a: "Nose", 
                        b: "Ears", 
                        c: "Chin", 
                        d: "Neck"},
                        img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=88b427d0f977a2ccdc16b00e94a760e9&auto=format&fit=crop&w=1951&q=80"
                      },
           {question: "Which type of rock is created by intense heat AND pressure?",
              answer:"d",
              options:{ a: "Sedimentary", 
                        b: "Igneous",
                        c: "Diamond",
                        d: "Metamorphic"},
                        img: "https://images.unsplash.com/photo-1485629049726-15bc8515cbea?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=88659a99c6cbd4ccbf8af51c7f48876d&auto=format&fit=crop&w=1968&q=80"
                      },
           {question: "What is the powerhouse of the cell?",
              answer:"c",
              options:{ a: "Power Cell",
                        b: "Nucleus",
                        c: "Mitochondria",
                        d: "Stem Cell"},
                        img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-0.3.5&s=\
                        5a2355a2c86813cddf3f65cf895ff9a3&auto=format&fit=crop&w=1268&q=80"
                      },
           {question: "How many bones are in the human body?",
              answer: "a",
              options:{ a: "206", 
                        b: "218", 
                        c: "192", 
                        d: "281"},
                        img: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=ec57359e785e235a5b3353d3a1103251&auto=format&fit=crop&w=1950&q=80"
                      },
           {question:"What does DNA stand for?",
              answer:"d",
              options:{ a: "Deoxyribogenetic Acid",
                        b: "Deoxyribogenetic Atoms",
                        c: "Detoxic Acid",
                        d: "Deoxyribonucleic Acid"},
                        img: "https://us-east-1.tchyn.io/snopes-production/uploads/2017/06/DNA_strand_fb.jpg"
                      },
           {question: "What is a name for the stinging cells in jellyfish?",
              answer:"a",
              options: {  a: "cnidocyte", 
                          b: "lymphocyte",
                          c: "clidocyst",
                          d: "nematode"},
                          img: "https://images.unsplash.com/photo-1512526393532-fb0ebb8ca24a?ixlib=rb-0.3.5&ixid=\
                          eyJhcHBfaWQiOjEyMDd9&s=7587bc59ab9c370871dcaac961e31635&auto=format&fit=crop&w=1567&q=80"
                        }, 
           {question:"71% of the Earth&#039;s surface is made up of?",
              answer:"d",
              options:{ a: "Deserts",
                        b: "Continents",
                        c: "Forests",
                        d: "Water"},
                        img: "http://vestikavkaza.ru/upload/2017-05-29/1496047814592be0c65ec5d0.70983749.jpg"
            },
        ],
    	level2: [
            {question: "In aeronautics, flaps and slats are used to control what on an aircraft?",
              answer: "b",
              options:{ a: "Thrust",
                         b: "Lift",
                         c: "Drag",
                         d: "Weight"},
                         img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-0.3.5&ixid=\
                         eyJhcHBfaWQiOjEyMDd9&s=1fd0fc3053fd17ab0d6c7bef84cef97d&auto=format&fit=crop&w=1953&q=80"
                        },
            {question: "Which of these stars is the largest?",
              answer: "a", 
              options:{ a: "UY Scuti",
                        b: "VY Canis Majoris",
                        c: "Betelgeuse",
                        d: "RW Cephei"},
                        img: "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjF9&s=37ff85589e450a6fa15b0332300e2d5c&auto=format&fit=crop&w=1950&q=80"
                      },
            {question: "How many degrees Fahrenheit is 100 degrees Celsius? ", 
              answer: "d", 
              options:{ a:"326",
                        b: "100",
                        c: "451",
                        d: "212"},
                        img: "https://images.unsplash.com/photo-1503847526538-824483d02f15?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=b41932690ed1828f7e698bdb13cd13f8&auto=format&fit=crop&w=1350&q=80"
                      },
            {question: "Au on the Periodic Table refers to which element?", 
              answer: "b", 
              options:{ a: "Silver",
                        b: "Gold",
                        c: "Oxygen",
                        d: "Nickel"},
                        img: "https://images.unsplash.com/photo-1499823196937-8a4597f6f307?ixlib=\
                        rb-0.3.5&s=35a2e01eb33dcea44de45d99d4a35a90&auto=format&fit=crop&w=1297&q=80"
                        },
            {question: "Who developed the first successful polio vaccine in the 1950s?", 
              answer: "c", 
              options:{ a: "John F. Enders",
                        b: "Thomas Weller",
                        c: "Jonas Salk",
                        d: "Frederick Robbins"},
                        img: "https://circleofdocs.com/wp-content/uploads/2015/09/Adult-Vaccine.jpg"
                      },
            {question: "Which part of the body does glaucoma affect?", 
              answer: "a", 
              options:{ a: "Eyes",
                        b: "Throat",
                        c: "Stomach",
                        d: "Blood"},
                        img: "https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=\
                        rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3f919b2d1bf7d9a8d2746781dbea799&auto=format&fit=crop&w=2851&q=80"
                      },
            {question: "What is the unit of electrical capacitance?", 
              answer: "d", 
              options:{ a: "Gauss",
                        b: "Henry",
                        c: "Watt",
                        d: "Farad"},
                        img: "https://images.unsplash.com/photo-1503753611162-ac7f3aa44d61?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=e9aabdc6ed27a331f476d0466bcea58e&auto=format&fit=crop&w=1950&q=80"
                      },
            {question: "What are human nails made of?", 
              answer: "a", 
              options:{ a: "Keratin",
                        b: "Bone",
                        c: "Chitin",
                        d: "Calcium"},
                        img: "https://www.natural-holistic-health.com/wp-content/uploads/2013/06/what-fingernails-say-about-you.jpg"
                      },
            {question: "What part of the brain takes its name from the Greek for seahorse?", 
              answer: "c", 
              options:{ a: "Cerebellum",
                        b: "Thalamus",
                        c: "Hippocampus", 
                        d: "Amygdala"},
                        img: "https://images.unsplash.com/photo-1501562146-c66d8ef18068?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=f839c3164d4319e6bd7c0b1a8a229469&auto=format&fit=crop&w=1950&q=80"
                      },
            {question: "What do you study if you are studying entomology?", 
              answer: "d", 
              options:{ a: "Humans",
                        b: "the Brain",
                        c: "Fish",
                        d: "Insects"},
                        img: "https://images.unsplash.com/photo-1435158988479-e3984c2fd00c?ixlib=rb-0.3.5&ixid=\
                        eyJhcHBfaWQiOjEyMDd9&s=f6423168d6ddb516149494dcafff3437&auto=format&fit=crop&w=1950&q=80"
              }
            ],
    	
        level3: [
    {question: "On the Beaufort Scale of wind force, what wind name is given to number 8?", 
      answer: "c", 
      options:{ a:"Storm",
                b: "Hurricane",
                c: "Gale",
                d: "Cyclone"},
                img: "https://images.unsplash.com/photo-1506824547206-4944534291d5?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=8f916250e9917059a77dc72b64246cc2&auto=format&fit=crop&w=1974&q=80"
              },
    {question: "What is the scientific name of the knee cap?", 
      answer: "a", 
      options:{ a: "Patella",
                b: "Femur",
                c: "Foramen Magnum",
                d: "Scapula"},
                img: "https://images.unsplash.com/photo-1519708069743-02d72b722d97?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=624c95969662f58d48a967288ec6b72a&auto=format&fit=crop&w=1957&q=80"
              },
    {question: "If you planted the seeds of Quercus robur what would grow?", 
      answer: "d", 
      options:{ a: "Flowers",
                b: "Grain",
                c: "Vegetables",
                d: "Trees"},
                img: "https://images.unsplash.com/photo-1451336819701-5a83f6534292?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=e8f95250201ec550e9f5745cc3820a52&auto=format&fit=crop&w=1567&q=80"
              },
    {question: "What is isobutylphenylpropanoic acid more commonly known as?", 
      answer: "d", 
      options:{ a: "Morphine",
                b: "Ketamine",
                c: "Aspirin",
                d: "Ibuprofen"},
                img: "https://images.unsplash.com/photo-1523243319451-54b60322f948?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=6466b09c246d6d4b9b8da90a33bb2f19&auto=format&fit=crop&w=1950&q=80"
              },
    {question: "Which of these chemical compounds is NOT found in gastric acid?", 
      answer: "a", 
      options:{ a: "Sulfuric Acid",
                b: "Hydrochloric Acid",
                c: "Potassium Chloride",
                d: "Sodium Chloride"},
                img: "https://ak1.picdn.net/shutterstock/videos/13621331/thumb/1.jpg?i10c=img.resize(height:160)"
              },
    {question: "Which of the following is NOT a real element?", 
      answer: "a", 
      options:{ a: "Praseodymium",
                b: "Vitrainium",
                c: "Hassium",
                d: "Lutetium"},
                img: "https://images.unsplash.com/photo-1486239486342-c09e52de305b?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=7edb95f2ad0479e03cf37d4ed7eb05b7&auto=format&fit=crop&w=1950&q=80"
              },
    {question: "What is the scientific name of the red fox?", 
      answer: "d", 
      options:{ a: "Vulpes Redus",
                b: "Red Fox",
                c: "Vulpes Vulpie",
                d: "Vulpes Vulpes"},
                img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=470bd46f550686b098162400ea867429&auto=format&fit=crop&w=1952&q=80"
                },
    {question: "Which moon is the only satellite in our solar system to possess a dense atmosphere?", 
      answer: "a", 
      options:{ a: "Titan",
                b: "Europa",
                c: "Miranda",
                d: "Callisto"},
                img: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=00e046731d751a3f1c7d176eb3ff4769&auto=format&fit=crop&w=1950&q=80"
              },
    {question: "How long is a light-year?", 
      answer: "b", 
      options:{ a: "1 AU",
                b: "9.461 Trillion Kilometres",
                c: "105.40 Earth-years",
                d: "501.2 Million Miles"},
                img: "https://images.unsplash.com/photo-1447433819943-74a20887a81e?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=6835a9662eef0b0322a3ef6a1092ef33&auto=format&fit=crop&w=1975&q=80"
              },
    {question: "Which horizon in a soil profile consists of bedrock?", 
      answer: "d", 
      options:{ a: "O",
                b: "B",
                c: "D",
                d: "R"},
                img: "https://images.unsplash.com/photo-1521755199509-c87e632aac01?ixlib=rb-0.3.5&ixid=\
                eyJhcHBfaWQiOjEyMDd9&s=d0554e5b3f6c5e2b0cd9e00fe6500a0f&auto=format&fit=crop&w=1350&q=80"
            }
    ]
  }
};
