describe('Products api', () => {
    context('GET /products', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });

    context('When I send GET /id', () => {
        it('Then it should return only the filtered user', () => {
          cy.request({
            method: 'GET',
            url: '/id',
            qs: {
              _id: '61b3ddc484fd58fb682a49dc'
            }
          })
            .should((response) => {
              expect(response.status).to.eq(200)
              expect(response.body.products[0].nome).to.eq("Returned id")
            });
        });
      });

context('POST /products', () => {
    it('Then it should send the products within the post', () => {
      cy.request({
        method: 'POST',
        url: '/products',
        body: {
          id: "61b3ddc484fd58fb682a49dc",
          name: "LaserBril",
          price: "120",
          description: "Laserbril, de bril die elke computerspecialist wenst gedaan met de pijn aan " +
          "de ogen, met deze lazerbril kunt u optimaal genieten van uren pc plezier",
          imageUrl: "backend\assets\image00032.jpeg"
        }
      })
        .should((response) => {
          expect(response.status).eq(201)
          expect(response.body.message).eq("Post succeed")
        });
    });
  });
})