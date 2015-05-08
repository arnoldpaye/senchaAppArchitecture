Ext.Loader.setConfig({enabled:true});
Ext.application({
    name : 'Panda',
    autoCreateViewport: true,
    models: ['Station', 'Song'],
    stores: ['Stations', 'RecentSongs', 'SearchResults']
});
