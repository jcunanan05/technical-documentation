var TechnicalDocumentation = function() {
  var sections = document.querySelectorAll('.main-section');
  var sectionIds = [];
  var navList = document.querySelector('.nav-list');

  sections.forEach(section => {
    //get section title
    var sectionTitleHtml = section.querySelector('header h2');
    
    //convert to underscores
    var sectionTitle = snakify(sectionTitleHtml.textContent);
    
    //collect sectionIds
    sectionIds.push(sectionTitleHtml.textContent);

    //add id to the section
    section.setAttribute('id', sectionTitle);
  });

  //add links to the nav
  navList.innerHTML = sectionIds.map(sectionId => {
    return `
      <li class="nav-list__child">
        <a class="nav-link" href="#${snakify(sectionId)}">${sectionId}</a>
      </li>
    `;
  }).join('');

  function snakify(str) {
    // return a string separated by underscores
    if (! typeof(String)) return '';

    return str.split(' ')
      .join('_');
  }
};

document.addEventListener('DOMContentLoaded', function() {
  TechnicalDocumentation();
}, false);