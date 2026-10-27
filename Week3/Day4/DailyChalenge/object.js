class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}
//methode 1

const video1 = new Video("3 idiots movie", "Wiame", 120);

video1.watch();

const video2 = new Video("drishyam movie", "Imane", 300);

video2.watch();
console.log("methode 2 : stocker les données de cinq vidéos dans un tableau")
//methode 2 : stocker les données de cinq vidéos dans un tableau
const videosData = [
    { title: "ABCD", uploader: "wima", time: 163 },
    { title: "Andhadhun", uploader: "ritaj", time: 139},
    { title: "Ratsasan", uploader: "jad", time: 170 },
    { title: "Kahaani", uploader: "rahma", time: 122  },
    { title: "Talaash", uploader: "hassna", time: 140 }
];

const videos = [];

videosData.forEach(function(data) {
    const video = new Video(data.title, data.uploader, data.time);
    videos.push(video);
});

videos.forEach(function(video) {
    video.watch();
});