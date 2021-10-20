
module.exports = function(app) {
    var Name = require('../src/Name');
    var Arcana = require('../src/Arcana');
    var Analyzer = require('../src/NameAnalyzer')

    console.table(Name);
    app.route('/').get(function(req,res,next){
        res.json({"success":"200"});
    });
    app.route('/name/').get(function(req,res,next){
        var name = req.params.name;
        var ret = Name.getMeaning(name);
        res.json({"Error":"801","Parameters":req.params,"Message":"This function requires one name argument. Make sure the url is formatted like '/name/[name]' "});
    });
    app.route('/name/:name').get(function(req,res,next){
        var name = req.params.name;
        var ret = Name.getMeaning(name);
        res.json(ret);
    });
    app.route('/arcana').get(function(req,res,next){
       let arcana = Arcana.getAllArcana();
       res.json(arcana);
    });
    app.route('/arcana/:arcanaName').get(function(req,res,next){
        var arcanaName = req.params.arcanaName;
        let ret = Arcana.getMeaning(arcanaName);
        res.json(ret);
    });
    app.route('/analysis/:name/:arcanaName').get(function(req,res,next){
        let ret = Analyzer.analyze(req.params.name,req.params.arcanaName);
        res.json(ret);
    });
    app.route('/analysis/:name/').get(function(req,res,next){
        // let ret = Analyzer.analyze(req.params.name,req.params.arcanaName);
        res.json({"Error":"801","Parameters":req.params,"Message":"User arcana is missing in arguments. Make sure the url is formatted like '/analysis/[name]/[arcana]' "});
    });
    app.route('/analysis//:arcanaName').get(function(req,res,next){
        // let ret = Analyzer.analyze(req.params.name,req.params.arcanaName);
        res.json({"Error":"801","Parameters":req.params,"Message":"User name is missing in arguments. Make sure the url is formatted like '/analysis/[name]/[arcana]' "});
    });
    app.route('/analysis//').get(function(req,res,next){
        // let ret = Analyzer.analyze(req.params.name,req.params.arcanaName);
        res.json({"Error":"801","Parameters":req.params,"Message":"This function requires name and arcana arguments. Make sure the url is formatted like '/analysis/[name]/[arcana]' "});
    });
    app.route('/analysis/').get(function(req,res,next){
        // let ret = Analyzer.analyze(req.params.name,req.params.arcanaName);
        res.json({"Error":"801","Parameters":req.params,"Message":"This function requires name and arcana arguments. Make sure the url is formatted like '/analysis/[name]/[arcana]' "});
    });
};

