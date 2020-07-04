const express = require('express');
const app = express();
const cors = require('cors');

const fs = require('fs');

app.use(express.static('.'));

app.use(cors());

app.use(express.json());

app.get('/catalog', (request, response) => {
    fs.readFile('./catalog.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.status(500).json({ message: 'Ошибка!' });
            return;
        }
        response.send(data);
    });
});

app.get('/cart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.status(500).json({ message: 'Ошибка!' });
            return;
        }
        response.send(data);
    });
});

app.post('/addToCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }

        const cart = JSON.parse(data);
        cart.push(request.body.item);
        
          const am = request.body.item;
        
        
        
        
        am.deistvie = 'Добавление';
        
        fs.appendFile('./stats.json', JSON.stringify(am), (err) => {
        if (err) {
            console.log('Error!', err);
            response.json({
                result: 0
            });
            return;
        }
                     
        }
                     )

        
        
        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }

            response.json({ result: 1 });
        });
    });
});


app.delete('/removeFromCart', (request, response) => {     //поменяли на пост, не забыть поправить делит
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({
                result: 0
            });
            return;
                }
        
        const cart = JSON.parse(data);
        const index = cart.findIndex(({ id_product }) => id_product === request.body.item.id_product);
        if (index !== -1) {
            cart.splice(index, 1);
        } 
                                    
                                    
                                     
             const am = request.body.item;
        
        
        
        
        am.deistvie = 'Удаление';
        
        fs.appendFile('./stats.json', JSON.stringify(am), (err) => {
        if (err) {
            console.log('Error!', err);
            response.json({
                result: 0
            });
            return;
        }
                     
        }
                     )
    
                                  
                                  
                                  
                                  
                                  
        
        
        
        

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                response.json({
                    result: 0
                });
                return;
            }

            response.json({
                result: 1
            });
        });
        
        
        
        
    });
});




app.listen(3000, () => {
    console.log('Server is running at localhost:3000');
});
