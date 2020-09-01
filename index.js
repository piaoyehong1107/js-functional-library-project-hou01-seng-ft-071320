const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, func) {
      const newCollection=Object.values(collection)
      for (const ele of newCollection){
        func(ele)
      }
      return collection
    },

    map: function(collection, func) {
      const newCollection=Object.values(collection)
      let newColle=[]
      for (const ele of newCollection){
        newColle.push(func(ele))
      }
      return newColle;
    },

    reduce: function(collection, func, acc) {
      const newCollection=Object.values(collection)
      let newacc=[]
      for (const ele of newCollection){
        acc= func(acc,ele,newCollection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      const newCollection=Object.values(collection)
      for (const ele of newCollection){
       if (predicate(ele)){
         return ele}
       }
       
    },
    
    filter: function(collection, predicate) {
      const newCollection=Object.values(collection)
      let newColle=[]
      for (const ele of newCollection){
       if (predicate(ele)){
         newColle.push(ele)}
       }
       return newColle
    },
    
     size: function(collection) {
      const newCollection=Object.values(collection)
      return newCollection.length
    },
    
    first: function(collection,n) {
      const newCollection=Object.values(collection)
      return newCollection[n]
    },
    
    
  }
})()

fi.libraryMethod()
