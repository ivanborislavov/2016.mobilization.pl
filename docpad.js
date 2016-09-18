var docpadConfig;
var indexOf = [].indexOf || function (item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        };

var imgBaseUrl = '/images/';
var sponsorsImgBaseUrl = imgBaseUrl + 'sponsors/';
var speakersImgBaseUrl = imgBaseUrl + 'speakers/';
var partnersImgBaseUrl = imgBaseUrl + 'partners/';

docpadConfig = {
    outPath: '../2016.mobilization.pl-gh-pages/',
    templateData: {
        site: {
            url: "http://mobilization.pl",
            oldUrls: ['www.mobilization.pl'],
            title: "Mobilization 2016",
            description: "Mobilization is a conference dedicated to mobile technologies. The main scope is development of mobile solutions aimed at smartphones and tablets, with particular interest in Android and iOS mobile platforms.",
            keywords: "mobilization, conference, mobile conference, Łódź",
            styles: [],
            scripts: [],
            visibility: {
                "features": false,
                "agenda": false,
                "talks": true,
                "speakers": true,
                "volunteers": true
            },
            event: {
                title: 'Mobilization 2016',
                location: {
                    lat: 51.7505458,
                    lng: 19.4501351,
                    place: 'Expo-Łódź Sp. z o.o.',
                    street: 'al. Politechniki 4',
                    city: 'Łódź',
                    zip: '93-590',
                    country: 'Polska'
                },
                data: '22nd Oct 2016',
                time: '08:00-17:30'
            },
            sponsors: {
                diamond: [],
                platinum: [
                    {"name": "Seqr", "logo_url": "/images/sponsors/seqr.png", "link": "https://www.seqr.com/int/"},
                    {
                        "name": "TomTom",
                        "logo_url": "/images/sponsors/tomtom-on-white.png",
                        "link": "http://www.tomtom.com/pl_pl/"
                    },
                    {
                        "name": "Mobica",
                        "logo_url": "/images/sponsors/mobica.png",
                        "description_html": "<p>Mobica provides high-end software development and integration services for consumer electronics manufacturers, operators, application vendors and platform providers. We work on all mainstream mobile platforms and operating systems and can work on virtually any component of a device: from embedded systems and device drivers, core multimedia components and middleware, through to innovative applications/UI design and connectivity solutions.</p><p>We have grown a world-class team of architects, project managers and software engineers based in our UK and Poland development centres, enabling us to provide consultancy services across the software and product lifecycle from initial concept definition and design, through to implementation and testing.</p><p>Mobica adds value to our customers through a combination of flexible consultancy services, the highest levels of technical expertise, and the creation of innovative, technically optimised software component design.</p><p>Mobica are listed in The Sunday Times Tech Track 100 as the 4th fastest growing private technology company in the UK in 2009. See: <a href='http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf'>http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf</a></p><p>Mobica is hiring and looking for talented engineers! Check our current job offers at <a href='http://www.mobica.com/careers'>http://www.mobica.com/careers</a></p><p>&nbsp;</p>"
                    },
                    {"name":"Harman","logo_url":"/images/sponsors/harman.jpeg","link":"http://services.harman.com/"},
                    {"name":"Ericpol","logo_url":"/images/sponsors/ericpol.jpeg","link":"http://www.ericpol.pl"},
                    {"name":"Cybercom","logo_url":"/images/sponsors/cybercom.png","link":"http://www.cybercom.com/pl/Poland/"},                ],
                gold: [
                    {
                        "name": "Ceri International",
                        "logo_url": "/images/sponsors/ceri.png",
                        "link": "http://www.ceri.pl/"
                    },
                    {"name":"Appyourself","logo_url":"/images/sponsors/appyourself.png","link":"http://www.appyourself.net/"},
                    {"name":"Oberthur Technologies R&D Poland","logo_url":"/images/sponsors/oberthur.png","link":"http://www.oberthur.com/"},
                    {"name":"Pracuj.pl","logo_url":"/images/sponsors/pracujpl.png","link":"http://www.pracuj.pl/"},
                    {"name":"Intive","logo_url":"/images/sponsors/intive.png","link":"https://www.intive.com/en"},
                ],
                silver: [
                    {"name":"Sii","logo_url":"/images/sponsors/sii.png","link":"http://sii.pl/oddzialy/lodz/"},
                    {"name":"ITKontrakt","logo_url":"/images/sponsors/itkontrakt.png","link":"https://www.itkontrakt.pl/"},
                ],
                copper: [
                    {"name":"Jetbrains","logo_url":"/images/sponsors/jetbrains.png","link":"http://www.jetbrains.com/"}
                ],
            },
            partners: {
                organizers: [
                    {
                        name: 'Java User Group Łódź',
                        logo_url: partnersImgBaseUrl + 'juglodz.jpeg',
                        description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódźarea. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
                    }
                ],
                supporters: [
                    // {"name": "Miliataria Łódź", "logo_url":"/images/partners/militaria.png", "link":"http://militaria.lodz.pl/"},
                ],
                community: [
                    {
                        "name": "Łódź WiOSłuje",
                        "logo_url": "/images/partners/lodz-wiosluje.png",
                        "description_html": "The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere! Join us on facebook: www.facebook.com/lodzwiosluje",
			            "link": "http://www.meetup.com/Lodz-w-iOS-luje/"
                    },
                    // {"name":"Toruń JUG","logo_url":"/images/partners/jugtorun5d_3_square.png","description_html":"Toruń JUG is a group of JVM technologies developers and enthusiasts. The main goal of the group is to gather people interested in JVM languages both professionally and personally. Our group contains programmers from many companies, scientists working on Toruń university, students and other technology passionates. We are encouraging knowledge sharing and collaboration in open source projects. Although we are the youngest JUG in Poland we are growing fast already having several big partners supporting us. More about Toruń JUG you can find at: torun.jug.pl"},
                    {
                        "name": "Android Developer Group Poznań",
                        "logo_url": "/images/partners/adgp.jpeg",
                        "link": "http://www.meetup.com/Poznan-Android-Developer-Group/"
                    },
                    // {"name":"Polish Java User Group","logo_url":"/images/partners/polish-jug.png","description_html":"Polish Java User Group is a group of Java technology developers and enthusiasts. The main goal of the group is to popularize Java and modern software development methodologies. Since the beginning in 1999, the group had great impact on the Polish Java community growth. They main activity are meetings with students, programmers and project managers as well as conferences with famous professionals."},
                    // {"name":"Mobile Central Europe 2016","logo_url":"/images/partners/mce2016.png","description_html":"We put our best effort into creating a stimulating experience for everyone involved. Help us make it one of the best mobile events in Europe! MCE is about bringing together the greatest minds in tech to exchange groundbreaking ideas. For Mobilization attendees promo-code will be offered giving 20% discount. Code will be visible during Mobilization event so you have to be on Mobilization! With this discount and early bird the ticket for MCE is really good price."},
                    {"name":"GDG Kraków","logo_url":"/images/partners/gdgkrakow.jpeg","link":"http://www.meetup.com/GDG-Krakow/"},
                    {"name":"Let Swift","logo_url":"/images/partners/letswift.png","link":"https://www.facebook.com/letswiftwroclaw/"},
                    // {"name":"Dev Day 2015","logo_url":"/images/partners/abb-dev-day.png","link":"http://devday.pl"},
                    // {"name":"Codepot.pl","logo_url":"/images/partners/codepot-logo.png","link":"http://codepot.pl"},
                    {"name":"Zwinna Łódź","logo_url":"/images/partners/zwinna_lodz.jpeg","link":"http://zwinnalodz.eu/"},
                    {"name":"Mobile Warsaw","logo_url":"/images/partners/mw-logo.png","link":"http://mobile-warsaw.pl"},
                    {"name":"Meet Mobile", "logo_url":"/images/partners/meet-mobile.png", "link":"https://www.meetup.com/meet-mobile/"},
                    {
                        "name": "Droidcon Poland",
                        "logo_url": "/images/partners/droidcon.png",
                        "link": "http://droidcon.pl/"
                    },
                ],
                media: [

                    // {"name":"AK74","logo_url":"/images/partners/ak74.png","description_html":"Cześć! Nazywam się Artur Kurasiński i jestem autorem tego bloga. Na co dzień zajmuję się Fokusem. Jestem współtwórcą cyklu spotkań dla przedsiębiorców Aula Polska oraz konkursu Aulery. Jako vloger prowadzę program „Seria z AK74″. Czasami udzielam się jako mentor na imprezach z cyklu Seedcamp, Labstar, DemoCamp, Intel Challenge, i StartupFest. Więcej znajdziesz tutaj: LinkedIn.com czy Facebooku lub Twitterze Chcesz się ze mną skontaktować?: Wyślij maila na adres: artur@revolver.pl"},
                    // {"name":"Marketing Mobilny","logo_url":"/images/partners/marketing-mobilny.jpg","link":"http://marketingmobilny.pl"},
                    // {"name":"Dworzynska","logo_url":"/images/partners/dworzynska.png","link":"http://dworzynska.com"},
                    // {"name":"Praca IT","logo_url":"/images/partners/pracait.png","link":"http://pracait.com"},
                    // {"name":"Software Developer's Journal","logo_url":"/images/partners/sdj.png","link":"http://sdjournal.pl"},
                    // {"name":"GoMobi","logo_url":"/images/partners/gomobi.jpg","link":"http://gomobi.pl"},
                    {
                        "name": "Programista Magazine",
                        "logo_url": "/images/partners/programistamag.png",
                        "link": "http://programistamag.pl"
                    },
                    // {"name":"MyApple","logo_url":"/images/partners/myapple.jpg","link":"http://myapple.pl"},
                    // {"name":"4tech.tv","logo_url":"/images/partners/4techmobile.png","link":"http://testytelefonow.pl"},
                    // {"name":"StartUpTV","logo_url":"/images/partners/startuptv.png","link":"http://startuptv.pl"},
                    // {"name":"Linux Magazine","logo_url":"/images/partners/linuxmag.png","link":"http://www.linux-magazine.pl"},
                    // {"name":"Kariera Plus","logo_url":"/images/partners/karieraplus.png","link":"http://karieraplus.pl"},
                    // {"name":"Młodzi w Łodzi","logo_url":"/images/partners/mlodzi-w-lodzi.jpg","link":"http://mlodziwlodzi.pl"},
                    // {"name":"Helion","logo_url":"/images/partners/helionpl.png","link":"http://helion.pl"},
                    {"name":"Manning Publications","logo_url":"/images/partners/manning.png","link":"http://www.manning.com"}
                ]
            },
            slots: {
                'slot-registration': {
                    from: '8:00',
                    to: '9:00'
                },
                'slot-hello-world': {
                    from: '9:00',
                    to: '9:10'
                },
                'slot-1': {
                    from: '9:10',
                    to: '9:55'
                },
                'slot-coffee-1': {
                    from: '9:55',
                    to: '10:15'
                },
                'slot-2': {
                    from: '10:15',
                    to: '11:00'
                },
                'slot-coffee-2': {
                    from: '11:00',
                    to: '11:20'
                },
                'slot-3': {
                    from: '11:20',
                    to: '12:05'
                },
                'slot-coffee-3': {
                    from: '12:05',
                    to: '12:25'
                },
                'slot-4': {
                    from: '12:25',
                    to: '13:10'
                },
                'slot-lunch': {
                    from: '13:10',
                    to: '14:10'
                },
                'slot-5': {
                    from: '13:25',
                    to: '13:55'
                },
                'slot-6': {
                    from: '14:10',
                    to: '14:55'
                },
                'slot-coffee-4': {
                    from: '14:55',
                    to: '15:10'
                },
                'slot-7': {
                    from: '15:10',
                    to: '15:55'
                },
                'slot-coffee-5': {
                    from: '15:55',
                    to: '16:10'
                },
                'slot-8': {
                    from: '16:10',
                    to: '16:55'
                },
                'slot-no-coffee-6': {
                    from: '16:55',
                    to: '17:00'
                },
                'slot-finally': {
                    from: '17:00',
                    to: '17:15'
                },
                'slot-afterparty': {
                    from: '17:30',
                    to: '23:59'
                },

            },
            speakers: {
                //1
                "speaker-jens-ravens": {
                   "firstname": "Jens",
                     "lastname": "Ravens",
                     "bio_html": "Jens is an iOS, macOS and backend Developer, writing ObjC since 2006. Currently working at nerdgeschoss helping clients to create awesome apps. Organiser of the monthly swift.berlin meetup. Scaring people with functional concepts since 2014.",
                "www": "http://jensravens.com/",
                "twitter": "https://twitter.com/jensravens",
                "facebook": "",
                "github": "https://github.com/JensRavens",
                "linkedin": "https://www.linkedin.com/in/jens-ravens-31416251",
                "photo_url": "/images/speakers/jens-ravens.jpg"
                },
                 //2
                 "speaker-pedro-buendia": {
                     "firstname": "Pedro",
                     "lastname": "Piñera Buendía",
                     "bio_html": "Pedro is an iOS Developer at SoundCloud. Open source lover and runner in his free time. He loves coding and contributing with his own libraries. In his spare time, Pedro is starting his own project, GitDo. Open to learning new concepts and paradigms, of late he is interested in architectures like VIPER, and reactive programming.",
                     "www": "http://www.ppinera.es/",
                     "github": "https://github.com/pepibumur",
                     "twitter": "https://twitter.com/pepibumur",
                     "photo_url": "/images/speakers/pedro-buendia.jpeg"
                 },
                 //3
                 "speaker-konstantin-raev": {
                     "firstname": "Konstantin",
                     "lastname": "Raev",
                     "bio_html": "Konstantin is a Developer at Facebook who is working in React Native team. For the last few years his passions were infrastructure, Continuous Delivery, JavaScript and stable builds. Before joining Facebook he worked at a New Zealand startup <a href='www.booktrack.com'>Booktrack</a>.",
                     "wwww": "",
                     "github": "https://github.com/bestander/",
                     "linkedin": "https://uk.linkedin.com/in/koraev",
                     "twitter": "https://twitter.com/bestander_nz",
                     "medium": "https://medium.com/@bestander_nz",
                     "photo_url": "/images/speakers/konstantin-raev.jpeg"
                 },
                 //4
                 "speaker-gautier-mechling": {
                     "firstname": "Gautier",
                     "lastname": "Mechling",
                     "bio_html": "Gautier is an aspiring Software Craftsman in Paris, France. Agile thinker passionate in Android Development, he creates and maintains some FOSS tools to improve productivity. Talk to him about Kotlin, Clean Code, or Free Software and you will see his eyes light up.",
                     "wwww": "http://nilhcem.com",
                     "github": "https://github.com/Nilhcem",
                     "twitter": "https://twitter.com/Nilhcem",
                     "photo_url": "/images/speakers/gautier-mechling.jpeg"
                 },
                 //5
                 "speaker-nicola-zaghini": {
                     "firstname": "Nicola",
                     "lastname": "Zaghini",
                     "bio_html": "Nicola Zaghini is a software architect at Mobile Travel Technologies. He has been developing mobile apps since the first iOS SDK was released, from indie game development to major airlines and travel companies. Prior to that, he enjoyed Java development as professional and researcher in academia. He is currently in charge of mobile architecture in MTT and helps teams deliver amazing apps.",
                     "www": "",
                     "twitter": "https://twitter.com/nzaghini",
                     "photo_url": "/images/speakers/nicola-zaghini.jpeg"
                 },
                 //6
                 "speaker-roberto-orgiu": {
                     "firstname": "Roberto",
                     "lastname": "Orgiu",
                     "bio_html": "Android developer and enthusiastic, DroidCon and community fan, I love the Android environment and pushing the limits of the platform.",
                     "www": "",
                     "twitter": "https://github.com/tiwiz",
                     "photo_url": "/images/speakers/roberto-orgiu.jpeg"
                 },
                 //7
                 "speaker-eric-kok": {
                     "firstname": "Eric",
                     "lastname": "Kok",
                     "bio_html": "Hi, I'm Eric. I currently work as a contractor at KBC Bank in Belgium creating the next mobile banking app. But if you know me, it is through my open-source work published under the 2312 development name. I build apps, such as RateBeer, and libraries, such as RxCupboard. I love brewing and drinking craft beer, chatting about Android and building with Legos with my son.",
                     "www": "",
                     "twitter": "https://twitter.com/erickoknl",
                     "photo_url": "/images/speakers/eric-kok.jpeg"
                 },
                 //8
                 "speaker-dan-cuellar": {
                     "firstname": "Dan",
                     "lastname": "Cuellar",
                     "bio_html": "Dan Cuellar is the creator of the open source mobile automation framework Appium, and Head of Test Engineering at FOODit in London. Previously, he headed the test organisation at Shazam in London and Zoosk in San Francisco, and worked as a software engineer on Microsoft Outlook for Mac, and other products in the Microsoft Office suite. He is an advocate of open source technologies and technical software testing. He earned a Bachelor’s degree in Computer Science, with a minor in Music Technology, from the world-renowned School of Computer Science at Carnegie Mellon University in Pittsburgh.",
                     "github": "https://github.com/penguinho",
                     "linkedin": "https://uk.linkedin.com/in/dacuellar",
                     "www": "",
                     "twitter": "https://twitter.com/thedancuellar",
                     "photo_url": "/images/speakers/dan-cuellar.jpeg"
                 },
                 //9
                 "speaker-roman-mazur": {
                     "firstname": "Roman",
                     "lastname": "Mazur",
                     "bio_html": "Roman has been working with Android for more than 6 years. You can find him delivering fixes and new features to a plenty of Android libraries and frameworks including support library, Robolectric, Madge, Spoon, Retrofit, and Helium. At Stanfy he is working on a customized Android OS for in-room tablets installed at hotels by KEYPR.",
                     "www": "https://www.stanfy.com/",
                     "github":"https://github.com/roman-mazur",
                     "twitter": "https://twitter.com/roman_mazur",
                     "photo_url": "/images/speakers/roman-mazur.jpeg"
                 },
                 //10
                 "speaker-markus-junginger": {
                     "firstname": "Markus",
                     "lastname": "Junginger",
                     "bio_html": "Markus Junginger is an Android enthusiast and developer since the first SDK release in 2007. His mobile software company greenrobot focuses on high quality Android apps and open source libraries, which are widely used by many popular apps. Markus has 15+ years experience with Java and did his first mobile software project in 2001. He regularly speaks and writes about Android, gives Android trainings, and develops for Android.",
                     "www": "",
                     "twitter": "https://twitter.com/greenrobot_de",
                     "photo_url": "/images/speakers/markus-junginger.jpeg"
                 },
                //11
                "speaker-madis-pink": {
                    "firstname": "Madis",
                    "lastname": "Pink",
                    "bio_html": "Madis is currently working on JRebel for Android at ZeroTurnaround. He started hacking on Android apps on a T-Mobile G1 more than 7 years ago and quickly grew a particular interest in build systems and developer tooling. His previous experience includes working on the Android Platform team at Spotify and producing multiple apps at Mobi Lab. During his free time he likes to dabble around with guitars and home recording.",
                    "www": "",
                    "github":"https://github.com/madisp",
                    "twitter": "https://twitter.com/madisp",
                    "photo_url": "/images/speakers/madis-pink.jpeg"
                },
                //12
                "speaker-pablo-guardiola": {
                    "firstname": "Pablo",
                    "lastname": "Guardiola",
                    "bio_html": "I'm a Software Engineer, lover of new technologies, passionate about challenges and motivated to continue learning current coding languages and methodologies. I'm a regular attendee at developers’ events and meetups. I'm a Testing-lover and I try to share my knowledge collaborating @AprendiendoTDD and @theEvnt facilitating coding dojos, katas and other stuff.",
                    "www": "http://pguardiola.com/",
                    "github": "https://github.com/Guardiola31337",
                    "twitter": "https://twitter.com/guardiola31337",
                    "photo_url": "/images/speakers/pablo-guardiola.jpeg"
                },
                //13
                "speaker-jorge-castillo": {
                    "firstname": "Jorge",
                    "lastname": "Castillo",
                    "bio_html": "Jorge Castillo is a spanish experienced Android developer currently working as an Android Engineer at Jobandtalent, an important International product company from Madrid. Its main work is focused on Open Source projects.",
                    "www": "http://jorgecastillo.xyz/",
                    "twitter": "https://twitter.com/JorgeCastilloPr",
                    "github" : "https://github.com/JorgeCastilloPrz/",
                    "photo_url": "/images/speakers/jorge-castillo.jpeg"
                },
                //14
                "speaker-inaki-villar": {
                    "firstname": "Inaki",
                    "lastname": "Villar",
                    "bio_html": "Android Developer since 5 years ago. I worked with Bank apps in Spain for three years. Later I moved to Ireland to work with apps of Airlines and GSM carriers. Actually I'm living in Thailand working for Agoda. I'm Google Developer Expert and I enjoy being involve with the android community.",
                    "www": "",
                    "github" : "https://github.com/cdsap",
                    "twitter": "https://twitter.com/inyaki_mwc",
                    "photo_url": "/images/speakers/inaki-villar.jpeg"
                },
                //15
                "speaker-enrique-manas": {
                    "firstname": "Enrique",
                    "lastname": "López Mañas",
                    "bio_html": "Enrique López-Mañas is a Google Developer Expert and independent IT consultor. He has been working with mobile technologies and learning from then since 2007.  He is an avid contributor to the Open Source community and a FLOSS (Free Libre Open Source Software) kind of guy, being among the top 10 Open Source Java Contributors in Germany. He is a part of the Google LaunchPad accelerator, where he participates in Google global initiatives to influence over hundreds of the best startups from all around the globe. He is also a Big Data and Machine Learning aficionado. On his free time he rides his bike, take pictures and travel until extenuation. He also writes literature and enjoys all kind of arts. He also likes to write about himself in third person.",
                    "www" : "http://www.lopez-manas.com/",
                    "github" : "https://github.com/kikoso",
                    "twitter" : "https://twitter.com/eenriquelopez",
                    "photo_url": "/images/speakers/enrique-manas.jpeg"
                },
                //16
                "speaker-hugo-visser": {
                    "firstname": "Hugo",
                    "lastname": "Visser",
                    "bio_html": "Hugo is a software engineer who has worked on enterprise, desktop and mobile software products. Since the introduction of Android he has been steadily focussing on developing for Android only, resulting in his first app in 2009. Hugo has released several open source libraries and tools to help him and other developers build better software. He’s a Google Developer Expert for Android and one of the organizers of the Dutch Android User Group. With his company Little Robots, he focuses on smart use of Android in every possible way.",
                    "www": "http://littlerobots.nl/",
                    "github": "https://github.com/hvisser",
                    "twitter": "https://twitter.com/botteaap",
                    "photo_url": "/images/speakers/hugo-visser.jpeg"
                },
                //17
                "speaker-saul-diaz": {
                    "firstname": "Saúl",
                    "lastname": "Díaz",
                    "bio_html": "Saúl Díaz has been developing Android since 2010. Currently he is working on Chicisimo, and Android app selected as one of the best of 2015 on Spain, and featured on Google Play by the Google Play Team. Previously he has worked as Android Lead on Fever and Android Developer on Tuenti, two renowned companies of Spain. He is an active member of the Spanish Android Development community and regularly participates in events and conferences.",
                    "www": "",
                    "twitter": "https://twitter.com/sefford",
                    "photo_url": "/images/speakers/saul-diaz.jpeg"
                },
                //18
                "speaker-francisco-estevez": {
                    "firstname": "Francisco",
                    "lastname": "Estevez",
                    "bio_html": "Paco Estevez is an Android developer at Hudl by day, and an opensource contributor by night. He's been an early adopter of new paradigms and techniques in Android, like reactive programming with RxJava or a functional approach to Kotlin. You can follow his thoughts on his <a href='http://www.pacoworks.com'>blog</a>, or his <a href='https://github.com/pakoito'>libraries</a>",
                    "www": "http://www.pacoworks.com",
                    "twitter": "",
                    "github" : "https://github.com/pakoito",
                    "photo_url": "/images/speakers/francisco-estevez.jpeg"
                },
                //19
                "speaker-frederik-schweiger": {
                    "firstname": "Frederik",
                    "lastname": "Schweiger",
                    "bio_html": "Frederik is a young computer science student from Germany who's chief interest is creating and inventing new stuff. He currently works as an Android Developer at trivago. Besides writing code he loves jumping out of airplanes and to go skiing.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/speakers/frederik-schweiger.jpeg"
                },
                //20
                "speaker-roy-marmelstein": {
                    "firstname": "Roy",
                    "lastname": "Marmelstein",
                    "bio_html": "Creator of PhoneNumberKit, Interpolate and Localize.",
                    "www": "http://marmelroy.github.io/",
                    "github" : "https://github.com/marmelroy",
                    "twitter": "https://twitter.com/marmelroy",
                    "photo_url": "/images/speakers/roy-marmelstein.jpeg"
                }
            },
            talks: {
                "talk-modularizing-apps-framework-oriented-programming": {//1
                    "title": "Modularizing your apps: Framework Oriented Programming",
                    "description_html": "Have you ever tried to reuse code from your mobile apps and you haven’t been able to? Did you start using frameworks only when Apple suggested it for Watch Extensions? With more platforms coming out, there's a clear need of bundling logic that can be reused and shared in multiple platforms. Frameworks will help us with that and will benefit our application code bases in many ways. Learn how to do it, with or without dependency manager involved, recommendations and some caveats you must keep in mind. Start building your own Foundation frameworks, reusable, well designed, and with single responsibilities.",
                    "speakers_keys": [
                        "speaker-pedro-buendia"
                    ],
                    "language": "EN"
                },
                "talk-reactive-programming-for-ios-with-interstellar-2": {//2
                    "title": "Reactive Programming for iOS with Interstellar 2",
                    "description_html": "Have a look at how to make Swift and Objective-C interoperability seamless. Basics of including Swift code in your new or existing Objective-C based projects and helping yourself when you want to deliver some parts of Swift-based application using Objective-C code.",
                    "speakers_keys": [
                        "speaker-jens-ravens"
                    ],
                    "language": "EN"
                },
                "talk-taming-node-modules-at-facebook": {//3
                    "title": "Taming node_modules at Facebook",
                    "description_html": "Managing Node.js dependencies is a common problem for anyone who does JavaScript development these days. Should you check in node_modules into github or should you rely on shrinkwrap.json? The path of taming node_modules is long for Facebook Engineering, I will talk about a solution that satisfied multiple parties: source control team, engineers who manage dependencies, security team and app developers.",
                    "speakers_keys": [
                        "speaker-konstantin-raev"
                    ],
                    "language": "EN"
                },
                "talk-the-2016-android-developer-toolbox": {//4
                    "title": "The 2016 Android Developer Toolbox",
                    "description_html": "Whether your native Android app is a pet project or has millions of users, you probably need the right tools, during the development, to help you modify persisted data in real time, simulate an slow/unstable HTTP(s) connection, detect bugs as fast as possible, or create mock servers to anticipate the development of a feature. We'll make a demonstration of all the tools we use, in 2016, to write maintainable code and improve our productivity.",
                    "speakers_keys": [
                        "speaker-gautier-mechling"
                    ],
                    "language": "EN"
                },
                "talk-break-the-monolith-with-b-viper-modules": {//5
                    "title": "Break the monolith with (B)VIPER Modules. Or how do I start modularising my code for a better (engineering) life.",
                    "description_html": "In the software engineering business there is no one fits all solution but when design patterns arise in the community it is important to understand the reasons why they were originated and how to tweak them for our purposes. This talk will explore the VIPER design with top-down approach, deriving the design decisions from quality attributes of a software system including modularity, reusability, testability, single responsibility and more. You will learn the reasons why the design was initially conceived (Clean Architecture by Uncle Bob) then formalised for mobile (by Mutual Mobile) and how to revise it to fit your purposes. Eventually a modified version of the design, friendly called (B)VIPER, will be discussed as improvement for better reuse of modules among different teams.",
                    "speakers_keys": [
                        "speaker-nicola-zaghini"
                    ],
                    "language": "EN"
                },
                "talk-green-dao-3-and-beyond": {//6
                    "title": "greenDAO 3 and beyond",
                    "description_html": "greenDAO is the fastest ORM for Android. greenDAO 3 brings annotations and prepares the way for further enhancements like RX support. The author of greenDAO gives deep insights about how to best use ORM to make app development productive and fun.",
                    "speakers_keys": [
                        "speaker-markus-junginger"
                    ],
                    "language": "EN"
                },
                "talk-bonjour-android-it-is-zeroconf": {//7
                    "title": "Bonjour Android, it's ZeroConf",
                    "description_html": "ZeroConf is a protocol that helps us advertising a service or discovering the available services in our networks. This is how Chromecast works, but why don’t we go deeper? We will dive into the definition of ZeroConf and why the protocol is needed, how it works and what libraries will help us implementing it on Android.",
                    "speakers_keys": [
                        "speaker-roberto-orgiu"
                    ],
                    "language": "EN"
                },
                "talk-functional-on-android-lambdas-rx-and-streams-in-your-app": {//8
                    "title": "Functional on Android: lambdas, Rx and streams in your app",
                    "description_html": "On Android, more and more developers are attracted to the functional programming-style concept of declarative data manipulation using lambdas. Java 8 has a new steams API, but it's limited to Android N. Backports exist, but it's RxJava that's all the rage, with its elegant threading solution. How do we use lambdas, streams and Rx effectively on Android? Orientation changes and background tasks? I propose to stop worrying about the lifecycle and cache your way into a blissful user experience.",
                    "speakers_keys": [
                        "speaker-eric-kok"
                    ],
                    "language": "EN"
                },
                "talk-appium-automation-for-apps": {//9
                    "title": "Appium: Automation for Apps",
                    "description_html": "Basic introduction to automating mobile apps with Appium.",
                    "speakers_keys": [
                        "speaker-dan-cuellar"
                    ],
                    "language": "EN"
                },
                "talk-interacting-with-your-app-through": { //10
                    "title": "Interacting with your app through command line",
                    "description_html": "Android command line is a very powerful tool. During this talk, we'll briefly review what Android shell commands can be useful for development, testing, and automation. We'll concentrate on how your application can interact with the command line considering 2 approaches. The first one is based on Android framework tools and the second is the core of Facebook Stetho tool.",
                    "speakers_keys": [
                        "speaker-roman-mazur"
                    ],
                
                    "language": "EN"
                },
                "talk-how-jrebel-for-android-does-performance-testing": { //11
                    "title": "How JRebel for Android Does Performance Testing",
                    "description_html": "As developers we often employ unit- and integration testing to catch bugs early during development. But how to detect regressions in performance? Sometimes a small slowdown can go unnoticed for weeks or months until the app becomes unbearably slow and a profiler gets attached. In this talk, we'll take an in-the-trenches look at how we set up a performance testing suite for JRebel for Android. We'll talk about challenges we faced when running the tests on our CI servers. We'll also cover how we pinpoint regressions to a single commit with the help of Elasticsearch and Kibana.",
                    "speakers_keys": [
                        "speaker-madis-pink"
                    ],
                    "language": "EN"
                },
                "talk-elegant-unit-testing": { //12
                    "title": "Elegant?? Unit Testing",
                    "description_html": "In this session we will learn the basics of Unit Testing and its importance. We will define what a Unit Test is, what type of Unit Tests there are and then talk about Test Doubles. Finally, we will focus on how to write new tests and improve existing ones by reviewing some Android Github projects. Can you sleep soundly without writing tests? Really???",
                    "speakers_keys": [
                        "speaker-pablo-guardiola"
                    ],
                    "language": "EN"
                },
                "talk-custom-annotation-processors-for-your-production-code": { //13
                    "title": "Custom Annotation processors for your production code",
                    "description_html": "The annotation processing tool (APT) was released into the JDK 5, but we did not paid enough attention to it in order to exploit its potential. Today, annotation processors are part of many well known libraries that we use everyday in our professional code. On this talk we will learn how to code our custom annotation processor and to start looking at it as a very useful tool to reduce overhead in our production code. Because many recurrent problems could get solved using annotation processors!",
                    "speakers_keys": [
                        "speaker-jorge-castillo"
                    ],
                    "language": "EN"
                },
                "talk-espresso-beyond-the-basics": { // 14
                    "title": "Espresso, beyond the basics",
                    "description_html": "More than the typical onView example Espresso offers a complete framework to interact with your UI. Once you start developing your tests you find common issues, in this talk learn tips and tricks on how to deal with the framework and avoid problems like synchronization, permissions, environment test scenarios and much more. ",
                    "speakers_keys": [
                        "speaker-inaki-villar"
                    ],
                    "language": "EN"
                },
                "talk-android-high-performance": { //15
                    "title": "Android High Performance",
                    "description_html": "Performant applications are one of the key drivers of success in the mobile world. Users may abandon an app if it runs slowly. Learning how to build applications that balance speed and performance with functionality and UX can be a challenge; however, it's now more important than ever to get that balance right. This session will show you how to wring the most from any hardware your app is installed on, so you can increase your reach and engagement. An introduction to state–of-the-art Android techniques and the importance of performance in an Android application will be introduced, and later we will slowly walk through the Android SDK tools regularly used to debug and profile Android applications, learn about some advanced topics such as building layouts, multithreading, networking, security and battery life ( one of the biggest bottleneck in applications).",
                    "speakers_keys": [
                        "speaker-enrique-manas"
                    ],
                    "language": "EN"
                },
                "talk-titanium-develop-native-mobile-apps-with-javascript": { //16
                    "title": "RxJava for the rest of us",
                    "description_html": "The Reactive Extensions for the JVM, better known as RxJava, have become a popular tool in Android development over the past years. Many new and existing libraries added support for Rx and “reactive” solutions to existing problems popped up over time. RxJava is both known for it’s power and it’s steep learning curve, so if you aren’t using RxJava already, what are you missing out on? Should you even be using RxJava? In this talk we’ll go over what RxJava is and how you can use it to solve problems in your Android apps, one step at a time. We will discuss how you can prevent shooting yourself in the foot by looking at common mistakes you may make when using RxJava and discussing tips and tricks for keeping your reactive app manageable.",
                    "speakers_keys": [
                        "speaker-hugo-visser"
                    ],
                    "language": "EN"
                },
                "talk-getting-down-to-business-with-firebase": { // 17
                    "title": "Getting down to business with Firebase",
                    "description_html": "Firebase goes beyond being just an alternative to building a serverless application. It is a complete solution to control and monitor several aspects of both your product and business. We will discuss how easy is to integrate Firebase with your current application and how it can be used to improve your experience towards your users from a technical standpoint.",
                    "speakers_keys": [
                        "speaker-saul-diaz"
                    ],
                    "language": "EN"
                },
                "talk-revisiting-types-in-kotlin": { // 18
                    "title": "Revisiting types in Kotlin",
                    "description_html": "With a domain driven approach, this talk will go through several coding examples and how they can be improved by leveraging the powerful type system in Kotlin with function objects, sealed classes, tuples, and the core collections. We'll review the way your application communicates across layers, and how you can improve your APIs with explicit types.",
                    "speakers_keys": [
                        "speaker-francisco-estevez"
                    ],
                    "language": "EN"
                },
                "talk-security-at-your-fingertips": { //19
                    "title": "Security at your Fingertips - A dive into M&N's new Fingerprint and Keystore APIs.",
                    "description_html": "Android Marshmallow (and most recently Android Nougat) have introduced a lot of fresh features and the new permission system is by far not the only new security enhancement. Most of you already use their finger to unlock the smartphone and may have heard about this new fingerprint API - but have you ever played with it? And once we’re there: Do you know about the newly introduced improvements in the Keystore API? No? Then this talk is definitely for you! Still hesitating? Just remember that security and a good user experience is something we cannot know enough about. With just a few simple steps you can learn how to increase the security of your app, making authentication easier and your users happier - all at once. And to be honest: in the end that’s all we want, right?",
                    "speakers_keys": [
                        "speaker-frederik-schweiger"
                    ],
                    "language": "EN"
                },
                "talk-the-objective-c-runtime-and-swift-dynamism-a-2016-perspective": { //20
                    "title": "The Objective C runtime and Swift dynamism - a 2016 perspective",
                    "description_html": "A new talk introducing advanced techniques with the Objective C runtime and assessing their relevance in an increasingly Swifty world. ",
                    "speakers_keys": [
                        "speaker-roy-marmelstein"
                    ],
                    "language": "EN"
                }
            },
            breaks: {
                'break-registration': {
                    title: 'Registration',
                    description_html: 'If you do not want to miss any presentation please register between 7:30-9:10. However, registration will be opened all day!'
                },
                'break-hello-world': {
                    title: 'Hello World',
                    description_html: 'This is couple of words about Mobilization. For community by community.'
                },
                'break-coffee': {
                    title: 'Coffee Break',
                    description_html: ''
                },
                'break-lunch': {
                    title: 'Lunch Break',
                    description_html: 'VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.<br>Attendees will have soldiers\' soup outside the building!',
                },
                'break-no-coffee': {
                    title: 'No Coffee Break',
                    description_html: ''
                },
                'break-finally': {
                    title: 'Finally meeting',
                    description_html: 'Time to give thanks to all the sponsors and the organizer\'s team.'
                },
                'break-afterparty': {
                    title: 'AfterParty in All Start Klubokawiarnia',
                    description_html: 'Free pizza and beer and follow up talks.<br>15min from conference venue.<br>Piotrkowska 217 Łódź'
                }
            },
            venues: {
                "venue-diamond": {
                    "title": "Diamond"
                },
                "venue-ericpol": {
                    "title": "Ericpol"
                },
                "venue-mobica": {
                    "title": "Mobica"
                },                
                "venue-seqr": {
                    "title": "SEQR"
                },                
                "venue-tomtom": {
                    "title": "TomTom"
                }
            },
            schedule: {
                // "slot-registration": {"break_key": "break-registration"},
                // "slot-hello-world": {"break_key": "break-hello-world"},
                // "slot-1": {
                //     "venue-diamond": {
                //         "talk_key": "talk-potrzeby-biznesowe-a-technologia-w-mobdev-na-przykladzie-seqr"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-developing-software-for-dedicated-devices-using-agile"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-html5-goes-for-a-ride-czyli-wyzwania-dla-technologii-webowych-w-przemysle-automotive"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-android-auto"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-ux-pitfalls-in-multi-os-apps"
                //     }
                // },
                // "slot-coffee-1": {"break_key": "break-coffee"},
                //
                // "slot-2": {
                //     "venue-diamond": {
                //         "talk_key": "talk-optymalizacja-hierarchii-widokow-na-platformie-android"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-hacking-bluetooth-smart"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-modern-ios-app-architecture"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-titanium-develop-native-mobile-apps-with-javascript"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-espressive-functional-testing-with-espresso"
                //     }
                // },
                // "slot-coffee-2": {"break_key": "break-coffee"},
                // "slot-3": {
                //     "venue-diamond": {
                //         "talk_key": "talk-app-indexing-i-deep-linking-w-aplikacjach-androidowych"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-watch-out-for-the-watch"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-unit-testy-w-androidzie-z-uzyciem-biblioteki-spock"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-hunt-me-od-kuchni-jak-powstal-innowacyjny-sposob-na-szukanie-pracy"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-angular-js-i-cordova-tworzenie-hybrydowych-aplikacji-mobilnych"
                //     }
                // },
                // "slot-coffee-3": {"break_key": "break-coffee"},
                // "slot-4": {
                //     "venue-diamond": {
                //         "talk_key": "talk-behavior-driven-development"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-ionic-io-services-for-hybrid-mobile-applications"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-dont-reinvent-the-wheel-use-libraries-modern-android-stack"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-clean-architecture"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-kotlin-for-android"
                //     }
                // },
                // "slot-lunch": {"break_key": "break-lunch"},
                // "slot-5": {
                //     "venue-seqr": {
                //         "talk_key": "talk-kiedy-zespol-scrumowy-nie-kocha-swojego-produktu-mobilnego"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-czy-nastala-era-continuous-everything"
                //     },
                // },
                // "slot-6": {
                //     "venue-diamond": {
                //         "talk_key": "talk-reaktywne-programowanie-z-rxjava"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-no-platformy-natywne"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-swift-and-objective-c-interoperability"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-dagger-2-dependency-injection-w-kodzie-produkcyjnym"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-qtquick-spotyka-html"
                //     }
                // },
                // "slot-coffee-4": {"break_key": "break-coffee"},
                // "slot-7": {
                //     "venue-diamond": {
                //         "talk_key": "talk-android-data-binding-nie-tylko-w-teorii"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-dobry-zwyczaj-nie-odziedziczaj"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-hipster-oriented-programming"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-co-kryje-pianka-czyli-o-nowej-wersji-androida"
                //     },
                //     "venue-tomtom": {
                //         "talk_key": "talk-material-design-with-android-design-library"
                //     }
                // },
                // "slot-coffee-5": {"break_key": "break-coffee"},
                // "slot-8": {
                //     "venue-diamond": {
                //         "talk_key": "talk-what-s-in-it-for-us-after-the-indiepocalipse"
                //     },
                //     "venue-seqr": {
                //         "talk_key": "talk-reactive-ui-on-adroid-with-scala"
                //     },
                //     "venue-mobica": {
                //         "talk_key": "talk-zwinna-lodz-przedstawia-panel"
                //     },
                //     "venue-platinum": {
                //         "talk_key": "talk-xamarin-dla-nie-tylko-deweloperow-androida"
                //     },
                // },
                // "slot-no-coffee-6": {"break_key": "break-no-coffee"},
                // "slot-finally": {"break_key": "break-finally"},
                // "slot-afterparty": {"break_key": "break-afterparty"}
            },
            volunteers: {
                //1
                "volunteer-marcin-iwanicki": {
                    "firstname": "Marcin",
                    "lastname": "Iwanicki",
                    "bio_html": "Created docpad generator for mobilization webpage. Deals with iOS talks.",
                    "www": "",
                    "twitter": "https://twitter.com/marciniwanicki",
                    "photo_url": "/images/team/marcin-iwanicki.jpeg"
                },
                //2
                "volunteer-marek-defecinski": {
                    "firstname": "Marek",
                    "lastname": "Defeciński",
                    "bio_html": "Coordinates all things with Mobilization. Seeks for speakers. The brain of Mobilization conference.",
                    "www": "",
                    "twitter": "https://twitter.com/marekdef",
                    "photo_url": "/images/team/marek-defecinski.jpeg"
                },
                //3
                "volunteer-karolina-draus": {
                    "firstname": "Karolina",
                    "lastname": "Draus",
                    "bio_html": "Coordinates promotion and contact with partners. Content Manager - Facebook & Twitter. Talented copywriter.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/karolina-draus.jpeg"
                },
                //4
                "volunteer-mariusz-saramak": {
                    "firstname": "Mariusz",
                    "lastname": "Saramak",
                    "bio_html": "If Marek is the brain, he is the heart of Mobilization. Full of crazy ideas - the first one was this conference.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/mariusz-saramak.jpeg"
                },
                //5
                "volunteer-tomasz-zielinski": {
                    "firstname": "Tomasz",
                    "lastname": "Zieliński",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/tomasz-zielinski.jpeg"
                },
                //6
                "volunteer-beata-nagorniewicz": {
                    "firstname": "Beata",
                    "lastname": "Nagórniewicz",
                    "bio_html": "Responsible for AfterParty :)",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/beata-nagorniewicz.jpeg"
                },
                //7
                "volunteer-cezary-draus": {
                    "firstname": "Cezary",
                    "lastname": "Draus",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/cezary-draus.jpeg"
                },
                //8
                "volunteer-agnieszka-saramak": {
                    "firstname": "Agnieszka",
                    "lastname": "Saramak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/agnieszka-saramak.jpeg"
                },
                //8
                "volunteer-rafal-lenarczyk": {
                    "firstname": "Rafał",
                    "lastname": "Lenarczyk",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/rafal-lenarczyk.jpeg"
                },       
                //9
                "volunteer-anna-defecinska": {
                    "firstname": "Anna",
                    "lastname": "Defecińska",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/anna-defecinska.jpeg"
                },  
                //10
                "volunteer-andrzej-jozwiak": {
                    "firstname": "Andrzej",
                    "lastname": "Jóźwiak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/andrzej-jozwiak.jpeg"
                },
                //11
                "volunteer-krzysztof-gutowski": {
                    "firstname": "Krzysztof",
                    "lastname": "Gutowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krzysztof-gutowski.jpeg"
                },                                  
            },
        },
        getPreparedTitle: function () {
            if (this.document.title) {
                return this.document.title + " | " + this.site.title;
            } else {
                return this.site.title;
            }
        },
        getPreparedDescription: function () {
            return this.document.description || this.site.description;
        },
        getPreparedKeywords: function () {
            return this.site.keywords.concat(this.document.keywords || []).join(', ');
        }
    },
    collections: {
        posts: function () {
            return this.getCollection('documents').findAllLive({
                relativeOutDirPath: 'posts'
            });
        }
    },
    environments: {
        development: {
            templateData: {
                site: {
                    url: false
                }
            }
        }
    },
    events: {
        serverExtend: function (opts) {
            var docpad, latestConfig, newUrl, oldUrls, server;
            server = opts.server;
            docpad = this.docpad;
            latestConfig = docpad.getConfig();
            oldUrls = latestConfig.templateData.site.oldUrls || [];
            newUrl = latestConfig.templateData.site.url;
            return server.use(function (req, res, next) {
                var ref;
                if (ref = req.headers.host, indexOf.call(oldUrls, ref) >= 0) {
                    return res.redirect(newUrl + req.url, 301);
                } else {
                    return next();
                }
            });
        }
    }
};

module.exports = docpadConfig;

// ---
// generated by coffee-script 1.9.2
