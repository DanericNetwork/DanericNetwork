const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');

(async () => {
    //Get ReadMe path
    const ReadMe = path.join(__dirname, '..', 'README.md')
    const date = new Date()

    //Fetching Info From Github API
    let UserData = await fetch('https://api.github.com/users/DanericNetwork').then(res => res.json())

    //Creating the text what we gonna save on ReadMe file
    const text = `### Hi! 👋
My name is Daneric! I'm 17 years old and I mostly program websites and discord bots!

- 🔭 I’m currently working on **some projects** 
- 🌱 currently learning **PHP/Laravel** at school
- 📫 How you can contact me:
  - **Mail: info@daneric.dev**
  - **Discord tag: Daneric#1617**
  - **Discord Community:** [Click here](https://discord.gg/Byz8m3TQaH)
- ⚡ Fun fact: **I started programming when I was thirteen!**
    

\`\`\`js
const Daneric = {
    Age: 17,
    Description: "${UserData.bio}",
    Website: "${UserData.blog}",
    FavouriteLanguage: "Javascript",
    TotalCommits: {{ COMMITS }},
    Repositories: {
       Created: {{ REPOSITORIES }},
       Contributed: {{ REPOSITORIES_CONTRIBUTED_TO }}
    },
    CreatedAt: "${new Date(UserData.created_at).toString()}",
    Stars: {{ STARS }},
    Followers: ${UserData.followers},
    Projects: ["Funkie", "BlockCord"]
};
\`\`\`

## Stats
<hr>

![Profile views](https://komarev.com/ghpvc/?username=Danericnetwork&style=flat-square&color=blue) 

![GitHub stats](https://github-readme-stats.vercel.app/api?username=DanericNetwork&theme=dark&count_private=true&show_icons=true&include_all_commits=true&enable_animations=true)  

![Daneric's wakatime stats](https://github-readme-stats.vercel.app/api/wakatime?username=@Daneric&theme=dark)

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=DanericNetwork&theme=dark)](https://git.io/streak-stats)`

    //Saving on readme.md
    fs.writeFileSync(ReadMe, text)
})()
