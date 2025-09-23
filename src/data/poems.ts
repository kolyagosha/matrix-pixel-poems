export interface PoemData {
  letter: string;
  route: string;
  firstLine: string;
  fullPoem: string[];
  image: string;
  imageAlt: string;
}

export const poemsData: PoemData[] = [
  {
    letter: 'A',
    route: 'a',
    firstLine: 'A is for Avatar, my digital twin...',
    fullPoem: [
      'A is for Avatar, my digital twin,',
      'He dines with a duck and a porcelain bin!',
      'A is for Alarm, but no one is here,',
      'Just pixels and likes, year after year!'
    ],
    image: '/src/assets/A_1.png',
    imageAlt: '8-bit avatar character representing digital identity'
  },
  {
    letter: 'B',
    route: 'b',
    firstLine: 'B is for Blank, the stare in the night...',
    fullPoem: [
      'B is for Blank, the stare in the night,',
      'When endless feeds are your only light.',
      'Your friends are all there, a digital crew,',
      'But blank is the feeling, when real talk is due.'
    ],
    image: '/src/assets/B_1.png',
    imageAlt: '8-bit person at computer with social media profiles, showing digital overwhelm'
  },
  {
    letter: 'C',
    route: 'c',
    firstLine: 'C is for Connection, a fiber so grand...',
    fullPoem: [
      'C is for Connection, a fiber so grand,',
      'With everyone linked, across every land.',
      'But look at my screen, what do I see?',
      'Just me and my charger, for company!'
    ],
    image: '/src/assets/C_1.png',
    imageAlt: '8-bit network visualization with connected nodes and digital characters'
  },
  {
    letter: 'D',
    route: 'd',
    firstLine: 'D is for Default, a screen in my face...',
    fullPoem: [
      'D is for Default, a screen in my face,',
      'My real-life connection, lost in the race.',
      'A tap and a scroll, the setting is "on,"',
      'Then CRASH! A Disconnect, my peace is all gone!'
    ],
    image: '/src/assets/D_1.png',
    imageAlt: '8-bit representation of digital disconnect and screen overwhelm'
  },
  {
    letter: 'E',
    route: 'e',
    firstLine: 'E is for Emoji, my face\'s only friend...',
    fullPoem: [
      'E is for Emoji, my face\'s only friend,',
      'A yellow round sticker, until the very end!',
      'I laugh with a tear, I cry with a grin,',
      'Forget how to feel? Just type a new pin!'
    ],
    image: '/src/assets/E_1.png',
    imageAlt: '8-bit characters interacting with emoji on computer screen'
  },
  {
    letter: 'F',
    route: 'f',
    firstLine: 'F is for Filter, my face in a mask...',
    fullPoem: [
      'F is for Filter, my face in a mask,',
      'To look like a star, a demanding new task.',
      'My eyes are too big, my skin is too bright,',
      'Is there anyone real, in this digital light?'
    ],
    image: '/src/assets/F_1.png',
    imageAlt: '8-bit person comparing filtered vs real appearance on social media'
  },
  {
    letter: 'G',
    route: 'g',
    firstLine: 'G is for Game, with points and a score...',
    fullPoem: [
      'G is for Game, with points and a score,',
      'Where winning online means losing much more.',
      'My avatar\'s great, his XP is so high,',
      'But outside my screen, I just pass people by.'
    ],
    image: '/src/assets/G_1.png',
    imageAlt: '8-bit gaming scene with avatars and scoring systems'
  },
  {
    letter: 'H',
    route: 'h',
    firstLine: 'H is for Heart, a tap on the screen...',
    fullPoem: [
      'H is for Heart, a tap on the screen,',
      'A thousand red pixels, where feelings convene.',
      'They give out a "love," so shiny and bright,',
      'But my actual pulse just slows through the night.'
    ],
    image: '/src/assets/H_1.png',
    imageAlt: '8-bit person at computer surrounded by floating heart icons from social media'
  },
  {
    letter: 'I',
    route: 'i',
    firstLine: 'I is for Influencer, with poses so grand...',
    fullPoem: [
      'I is for Influencer, with poses so grand,',
      'Promoting some product they don\'t understand.',
      '"Buy this!" they all shout, with a glamorous grin,',
      'While their real life\'s a mess, where do I even begin?'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit internet and interface design'
  },
  {
    letter: 'J',
    route: 'j',
    firstLine: 'J is for Judgment, a click and a swipe...',
    fullPoem: [
      'J is for Judgment, a click and a swipe,',
      'My whole life is judged, from a digital type.',
      'They know what they think, with no time to meet,',
      'Just pixels and comments, oh, bitter and sweet!'
    ],
    image: '/src/assets/J_1.png',
    imageAlt: '8-bit courtroom scene with people making instant judgments on phones'
  },
  {
    letter: 'K',
    route: 'k',
    firstLine: 'K is for Keyboard, my weapon of choice...',
    fullPoem: [
      'K is for Keyboard, my weapon of choice,',
      'Online I\'m so brave, with a confident voice!',
      'I\'ll type out a fury, a scathing attack,',
      'But face to face? I just nervously crack.'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit keyboard and cloud storage'
  },
  {
    letter: 'L',
    route: 'l',
    firstLine: 'L is for Like, my digital gold...',
    fullPoem: [
      'L is for Like, my digital gold,',
      'A currency new, worth more than of old!',
      'I spend all my hours, to get just one \'heart\',',
      'But real-life groceries? They\'re still poles apart!'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit login screens and security'
  },
  {
    letter: 'M',
    route: 'm',
    firstLine: 'M is for Meme, my daily new speech...',
    fullPoem: [
      'M is for Meme, my daily new speech,',
      'A picture, a caption, beyond human reach.',
      'I send you a frog, with a comical frown,',
      'Instead of a chat, in this digital town.'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit memory storage and computer mouse'
  },
  {
    letter: 'N',
    route: 'n',
    firstLine: 'N is for Name, a cool silly tag...',
    fullPoem: [
      'N is for Name, a cool silly tag,',
      '"DragonSlayer2000!" no longer a drag!',
      'I hide who I am, behind pixels and might,',
      'While my passport says "John," in the dull morning light.'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit network topology and navigation'
  },
  {
    letter: 'O',
    route: 'o',
    firstLine: 'O is for Output, I\'m typing so fast...',
    fullPoem: [
      'O is for Output, I\'m typing so fast,',
      'My thoughts are just flowing, too good not to last!',
      'A tweet or a story, a post or a reel,',
      'But what does it mean? Does anyone feel?'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit online communities and operating systems'
  },
  {
    letter: 'P',
    route: 'p',
    firstLine: 'P is for Profile, a perfect, new me...',
    fullPoem: [
      'P is for Profile, a perfect, new me,',
      'With filters and smiles, for all eyes to see.',
      'My life\'s an adventure, no flaws can be found,',
      'But my real-life adventure? Just stuck on the ground.'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit passwords and pixel art'
  },
  {
    letter: 'Q',
    route: 'q',
    firstLine: 'Q is for Question, I type in my plea...',
    fullPoem: [
      'Q is for Question, I type in my plea,',
      '"How to be happy? And how to be free?"',
      'The AI gives answers, in milliseconds bright,',
      'While real-life solutions stay out of my sight!'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit database queries and processing queues'
  },
  {
    letter: 'R',
    route: 'r',
    firstLine: 'R is for Reason, a relic of old...',
    fullPoem: [
      'R is for Reason, a relic of old,',
      'My brain\'s full of theories, absurd and so bold!',
      'I scroll through the facts, and then pick what feels right,',
      'Who needs a real reason, in this digital light?'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit refresh icons and virtual reality'
  },
  {
    letter: 'S',
    route: 's',
    firstLine: 'S is for Selfie, my face in full view...',
    fullPoem: [
      'S is for Selfie, my face in full view,',
      'One hundred great angles, to share with the crew.',
      'I pose and I filter, my flaws disappear,',
      'While real-life reflection just fills me with fear.'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit servers and social networks'
  },
  {
    letter: 'T',
    route: 't',
    firstLine: 'T is for Think? No time for that now!...',
    fullPoem: [
      'T is for Think? No time for that now!',
      'Just react and repost, and take a deep bow!',
      'The news may be fake, but the outrage is real,',
      'So share it right now, how do others feel?'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit technology and terminal interfaces'
  },
  {
    letter: 'U',
    route: 'u',
    firstLine: 'U is for User, a number, a dot...',
    fullPoem: [
      'U is for User, a number, a dot,',
      'My data is flying, my privacy\'s shot.',
      'I click and I scroll, a good little sheep,',
      'While giants of tech just secrets can keep.'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit file uploads and user interfaces'
  },
  {
    letter: 'V',
    route: 'v',
    firstLine: 'V is for Viral, a dream in my head...',
    fullPoem: [
      'V is for Viral, a dream in my head,',
      'To spread like a wildfire, till everyone\'s fed!',
      'I\'ll dance on a table, or sing out of tune,',
      'Just hoping my fame flies right up to the moon!'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit virtual reality and programming variables'
  },
  {
    letter: 'W',
    route: 'w',
    firstLine: 'W is for Watch, I\'m glued to the screen...',
    fullPoem: [
      'W is for Watch, I\'m glued to the screen,',
      'Their travels, their dinners, a glorious scene!',
      'I view all their stories, their triumphs and woes,',
      'While my own life\'s unfilmed, how the dull feeling grows.'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit websites and wireless signals'
  },
  {
    letter: 'XYZ',
    route: 'xyz',
    firstLine: 'X, Y, Z – our journey last page...',
    fullPoem: [
      'X, Y, Z – our journey last page,',
      'A new kind of future well sat on this stage!',
      'No rules, no old boxes, just code and delight,',
      'Our book\'s on the internet, shining so bright!'
    ],
    image: '/src/assets/future-pixel.png',
    imageAlt: '8-bit future stage with code and bright lights'
  }
];

export const getPoemByRoute = (route: string): PoemData | undefined => {
  return poemsData.find(poem => poem.route === route);
};