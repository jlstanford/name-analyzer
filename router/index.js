
module.exports = function(app) {
    var Name = require('../src/Name');
    var Arcana = require('../src/Arcana');
    var Analyzer = require('../src/NameAnalyzer')

    console.table(Name);
    app.route('/').get(function(req,res,next){
        res.json({"success":"200"});
    });
    app.route('/name/:name').get(function(req,res,next){
        var name = req.params.name;
        Name.getMeaning(name);
        console.table(res);
        res.json({"success":"200"});
    });
    app.route('/arcana').get(function(req,res,next){
       let arcana = Arcana.getAllArcana();
       res.json(arcana);
    });
    app.route('/arcana/:arcanaName').get(function(req,res,next){
        var arcanaName = req.params.arcanaName;
        console.log(arcanaName);
        let ret = Arcana.getMeaning(arcanaName);
        res.json(ret);
    });
    app.route('/analysis').post(function(req,res,next){
        let ret = Analyzer.analyze(req.name,req.arcanaName);
        res.json(ret);
    });
};

