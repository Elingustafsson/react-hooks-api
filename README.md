Här har du ett exempel som du kan testa bygga med hooks, har skapat ett mock REST API för att hämta data istället för att hårdkoda det.

Tyvärr är inte API:et det bästa… det är lite halv dumt hur det är byggt men det fyller sitt syfte i detta fall.



Bygg en applikation som använder hooks:

Användarna skall kunna se samtliga users och kunna gå till en detaljerad vy på vald user.

Användarna skall kunna se vald user information inklusive posts och kunna gå till detaljerad vy på vald post.

Användarna skall kunna se vald post information inklusive comments(fallande datum ordning).



Användarna skall även kunna:

Sortera users:

Namn

Land

Stad

Sortera posts:

Skapat datum

Antal likes

Antal comments



API url:

http://5c63e54bc969210014a32d76.mockapi.io/api/v1/



Du kommer använda följande relativa länkar på API:et för att hämta data(Endast GET):

/users

/users/:id

/users/:id/posts

/users/:id/posts/:id

/users/:id/posts/:id/comments



Ex: http://5c63e54bc969210014a32d76.mockapi.io/api/v1/ users/:id
