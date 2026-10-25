const directories = [
  {title:'High School Assistance', description:'Build a strong foundation for what comes next.', photo:'assets/high-school.webp', links:[['College planning · BigFuture','https://bigfuture.collegeboard.org/'],['Free learning support · Khan Academy','https://www.khanacademy.org/']]},
  {title:'College Assistance', description:'Find your fit, navigate applications, and feel prepared.', photo:'assets/college.webp', links:[['Explore colleges · College Scorecard','https://collegescorecard.ed.gov/'],['Application guidance · Common App','https://www.commonapp.org/']]},
  {title:'Grants', description:'Explore funding that can help make it possible.', photo:'assets/grants.webp', links:[['Understand grants · Federal Student Aid','https://studentaid.gov/understand-aid/types/grants'],['Federal Pell Grants','https://studentaid.gov/understand-aid/types/grants/pell']]},
  {title:'Scholarships', description:'Discover opportunities that invest in your future.', photo:'assets/scholarships.webp', links:[['Scholarship search · CareerOneStop','https://www.careeronestop.org/Toolkit/Training/find-scholarships.aspx'],['Scholarship guidance · Federal Student Aid','https://studentaid.gov/understand-aid/types/scholarships']]},
  {title:'Financial Assistance', description:'Make sense of financial aid and everyday support.', photo:'assets/financial-assistance.webp', links:[['Complete the FAFSA','https://studentaid.gov/h/apply-for-aid/fafsa'],['Find local support · 211','https://www.211.org/']]},
  {title:'More Resources', description:'More tools, more support, and more ways forward.', photo:null, links:[['Career exploration · My Next Move','https://www.mynextmove.org/'],['Community resources · Findhelp','https://www.findhelp.org/']]}
];
const dialog = document.querySelector('#directory-dialog');
const grid = document.querySelector('#directory-grid');
directories.forEach((directory, index) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';
  card.setAttribute('aria-haspopup','dialog');
  card.innerHTML = `<div class="card-photo">${directory.photo ? `<img src="${directory.photo}" alt="" loading="lazy">` : `<span class="pending-photo">More ways forward.<small>Your community photo goes here</small></span>`}<span class="card-number">0${index+1}</span></div><div class="card-heading"><h3>${directory.title}</h3><span aria-hidden="true">↗</span></div><p>${directory.description}</p>`;
  card.addEventListener('click', () => {
    document.querySelector('#dialog-title').textContent = directory.title;
    document.querySelector('#dialog-description').textContent = directory.description;
    const links = document.querySelector('#resource-links');
    links.replaceChildren();
    directory.links.forEach(([label,url]) => {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `${label} ↗`;
      links.append(link);
    });
    dialog.showModal();
  });
  grid.append(card);
});
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
