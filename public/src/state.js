var _globalState = {};
_globalState.currentCategory = "featured";
_globalState.currentCategoryChangedListeners = [];
_globalState.addCurrentCategoryChangedListener = function(callback){
    this.currentCategoryChangedListeners.push(callback);
};
_globalState.setCurrentCategory = function(newCategory){
    this.currentCategory = newCategory;
    for (var i = 0; i < this.currentCategoryChangedListeners.length; i++){
      this.currentCategoryChangedListeners[i](newCategory);
    }
};
