import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import CallIcon from '@material-ui/icons/Call';
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';

export const SocialBar = () => {
    return (
        <div>
            <a target="_blank" href="https://www.facebook.com/Agawamsjavastop">
                <IconButton>
                    <FacebookIcon />
                </IconButton>
            </a>
            <a href="tel:+014137860000">
                <IconButton>
                    <CallIcon />
                </IconButton>
            </a>
            <a target="_blank" href="https://www.instagram.com/agawamsjavastop/">
                <IconButton>
                    <InstagramIcon />
                </IconButton>
            </a>
        </div>
    )
}