const { Router } = require('express');
const { getMercado } = require('./entity.js');

const router = Router();


var myCache = {};

var myQuery = '';

router.get('/', function(req, res) {

    var request = req.query;
    var query = request.query;
    
  
        if(!myCache[query]){
    
            getMercado(query)
                .then(function(r){
                    myQuery = query;

    
                    var productos = [];
    
                    for(let i = 0; i < r.results.length; i++) {
    
                        var id = r.results[i].id;
                        var title = r.results[i].title;
                        var price = r.results[i].price;
                        var currency_id = r.results[i].currency_id;
                        var available_quantity = r.results[i].available_quantity;
                        var thumbnail = r.results[i].thumbnail;
                        var condition = r.results[i].condition;
    
    
                        var obj = {
                            id: id,
                            title: title,
                            price: price,
                            currency_id: currency_id,
                            available_quantity: available_quantity,
                            thumbnail: thumbnail,
                            condition: condition,                            
                        }  
    
                        productos.push(obj)                        
                    }
    
                    myCache[myQuery] = productos;  
                    
                    return res.json(myCache[query]);
                })
   
        } else {
            return res.json(myCache[query])
         }
    
})


router.get('/producto' , function(req, res) {
    
    return res.json(myCache[myQuery])
})




module.exports = router;