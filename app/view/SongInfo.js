Ext.define('Panda.view.SongInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.songinfo',
    tpl: 'About {artist}',
    
    update: function(song) {
        var data = song ? song.data : {};
        this.callParent([data]);
    }
});