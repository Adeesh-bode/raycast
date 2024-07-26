interface CardData {
    iconsrc: string;
    bgimgsrc: string;
    title: string;
    redirecturl: string;
    description: string;
    color: string;
  }
  interface Data {
    [key: string]: CardData[]; // Index signature for dynamic keys (categories)
  }

export const data : Data = {
    Productivity : [
      {
        iconsrc: '/linearicon.webp',
        bgimgsrc: '/linearbg.webp',
        title: 'Linear',
        redirecturl: '/',
        description: 'Create, search and modify your issues from anywhere on your Mac.',
        color: 'purple-shade',
      },
      {
        iconsrc: '/translateicon.webp',
        bgimgsrc: '/translatebg.webp',
        title: 'Google Translate',
        redirecturl: '/',
        description: 'Use Google translate to effortlessly translate into multiple languages',
        color: 'blue-shade',
      },
      {
        iconsrc: '/spotifyicon.webp',
        bgimgsrc: '/spotifybg.webp',
        title: 'Spotify',
        redirecturl: '/',
        description: 'Search for music and podcasts, browse your library, and control the playback. ',
        color: 'green-shade',
      },
      {
        iconsrc: '/arcicon.webp',
        bgimgsrc: '/arcbg.webp',
        title: 'Arc',
        redirecturl: '/',
        description: "navigate your Arc browser history and open tab. Little Arc as well as copy websites",
        color: 'violet-shade',
      },
      {
        iconsrc: '/tinypngicon.webp',
        bgimgsrc: '/tinypngbg.webp',
        title: 'TinyPNG',
        redirecturl: '/',
        description: "Compress the selected images in Finder with TinyPNG.",
        color: 'dark-green-shade',
      },
      {
        iconsrc: '/1passwordicon.webp',
        bgimgsrc: '/1passwordbg.webp',
        title: '1Password',
        redirecturl: '/',
        description: "Search, open or edit your 1Password passwords from Raycast",
        color: 'dark-blue-shade',
      },
      {
        iconsrc: '/jiraicon.webp',
        bgimgsrc: '/jirabg.webp',
        title: 'Jira',
        redirecturl: '/',
        description: "Create, access, and modify issues and sprints.",
        color: 'blue-shade',
      },
    ] ,
    Engineering : [
      {
        iconsrc: '/jiraicon.webp',
        bgimgsrc: '/jirabg.webp',
        title: 'Jira',
        redirecturl: '/',
        description: "Create, access, and modify issues and sprints.",
        color: 'blue-shade',
      },
      {
        iconsrc: '/tinypngicon.webp',
        bgimgsrc: '/tinypngbg.webp',
        title: 'TinyPNG',
        redirecturl: '/',
        description: "Compress the selected images in Finder with TinyPNG.",
        color: 'dark-green-shade',
      },
      {
        iconsrc: '/translateicon.webp',
        bgimgsrc: '/translatebg.webp',
        title: 'Google Translate',
        redirecturl: '/',
        description: 'Use Google translate to effortlessly translate into multiple languages',
        color: 'blue-shade',
      },
      {
        iconsrc: '/spotifyicon.webp',
        bgimgsrc: '/spotifybg.webp',
        title: 'Spotify',
        redirecturl: '/',
        description: 'Search for music and podcasts, browse your library, and control the playback. ',
        color: 'green-shade',
      },
      {
        iconsrc: '/arcicon.webp',
        bgimgsrc: '/arcbg.webp',
        title: 'Arc',
        redirecturl: '/',
        description: "navigate your Arc browser&apos;s history and open tabs. You can open recent tabs in Arc or Little Arc as well as copy websites",
        color: 'violet-shade',
      },
      {
        iconsrc: '/linearicon.webp',
        bgimgsrc: '/linearbg.webp',
        title: 'Linear',
        redirecturl: '/',
        description: 'Create, search and modify your issues from anywhere on your Mac.',
        color: 'purple-shade',
      },
      {
        iconsrc: '/1passwordicon.webp',
        bgimgsrc: '/1passwordbg.webp',
        title: '1Password',
        redirecturl: '/',
        description: "Search, open or edit your 1Password passwords from Raycast",
        color: 'dark-blue-shade',
      },
    ] ,
    Design : [
      {
        iconsrc: '/arcicon.webp',
        bgimgsrc: '/arcbg.webp',
        title: 'Arc',
        redirecturl: '/',
        description: "navigate your Arc browser history and open tabs. Little Arc as well as copy websites",
        color: 'violet-shade',
      },
      {
        iconsrc: '/tinypngicon.webp',
        bgimgsrc: '/tinypngbg.webp',
        title: 'TinyPNG',
        redirecturl: '/',
        description: "Compress the selected images in Finder with TinyPNG.",
        color: 'dark-green-shade',
      },
      {
        iconsrc: '/1passwordicon.webp',
        bgimgsrc: '/1passwordbg.webp',
        title: '1Password',
        redirecturl: '/',
        description: "Search, open or edit your 1Password passwords from Raycast",
        color: 'dark-blue-shade',
      },
      {
        iconsrc: '/linearicon.webp',
        bgimgsrc: '/linearbg.webp',
        title: 'Linear',
        redirecturl: '/',
        description: 'Create, search and modify your issues from anywhere on your Mac.',
        color: 'purple-shade',
      },
      {
        iconsrc: '/translateicon.webp',
        bgimgsrc: '/translatebg.webp',
        title: 'Google Translate',
        redirecturl: '/',
        description: 'Use Google translate to effortlessly translate into multiple languages',
        color: 'blue-shade',
      },
      {
        iconsrc: '/spotifyicon.webp',
        bgimgsrc: '/spotifybg.webp',
        title: 'Spotify',
        redirecturl: '/',
        description: 'Search for music and podcasts, browse your library, and control the playback. ',
        color: 'green-shade',
      },
      {
        iconsrc: '/jiraicon.webp',
        bgimgsrc: '/jirabg.webp',
        title: 'Jira',
        redirecturl: '/',
        description: "Create, access, and modify issues and sprints.",
        color: 'blue-shade',
      },
    ] ,
    Writing : [
      {
        iconsrc: '/linearicon.webp',
        bgimgsrc: '/linearbg.webp',
        title: 'Linear',
        redirecturl: '/',
        description: 'Create, search and modify your issues from anywhere on your Mac.',
        color: 'purple-shade',
      },
      {
        iconsrc: '/translateicon.webp',
        bgimgsrc: '/translatebg.webp',
        title: 'Google Translate',
        redirecturl: '/',
        description: 'Use Google translate to effortlessly translate into multiple languages',
        color: 'blue-shade',
      },
      {
        iconsrc: '/spotifyicon.webp',
        bgimgsrc: '/spotifybg.webp',
        title: 'Spotify',
        redirecturl: '/',
        description: 'Search for music and podcasts, browse your library, and control the playback. ',
        color: 'green-shade',
      },
      {
        iconsrc: '/arcicon.webp',
        bgimgsrc: '/arcbg.webp',
        title: 'Arc',
        redirecturl: '/',
        description: "navigate your Arc browser's history and open tabs. Little Arc as well as copy websites",
        color: 'violet-shade',
      },
      {
        iconsrc: '/tinypngicon.webp',
        bgimgsrc: '/tinypngbg.webp',
        title: 'TinyPNG',
        redirecturl: '/',
        description: "Compress the selected images in Finder with TinyPNG.",
        color: 'dark-green-shade',
      },
      {
        iconsrc: '/1passwordicon.webp',
        bgimgsrc: '/1passwordbg.webp',
        title: '1Password',
        redirecturl: '/',
        description: "Search, open or edit your 1Password passwords from Raycast",
        color: 'dark-blue-shade',
      },
      {
        iconsrc: '/jiraicon.webp',
        bgimgsrc: '/jirabg.webp',
        title: 'Jira',
        redirecturl: '/',
        description: "Create, access, and modify issues and sprints.",
        color: 'blue-shade',
      },
    ] ,
  
  
  }
  
  