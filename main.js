const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

const videoUrl = 'http://example.com/video.webm'; // replace with your video url
const audioUrl = 'http://example.com/audio.mp3'; // replace with your audio url

const videoStream = fs.createReadStream(videoUrl);
const audioStream = fs.createReadStream(audioUrl);

ffmpeg()
  .input(videoStream)
  .inputFormat('webm')
  .input(audioStream)
  .inputFormat('mp3')
  .outputOptions('-c:v copy') // copy the video stream directly without re-encoding
  .outputOptions('-c:a aac') // encode audio to aac
  .outputOptions('-strict experimental') // required to encode to aac
  .output('output.mp4')
  .on('end', () => console.log('Conversion finished'))
  .on('error', console.error)
  .run();
