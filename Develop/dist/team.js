buildManager = (manager) => {
  const managerTemplate = 
    `<div class="col-md-12 mb-4">
      <div class="h-100 w-50 p-5 text-bg-dark rounded-3 m-auto">
        <h2>${manager.manager_name}</h2>
        <p>${manager.employee_id}</p>
        <p>${manager.manager_email}</p>
        <p>${manager.office_number}</p>
        <button class="btn btn-outline-light" type="button">Example button</button>
      </div>
    </div>`
    return managerTemplate;
}

buildEngineer = () => {

}

// buildIntern = () => {

// }

const buildHTML = (manager) => {
// const buildHTML = (buildManager, buildEngineer, buildIntern) => {

  let func = async () =>{
    let res = await buildManager(manager);
    return res
  }
  func().then((res)=> {

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
              <span class="fs-4">My Team</span>
          </header>
          <div class="row align-items-md-stretch">
            ${res}
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 text-bg-dark  border rounded-3">
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <button class="btn btn-outline-secondary" type="button">Example button</button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 text-bg-dark border rounded-3">
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <button class="btn btn-outline-secondary" type="button">Example button</button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 text-bg-dark  border rounded-3">
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <button class="btn btn-outline-secondary" type="button">Example button</button>
              </div>
            </div>
          </div>
        </div>
      </main>  
      </body>
    </html>`

  return teamHTML;

  });
}

module.exports = buildManager;