Ext.define('Panda.controller.Song', {
   extend: 'Ext.app.Controller',
   
   init: function() {
       this.control({
           'recentlyplayedscroller': {
               selectionchange: this.onSongSelect
           }
       });
   },
   
   onSongSelect: function() {
       
   }
});