Sencha App Architecture
=======================
[Tutorial App Architecture Part 1](http://docs.sencha.com/extjs/4.2.3/#!/guide/mvc_pt1)
[Tutorial App Architecture Part 2](http://docs.sencha.com/extjs/4.2.3/#!/guide/mvc_pt2)

Views
-----
### First
- NewStation
- SongControls
- SongProgress
- ApplicationTitle
- StationsList
- RecentlyPlayedScroller
- Settings
- StationsFilter
- ArtistInfoTitle
- SongInfo
- Menu
- Ad
- ArtistDetails

### Second
- Header
- SidePanel
- SongPanel

### Third
- NewStation
- SongControls
- StationsList
- RecentlyPlayedScroller
- Ad
- SongInfo

Models
------
- Song (liked)
- Song (duration)
- Station (name)
- Song (albumCover)
- Song (artist)
- Song (album)
- Song (duration)
- Song (artistInfo)

Stores
------
- SearchResults
- Stations
- RecentSongs

Controllers
-----------
- StationController
- SongController
