// Creating, inserting data     - POST          - C
// Fetch, grabbing data         - GET           - R
// Updating existing data       - PUT           - U
// Removing, deleting data      - Delete        - D

const express = require('express');
const router = express.Router();

const {
    index,
    getDetails,
    getImages,
    getTypes,
    getMoves,
    getAbilities,
    
} = require('../controllers/pokemon-controller');

router.get('/', index);
router.get('/details', getDetails);
router.get('/images', getImages);
router.get('/types', getTypes);
router.get('/moves', getMoves);
router.get('/abilities', getAbilities);

module.exports = router;