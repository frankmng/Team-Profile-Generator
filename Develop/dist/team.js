buildManager = (manager) => {
  const {empName, id, email, officeNumber} = manager
  const managerTemplate = 
    `<div class="col-md-12 mb-4">
      <div class="h-100 w-50 p-5 text-bg-light border border-dark rounded-3 m-auto">
        <h2>${empName}</h2>
        <p class="text-secondary fs-5">Manager</h3>
        <p><b>Employee ID</b>: ${id}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Office</b>: ${officeNumber}</p>
      </div>
    </div>`
    return managerTemplate;
}

buildEngineer = (engineer) => {
  let engineerTemplate = '';
  for(const i in engineer) {
      let e = engineer[i]
      let htmlTemplate = 
        `<div class="col-md-6 mb-4">
          <div class="h-100 p-5 text-bg-light border border-dark rounded-3">
              <h2>${e.empName}</h2>
              <p class="text-secondary fs-5">Engineer</h3>
              <p><b>Employee ID</b>: ${e.id}</p>
              <p><b>Email</b>: ${e.email}</p>
              <p><b>Github</b>: ${e.github}</p>
          </div>
        </div>`
        engineerTemplate += htmlTemplate
  }
    return engineerTemplate;
 
}

buildIntern = (intern) => {
  let internTemplate = '';
  for(const e in intern) {
      let i = intern[e]
      let htmlTemplate = 
        `<div class="col-md-6 mb-4">
          <div class="h-100 p-5 text-bg-light border border-dark rounded-3">
              <h2>${i.empName}</h2>
              <p class="text-secondary fs-5">Intern</h3>
              <p><b>Employee ID</b>: ${i.id}</p>
              <p><b>Email</b>: ${i.email}</p>
              <p><b>School</b>: ${i.school}</p>
          </div>
        </div>`
        internTemplate += htmlTemplate
  }
    return internTemplate;
 
}

const buildHTML = (manager, engineer, intern) => {
// const buildHTML = (buildManager, buildEngineer, buildIntern) => {

  let managerHTML =  buildManager(manager);  
  let engineerHTML =  buildEngineer(engineer);  
  let internHTML =  buildIntern(intern);  

  const teamHTML =
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Hugo 0.104.2">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      </head>
      <body>
      <main>
        <div class="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <span class="fs-2 mt-4">My Team</span>
          </header>
          <div class="row align-items-md-stretch">
            ${managerHTML}
            ${engineerHTML}
            ${internHTML}
          </div>
        </div>
      </main>  
      </body>
    </html>`
    return teamHTML;
}

module.exports = buildHTML;