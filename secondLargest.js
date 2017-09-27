(function(){
  
      function secondTallest(mtns){
        mtns.sort(function(a,b){return b-a});
        return mtns[1];
      }
  
      module.exports = secondTallest
  
  })()