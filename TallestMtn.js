(function(){
  
      function tallestMountain(mtns){
        mtns.sort(function(a,b){return a-b});
        return mtns[mtns.length-1];
      }
  
      module.exports = tallestMountain
  
  })()