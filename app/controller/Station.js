Ext.define('Panda.controller.Station', {
    extend: 'Ext.app.Controller',
    
    // getStationsStore return Stations store
    stores: ['Stations'],
    
    refs: [{
        // A component query
        selector: 'viewport > #west-region > stationslist',
        ref: 'stationsList'
    }],
    
    init: function() {
        this.control({
            'stationslist': {
                selectionchange: this.onStationSelect
            },
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    
    onLaunch: function() {
        // Use the automatically generated getter to get the store
        var stationsStore = this.getStationsStore();
        stationsStore.load({
            callback: this.onStationsLoad,
            scope: this
        });
    },
    
    onStationsLoad: function() {
        var stationsList = this.getStationsList();
        // selectionchange event from StationsList is fired
        stationsList.getSelectionModel().select(0);
    },
    
    onStationSelect: function(selModel, selection) {
    },
    
    onNewStationSelect: function(selModel, selection) {
        console.log(selModel);
    }
});