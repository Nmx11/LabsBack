const { Router } = require('express');
// import all routers;
const mercadoRouter = require('./mercado/routes');


const router = Router();

// load each router on a route

router.use('/api/search', mercadoRouter);

module.exports = router;
