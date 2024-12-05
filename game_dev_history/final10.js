// ratios
let boxWidth;
let boxHeight;
let boxLeft;
let boxTop;
boxBorder = 20;
jut = 60;

// font
let fancy;
let normal;

// data
title = [
  "Escape",
  "Minecraft Infinity House",
  "Freedom",
  "Animal Crossing Mini",
  "Minion",
  "Twelve Days of Christmas",
  "Escape 2",
  "Sochi Snowboarder",
  "Bang",
  "Simple 3D World",
  "Shadows",
  "Crazy Canoe",
  "Draw with Fruity Colors",
  "Fruitful",
  "Mr. Food",
  "Dreamscape",
  "Tiny Town",
  "Keyboard Smash",
  "In Addition",
  "Interactive Baymax",
  "Animal Island",
  "Rollercoaster Simulator",
  "Scratch Phone",
  "They're Coming",
  "Mr. Flea",
  "Infinite Platformer",
  "Scratch City",
  "Reindeer Rush",
  "100 Levels",
  "The Cave",
  "Scratch City 2",
  "Orange OS",
  "Hotel Tycoon",
  "The Cave 2",
  "Rotate",
  "Last",
  "Cortex",
  "Winter",
  "3D Builder",
  "Split Second",
  "Toro's Adventure",
  "PENgine",
  "Punchy the Cat",
  "Rotate Your Art",
  "Cube Race",
  "Ensnared",
  "Hard Wrap",
  "Gaps",
  "Skyways",
  "Get Green",
  "Fovos",
  "Bolt Bolt",
  "Chase",
  "Forager",
  "Rimmed",
  "Camilla's Ascent",
  "Linearctic",
  "Message Hunt",
  "Quake Shake",
  "Soul Jumper ",
  "Pilldemic",
  "Chad's Chadilicious Day",
];
release = [
  "Oct 20, 2012",
  "Mar 18, 2013",
  "Jul 24, 2013",
  "Aug 7, 2013",
  "Nov 23, 2013",
  "Dec 25, 2013",
  "Jan 1, 2014",
  "Feb 9, 2014",
  "Feb 17, 2014",
  "April 27, 2014",
  "May 13, 2014",
  "Jun 25, 2014",
  "July 1, 2014",
  "Aug 14, 2014",
  "Nov 16, 2014",
  "Dec 26, 2014",
  "Mar 1, 2015",
  "April 1, 2015",
  "May 8, 2015",
  "May 13, 2015",
  "Jul 10, 2015",
  "Aug 11, 2015",
  "Aug 30, 2015",
  "Oct 29, 2015",
  "Nov 28, 2015",
  "Dec 12, 2015",
  "Dec 16, 2015",
  "Dec 22, 2015",
  "Jan 2, 2016",
  "Jan 21, 2016",
  "Feb 11, 2016",
  "Feb 20, 2016",
  "Feb 29, 2016",
  "March 14, 2016",
  "March 25, 2016",
  "April 23, 2016",
  "May 7, 2016",
  "June 30, 2016",
  "Aug 28, 2016",
  "Oct 30, 2016",
  "March 3, 2017",
  "March 14, 2017",
  "April 29, 2017",
  "May 29, 2017",
  "July 1, 2017",
  "Aug 5, 2017",
  "Nov 12, 2017",
  "Dec 28, 2017",
  "Jan 27, 2018",
  "Feb 7, 2018",
  "March 31, 2018",
  "Jun 7, 2018",
  "July 1, 2018",
  "Aug 24, 2018",
  "Aug 30, 2018",
  "April 1, 2019",
  "May 9, 2019",
  "June 1, 2020",
  "June 14, 2020",
  "Feb 12, 2021",
  "April 4, 2021",
  "April 26, 2021",
];
days = [
  0, 149, 277, 291, 399, 431, 438, 477, 485, 554, 570, 613, 619, 663, 757, 797,
  862, 893, 930, 935, 993, 1025, 1044, 1104, 1134, 1148, 1152, 1158, 1169, 1188,
  1209, 1218, 1227, 1241, 1252, 1281, 1295, 1349, 1408, 1471, 1595, 1606, 1652,
  1682, 1715, 1750, 1849, 1895, 1925, 1936, 1988, 2056, 2080, 2134, 2140, 2354,
  2392, 2781, 2794, 3037, 3088, 3110,
];
views = [
  2725, 1695, 413, 16584, 516, 1034, 1528, 385, 904, 1243, 1758, 331, 1, 717,
  1287, 4436, 3677, 4912, 2344, 5911, 10951, 7895, 36330, 2577, 6586, 8940,
  91244, 3163, 58502, 10008, 5571, 11879, 94975, 10863, 4562, 8868, 1989, 2833,
  3347, 2026, 403, 10137, 13463, 2670, 2, 15331, 85, 267, 32618, 12727, 2084,
  23769, 1, 7191, 31612, 1280, 15182, 1, 2, 1, 0, 6,
];
likes = [
  76, 92, 16, 400, 28, 46, 55, 22, 26, 59, 62, 21, 1, 73, 57, 415, 234, 127,
  147, 710, 945, 318, 2274, 157, 628, 347, 6174, 219, 2409, 840, 410, 979, 3139,
  652, 458, 783, 252, 497, 248, 268, 12, 1145, 763, 350, 2, 1614, 1, 6, 1318,
  862, 309, 882, 1, 349, 922, 128, 503, 1, 2, 1, 0, 6,
];
remakes = [
  6, 4, 0, 52, 0, 2, 0, 1, 0, 2, 3, 0, 0, 1, 12, 11, 4, 10, 6, 11, 48, 18, 216,
  6, 28, 24, 504, 9, 294, 16, 10, 58, 295, 14, 12, 14, 6, 11, 6, 1, 0, 29, 40,
  3, 0, 40, 0, 0, 88, 45, 1, 44, 0, 16, 117, 5, 9, 0, 0, 0, 0, 0,
];
program = [
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Khan Academy",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "GameMaker",
  "Scratch",
  "Scratch",
  "Scratch",
  "Khan Academy",
  "Scratch",
  "GameMaker",
  "GameMaker",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Khan Academy",
  "Scratch",
  "Scratch",
  "Scratch",
  "Scratch",
  "Godot",
  "Godot",
  "Unity",
  "Unity",
  "Unity",
];
genre = [
  "Platformer",
  "Simulator",
  "Platformer",
  "RPG",
  "Platformer",
  "Platformer",
  "Platformer",
  "Action",
  "Shooting",
  "Simulator",
  "Platformer",
  "Action",
  "Drawing",
  "Tycoon",
  "Action",
  "Platformer",
  "RPG",
  "Action",
  "Platformer",
  "Simulator",
  "RPG",
  "Simulator",
  "Simulator",
  "Action",
  "Platformer",
  "Platformer",
  "Tycoon",
  "Action",
  "Platformer",
  "RPG",
  "Tycoon",
  "Simulator",
  "Tycoon",
  "RPG",
  "Action",
  "Fighting",
  "Action",
  "Action",
  "Building",
  "Action",
  "Action",
  "Drawing",
  "Fighting",
  "Drawing",
  "Racing",
  "RPG",
  "Fighting",
  "Action",
  "Action",
  "Action",
  "Horror",
  "Action",
  "Action",
  "Action",
  "Action",
  "RPG",
  "Action",
  "Action",
  "Educational",
  "Action",
  "Educational",
  "Rhythm",
];

subheadline = [
  "First Game",
  "Minecraft Obsession",
  "Reusing Old Code",
  "DS Nostalgia",
  "Reusing Old Code",
  "Reusing Old Code",
  "First Sequel",
  "Winter Olympics",
  "First Original Game",
  "3D Fascination, Importance of Math",
  "Experimenting with Horror Genre",
  "Similar to Sochi Snowboarder",
  "Learning Visual JS on Khan Academy",
  "Inspired by Tycoon App Game",
  "Collab, Online Friend",
  "Integrating Storyline",
  "RPG, Created for Success",
  "Classic",
  "Tutorial, Purposefulness",
  "Favorite Movie",
  "Animal Crossing, RPG, Cute Art",
  "Importance of Math in Simulators",
  "Following a Trend",
  "Horror Genre",
  "Integrating Storyline",
  "Generative Games",
  "Featured Game",
  "Christmas",
  "Front-Page, Popular",
  "New Art Style, Mystery",
  "Building Off Previous Success",
  "Following a Trend",
  "Tycoon Game, Popular",
  "Sequel",
  "Unfulfilling but Easy to Make",
  "Strong Female Representation",
  "Unfulfilling but Easy to Make",
  "New Music and Identity",
  "3D Fascination, Code Complexity",
  "Fame VS Personal Fulfillment",
  "Typed Programming",
  "Coding Complexity, Usefulness",
  "The Impact of Art",
  "Mathematical Complexity",
  "Coding Club, Real-Life Community",
  "Largest Endeavor",
  "First Hackathon",
  "First App Attempt, Personal Favorite",
  "Well-Polished",
  "Game Design Conceptual Understanding",
  "April Fool's Joke",
  "Common Game Idea, New Aesthetic",
  "Moving to Typed Programming",
  "Retro Aesthetic",
  "Unfulfilling but Easy to Make",
  "Multi-Stage RPG, Strong Female MC",
  "Mathematical Complexity",
  "Social Quarantine Game, Purposeful",
  "Useful Educational Game, Ideal Game",
  "Going Back to My Roots",
  "Understand My Dream Job, Fulfillment",
  "Game Dev's an Investment I'll Make",
];
motivations = [
  "This was the first game that I released. When I was ten years old, I had a business plan to recreate my favorite MMORPG. Lacking professional resources, my brother introduced me to an alternative: Scratch, an online coding community created by the Lifelong Kindergarten Group at the MIT Media Lab. After initial frustrations with the learning curve, I worked with my brother to create a platformer game and created an account to share it online. ",
  "At the time, Minecraft and Temple Run were all the rage. I decided to combine the two with a Minecraft-themed game where the player walks around a house that never seems to end. ",
  "Escape received some attention, so I decided to make another platformer. Even from my third game, you can see the allure of attention. ",
  "When I was six years old, my siblings and I collectively received a Nintendo DS for Christmas. I was immediately hooked, playing games such as Super Mario World, Pokemon Pearl, and the inspiration for this game: Animal Crossing Wild World. Currently, my main inspiration for games was remaking things I had seen before. ",
  "Despicable Me had been out for roughly three years by now, and I had become hooked to a minion-themed infinite runner game (Minion Rush) on my mother's phone. While I still couldn't code very well on my own, I knew I could make a great game by reusing the old platformer code from my first game. ",
  "Yet again, another platformer, this time with a Christmas theme. ",
  "The first sequel to my first game. Was it nostalgia or riding on previous success?",
  "This winter was my first time paying attention to Winter Olympics, and I enjoyed it so much that I created a game based on the snowboarding event. ",
  'I created this game with the concept of "two birds, one stone". The player has a limited amount of projectiles to shoot at "flying rocks" (a pacifist renaming of the very bird-like winger rocks). This game was my first game that introduced some sort of deviation from the norm. ',
  "I thought 2.5D and 3D simulations were so cool that I wanted to make one of my own. When I learned that 3D required a lot of math I didn't understand nor want to work with, I opted for the simpler 2.5D alternative. ",
  "My first horror game! I learned that although I couldn't stand scary movies and games, I could stand my own. ",
  "This game follows roughly the same concept as Sochi Snowboarder, but I wanted to give it a fresh, fun theme. ",
  'This is one of my earlier "games" from when I was learning Visual Javascript on Khan Academy. I wanted to learn some "real" programming but soon realized that it was much harder than pseudoprogramming with blocks and didn\'t yield as much attention as Scratch. ',
  'I was addicted to a butterfly nectar game called "Flutter" on my mom\'s game. It was a tycoon-style game in which purchasing more objects with in-game money yielded more in-game money. I remember feeling proud of myself for creating the game when my uncle remarked, "You made that?" when I was play-testing it during his visit. ',
  'This game not only marks my first time collaborating with a friend on code but also roughly the time that I made my first online friend on Scratch. Over the years, I would begin to meet more kids online that enjoyed creating games which motivated me to continue creating. It was nice to be around other kids who were passionate about game development and "programming" since nobody I knew in real life was. Over time, I became more social and invested in the website. ',
  "I decided to experiment and add a heavier storyline to a platformer which took away from the technical aspect since the level design had to align with the story instead of being whatever skill-testing limit-pushing format I decided to create. I also began caring about the art more as well. While there's no exact marker, this is roughly the time I began branching out my skill-set more to fields related to game development such as art and story writing. ",
  "One of my non-game projects on Scratch had gotten featured, bringing me unprecedented levels of attention, so I designed this game intending to continue the momentum I had gained. While the game was a flop, it was something I truly believed in because I loved the RPG genre where the player helps townsfolk and gets to buy in-game items or upgrades with money earned from completing tasks. ",
  'I always found "keyboard smashing" fun and decided to create a simple game featuring just that. ',
  "While I had created many platformers, I wanted to create a game with a purpose. In Addition is a platformer that adds one more platform per level in the attempt to teach the player how to become a more skillful platformer player. At this point, I began to think about how to make my creations helpful to people rather than simply fun. ",
  "After watching Big Hero 6 in the movie theaters, it immediately became my favorite movie, and I felt inspired to make a game based on one of the main characters, the robot Baymax. ",
  "This was another attempt at creating an RPG like Animal Crossing. My main focus of this game was to make it very cute, following a particular style of art I had seen before. ",
  "I loved theme park rollercoaster rides (as well as infinite runners), so naturally, I wanted to create an infinite rollercoaster simulator. After doing a little searching online, I found that it required quite a bit of math to make a nice one, so I mimicked changing rails with art. Although I didn't have the math skills yet, I was getting exposed to what you could create with it, the importance of such skills, and the link between math and computer science. ",
  "Creating fake phone simulations was popular on the website, so I hopped on the bandwagon. ",
  "I experimented with the horror genre again. My immunity to horror from my own games proved itself yet again. I was trying to diversify the types of games I made, experiment a little more, and try something new. ",
  "This was a story-based platformer again. ",
  "I had a personal goal to make a generative platformer that worked. This required more critical thought than my other games and quite a bit of experimentation. While it didn't receive too much attention, I was very proud of it. This marks a sign of me turning to working on games I love and am passionate about instead of appeasing my followers and following trends for attention. Although I occasionally did follow trends for the fun of it, I would establish myself as a big name on the website who just made whatever I felt like. ",
  'This was my second featured project and first featured game. The community loved it, and I was getting loads of new follows and attention. It was very motivating. After around two years on Scratch, I was hoping to be discovered, so this was my "big break". ',
  'My first featured project was a randomly generated fireworks animation for the Fourth of July. I realized that the site\'s admin would feature holiday-related projects on holidays, so I put in extra effort to deviate from my natural "make whatever I want" tendencies and create holiday games. This strategy was not successful. ',
  "This was a personal challenge. After getting an insane number of notifications from this game, I found out about a section on the website front page where the trending games are featured. I gamed this — I figured that a game lasts almost a week on it, typically, so if I released a game every week, I could consistently be on the front page — a stagnating front-paged game can direct attention to a new game, boosting the new game to front-page status. This later motivated strings of weekly games. ",
  "This was a story-based RPG and mystery game. I started developing it mostly for the purpose of having a game with a special kind of art style in which everything is made of numerous triangles. The RPG and mystery elements soon followed, and it became a game I was very proud of. It was also the first game of mine that I showed my mother, as she was unaware of my online life, and she wasn't particularly impressed but I wasn't fazed, knowing that she isn't into games. I knew that my parents wouldn't approve of a career in video games, though. ",
  "My first featured game, Scratch City, was well received by the community and very popular. I created a sequel to attempt to build off previous success, but the game wasn't quite as successful. ",
  'Making fake OS on the website was a popular trend. I took on the challenge and created my own. I had previously been involved in a team competition where I made "Red OS" for the Red Team but wanted to make my own. I found it much easier to work on my own than to work with others. ',
  "I loved old tycoon games. At the time I made this, I was nostalgic about an old CD game I used to play called Lemonade Tycoon. I realized that having many pixels, albeit reusing the same art for each room in a building, makes a game look impressive. It was pointless but so addicting and satisfying. ",
  "This game built off the prequel's success and goes to show how much I liked the concept. ",
  "This was a simple dodging game with a twist. This was partially inspired by other simple but popular dodging games I had seen before. This began a stint of many simple dodging games with a twist. I could use essentially the same code but introduce some new restriction to call it a new game. It was helpful for churning out a new game every week for attention and getting on the front page, but, in the end, it was unfulfilling. ",
  "I was unhappy with how women were represented in video games, so I created a game with a strong female main character. I figured I couldn't change people's minds, but I could contribute to a wave of positive change by pushing out my own games. ",
  "Another simple dodging game. ",
  "After years of urging from my friends at school, I finally began to like K-pop and made a game including two of my favorite K-pop songs at the moment. (I wasn't a fan of the rap segments, so I cut those out.) Since having non-English music deviated from my follower's assumptions of me, they began to question my identity which I had left vague and to my followers' imagination. ",
  "This was another attempt at a 3D game. I was inspired by an online LEGO builder as well as Minecraft. This game also featured my first concept of codes. Since the art was grid-based, the art could be converted into codes that could be copied from the game, shared in the comments, and pasted back in. This was another layer of complexity and another skill set added to my toolbelt. ",
  "Split Second was released for my fourth anniversary on Scratch which also signaled roughly four years of pseudoprogramming. By now, I had picked up a lot of programming logic without realizing it. I ensured Split Second was well polished. Although it didn't receive much attention, this game is one of my favorite games I've made. I was frustrated by the rift between making games for attention, a measure of success, and making games with concepts that I love but aren't necessarily popular. It's important to note that I was one of the top followed users on Scratch which contributed largely to the appeal of staying on the website as opposed to moving onto a more difficult but more fulfilling typed language program.",
  "My best online friend decided to learn a typed programming language and convinced me to get the same game development program as him. I bought it for $15 and started developing. It was tough, but I managed to make a cute dodging and collecting game that I liked and could share on a website other than Scratch — Game Jolt. My friends on Scratch were a cool bunch, especially my best online friend who lived a life entirely different from me and held vastly different opinions. This window out of my homogenous town and into one so unknown was eye-opening. I learned how people can hold wildly different beliefs that are still valid because their lives and dreams require different needs and wants. ",
  "This project marks another step in complexity and advancement in my programming and game development skills. I used arrays to track a user's mouse location to store and replay drawings. Not only was I very proud of this game, but it was also well-received. This game is also one of my first useful applications, something I had begun to value more and more in my internal desire to be useful to the world. ",
  "I made this game not only because I wanted to bring my brother's idea to life (for his birthday), but I also wanted to use some cool art I found online (with credit) since I realized how large of an impact visuals have. A game can have the same exact code, but the public will be heavily biased towards something that simply looks nicer. ",
  "I loved PENgine, the drawing engine I had created earlier, and decided to make another project with added features. This engine calculated the new points of the drawing to give the illusion that it was spinning. At this point, I knew math was necessary for computer science, but I mostly only applied it in art. I don't think I knew what an algorithm was. ",
  "I had recently discovered Coding Club at school. I was elated to find a group of people in real life who also liked computer science because, previously, I could only talk about it with my friends online. However, I soon realized that my programming skills weren't the greatest, so I put more effort into learning typed coding languages and to have something to show for it. I had this game lying around and decided to fix it up for my application to be on the officer team. I also learned HTML and CSS to create websites. I eventually get elected as president and continued to explore computer science while leading the club for the next two years. ",
  "Ensnared is a large, multi-level, quest-style game. I challenged myself to make every part which pushed me to explore music composition in addition to pixel art. I pushed myself to create one of the largest, most complex, time-consuming games I've made before. This showcases my desire to be capable of executing the entire process and having a sense of ownership over my own works. Almost all of my previous games were created entirely by me as well, except for some snippets of code or music .",
  "Hard Wrap is a strategic bullet-hell style game that deviates from the typical button-spamming madness by introducing drawbacks for mindless shooting: your own bullets wrap around the screen and can hurt you as well. I developed this game on GameMaker at my first hackathon, CodeDay LA Fall 2017, (which I found out about through Coding Club), and won Best Game. I got hooked on the driven atmosphere, free food, and passionate fellow hackers. After this hackathon, I decided to volunteer as a staff member. I cold-called/emailed companies and staffed the event. My parents couldn't drive me to the hackathons, so one of the adult volunteers, a software engineer at JPL (NASA), drove me there and I asked her about her career. She became one of my role models as a female engineer in a male-dominated field. ",
  "To this day, Gaps is one of my favorite games that I've created. I spent countless hours working on it in GameMaker, adding a title screen, shop, settings, and different game modes. GameMaker can export games into an app, and I wanted, so bad, to make it into a game for the iPhone. I didn't own a Mac, so I spent an afternoon at my friend's house trying to export it to no avail. I was so frustrated, but I believed in my game idea, that I would be my \"big break\" and that I could prove myself as a real programmer instead of some kid who made drag-and-drop pseudoprogramming games. I eventually created a new version for the laptop which worked fine, but I didn't make it available to the public because I still held onto my dream of releasing it on the iPhone first and making it go viral. ",
  "Skyways is an infinite runner game. The art and programming all worked together, and I hadn't seen a game exactly like it, although many similar variations existed. Not only was I proud of it, but it was well received by the public. This marks a balance between creating what I want and what the public would like as well as a milestone in my programming and artistic abilities. ",
  "I thought of this game idea while waiting for my turn in the dentist's office. I found the game concept to be quite boring, but I knew it was so simple that players could pick it up easily and thus, appeal to a wider audience which would yield more attention. It was fulfilling in the sense that I wanted to test my newfound game-designing hypotheses. The more intuitive playing the game is, the better received it will be. ",
  'Almost every year, I released a project for April Fool\'s Day. It was typically well received and gave everyone a good laugh. However, this year, I really hyped up a huge, multi-stage game and people were so excited about it, but when it was released, people were frustrated to realize that it was only partially developed and ended with an "April Fools!" ',
  "I took a break on this game. I simply wanted to take a common game idea and add a cute aesthetic to it. ",
  "I wanted to get better at typed languages, so I created my classic favorite game genre to make — a dodging game — with Visual JS on Khan Academy. ",
  "The main focus of this game's development was the retro black and white aesthetic. ",
  "This was yet again another simple dodging game with a twist. I had this idea for a while. While it wasn't particularly interesting, it was easy to make, so I thought, why not?",
  "This game is a combination of two things I liked — a multi-stage RPG game and a strong female main character. This was partially motivated by the success of my previous multi-stage quest game, Ensnared, but it wasn't as well received. ",
  "This game used a lot of math to draw the lines and calculate collisions. It was part of my shift to create more computationally complex games. ",
  "First game of quarantine. My friend suggested I try out a new game development platform called Godot which worked with a Python-like programming language called Godot Script. Driven by boredom in quarantine and wanting to make a social game to connect with friends, I made a social quarantine game for Open Hacks 2020. I stayed up all night just to feel the excitement and have a break from the monotony of quarantine. ",
  "Quake Shake was actually first an unreleased game I made years ago in GameMaker. While studying for Science Olympiad, I learned about numerous earthquake safety procedures that weren't taught in school despite living by an active fault. Quake Shake is my solution — a fun, interactive, educational game to teach players how to react in multifarious dangerous earthquake-related situations. The game was still quite buggy, so I decided to recreate and redesign it during Same Home Different Hacks. Quake Shake won Most Educational. This game shows how I want my creations to be not only useful but also fun. Little did I know that this game would become the prime example of what I currently think of as a viable solution to all my needs and desires to be fulfilled as a game developer who wants to be useful to the world. ",
  "I was supposed to work a video game externship over IAP (Independent Activities Period, MIT's January Term) but accepted the offer too late, but going through the job-search process was enough to help me started thinking about what game development means for my future. Originally, my first instinct was to take a class and take it chill for the rest of IAP, but after some thought, I realized I still wanted to further develop myself as a game developer, so I decided to finally learn Unity. I felt like I had lost who I was as a person, so I went back to my roots and the reason why I began my path in computer science in the first place — game development. Soul Jumper was the first original game I had developed in Unity after following two Unity tutorial series. ",
  "By now, I realized that my dream job would likely take the form of opening my own game development studio to create useful or educational games. It would not only be fun but also fulfilling. Pilldemic is an educational RPG where the player learns about the opioid epidemic and medical malpractice after their mother overdoses on painkillers. I created it with three of my high school friends and one new friend we made at the hackathon itself, so it truly felt like I was going back to high school but with new skills and a mindset I hadn't gotten until college. ",
  "This game was created for UCI's Venus Hacks. Normally, I wouldn't do a hackathon during the school year, but I had found what I love and knew it was something I would be willing to dedicate time to. We decided to take ourselves a little less seriously during this hackathon and make a funny game.",
];

newYears = [73, 438, 803, 1168, 1534, 1899, 2264, 2629, 2995];

era = ["Getting Started", "Fame", "Real, Typed Coding", "Dedication"];
eraDate = [0, 1152, 1595, 2781];

// max
maxDay = 3110;
maxStat = 94975;

// graph variables
let padding;
selectedIndex = 0;
let i1;
let i2;
a = 255;

// player
let px;
let py;
pxv = 0; // player x velocity
pyv = 0; // player y velocity
circleRadius = 7;

// pacman
pacNum = 0;
pacFace = 0;
pacSize = 15;

phase = 0;

function preload() {
  fancy = loadFont("/game_dev_history/data/joystixmonospace.ttf");
  normal = loadFont("/game_dev_history/data/Roboto-Regular.ttf");
}

function setup() {
  // createCanvas(1600, 900);
  createCanvas(displayWidth, displayHeight);
  boxWidth = (17 / 18) * height;
  boxHeight = (10.5 / 18) * height;
  boxLeft = (1 / 2) * width - (1 / 2) * boxWidth;
  boxTop = (1 / 2) * height - (1 / 2) * boxHeight;
  padding = 10;
  px = boxLeft + 1.43 * circleRadius;
  py = boxTop + boxHeight * (7.5 / 8);
}

function draw() {
  background(150);
  // render
  if (phase == 0) {
    fill(10);
    rect(boxLeft, boxTop, boxWidth, boxHeight);
    fill(40, 247, 192);
    textAlign(CENTER, TOP);
    textFont(fancy, 22);
    text(
      "Sandra Tang's",
      boxLeft + 5 * padding,
      boxTop + 60,
      boxWidth - 10 * padding,
      boxTop + boxHeight
    );
    textFont(fancy, 26);
    text(
      "Game Development History",
      boxLeft + 5 * padding,
      boxTop + 90,
      boxWidth - 10 * padding,
      boxTop + boxHeight
    );
    textFont(fancy, 16);
    text(
      "CLICK TO CONTINUE",
      boxLeft + 5 * padding,
      boxTop + boxHeight - 40,
      boxWidth - 10 * padding,
      boxTop + boxHeight
    );
    fill(240);
    textFont(fancy, 16);
    text("Use Fullscreen", width * (1 / 2), height * (4 / 10));
    textFont(normal, 16);
    description =
      "Game development has seen me grow up. Ever since I was eleven years old, I've been developing games, experimenting in related fields, and sharing my creations. Many of my important milestones and personal growth can be seen through my games. Themes prevalent in my game development history include my personal struggle with the dilemma of fame versus personal fulfillment (doing what's popular versus what I truly love), the parallels between being a woman in STEM and how women are typically represented in games (both male-dominated fields), and growing up and finding my purpose in life. I've the story of my life through the lens of game development many times over, so I figured a data visualization could retell the story from a data-centric perspective.";
    text(
      description,
      width * (3 / 10),
      height * (4.8 / 10),
      width * (4 / 10),
      height * (4 / 10)
    );
  } else {
    points();
  }
  arcade();
}

function mousePressed() {
  if (
    abs(mouseX - width / 2) < boxWidth / 2 &&
    abs(mouseY - height / 2) < boxHeight / 2
  ) {
    phase = 1;
  }
}
