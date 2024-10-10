// Array of song objects
const songs = [
  { title: "The Middle", album: "First Album", cover: "/images/themiddle.jpg" },
  { title: "Red Thread of Fate", album: "Second Album", cover: "/images/album2.jpg" },
  { title: "I Think It's Gonna Rain", album: "Third Album", cover: "/images/album3.jpg" },
  // Add more songs as needed
];

let currentSongIndex = 0;

function updateSong() {
  const song = songs[currentSongIndex];
  document.getElementById('albumCover').src = song.cover;
  document.getElementById('songTitle').textContent = song.title;
}

document.getElementById('prevSong').addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSong();
});

document.getElementById('nextSong').addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSong();
});

document.getElementById('playSong').addEventListener('click', () => {
  // Add actual play functionality here
  alert(`Playing: ${songs[currentSongIndex].title}`);
});

// Initialize with the first song
updateSong();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});