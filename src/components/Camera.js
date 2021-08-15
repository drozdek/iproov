import { checkPropTypes } from 'prop-types';
import '../css/index.css';
import React from 'react';

export default function Camera(props) {
    const openCamera = () => {
        var opts = {
            audio: true,
            video: {
                facingMode: "user",
                width: window.outerWidth,
                height: window.outerHeight
            }
        };

        navigator.mediaDevices.getUserMedia(opts)
            .then(mediaStream => {
                let video = document.createElement('video');
                video.style.width = "100%";
                video.style.height = "100%";
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
            <button onClick={openCamera}>Open camera...</button>
        </div>
    )

}