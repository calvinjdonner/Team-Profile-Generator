const managerCard = (teamInfo) => {
    const [manager] = teamInfo;

    return `
    <div class='column'>
    <div class="card">
        <div class="card-content has-background-white-ter">
          <div class="media">
            <div class="media-left">
            </div>
            <div class="media-content has-background-info py-2">
                <p class="title is-4 has-text-white-bis"> ${manager.getName()}</p>
                <p class="title is-5 has-text-white-bis"><i class="fas fa-mug-hot"></i> Manager</p>
            </div>
          </div>                       
            <div class="content">
                <p>ID: ${manager.getId()}</p>
                <p>Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></p>
            </div>
            </div>
        </div>                
    </div>
    `
}

const engineerCard = (teamInfo) => {
    const engineers = teamInfo.filter(employee => employee.getRole() === 'Engineer');

    return engineers.map((engineer) => {
        return `
        <div class='column'>
        <div class="card">
            <div class="card-content  has-background-white-ter">
              <div class="media">
                <div class="media-left">
                </div>
                <div class="media-content has-background-info py-2 pl-2">
                  <p class="title is-4 has-text-white-bis"> ${engineer.getName()}</p>
                  <p class="subtitle is-6 has-text-white-bis"><i class="fas fa-glasses"></i> Engineer</p>
                </div>
              </div>                  
              <div class="content  has-text-centered">
                <p>ID: ${engineer.getId()}</p>
                <p>Email:<a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></p>
                <p>GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank"> ${engineer.getGithub()}</a></p>
              </div>
            </div>
          </div>                
    </div>
        `
    }).join('');
}

const internCards = (teamInfo) => {
    const interns = teamInfo.filter(employee => employee.getRole() === 'Intern');

    return interns.map((intern) => {
        return `
        <div class='column'>
        <div class="card">
            <div class="card-content has-background-white-ter">
              <div class="media">
                <div class="media-left">
                </div>
                <div class="media-content has-background-info py-2 pl-2">
                  <p class="title is-4 has-text-white-bis"> ${intern.getName()}</p>
                  <p class="subtitle is-6 has-text-white-bis"><i class="fas fa-user-graduate"></i> Intern</p>
                </div>
              </div>                  
              <div class="content  has-text-centered">
                <p>ID: ${intern.getId()}</p>
                <p>Email:<a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>
              </div>
            </div>
          </div>                
    </div>
        `
    }).join('');
}

module.exports = (teamInfo) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
    <header>
        <div class="hero-body has-text-centered has-background-danger-dark ">
            <p class="title has-text-white-bis">
              My Team
            </p>
          </div>
    </header>
    <main class="m-4">
        <!-- Manager Card(s) -->
        <div class="columns has-text-centered" id='managerCards'>
            ${managerCard(teamInfo)}
        </div>
        <!-- Engineer Card(s) -->
        <div class="columns" id='engineerCards'>
            ${engineerCard(teamInfo)}
        </div>
        <!-- Intern Card(s) -->
        <div class="columns" id='internCards'>
            ${internCards(teamInfo)}
        </div>
    </main>
</body>
</html>
    `
}