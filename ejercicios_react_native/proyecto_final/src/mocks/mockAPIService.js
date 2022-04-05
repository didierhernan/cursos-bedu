import { createServer, Model } from 'miragejs';

export function makeServer (){
    if (window.server) {
        window.server.shutdown();
    } 
    
    window.server = createServer({
        models:{
            user: Model
        },

        seeds(server){
            server.create("user",{userId:1, emailUser: 'didierhernan@gmail.com', name:'Didier Benjumea', photo: 'https://bootdey.com/img/Content/avatar/avatar6.png', passwordUser: '12345678'})
            server.create("user",{userId:2, emailUser: 'andresperez@gmail.com', name:'Andres Perez', photo: 'https://bootdey.com/img/Content/avatar/avatar7.png', passwordUser: '87654321'})
        },

        routes() {
         this.namespace = 'api';
          this.post('/users/authenticate', (schema, request) => {
            const attrs = JSON.parse(request.requestBody)
            const user = schema.users.findBy({emailUser: attrs.emailUser})
            if(user && user.passwordUser == attrs.passwordUser){
                return user
            }else{
                return null
            }
          })

          this.get('/favorites', (schema=>{
              return{
                  favorites:[
                    {id: 2, name: 'Spider-Man: No Way Home', year: '2021', rate: 'PG-13', rating: 4.4, votes:34769, duration: '2h 38m', 
                    photo:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-spider-man-no-way-home-1637136793.jpg',
                    description: 'Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.',
                    trailerId:'JfVOs4VSpmA'},
                    {id: 3, name: 'Joker', year: '2019', rate: 'R', rating: 5, votes:948761, duration: '2h 2m', 
                    photo:'https://static.wikia.nocookie.net/batman/images/6/68/Joker_poster.png/revision/latest?cb=20190428190747&path-prefix=es',
                    description: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
                    trailerId:'WwkZqhpE0E4'},


                  ]
              }
          }))


          this.get('/movies', (schema) => {
            return {
              movies: [
                {id: 1, name: 'Moonfall', year: '2022', rate: 'PG-13', rating: 3, votes:45876, duration: '2h 0m', 
                    photo:'https://www.ecartelera.com/carteles/16900/16941/001_p.jpg',
                    description: 'El mundo se enfrenta a la posibilidad de la extinción porque una fuerza desconocida empuja a la luna de su órbita rumbo a la Tierra. Un equipo de astronautas asume la misión de evitar el apocalipsis.',
                    trailerId:'5ZvH_pIq1Oc'},
                {id: 2, name: 'Spider-Man: No Way Home', year: '2021', rate: 'PG-13', rating: 4.4, votes:34769, duration: '2h 38m', 
                    photo:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-spider-man-no-way-home-1637136793.jpg',
                    description: 'Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.',
                    trailerId:'JfVOs4VSpmA'},
                {id: 3, name: 'Joker', year: '2019', rate: 'R', rating: 5, votes:948761, duration: '2h 2m', 
                    photo:'https://static.wikia.nocookie.net/batman/images/6/68/Joker_poster.png/revision/latest?cb=20190428190747&path-prefix=es',
                    description: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
                    trailerId:'WwkZqhpE0E4'},
                {id: 4, name: 'Harry Potter y la Orden del Fenix', year: '2017', rate: 'PG-13', rating: 4, votes:1231345, duration: '2h 18m', 
                    photo:'https://es.web.img3.acsta.net/medias/nmedia/18/71/59/76/20051490.jpg',
                    description: 'Harry descubre que muchos integrantes de la comunidad de magos no conocen la verdad acerca de su encuentro con Lord Voldemort. Cornelius Fudge, ministro de magia, designa a Dolores Umbridge como maestra de defensa contra de las artes oscuras porque cree que el profesor Dumbledore planea apoderarse de su trabajo.',
                    trailerId:'fYBe1RNqaAw'},
                {id: 5, name: 'Crepusculo', year: '2008', rate: 'PG-13', rating: 0.5, votes:39872, duration: '2h 2m', 
                    photo:'https://www.aceprensa.com/wp-content/uploads/2008/12/8966-0.jpg',
                    description: 'Bella Swan se va a vivir con su padre al pequeño pueblo de Forks, donde conoce a Edward, un atractivo y misterioso chico del que se enamora y quien esconde un gran secreto: es un vampiro. Pero la familia del chico guarda una peculiaridad, y es que no se alimenta de sangre humana.',
                    trailerId:'UBbpGSszXtU'},
                ],
            };
          });
        },
      });

}