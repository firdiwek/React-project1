import {SocialIcon} from "react-social-icons"
export default function Footer(){
    return(
        <div className="footer">
            <SocialIcon className="twi" url="https//twiter.com"/>
            <SocialIcon className="fac"  url="https//facebook.com"/>
            <SocialIcon className="ins" url="https//instagram.com"/>
            <SocialIcon  className="git" url="https//github.com"/>

        </div>
    );
}