import React, { useEffect } from 'react';
import * as canvas from 'canvas';
const path = require('path');
import regeneratorRuntime from 'regenerator-runtime';
import * as faceapi from 'face-api.js';

let canv = document.createElement('canvas');
document.body.append(canv);
let image = document.createElement('img');
document.body.append(image);
let video = document.createElement('video');
document.body.append(video);

const MODELS_URL = path.join(__dirname, '/models/');

const { Canvas, Image, ImageData, Video } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData, Video })

async function FaceDetect() {
    await faceapi.ssdMobilenetv1(MODELS_URL)
    await faceapi.detectSingleFace(canvas).then(val => {
        console.log(val)
    }).catch(err => {
        console.log(err)
    })
};

export default function Face() {

    useEffect(() => {
        alert(MODELS_URL)
        // Promise.all([
        //     faceapi.ssdMobilenetv1.loadFromDisk(MODELS_URL),
        //     faceapi.faceRecognitionNet.loadFromDisk(MODELS_URL),
        //     faceapi.faceLandmark68Net.loadFromDisk(MODELS_URL),
        // ]).then( (val)=> console.log(val)).catch((error) => console.log(error));
    
    })
    

    return (
        <div>
            <button onClick={FaceDetect}>Detect Face</button>
        </div>
    )

}