
/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Venkata Sai Reddy Avuluri",
  title: "Hi, I'm Sai Reddy",
  subTitle: emoji("Student at RGUKT-Basar 👨‍💻 | DevOps and  Data Science Enthusiast 📊"),
  resumeLink: "https://drive.google.com/file/d/1h13fL_hPWnR1_Y2TxJLboHhGRulnD0ze/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/saireddyavs",
  linkedin: "https://www.linkedin.com/in/venkata-sai-reddy-avuluri-989343173/",
  gmail: "avulurivenkatasaireddy@gmail.com",
  // twitter: "https://twitter.com/saireddyavs"
};

// Your Skills Section

const skillsSection = {
  title: "What can i do",
  subTitle: "I Can build automation systems using DevOps tools, I can make computer learn by leveraging concepts of Data Science",
  skills: [
    emoji("⚡ Make Executable and Readable code"),
    emoji("⚡ End to End automation Systems"),
    emoji("⚡ Building predictive models to extract insights and make decisions out of data")
  ],


  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "cib:c",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "logos:c-plusplus",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "logos:java",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Scala",
      fontAwesomeClassname: "logos:scala",
      style: {
        backgroundColor: "transparent"
      }
    },
   
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: {
        backgroundColor: "transparent",
        color: "#BF0353"
      }
    },
    {
      skillName: "Cassandra",
      fontAwesomeClassname: "cib:cassandra",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "logos:mysql",
      style: {
        backgroundColor: "transparent"
      }
    },

    {
      skillName: "",
      fontAwesomeClassname: "",
      style: {
        backgroundColor: "transparent"
      }
    },
   
    {
      skillName: "AWS",
      fontAwesomeClassname: "logos:aws",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "logos:docker-icon",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "logos:kubernetes",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "vscode-icons:file-type-ansible",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "simple-icons:jenkins",
      style: {
        backgroundColor: "transparent",
        color: "#34495E"
      }
    },
    
    {
      skillName: "Sonar-Qube",
      fontAwesomeClassname: "simple-icons:sonarsource",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "selenium",
      fontAwesomeClassname: "logos:selenium",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "keras",
      fontAwesomeClassname: "simple-icons:keras",
      style: {
        backgroundColor: "white",
        color: "#D00000"
      }
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "simple-icons:apachespark",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "simple-icons:pytorch",
      style: {
        color: "#61DAFB"
      }
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Test Automation",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};



// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",  
      company: "IIT-M",
      companylogo: require("./assets/images/IITM.png"),
      date: "Jun. 2020 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Working on Container Security and CNI, aiming to provide less minimal overhead",
        "Learnt about eBPF and Linux kernel"
      ]
    },
    {
      role: "Research Fellow",   
      company: "NIT-W",
      companylogo: require("./assets/images/NITW.png"),
      date: "Apr. 2020 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets:[
        "Working on Monocular Depth Estimation",
        "Worked on Disease Classification using Chest X-rays by Using Deep Learning"
      ]
    },
    {
      role: "Software Engineer Intern",  
      company: "TCS",
      companylogo: require("./assets/images/TCS.png"),
      date: "Jul. 2020 – Sep. 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets:[
        "Created tool for deploying a web application and monitoring the deployed web application",
        "Learnt about Software Development Life Cycle",
        "Gained acquaintance with DevOps Tools"
      ]
    },
    {
      role: "MachineLearning Intern",  
      company: "MavenAI",
      companylogo: require("./assets/images/mavenai.png"),
      date: "Oct. 2019 – Jan. 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets:[
        "Created customer experience analysis tool",
        "Tool provides insights to the company by filtering negative comments"
      ]
    },
   
  
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saireddyavs", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Your certifications

const certifications = {
	certifications: [
		{
			title: "ML and DS",
			subtitle: "- Andrei Neagoie",
			logo_path: "zero-to-mastery.png",
			certificate_link:
				"https://www.udemy.com/certificate/UC-fd118b7d-7436-442c-a7f8-5077c432d596/",
			alt_name: "Zero To Mastery",
			color_code: "#FFFDDD"
    },
    {
			title: "Data Science",
			subtitle: "- IBM",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://coursera.org/share/893f2210f39f5a60d0463b19b469b808",
			alt_name: "IBM",
			color_code: "#E3F1FA"
    },
		{
			title: "Cloud Admin & Automation",
			subtitle: "- Experitest",
			logo_path: "seetest-logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1qhh1ZUBB2VPrOaT6bNgiJ5Y2sHmCjvMg/view?usp=drivesdk",
			alt_name: "Experitest",
			color_code: "#F0FFDD"
		},
		{
			title: "Selenium",
			subtitle: "- Vskills",
			logo_path: "vskills-logo.png",
			certificate_link:
				"https://www.vskills.in/certification/40215-certified-selenium-professional-bharat-babu-kammakatla",
			alt_name: "Vskills",
			color_code: "#F6EAEA"
		},
		{
			title: "Python",
			subtitle: "- Jose Portilla",
			logo_path: "pierian-data-logo.png",
			certificate_link:
				"https://www.udemy.com/certificate/UC-a80d6e7c-e753-421d-bcee-5a7bc1769f28/",
			alt_name: "Pierian-Data",
			color_code: "#FEF6E6"
    },
    {
			title: "Selenium Python",
			subtitle: "- Rahul Shetty",
			logo_path: "rahulshettyacademy-logo.png",
			certificate_link:
				"https://www.udemy.com/certificate/UC-e4b66abd-18c6-4bfa-9132-ab22d2bf7ef7/",
			alt_name: "RahulShettyAcademy",
			color_code: "#FDE9EA"
		}
	]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.bharatkammakatla.com/selenium-python-automation-framework-how-to-build-cke5vij9p012h9ds1fsaocyax",
      title: "How to build a Selenium Python Automation Framework",
      description: "Interested in building a test automation framework with selenium and python? If so, check out here !"
    },
    {
      url: "https://blog.bharatkammakatla.com/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description: "Are you interested to know how machines detect human emotions? If so, check out here !"
    },
    {
      url: "https://blog.bharatkammakatla.com/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description: "Interested in building a test automation framework with selenium and java? If so, check out here !"
    },
    {
      url: "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description: "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "your title",
      subtitle: "your subtitle",
      slides_url: "Your slides url here",
      event_url: "your event url",
      image: "image url"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["Paste your podcast url here"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7013709432",
  email_address: "avulurivenkatasaireddy@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "saireddyavs"//Replace "twitter" with your twitter username without @
};


  

export { 
  greeting, 
  socialMediaLinks, 
  skillsSection, 
  techStack, 
  workExperiences, 
  openSource, 
  bigProjects, 
  achievementSection, 
  blogSection, 
  talkSection, 
  podcastSection, 
  contactInfo , 
  twitterDetails,
  certifications
};
