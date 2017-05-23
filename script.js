// Constants

const names = ['Clement Chin','Chai Shu Lee','Chin-Wen Chang','Caleb Foong','Ng Kean Chew','Sok Hong Kuan','Chan Sin Hui','Jeffery Wong',
                'Lee Chiau Hung','Cyrus Wong','Ng Wen Ge','John Liew','Fong Jia Kang','Ah Lui','Tan Tong Sheng',
                'Priscilla','Jeffrey Mah','Brian Koh','Yeoman Goh','Darryl','Richard'];

const images = [
        'https://s19.postimg.org/c92damckz/clement.jpg',
        'https://s19.postimg.org/pto3cmm2b/shulee.jpg',
        './late.jpg',
	    'https://s19.postimg.org/rb9jo6qsz/caleb.jpg',
        'https://s19.postimg.org/n9sgiiyib/keanchew.jpg',
        'https://s19.postimg.org/5oz4kwhmb/sok.jpg',
        'https://s19.postimg.org/rzie74pir/sinhui.jpg',
        'https://s19.postimg.org/b5d71jlmb/jeffery.jpg',
        'https://s19.postimg.org/j71fjg4dv/chiauhung.jpg',
        'https://s19.postimg.org/hgiehymur/cyrus.jpg',
        'https://s19.postimg.org/b1nyz15ir/wenge.jpg',
        'https://s19.postimg.org/bow2g1h6b/john.png',
        'https://s19.postimg.org/yv2mq8jzn/fong.jpg',
        'https://s19.postimg.org/d7i9tj8z7/ahlui.jpg',
        'https://s19.postimg.org/ptsoqdbg3/tongsheng.jpg',
        'https://s19.postimg.org/uea9rk5rn/priscilla.jpg',
        'https://s19.postimg.org/pd2vq6yb7/jeffrey.jpg',
        'https://s19.postimg.org/5wvy8w7cj/brian.jpg',
        'https://s19.postimg.org/ynsryyd6b/juin.jpg',
        'https://s19.postimg.org/n29vj4tv7/darryl.jpg',
        'https://s19.postimg.org/iuf3adsfn/richard.jpg',
        'https://s19.postimg.org/44u95vq5v/sankar.jpg',
        'https://s19.postimg.org/fv86n9iyb/eena2.png'
	];

const contents = ['Hi Superhero Friends!\n'+
            'Time flies, it has been a fun and fulfilling journey with all of you, it is now my last day here in Fusionex.\n'+
            'Thank you for the support and encouragement you have provided me during my time here.\n'+
            'I have enjoyed my time here very much, and I will miss our daily interactions and working on projects with all of you.\n'+
            'Please do keep in touch. I can be reached at my personal email address (clementchin1989@outlook.my), or via my mobile/whatsApp @ +6019-6668903'+
            'Again, thanks so much for your support!',
    'Hi clement, thanks for everything. Thanks for help me so much. Appreciate it',
                '再也不用迟回了。。。',
                'You follow me in I follow you out',
                'I couldn\'t thank you enough by simply using words. \n\
                It has been a great experience learning from you. \n\
                Please take care and all the best in your undertakings',
                'The very first day you interview me, \nI was like wow, damn, you are freaking handsome, \nthen after joining your team, I was like \nwow, damn, you are talented, skilled and great leader. \nWish you all the best in future and \ndont forget me, wink*',
                'To the most handsome manager, thanks for everything in the past..\nWish u all the best..in future!',
                'First impression on you: “Wow, there is a handsome gentleman with classy white coat”. \nYeah, that was you in the Hackathon as one of the judger. \n \nYou are the most all-rounded person I had ever worked with (Seriously!). \nWide and strong technical knowledge, good general business knowledge, able to speak, listen and write well… \nand last but not least… good looking! XD \n \nTechnically, without you, I don’t think we could have gone through all the technical challenges. \nYour countless guide and knowledge saves up the unnecessary long way in solving the problem. \n \nPsychologically, the trust and career advice you gave fuel my thrust for data science career. \nYou may not realize how much your “skype text” could motivate me, but your encouragement really help so much at the time I doubt about myself. \nYou make data science team looks wonderful and interesting. \n \nPersonally, you set the standard role model as an analytics leader and you make me feel grateful to be here as a fresh graduate.  \nI wish someday I could be just like you, as a leader that could not only guide, but motivates the younger one. \nAnd yeah, without you, I don’t even stand a chance to be here. \n \nThanks for everything, clement. :) \nWish you a happier and better one in your new job.',
                'With your mind reading power, I supposed I don\'t have to write \na whole lot paragraph describing how I will miss you \nwhen you are not around and how I will ever remember \n"steam" is for guys use only bla bla bla XD\nChill, Stay awesome, Stay handsome and\nALL THE BEST !!!!!!!!!',
                'Well, after joining this great team, I wouldn\'t be able to imagine my life \nif in the first place if I were hired as Business Analyst. \nAs a leader, you are always more than willing to share your knowledge \nto us and solving our problems although you yourself was always busy. \nUnder your guidance, we subordinates are always confident \nthat you will be able to guide us the right path and bring us\nto another level. \Such a pleasure knowing you. \nHopefully we will cross path again in the future. \nOrz thank you boss =)',
                'Great to have your guidance all this while! All the best!!',
                'Wish your dream come true. lol',
                'Go where you feel most alive',
                'Make sure there is a nice wan tan mee stall at your new workplace! Good Luck! =)',
                'One road flow the wind. We will catch up each other soon.',
                'If you were to stand in front of the Mirror of Erised, I believe you would \nsee yourself living the life you want, enjoy doing meaningful things \nthat matter to you, being happy in what you do, achieving your dream of landing yourself in Antarctica, well you get the point ;) \nAnd hence, I believe your exit from FX would enable you to proceed with that. May the success and life\'s goodness be with you. \nLast but not least, as sucky as it sounds (but it\'s pretty realistic)... Good luck and all the best in dealing with yet another round of \nhorrid office gossips, nasty office politics and manipulative colleagues \nthat would hit you and make you feel pain. Apart from that, \nI hope you will enjoy your new job! Do keep in touch! ',

                'You\'re the rarest Pokémon I have ever encountered! Great talent great leader great future! All the best Clement and keep in touch!',
                '感谢您这一段时间把我们照顾得无微不至当我们不知道要吃什么的时候，解决不到问题的时候，遇到心情不好的时候和面对许许多多的痛苦的时候。您都没有间断到我们身边去解决我们的痛苦和难题一直的关心我们。\n' +
                '虽然我们有点不舍，但未来我们回想来是很开心很开心的回忆。辛苦了您这几年的付出和经历。希望您永远都开开心心学习的路上不断增上身体健康永不放弃的心一直' +
                '到生命的圆满。希望可以让您幸福与快乐。感恩谢谢您',
                'May u be d great penguin spendin great life in ur great pole',
                'Our days are short but it has been nice to meet you.\nWish you all the best in your future endeavors.',
                'Hi Clement! \n\nI still remember my first day as an intern. I stepped into the room and I saw a big buff guy talking to someone else. \nI was like wow that guy is so big, must be someone very fierce one. \nWell, turn out that you\'re one of the nicest person I\'ve ever known! Haha, I thought you will be still here \nuntil I finish my internship but too bad, you will have to leave before me (NOOOOOOO). \nAnyway, I\'m really glad that I have met such an awesome person during my internship. \nThank you for all this while and I\'m sure I\'ll bump into you someday!',
                'Thanks a lot for considering. Happy and memorable moments working with lovely team',
                'I\'ll miss you <3'
                ]

var counter = 0;

function nextPage() {

    counter++;
    if(counter > images.length - 1){
        counter = 0
    }
    document.getElementsByTagName("img")[0].src = images[counter];
    document.getElementsByTagName("blockquote")[0].textContent = contents[counter];
    document.getElementsByTagName("cite")[0].textContent = names[counter];
}

function previousPage() {

    counter--;
    if(counter < 0){
        counter = images.length - 1;
    }
    document.getElementsByTagName("img")[0].src = images[counter];
    document.getElementsByTagName("blockquote")[0].textContent = contents[counter];
    document.getElementsByTagName("cite")[0].textContent = names[counter];

}