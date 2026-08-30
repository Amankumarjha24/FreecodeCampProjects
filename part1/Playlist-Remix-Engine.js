const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];


function flattenPlaylists(array) {
  if (!Array.isArray(array)) {
    return []
  }
  const result = []

  for (let i = 0; i < array.length; i++) { 
    for (let j = 0; j < array[i].length; j++) 
    
    {
       result.push(
        
      { ...array[i][j], source: [i, j] }); } }
      
       return result;
}


function scoreTracks(tracks) {
    return tracks.map(track => ({
      ...track,
      score: track.votes * 10 - Math.abs(track.bpm - 120)
    }))
}

function dedupeTracks(tracks) {
  const seen = new Set();
  const result = [];

  for (const track of tracks) {
    if (!seen.has(track.trackId)) {
      seen.add(track.trackId);
      result.push(track);
    }
  }

  return result;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCount = {};
  const result = [];

  for (const track of tracks) {
    const artist = track.artist;

    if (!artistCount[artist]) {
      artistCount[artist] = 0;
    }

    if (artistCount[artist] < maxPerArtist) {
      result.push(track);
      artistCount[artist]++;
    }
  }

  return result;
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}


function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);

  const scored = scoreTracks(flattened);

  const deduped = dedupeTracks(scored);

  const quotaApplied = enforceArtistQuota(deduped, maxPerArtist);

  return buildSchedule(quotaApplied);
}
