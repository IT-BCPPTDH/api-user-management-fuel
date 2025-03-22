const masterDataHandler = require('../handlers/operator-fuelapp-handler')

module.exports = (app) => {
    app.get('/master/operator-fuel',(req,res) => masterDataHandler.handleGetAllOperatorFuel(req,res));
    app.post('/master/operator-fuel/insert',(req,res) => masterDataHandler.handleInsertOperatorFuel(req,res));
    app.put('/master/operator-fuel/delete/:id',(req,res) => masterDataHandler.handleDeleteOperatorFuel(req,res));
    app.put('/master/operator-fuel/edit',(req,res) => masterDataHandler.handleUpdateOperatorFuel(req,res));
};