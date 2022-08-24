textData = [
    {
      heading:'Job seekers',
      subTexts:[
                    {
                        text:'Job search',
                        link:'https://www.monsterindia.com/search/job-search'
                    },
                    {
                        text:'Upload Resume',
                        link:'https://www.monsterindia.com/seeker/registration'
                    },
                    {
                        text:'Search Tips',
                        link:'https://www.monsterindia.com/info/search-tips'
                    },
                    {
                        text:'Find Comapanies',
                        link:'https://www.monsterindia.com/search/jobs-by-company'
                    },
                    {
                        text:'Job Seekers Login',
                        link:'https://www.monsterindia.com/rio/login'
                    },
                    {
                        text:'Career Advice',
                        link:'https://www.monsterindia.com/career-advice'
                    },
                    {
                        text:'Free Job Alert',
                        link:'https://www.monsterindia.com/seeker/free-job-alert'
                    },
                    {
                        text:'Help',
                        link:'https://www.monsterindia.com/info/help'
                    },
                ]
    },
    {
      heading:'Employers',
      subTexts:[
                    {
                        text:'Employers Login',
                        link:'https://recruiter.monsterindia.com/?login=yes'
                    },
                    {
                        text:'Access Resume Database',
                        link:'http://recruiter.monsterindia.com/v2/ecom/index.html'
                    },
                    {
                        text:'Buy Online',
                        link:'http://recruiter.monsterindia.com/v2/ecom/index.html'
                    },
                    {
                        text:'Job Posting',
                        link:'https://recruiter.monsterindia.com/job-posting-services.html'
                    },
                    {
                        text:'Join mRecruiters',
                        link:'http://recruiter.monsterindia.com/v2/recruiter-sign-up.html'
                    },
      ]
    },
    {
        heading:'Monster',
        subTexts:[
                      {
                          text:'About Us',
                          link:'https://www.monsterindia.com/info/about-us'
                      },
                      {
                          text:'Career With Us',
                          link:'https://company.monsterindia.com/career/'
                      },
                      {
                          text:'Testimonials',
                          link:'https://www.monsterindia.com/testimonials'
                      },
                      {
                          text:'XML Sitemap',
                          link:'https://www.monsterindia.com/xmlsitemap/sitemap-index.xml'
                      },
                      {
                          text:'Contact Us',
                          link:'https://www.monsterindia.com/info/contact-us'
                      },
                      {
                        text:'Send Feedback',
                        link:'https://www.monsterindia.com/info/feedback'
                      },
                      {
                        text:'HTML Sitemap',
                        link:'https://www.monsterindia.com/info/sitemap'
                      },
                      {
                        text:'Jobs App',
                        link:'https://www.monsterindia.com/web/en/mobile'
                      },
        ]
      },
      {
        heading:'Stay Connected',
        subTexts:[
                      {
                          text:'Facebook',
                          link:'https://www.facebook.com/monsterindia'
                      },
                      {
                          text:'Linkedin',
                          link:'https://in.linkedin.com/company/monster-india'
                      },
                      {
                          text:'Youtube',
                          link:'https://www.youtube.com/user/monsterindiavideos/MonsterTV'
                      },
                      {
                          text:'Tiwtter',
                          link:'https://twitter.com/monster_india'
                      },
                      {
                          text:'Instagram',
                          link:'https://www.instagram.com/monster_india/'
                      },
        ]
      },
      {
        heading:'Legal',
        subTexts:[
                      {
                          text:'Security & Fraud',
                          link:'https://www.monsterindia.com/info/security-center'
                      },
                      {
                          text:'Terms of Usa',
                          link:'https://www.monsterindia.com/info/terms-of-use'
                      },
                      {
                          text:'Be Safe',
                          link:'https://www.monsterindia.com/info/besafe'
                      },
                      {
                          text:'Privacy Policy',
                          link:'https://www.monsterindia.com/info/privacy'
                      },
                      {
                          text:'Beware of Fraudsters',
                          link:'https://www.monsterindia.com/info/beware-of-fraudsters'
                      },
                      {
                        text:'Compaints',
                        link:'https://www.monsterindia.com/info/complaints'
                      },
        ]
      }
  ];

  


  const appendData = ()=>{
    const container = document.getElementById('about');

    

    textData.forEach(element => {
        const div = document.createElement('div');
        div.classList.add("my-class");

        const h2 = document.createElement('h2');
        h2.innerText=element.heading;

        div.append(h2); 
        let data = element.subTexts; 
        console.log(data);

        data.forEach(element => {

            const p = document.createElement('p');
            p.innerText = element.text;
            
            const anchor = document.createElement('a');
            anchor.href = element.link;
             
            anchor.append(p);
            div.append(anchor);
            container.append(div)
        });
});

};
  
appendData();

  
