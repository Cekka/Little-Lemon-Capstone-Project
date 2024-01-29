import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
        <header className="header">
            <section>
            {/*banner texts*/}
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant,<br></br> focused on traditional recipes servred with a modern twist.</p>
                    <Link to='/booking'><button aria-label='On Click' data-testid="reserve-a-table">Reserve a table</button></Link>
                    </div>

                    {/*Banner image*/}
                    <div className="banner-img">
                        <img src={bannerImg} alt="" />
                    </div>
            </section>
        </header>
    );
}

export default Header;