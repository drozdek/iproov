import React from 'react';
import * as canvas from 'canvas';
import regeneratorRuntime from 'regenerator-runtime';
import * as faceapi from 'face-api.js';


const { Canvas, Image, ImageData, Video } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData, Video })

async function FaceDetect() {
    let canvas = document.createElement('canvas');
    document.body.append(canvas);
    await faceapi.detectSingleFace(canvas).then( (val)=> {
        console.log(val)
    }).catch(err=> {
        console.log(err)
    })
};

export default function Face() {
    return (
        <div>
            <button onClick={FaceDetect}>alalalalal</button>
        </div>
    )

}