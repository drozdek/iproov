import React from 'react';
import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';
import '../css/index.css';
import Face from './Face';

const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

export default function Camera(props) {
    const openCameraView = () => {
        var opts = {
            audio: true,
            video: {
                facingMode: "user"
            }
        };

        navigator.mediaDevices.getUserMedia(opts)
            .then(mediaStream => {
                let video = document.createElement('video');
                video.id="video";
                video.style.width = "1000px";
                video.style.height = "800px";
                document.body.appendChild(video);
                video.srcObject = mediaStream;
                video.onloadedmetadata = e => {
                    video.play();
                };
            })
            .catch(function (err) {
                alert(`${err.message}, error code: ${err.name}`);
            });
    }

    return (
        <div>
            <Face />
            <button onClick={openCameraView}>Open camera...</button>
        </div>
    )

}