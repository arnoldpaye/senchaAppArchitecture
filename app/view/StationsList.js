Ext.define('Panda.view.StationsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stationslist',
    store: 'Stations',
    title: 'Stations',
    hideHeaders: true,
    // columns is required [Ext.grid.Panel -> Ext.panel.Table]
    columns: [
        { dataIndex: 'name', text: 'Name', flex: 1 }
    ]
});