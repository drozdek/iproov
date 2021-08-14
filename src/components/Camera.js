import { checkPropTypes } from 'prop-types';
import React from 'react';
import Bttn from './Button';

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
            .catch(function (err) { console.log(err.name + ": " + err.message); });

    }

    return (
        <div>
            <Bttn onClick={openCamera}>{props.children}</Bttn>
        </div>
    )

}