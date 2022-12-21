import React from "react";
import FacebookIcon from "../images/icons/fb.svg";
import TwitterIcon from "../images/icons/twitter.svg";
import PlayStoreImage from "../images/icons/playStore.svg";
import appStoreImage from "../images/icons/appStore.svg";
const Footer = () => {
    return (
        <div className="flex justify-between text-[#dadada] py-8 w-[93%] mx-auto">
            <div className="w-[50%]">
                <ul className="flex gap-7">
                    <li>
                        <a href="/" className="text-sm hover:text-[#1f80e0]">
                            About Disney+ Hotstar
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-sm hover:text-[#1f80e0]">
                            Terms of Use
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-sm hover:text-[#1f80e0]">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-sm hover:text-[#1f80e0]">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-sm hover:text-[#1f80e0]">
                            Feedback
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-sm hover:text-[#1f80e0]">
                            Careers
                        </a>
                    </li>
                </ul>
                <p className="text-[13px] pt-4">
                    © 2022 STAR. All Rights Reserved. HBO, Home Box Office and
                    all related channel and programming logos are service marks
                    of, and all related programming visuals and elements are the
                    property of, Home Box Office, Inc. All rights reserved.
                </p>
            </div>
            <div>
                <p>Connect with us</p>
                <div className="flex my-4">
                    <a
                        href="/"
                        className="p-2 bg-[#192133] rounded-sm mr-1 hover:bg-[#1f80e0]"
                    >
                        <img
                            src={FacebookIcon}
                            className="h-6 w-6"
                            alt="Facebook Icon"
                        />
                    </a>
                    <a
                        href="/"
                        className="p-2 bg-[#192133] rounded-sm hover:bg-[#1f80e0]"
                    >
                        <img
                            src={TwitterIcon}
                            className="h-6 w-6"
                            alt="Instagram Icon"
                        />
                    </a>
                </div>
            </div>
            <div>
                <p>Disney+ Hotstar App</p>
                <div className="flex gap-2 my-4">
                    <a href="/">
                        <img
                            src={PlayStoreImage}
                            className="h-10 w-[135px]"
                            alt="Play Store Icon"
                        />
                    </a>
                    <a href="/">
                        <img
                            src={appStoreImage}
                            className="h-10 w-[135px]"
                            alt="App Store Icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
