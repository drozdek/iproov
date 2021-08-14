import { checkPropTypes } from 'prop-types';
import React from 'react';

export default function Camera() {

    const openCamera = () => {
        const dims = {
            h: window.width,
            h: window.height
        }
        var constraints = {
            audio: true,
            video: {
                facingMode: "user",
                width: window.outerWidth,
                height: window.outerHeight
            }
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (mediaStream) {
                let video = document.createElement('video');
                video.style.width = "100%";
                video.style.height = "100%";
                document.body.appendChild(video);
                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch(function (err) { console.log(err.name + ": " + err.message); });

    }

    return (
        <div>
            <button onClick={openCamera}>open camera</button>
        </div>
    )

}